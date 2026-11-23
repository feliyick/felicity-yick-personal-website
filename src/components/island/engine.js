/* The island: a small low-poly scene rendered in a stylised pixel pipeline.
 *
 *   scene ──► low-res colour + depth target ─┐
 *   scene ──► low-res normals target (same   ├─► post pass: sky, depth/normal edge outlines,
 *             materials, uNormalPass=1)  ────┘   Bayer dither ──► low-res canvas, upscaled by CSS
 *                                                 (image-rendering: pixelated)
 *
 * All colours are authored in sRGB and passed straight through (colour management off),
 * because the look is hand-tuned rather than physically based.
 */
import * as THREE from 'three'

THREE.ColorManagement.enabled = false

const VS = /* glsl */ `
  uniform float uTime; uniform float uSway;
  varying vec3 vN; varying vec3 vW; varying vec2 vUv; varying float vZ;
  void main(){
    vec4 wp = modelMatrix*vec4(position,1.0);
    if(uSway>0.0){ float h=max(position.y,0.0);
      wp.x += sin(uTime*1.7 + wp.z*0.9 + wp.x*0.4)*uSway*h;
      wp.z += cos(uTime*1.3 + wp.x*0.8)*uSway*h*0.6; }
    vW=wp.xyz; vN=normalize(mat3(modelMatrix)*normal); vUv=uv;
    vec4 mv=viewMatrix*wp; vZ=-mv.z; gl_Position=projectionMatrix*mv;
  }`

const FS = /* glsl */ `
  uniform vec3 uColor, uSunDir, uSunColor, uShadow, uFog, uEmissive, uWaterA, uWaterB;
  uniform float uBands, uFogNear, uFogFar, uNormalPass, uHover, uEmissiveStr, uMode, uTime, uNight;
  varying vec3 vN; varying vec3 vW; varying vec2 vUv; varying float vZ;
  float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
  float noise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
    return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y); }
  void main(){
    vec3 n=normalize(vN);
    if(uNormalPass>0.5){ vec3 vn=normalize((viewMatrix*vec4(n,0.0)).xyz); gl_FragColor=vec4(vn*0.5+0.5,1.0); return; }
    vec3 base=uColor; float unlit=0.0;
    if(uMode>0.5 && uMode<1.5){            // phone screen: an AR camera feed with a face
      vec2 uv=vUv; base=mix(vec3(1.0,0.45,0.62),vec3(0.38,0.83,1.0), clamp(uv.y+0.15*sin(uTime+uv.x*6.0),0.0,1.0));
      vec2 c=uv-vec2(0.5,0.55); float face=step(length(c*vec2(1.0,0.8)),0.2);
      base=mix(base, vec3(1.0,0.85,0.7), face);
      base=mix(base, vec3(0.11,0.14,0.25), face*step(length(c-vec2(-0.07,0.04)),0.025));
      base=mix(base, vec3(0.11,0.14,0.25), face*step(length(c-vec2(0.07,0.04)),0.025));
      base+= step(0.97, hash(floor(uv*vec2(8.,14.))+floor(uTime*3.0)));
      unlit=1.0;
    } else if(uMode>1.5 && uMode<2.5){     // vista wall: switches between three places
      vec2 uv=vUv; float k=mod(floor(uTime/3.5),3.0); vec3 top,bot,hill;
      if(k<0.5){top=vec3(0.98,0.55,0.45);bot=vec3(1.0,0.86,0.58);hill=vec3(0.45,0.3,0.55);}
      else if(k<1.5){top=vec3(0.16,0.2,0.5);bot=vec3(0.55,0.48,0.85);hill=vec3(0.1,0.1,0.28);}
      else {top=vec3(0.4,0.78,0.96);bot=vec3(0.86,0.97,0.94);hill=vec3(0.32,0.62,0.42);}
      vec3 c=mix(bot,top,uv.y); float m=0.33+0.12*sin(uv.x*8.0+k*2.0)+0.05*sin(uv.x*21.0+k);
      float sun=step(length(uv-vec2(0.68,0.68)),0.11);
      c=mix(c, k>0.5&&k<1.5?vec3(0.95,0.95,1.0):vec3(1.0,0.95,0.78), sun);
      base=mix(c,hill,step(uv.y,m)); unlit=1.0;
    } else if(uMode>2.5 && uMode<3.5){     // water: depth tint + animated shore foam + glints
      float d=length(vW.xz); float sh=6.9;
      base=mix(uWaterA,uWaterB,smoothstep(sh,sh+10.0,d));
      float wob=noise(vW.xz*0.6+uTime*0.25)*0.9;
      float f1=step(abs(d-sh-0.4-wob-0.3*sin(uTime*1.4)),0.26);
      float f2=step(abs(d-sh-2.1-wob*1.4+0.4*sin(uTime*1.05)),0.11);
      base=mix(base,vec3(1.0),max(f1,f2*0.75));
      base+= step(0.994,hash(floor(vW.xz*2.5)+floor(uTime*2.0)))*0.5;
      unlit=1.0;
    } else if(uMode>3.5){                  // glass
      vec3 v=normalize(cameraPosition-vW); float fr=1.0-abs(dot(n,v));
      float band=step(0.55,fr); gl_FragColor=vec4(mix(vec3(0.85,0.97,1.0),vec3(1.0),band), 0.12+0.6*band); return;
    }
    vec3 col=base;
    if(unlit<0.5){
      float ndl=dot(n,normalize(uSunDir))*0.5+0.5;
      float q=clamp(floor(ndl*uBands)/max(uBands-1.0,1.0),0.0,1.0);
      col=mix(base*uShadow, base*uSunColor, q);
      vec3 v=normalize(cameraPosition-vW);
      col+= step(0.72,1.0-max(dot(n,v),0.0))*step(0.55,ndl)*0.1*uSunColor;
    }
    col+= uEmissive*uEmissiveStr*uNight;
    col=mix(col, col*0.6+vec3(1.0,0.62,0.8)*0.6, uHover*0.75);
    col=mix(col,uFog,smoothstep(uFogNear,uFogFar,vZ));
    gl_FragColor=vec4(col,1.0);
  }`

const POST_FS = /* glsl */ `
  uniform sampler2D tColor,tDepth,tNormal; uniform vec2 uRes; uniform float uNear,uFar,uNight,uTime; uniform vec3 uSkyTop,uSkyHor;
  varying vec2 vUv;
  float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
  float lin(float d){ float z=d*2.0-1.0; return (2.0*uNear*uFar)/(uFar+uNear-z*(uFar-uNear)); }
  float bayer(vec2 p){ int x=int(mod(p.x,4.0)), y=int(mod(p.y,4.0)); int i=x+y*4;
    float m[16]; m[0]=0.;m[1]=8.;m[2]=2.;m[3]=10.;m[4]=12.;m[5]=4.;m[6]=14.;m[7]=6.;m[8]=3.;m[9]=11.;m[10]=1.;m[11]=9.;m[12]=15.;m[13]=7.;m[14]=13.;m[15]=5.;
    float r=0.0; for(int k=0;k<16;k++){ if(k==i) r=m[k]; } return r/16.0-0.5; }
  void main(){
    vec2 px=1.0/uRes; vec2 cell=floor(vUv*uRes);
    float dr=texture2D(tDepth,vUv).x; vec3 col=texture2D(tColor,vUv).rgb; vec3 nrm=texture2D(tNormal,vUv).xyz*2.0-1.0;
    if(dr>=0.99999){
      col=mix(uSkyHor,uSkyTop,smoothstep(0.3,1.0,vUv.y));
      col+= step(0.996,hash(cell))*uNight*(0.6+0.4*sin(uTime*3.0+hash(cell+3.0)*30.0));
    } else {
      float d=lin(dr);
      vec2 o[4]; o[0]=vec2(px.x,0.0); o[1]=vec2(-px.x,0.0); o[2]=vec2(0.0,px.y); o[3]=vec2(0.0,-px.y);
      float de=0.0, ne=0.0;
      for(int i=0;i<4;i++){
        float dn=lin(texture2D(tDepth,vUv+o[i]).x); de+=clamp(dn-d,0.0,1.0);
        vec3 nn=texture2D(tNormal,vUv+o[i]).xyz*2.0-1.0;
        float bias=step(-0.02*d, dn-d);   // only highlight where the neighbour isn't in front
        ne+= (1.0-clamp(dot(nrm,nn),0.0,1.0))*bias;
      }
      if(de/d>0.02) col=col*0.42+vec3(0.06,0.07,0.16)*0.4;   // silhouette: darker outline
      else if(ne>0.35) col=col*1.22+0.04;                    // crease: lighter edge
    }
    float L=14.0; col=floor(col*L+0.5+bayer(cell)*0.9)/L;
    gl_FragColor=vec4(col,1.0);
  }`

const TOD = {
  day:    { sun: [.5, .9, .35],  sunC: '#fff4dc', sh: '#7d93cf', top: '#5cc3e8', hor: '#c9f0f2', wa: '#71e0d4', wb: '#2f8fc4', night: 0 },
  golden: { sun: [.95, .38, .25], sunC: '#ffcf96', sh: '#8a68b3', top: '#7c9fe6', hor: '#ffc89c', wa: '#89d8c6', wb: '#4b6fb6', night: 0.15 },
  night:  { sun: [-.4, .85, .3], sunC: '#9fb2ff', sh: '#2a2f66', top: '#0d1336', hor: '#2e3a78', wa: '#2f6590', wb: '#122452', night: 1 },
}
// The day passes while the island is on screen: [from, to, seconds]. Holds are from === to.
const CYCLE = [['day', 'day', 45], ['day', 'golden', 12], ['golden', 'golden', 30], ['golden', 'night', 12], ['night', 'night', 30], ['night', 'day', 12]]
const CYCLE_LEN = CYCLE.reduce((s, c) => s + c[2], 0)
const PX = 3 // screen pixels per rendered pixel

export function createIsland({ canvas, globe, labelsEl, landmarks, onOpen, reduce = false }) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'low-power' })
  renderer.setPixelRatio(1)
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(28, 1, 0.5, 120)

  const G = {
    uTime: { value: 0 }, uSunDir: { value: new THREE.Vector3(.5, .9, .35).normalize() }, uSunColor: { value: new THREE.Color('#fff4dc') },
    uShadow: { value: new THREE.Color('#7d93cf') }, uBands: { value: 3 }, uFog: { value: new THREE.Color('#c9f0f2') }, uFogNear: { value: 30 }, uFogFar: { value: 80 },
    uNormalPass: { value: 0 }, uWaterA: { value: new THREE.Color('#71e0d4') }, uWaterB: { value: new THREE.Color('#2f8fc4') }, uNight: { value: 0 },
  }
  const disposables = []
  function M(color, o = {}) {
    const m = new THREE.ShaderMaterial({
      vertexShader: VS, fragmentShader: FS,
      uniforms: {
        ...G, uColor: { value: new THREE.Color(color) }, uSway: { value: o.sway || 0 }, uHover: { value: 0 },
        uEmissive: { value: new THREE.Color(o.em || '#000000') }, uEmissiveStr: { value: o.em ? 1.1 : 0 }, uMode: { value: o.mode || 0 },
      },
      transparent: !!o.glass, depthWrite: !o.glass, side: o.double ? THREE.DoubleSide : THREE.FrontSide,
    })
    disposables.push(m)
    return m
  }
  const flat = (g) => { const ng = g.index ? g.toNonIndexed() : g; ng.computeVertexNormals(); disposables.push(ng); if (ng !== g) g.dispose(); return ng }
  function mesh(geo, mat, x = 0, y = 0, z = 0, parent = scene) { const m = new THREE.Mesh(flat(geo), mat); m.position.set(x, y, z); parent.add(m); return m }
  const rnd = (a, b) => a + Math.random() * (b - a)
  let seed = 7
  const srand = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646 }
  const sr = (a, b) => a + srand() * (b - a)
  function jitter(geo, amt, keepY) {
    const p = geo.attributes.position; const map = new Map()
    for (let i = 0; i < p.count; i++) {
      const k = [p.getX(i), p.getY(i), p.getZ(i)].map((v) => v.toFixed(3)).join()
      if (!map.has(k)) map.set(k, [sr(-amt, amt), sr(-amt, amt) * (keepY ? 0.3 : 1), sr(-amt, amt)])
      const d = map.get(k); p.setXYZ(i, p.getX(i) + d[0], p.getY(i) + d[1], p.getZ(i) + d[2])
    }
    return geo
  }

  /* --- terrain --- */
  const C = { grass: '#9fd16a', grass2: '#86c35c', cliff: '#e8b479', cliff2: '#d0905e', sand: '#f6deaa', rock: '#a9a4c4', wood: '#7a4e3a', bark: '#8b5a3c',
    leaf: '#5fae58', leaf2: '#79c561', plaster: '#f4ede0', thatch: '#c99a5b', ink: '#2b2f4a', orange: '#ff8a2b', pink: '#ff7aa8', coral: '#f0408c', sun: '#ffd447' }
  const waterGeo = new THREE.PlaneGeometry(160, 160, 1, 1); disposables.push(waterGeo)
  const water = new THREE.Mesh(waterGeo, M('#fff', { mode: 3 })); water.rotation.x = -Math.PI / 2; scene.add(water)
  mesh(jitter(new THREE.CylinderGeometry(6.9, 7.3, 0.5, 14, 1), 0.18, true), M(C.sand), 0, 0, 0)
  mesh(jitter(new THREE.CylinderGeometry(5.7, 6.6, 1.5, 12, 2), 0.25, true), M(C.cliff), 0, 0.75, 0)
  mesh(jitter(new THREE.CylinderGeometry(5.9, 5.75, 0.32, 12, 1), 0.15, true), M(C.grass), 0, 1.62, 0)
  const hill = new THREE.Group(); hill.position.set(-3.1, 1.6, -2.4); scene.add(hill)
  mesh(jitter(new THREE.CylinderGeometry(1.7, 2.3, 1.5, 9, 1), 0.18, true), M(C.cliff2), 0, 0.75, 0, hill)
  mesh(jitter(new THREE.CylinderGeometry(1.8, 1.7, 0.25, 9, 1), 0.1, true), M(C.grass2), 0, 1.55, 0, hill)
  for (let i = 0; i < 4; i++) mesh(new THREE.BoxGeometry(0.7, 0.18, 0.35), M(C.rock), -0.2, 0.15 + i * 0.36, 1.85 - i * 0.32, hill).rotation.y = 0.5
  const dock = new THREE.Group(); dock.position.set(1.8, 0.25, 6.4); dock.rotation.y = -0.25; scene.add(dock)
  for (let i = 0; i < 6; i++) mesh(new THREE.BoxGeometry(1.4, 0.12, 0.4), M(i % 2 ? C.wood : '#8d5d45'), 0, 0, i * 0.45, dock)
  ;[[-.6, 0], [.6, 0], [-.6, 2.3], [.6, 2.3]].forEach(([x, z]) => mesh(new THREE.CylinderGeometry(.08, .08, .9, 5), M(C.wood), x, -.3, z, dock))
  const boat = new THREE.Group(); boat.position.set(3.7, 0.1, 8.6); scene.add(boat)
  mesh(new THREE.CylinderGeometry(.55, .3, .35, 6, 1), M(C.coral), 0, 0, 0, boat).scale.set(1, 1, 2.1)
  mesh(new THREE.BoxGeometry(.9, .06, .3), M(C.wood), 0, .18, 0, boat)

  /* --- landmarks (each group's id matches an entry in `landmarks`) --- */
  const LM = {}
  function lm(id, x, y, z, anchorY) { const g = new THREE.Group(); g.position.set(x, y, z); g.userData.id = id; scene.add(g); LM[id] = { group: g, anchor: new THREE.Vector3(x, y + anchorY, z) }; return g }

  // Painted Ladies (SF Victorian street generator): two houses on a sloping street, uphill house higher on its brick
  // plinth, each with a bay column, cream trim + cornice, a stoop, and windows that glow at night
  const pl = lm('victorian', -2.0, 1.78, 1.6, 3.6); pl.rotation.y = 0.35
  const TRIM = '#fff8ec', GLASS = ['#ffe7a8', { em: '#ffb347' }]
  const slope = new THREE.BoxGeometry(2.7, 0.08, 0.7); const walk = mesh(slope, M('#d9d3c7'), 0, 0.28, 1.05, pl); walk.rotation.z = -0.17   // sidewalk
  ;[
    { x: -0.62, plinth: 0.5, body: '#9fc2ea', h: 2.05, gable: true, bay: 0.24 },
    { x: 0.62, plinth: 0.08, body: '#f2a0c0', h: 2.0, gable: false, bay: 0.24 },
  ].forEach((L) => {
    const w = 1.12, d = 1.4, y0 = L.plinth, fz = d / 2
    mesh(new THREE.BoxGeometry(w, y0 + 0.02, d), M('#c47a62'), L.x, (y0 + 0.02) / 2, 0, pl)                  // brick plinth
    mesh(new THREE.BoxGeometry(w, L.h, d), M(L.body), L.x, y0 + L.h / 2, 0, pl)                              // body
    mesh(new THREE.BoxGeometry(w + 0.16, 0.16, d + 0.14), M(TRIM), L.x, y0 + L.h + 0.08, 0, pl)               // cornice
    mesh(new THREE.BoxGeometry(w + 0.06, 0.07, 0.08), M(TRIM), L.x, y0 + L.h * 0.42, fz + 0.03, pl)           // belt course
    const bx = L.x + L.bay, by = y0 + L.h * 0.68, bh = L.h * 0.56                                            // bay column
    mesh(new THREE.BoxGeometry(0.52, bh, 0.3), M(L.body), bx, by, fz + 0.15, pl)
    mesh(new THREE.BoxGeometry(0.6, 0.08, 0.36), M(TRIM), bx, by - bh / 2, fz + 0.15, pl)
    mesh(new THREE.BoxGeometry(0.6, 0.08, 0.36), M(TRIM), bx, by + bh / 2, fz + 0.15, pl)
    mesh(new THREE.BoxGeometry(0.6, 0.06, 0.36), M(TRIM), bx, by, fz + 0.15, pl)
    ;[-0.25, 0.25].forEach((dy) => mesh(new THREE.BoxGeometry(0.34, bh * 0.36, 0.03), M(...GLASS), bx, by + dy * bh, fz + 0.31, pl))
    const wx = L.x - L.bay                                                                                  // flat windows + door
    ;[0.57, 0.82].forEach((f) => mesh(new THREE.BoxGeometry(0.26, 0.36, 0.03), M(...GLASS), wx, y0 + L.h * f, fz + 0.02, pl))
    mesh(new THREE.BoxGeometry(0.3, 0.52, 0.05), M('#7a3f34'), wx, y0 + 0.3, fz + 0.03, pl)
    mesh(new THREE.BoxGeometry(0.4, 0.08, 0.1), M(TRIM), wx, y0 + 0.6, fz + 0.06, pl)                       // door hood
    const steps = Math.max(2, Math.round(y0 / 0.12) + 1)                                                     // stoop down to the walk
    for (let k = 0; k < steps; k++) mesh(new THREE.BoxGeometry(0.36, y0 / steps + 0.06, 0.16), M(TRIM), wx, (k + 0.5) * (y0 / steps) + 0.03, fz + 0.12 + (steps - 1 - k) * 0.15, pl)
    if (L.gable) {                                                                                          // Queen Anne gable
      const g = new THREE.CylinderGeometry(0.66, 0.66, d, 3, 1); g.rotateX(-Math.PI / 2)
      const r = mesh(g, M('#5b4b7a'), L.x, y0 + L.h + 0.42, 0, pl); r.scale.set(0.98, 0.78, 1)
      mesh(new THREE.BoxGeometry(0.2, 0.2, 0.03), M(...GLASS), L.x, y0 + L.h + 0.36, fz + 0.02, pl)
    } else {                                                                                                // Italianate brackets
      for (let k = -1; k <= 1; k++) mesh(new THREE.BoxGeometry(0.08, 0.16, 0.1), M(TRIM), L.x + k * 0.42, y0 + L.h - 0.06, fz + 0.07, pl)
    }
  })

  // Voxel world (Mini Minecraft): one chunk split into the project's four biomes, 2x2 blocks each - crimson desert with
  // a cactus, lime slime with a purple island, dark grassland with a glowing lava block and a cyan-leaved tree, lilac
  // snowy peaks. Checkered shades keep every block readable through the pixel filter.
  const vx = lm('voxel', 2.75, 1.78, 1.3, 2.2); vx.rotation.y = -0.6
  const V = 0.55, N = 4
  const cube = (x, y, z, col, o, sc = 1) => {
    const m = mesh(new THREE.BoxGeometry(V * sc, V * sc, V * sc), M(col, o), (x - (N - 1) / 2) * V, V * sc / 2 + y * V, (z - (N - 1) / 2) * V, vx)
    return m
  }
  const BIOME = {
    desert: { h: [[1, 1], [1, 2]], c: ['#c9466c', '#a8385a'] },
    slime: { h: [[1, 1], [1, 2]], c: ['#a6e35c', '#8fd14a'] },
    grass: { h: [[1, 1], [1, 1]], c: ['#5d4ca0', '#47397f'] },
    ice: { h: [[2, 2], [2, 3]], c: ['#a9a9f0', '#8f8fe0'] },
  }
  const quad = (i, j) => (i < 2 ? (j < 2 ? 'desert' : 'slime') : (j < 2 ? 'grass' : 'ice'))
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
    const B = BIOME[quad(i, j)], h = B.h[i % 2][j % 2]
    for (let k = 0; k < h; k++) {
      let col = B.c[(i + j + k) % 2]
      if (quad(i, j) === 'ice' && k === h - 1 && h >= 3) col = '#f6f4ff'                                 // snow cap
      if (quad(i, j) === 'slime' && h === 2) col = k ? '#6fbf4a' : '#4a3f7a'                            // purple island, green top
      cube(j, k, i, col)
    }
  }
  cube(0, 1, 0, '#6fc24a', 0, 0.45); cube(0, 1.45, 0, '#82d45a', 0, 0.45)                               // cactus
  cube(1, 1, 3, '#ff6a2a', { em: '#ff5a1f' }, 0.96)                                                     // lava, set into the ground
  cube(0, 1, 2, '#d4588a', 0, 0.4); cube(0, 1.4, 2, '#6fe0dc', { sway: 0.03 }, 0.85)                   // tree: pink trunk, cyan leaves
  cube(0, 2.15, 2, '#8ff0ec', { sway: 0.03 }, 0.55)

  // Terrarium: glass dome over a dish of succulents
  const te = lm('terrarium', 0.9, 1.78, -2.4, 2.3)
  mesh(new THREE.CylinderGeometry(1.15, 0.95, 0.3, 10), M('#c98b6b'), 0, 0.15, 0, te)
  mesh(new THREE.CylinderGeometry(1.05, 1.05, 0.08, 10), M('#6b4a3a'), 0, 0.32, 0, te)
  for (let i = 0; i < 5; i++) {
    const a = i * 1.3, r = i ? 0.55 : 0; const s = new THREE.Group(); s.position.set(Math.cos(a) * r, 0.36, Math.sin(a) * r); te.add(s)
    for (let k = 0; k < 5; k++) {
      const leaf = mesh(new THREE.ConeGeometry(.09, .38, 4), M(i % 2 ? '#8fd18a' : '#6fbfa0', { sway: .03 }), 0, .15, 0, s)
      leaf.rotation.set(0.55, k * 1.26, 0); leaf.position.set(Math.sin(k * 1.26) * .08, .15, Math.cos(k * 1.26) * .08)
    }
  }
  mesh(new THREE.DodecahedronGeometry(.12, 0), M(C.sun), 0.5, 0.42, 0.4, te)
  const domeGeo = new THREE.SphereGeometry(1.05, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2); disposables.push(domeGeo)
  const dome = new THREE.Mesh(domeGeo, M('#fff', { glass: true, mode: 4 })); dome.position.y = 0.34; te.add(dome)
  mesh(new THREE.SphereGeometry(.12, 6, 4), M(C.ink), 0, 1.42, 0, te)

  // Immersive home (Meta Switchable Vistas): a pavilion whose back wall switches vistas, with a VR headset above
  const vi = lm('vista', -3.1, 3.3, -2.4, 3.5); vi.rotation.y = 0.75
  mesh(new THREE.BoxGeometry(2.6, .16, 1.9), M('#e9e4f5'), 0, 0.08, 0, vi)
  mesh(new THREE.BoxGeometry(2.5, 1.5, .1), M('#ffffff'), 0, .9, -.93, vi)
  mesh(new THREE.BoxGeometry(.1, 1.5, 1.7), M('#ffffff'), -1.22, .9, -.05, vi)
  ;[[1.18, .82], [-1.18, .82]].forEach(([x, z]) => mesh(new THREE.BoxGeometry(.09, 1.5, .09), M('#ffffff'), x, .9, z, vi))
  mesh(new THREE.BoxGeometry(2.95, .14, 2.2), M('#3a3f5c'), 0, 1.71, 0, vi)
  const vpGeo = new THREE.PlaneGeometry(2.2, 1.25); disposables.push(vpGeo)
  const vp = new THREE.Mesh(vpGeo, M('#fff', { mode: 2 })); vp.position.set(0, .92, -.875); vi.add(vp)
  mesh(new THREE.CylinderGeometry(.62, .62, .02, 8), M(C.pink), 0.15, .17, .25, vi)
  mesh(new THREE.BoxGeometry(1.1, .22, .42), M('#9b7cf0'), 0.15, .27, -.35, vi)
  mesh(new THREE.BoxGeometry(1.1, .32, .13), M('#9b7cf0'), 0.15, .44, -.54, vi)
  mesh(new THREE.CylinderGeometry(.02, .02, .9, 4), M(C.ink), 0.95, .6, -.5, vi)
  mesh(new THREE.IcosahedronGeometry(.11, 0), M('#fff2c9', { em: '#ffcf7a' }), 0.95, 1.08, -.5, vi)
  const headset = new THREE.Group(); headset.position.set(0, 2.65, 0); vi.add(headset)
  mesh(new THREE.BoxGeometry(1.0, .52, .46), M('#f4f3fa'), 0, 0, 0, headset)
  mesh(new THREE.BoxGeometry(.88, .38, .06), M(C.ink), 0, 0, .25, headset)
  ;[-.3, .3].forEach((x) => mesh(new THREE.BoxGeometry(.09, .09, .02), M('#8d93b8'), x, -.09, .29, headset))
  const strap = mesh(new THREE.TorusGeometry(.48, .06, 4, 14), M('#2b2f4a'), 0, 0, -.42, headset); strap.rotation.x = Math.PI / 2; strap.scale.set(1.05, .9, 1)

  // Phone (TikTok AR) with Met-Gala-style boids butterflies
  const ph = lm('phone', 4.6, 1.78, -1.4, 3.2); ph.rotation.y = -0.8
  mesh(new THREE.BoxGeometry(1.25, 2.3, .2), M(C.ink), 0, 1.25, 0, ph)
  const scrGeo = new THREE.PlaneGeometry(1.05, 2.0); disposables.push(scrGeo)
  const scr = new THREE.Mesh(scrGeo, M('#fff', { mode: 1 })); scr.position.set(0, 1.27, .105); ph.add(scr)
  mesh(new THREE.BoxGeometry(.5, .12, .7), M(C.ink), 0, 0.06, 0.15, ph)
  const flies = []; const flyGeo = new THREE.PlaneGeometry(.22, .18); disposables.push(flyGeo)
  for (let i = 0; i < 14; i++) {
    const f = new THREE.Group(); const c = [C.pink, C.sun, '#b48cff', '#7fe0ff'][i % 4]
    const l = new THREE.Mesh(flyGeo, M(c, { double: true, em: c })); l.position.x = -.11
    const r = new THREE.Mesh(flyGeo, M(c, { double: true, em: c })); r.position.x = .11
    const lp = new THREE.Group(); lp.add(l); const rp = new THREE.Group(); rp.add(r); f.add(lp, rp)
    f.position.set(4.6 + rnd(-1.5, 1.5), rnd(2.5, 4.5), -1.4 + rnd(-1.5, 1.5))
    f.userData = { v: new THREE.Vector3(rnd(-1, 1), 0, rnd(-1, 1)).multiplyScalar(.02), lp, rp, ph: rnd(0, 6) }
    scene.add(f); flies.push(f)
  }

  // Felicity: a tiny character who wanders a loop between landmarks and waves when hovered
  const me = lm('me', 0, 1.78, 0, 1.6)
  mesh(new THREE.CylinderGeometry(.16, .28, .55, 6), M(C.coral), 0, 0.3, 0, me)
  mesh(new THREE.IcosahedronGeometry(.22, 1), M('#ffd7b5'), 0, 0.78, 0, me)
  mesh(new THREE.SphereGeometry(.24, 7, 5, 0, Math.PI * 2, 0, Math.PI * 0.6), M(C.ink), 0, 0.82, -0.02, me)
  mesh(new THREE.IcosahedronGeometry(.12, 0), M(C.ink), 0, 1.03, -0.12, me)
  const arm = mesh(new THREE.BoxGeometry(.08, .32, .08), M(C.coral), .24, .42, 0, me); arm.geometry.translate(0, -.14, 0)
  const curve = new THREE.CatmullRomCurve3([[0.2, 3.6], [-0.3, -0.4], [1.3, -0.9], [1.2, 3.4], [0.2, 4.6]].map(([x, z]) => new THREE.Vector3(x, 1.78, z)), true)

  /* --- set dressing --- */
  ;[[4.9, 3.3], [-4.6, 1.4], [-0.6, -4.8], [3.4, -4.2], [-4.8, -0.8], [4.9, 0.8], [-1.2, 4.6]].forEach(([x, z], i) => {
    const g = new THREE.Group(); g.position.set(x, 1.78, z); scene.add(g)
    if (i % 2 === 0) {
      mesh(new THREE.CylinderGeometry(.08, .1, .5, 5), M(C.bark), 0, .25, 0, g)
      ;[[.75, .9, .5], [.55, .75, 1.05], [.35, .6, 1.5]].forEach(([r, h, y]) => mesh(new THREE.ConeGeometry(r, h, 6), M(i % 4 ? C.leaf : '#4f9d63', { sway: .025 }), 0, y, 0, g))
    } else { const r = mesh(new THREE.DodecahedronGeometry(sr(.3, .55), 0), M(C.rock), 0, .15, 0, g); r.scale.y = .7; r.rotation.y = sr(0, 3) }
  })
  for (let i = 0; i < 46; i++) {
    const a = sr(0, Math.PI * 2), r = sr(1.2, 5.3); const x = Math.cos(a) * r, z = Math.sin(a) * r
    if (Math.hypot(x + 3.1, z + 2.4) < 2.4 || Math.hypot(x + 2, z - 1.6) < 1.9 || Math.hypot(x - .9, z + 2.4) < 1.4 || Math.hypot(x - 4.6, z + 1.4) < 1.1 || Math.hypot(x - 2.75, z - 1.3) < 1.8) continue
    if (i % 3 === 0) mesh(new THREE.IcosahedronGeometry(.07, 0), M([C.pink, C.sun, '#ffffff', '#b48cff'][i % 4]), x, 1.92, z)
    else mesh(new THREE.ConeGeometry(.09, .3, 3), M(C.grass2, { sway: .12 }), x, 1.93, z)
  }
  const mb = new THREE.Group(); mb.position.set(1.2, 1.78, 5.1); scene.add(mb)
  mesh(new THREE.BoxGeometry(.1, .7, .1), M(C.wood), 0, .35, 0, mb); mesh(new THREE.BoxGeometry(.4, .3, .55), M(C.coral), 0, .82, 0, mb)

  /* --- render targets + post --- */
  let rtC, rtN, W = 2, H = 2, dist = 27
  const post = new THREE.ShaderMaterial({
    uniforms: {
      tColor: { value: null }, tDepth: { value: null }, tNormal: { value: null }, uRes: { value: new THREE.Vector2() },
      uNear: { value: camera.near }, uFar: { value: camera.far },
      uSkyTop: { value: new THREE.Color('#5cc3e8') }, uSkyHor: { value: new THREE.Color('#c9f0f2') }, uNight: G.uNight, uTime: G.uTime,
    },
    vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }',
    fragmentShader: POST_FS, depthTest: false, depthWrite: false,
  })
  disposables.push(post)
  const quadGeo = new THREE.PlaneGeometry(2, 2); disposables.push(quadGeo)
  const postScene = new THREE.Scene(); postScene.add(new THREE.Mesh(quadGeo, post))
  const postCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

  function resize() {
    const r = globe.getBoundingClientRect()
    if (!r.width) return
    W = Math.ceil(r.width / PX); H = Math.ceil(r.height / PX)
    renderer.setSize(W, H, false); canvas.style.width = W * PX + 'px'; canvas.style.height = H * PX + 'px'
    ;[rtC, rtN].forEach((t) => t && t.dispose())
    rtC = new THREE.WebGLRenderTarget(W, H, { minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter })
    rtC.depthTexture = new THREE.DepthTexture(W, H); rtC.depthTexture.type = THREE.UnsignedIntType
    rtN = new THREE.WebGLRenderTarget(W, H, { minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter })
    post.uniforms.tColor.value = rtC.texture; post.uniforms.tDepth.value = rtC.depthTexture; post.uniforms.tNormal.value = rtN.texture; post.uniforms.uRes.value.set(W, H)
    camera.aspect = W / H
    dist = 9.4 / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) // whole island incl. dock fits the circle
    G.uFogNear.value = dist + 6; G.uFogFar.value = dist + 60; camera.far = dist + 90; camera.updateProjectionMatrix(); post.uniforms.uFar.value = camera.far
  }

  /* --- time of day --- */
  const cA = new THREE.Color(), cB = new THREE.Color(), vB = new THREE.Vector3()
  const lerpC = (out, a, b, k) => out.set(a).lerp(cB.set(b), k)
  let dayClock = 0
  function stepTOD(dt) {
    if (!reduce) dayClock = (dayClock + dt) % CYCLE_LEN
    let c = dayClock, seg = CYCLE[0]
    for (seg of CYCLE) { if (c < seg[2]) break; c -= seg[2] }
    const k = seg[2] ? c / seg[2] : 0, e = k * k * (3 - 2 * k)
    const a = TOD[seg[0]], b = TOD[seg[1]]
    G.uSunDir.value.set(...a.sun).lerp(vB.set(...b.sun), e).normalize()
    lerpC(G.uSunColor.value, a.sunC, b.sunC, e); lerpC(G.uShadow.value, a.sh, b.sh, e)
    lerpC(post.uniforms.uSkyTop.value, a.top, b.top, e); lerpC(post.uniforms.uSkyHor.value, a.hor, b.hor, e); G.uFog.value.copy(post.uniforms.uSkyHor.value)
    lerpC(G.uWaterA.value, a.wa, b.wa, e); lerpC(G.uWaterB.value, a.wb, b.wb, e)
    G.uNight.value = a.night + (b.night - a.night) * e
    globe.style.background = '#' + lerpC(cA, a.wb, b.wb, e).getHexString()
  }

  /* --- interaction --- */
  let theta = 0.55, thetaT = 0.55, dragging = false, lastX = 0, moved = 0, px0 = 0, py0 = 0, hoverId = null, forced = null
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2()
  const groups = Object.values(LM).map((l) => l.group)
  const byId = Object.fromEntries(landmarks.map((l) => [l.id, l]))
  function pick(e) {
    const r = canvas.getBoundingClientRect()
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1)
    ray.setFromCamera(ndc, camera)
    const hit = ray.intersectObjects(groups, true)[0]
    if (!hit) return null
    let o = hit.object; while (o && !o.userData.id) o = o.parent
    return o ? o.userData.id : null
  }
  function setHover(id) {
    hoverId = id
    const l = id && byId[id]
    canvas.dataset.cursor = l ? l.cursor || `open ${l.name.replace(/^The /, '')}` : 'drag to spin'
    if (l) canvas.setAttribute('data-hand', ''); else canvas.removeAttribute('data-hand')
  }
  setHover(null)
  const onDown = (e) => { dragging = true; lastX = e.clientX; moved = 0; canvas.setPointerCapture(e.pointerId) }
  const onMove = (e) => {
    const r = canvas.getBoundingClientRect(); px0 = (e.clientX - r.left) / r.width - .5; py0 = (e.clientY - r.top) / r.height - .5
    if (dragging) { const dx = e.clientX - lastX; lastX = e.clientX; moved += Math.abs(dx); thetaT -= dx * 0.008 }
    if (e.pointerType === 'mouse' && !dragging) setHover(pick(e))
  }
  const onUp = (e) => {
    if (!dragging) return
    dragging = false
    if (moved < 6) { const id = pick(e); if (id && byId[id]) { setHover(null); onOpen(byId[id].path) } }
  }
  const onCancel = () => { dragging = false }
  const onLeave = () => setHover(null)
  canvas.addEventListener('pointerdown', onDown)
  canvas.addEventListener('pointermove', onMove)
  canvas.addEventListener('pointerup', onUp)
  canvas.addEventListener('pointercancel', onCancel)
  canvas.addEventListener('pointerleave', onLeave)

  // HTML pins that follow each landmark
  const pins = {}
  landmarks.forEach((l) => {
    const p = document.createElement('div'); p.className = 'pin'
    const b = document.createElement('b'); b.textContent = l.name
    const s = document.createElement('small'); s.textContent = l.sub; b.appendChild(s)
    p.append(b, document.createElement('em')); labelsEl.appendChild(p); pins[l.id] = p
  })

  /* --- loop --- */
  let visible = true, t = 0, last = performance.now(), raf = 0
  const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting }); io.observe(globe)
  const ro = new ResizeObserver(resize); ro.observe(globe)
  const v3 = new THREE.Vector3(), acc = new THREE.Vector3(), coh = new THREE.Vector3(), ali = new THREE.Vector3(), sep = new THREE.Vector3(), target = new THREE.Vector3()
  function frame(now) {
    raf = requestAnimationFrame(frame)
    if (!visible || document.hidden || !rtC) { last = now; return }
    const dt = Math.min(0.05, (now - last) / 1000); last = now
    if (!reduce) t += dt
    G.uTime.value = t
    stepTOD(dt)
    if (!dragging && !reduce) thetaT += dt * 0.035
    theta += (thetaT - theta) * Math.min(1, dt * 6)
    const phi = 0.62 + py0 * 0.08, th = theta + px0 * 0.12
    camera.position.set(Math.sin(th) * Math.cos(phi) * dist, Math.sin(phi) * dist + 1.5, Math.cos(th) * Math.cos(phi) * dist)
    camera.lookAt(0, 1.9, 0)

    // character walk, or face the camera and wave when hovered
    const u = (t * 0.018) % 1, p = curve.getPointAt(u), p2 = curve.getPointAt((u + 0.01) % 1)
    if (!(hoverId === 'me' || forced === 'me')) {
      me.position.set(p.x, 1.78 + Math.abs(Math.sin(t * 7)) * 0.06, p.z); me.rotation.y = Math.atan2(p2.x - p.x, p2.z - p.z); arm.rotation.z = Math.sin(t * 7) * 0.3
    } else {
      me.rotation.y += (Math.atan2(camera.position.x - me.position.x, camera.position.z - me.position.z) - me.rotation.y) * 0.2; arm.rotation.z = 2.6 + Math.sin(t * 12) * 0.4
    }
    LM.me.anchor.set(me.position.x, me.position.y + 1.6, me.position.z)

    // boids: cohesion, alignment, separation, plus a wandering target around the phone
    target.set(4.6 + Math.cos(t * .6) * 1.2, 3.4 + Math.sin(t * .9) * .6, -1.4 + Math.sin(t * .6) * 1.2)
    for (const f of flies) {
      const v = f.userData.v; acc.set(0, 0, 0); coh.set(0, 0, 0); ali.set(0, 0, 0); sep.set(0, 0, 0); let n = 0
      for (const o of flies) {
        if (o === f) continue
        const d = f.position.distanceTo(o.position)
        if (d < 1.6) { coh.add(o.position); ali.add(o.userData.v); n++; if (d < .45) sep.add(v3.copy(f.position).sub(o.position).divideScalar(d * d + .01)) }
      }
      if (n) { coh.divideScalar(n).sub(f.position).multiplyScalar(.0006); ali.divideScalar(n).sub(v).multiplyScalar(.03) }
      acc.add(coh).add(ali).add(sep.multiplyScalar(.0015)).add(v3.copy(target).sub(f.position).multiplyScalar(.0009))
      v.add(acc).clampLength(.012, .045); if (!reduce) f.position.add(v)
      f.lookAt(v3.copy(f.position).add(v))
      const fl = Math.sin(t * 22 + f.userData.ph) * 0.9; f.userData.lp.rotation.z = fl; f.userData.rp.rotation.z = -fl
    }
    headset.position.y = 2.65 + Math.sin(t * 1.4) * 0.12; headset.rotation.y = Math.sin(t * 0.5) * 0.6; headset.rotation.z = Math.sin(t * 0.9) * 0.06
    boat.position.y = 0.1 + Math.sin(t * 1.5) * 0.05; boat.rotation.z = Math.sin(t * 1.2) * 0.06

    // hover glow + pins
    const hot = forced || hoverId
    for (const id in LM) {
      const l = LM[id], on = id === hot ? 1 : 0
      l.group.traverse((o) => { if (o.material && o.material.uniforms) { const h = o.material.uniforms.uHover; h.value += (on - h.value) * 0.25 } })
      const pin = pins[id]; if (!pin) continue
      v3.copy(l.anchor).project(camera)
      pin.style.transform = `translate(${(v3.x * .5 + .5) * W * PX}px, ${(-v3.y * .5 + .5) * H * PX}px) translate(-50%, -100%)`
      pin.classList.toggle('hot', !!on)
    }

    // passes
    G.uNormalPass.value = 0; renderer.setRenderTarget(rtC); renderer.setClearColor(0x000000, 1); renderer.render(scene, camera)
    G.uNormalPass.value = 1; dome.visible = false; renderer.setRenderTarget(rtN); renderer.render(scene, camera); dome.visible = true; G.uNormalPass.value = 0
    renderer.setRenderTarget(null); renderer.render(postScene, postCam)
  }

  resize(); stepTOD(0); raf = requestAnimationFrame(frame)

  return {
    highlight(id) { forced = id },
    destroy() {
      cancelAnimationFrame(raf); io.disconnect(); ro.disconnect()
      canvas.removeEventListener('pointerdown', onDown); canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerup', onUp); canvas.removeEventListener('pointercancel', onCancel); canvas.removeEventListener('pointerleave', onLeave)
      Object.values(pins).forEach((p) => p.remove())
      ;[rtC, rtN].forEach((r) => r && r.dispose())
      disposables.forEach((d) => d.dispose())
      renderer.dispose()
    },
  }
}
