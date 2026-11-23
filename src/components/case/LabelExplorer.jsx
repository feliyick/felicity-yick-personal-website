import { useEffect, useMemo, useRef, useState } from 'react'

// Interactive synthetic-data viewer. Data lives in public/<base>: frames.json (index + class palette) and per frame
// <id>.jpg (beauty), <id>_class.png, <id>_ids.png (instance id packed as R*65536 + G*256 + B), <id>_depth.jpg,
// <id>_normal.png and <id>.json (camera + objects). Hover a pixel to see what it is; click to pin it.
const VIEWS = [
  { key: 'beauty', label: 'Beauty' },
  { key: 'class', label: 'Classes' },
  { key: 'instance', label: 'Instances' },
  { key: 'depth', label: 'Depth' },
  { key: 'normal', label: 'Normals' },
]

const CAMERA_NAMES = { cam_wide: 'Street view', cam_street: 'Sidewalk view', cam_tele: 'Close-up', cam_front: 'Face-on', cam_aerial: 'Aerial', cam_robot: 'Robot height' }
const LOOK_NAMES = { golden: 'Golden hour', sunny: 'Midday', night: 'Night', dusk: 'Dusk', fog: 'Fog' }
const frameName = (f) => [f.seed != null ? `Seed ${f.seed}` : null, CAMERA_NAMES[f.camera] || f.camera, LOOK_NAMES[f.look] || f.look].filter(Boolean).join(' · ')

const hashColor = (id) => [(id * 97) % 255, (id * 57) % 255, (id * 173) % 255]

function TreeNode({ o, active, classes, onHover, onPick }) {
  return (
    <button type="button" className={'lx-node' + (Number(active) === o.id ? ' on' : '')}
      onMouseEnter={() => onHover(o.id)} onMouseLeave={() => onHover(null)} onFocus={() => onHover(o.id)} onBlur={() => onHover(null)}
      onClick={() => onPick(o.id)}>
      <span className="swatch" style={{ background: classes[o.category_id]?.color }} />{o.class.replace('_', ' ')} <small>{o.id}</small>
    </button>
  )
}

export default function LabelExplorer({ base = '/synth/' }) {
  const [index, setIndex] = useState(null)
  const [frameId, setFrameId] = useState(null)
  const [frame, setFrame] = useState(null)
  const [view, setView] = useState('beauty')
  const [overlay, setOverlay] = useState(0.55)
  const [showBoxes, setShowBoxes] = useState(false)
  const [hover, setHover] = useState(null)
  const [pinned, setPinned] = useState(null)
  const ids = useRef(null)            // Uint32Array of instance ids for the current frame
  const overlayRef = useRef(null)
  const instRef = useRef(null)

  useEffect(() => {
    fetch(base + 'frames.json').then((r) => r.json()).then((d) => { setIndex(d); setFrameId(d.frames[0]?.id) })
  }, [base])

  useEffect(() => {
    if (!frameId) return
    let live = true
    setHover(null); setPinned(null); ids.current = null
    fetch(base + frameId + '.json').then((r) => r.json()).then((f) => live && setFrame(f))
    const img = new Image()
    img.onload = () => {
      if (!live) return
      const c = document.createElement('canvas'); c.width = img.width; c.height = img.height
      const g = c.getContext('2d', { willReadFrequently: true }); g.drawImage(img, 0, 0)
      const px = g.getImageData(0, 0, img.width, img.height).data
      const out = new Uint32Array(img.width * img.height)
      for (let i = 0; i < out.length; i++) out[i] = px[i * 4] * 65536 + px[i * 4 + 1] * 256 + px[i * 4 + 2]
      ids.current = { data: out, w: img.width, h: img.height }
      paintInstances()
      drawOverlay(null, null)
    }
    img.src = base + frameId + '_ids.png'
    return () => { live = false }
  }, [frameId, base]) // eslint-disable-line react-hooks/exhaustive-deps

  const classes = index?.classes || {}
  const objOf = (id) => (frame && id ? frame.objects[String(id)] : null)

  function paintInstances() {
    const c = instRef.current; const d = ids.current
    if (!c || !d) return
    c.width = d.w; c.height = d.h
    const g = c.getContext('2d'); const im = g.createImageData(d.w, d.h)
    for (let i = 0; i < d.data.length; i++) {
      const id = d.data[i]; const [r, gg, b] = id ? hashColor(id) : [0, 0, 0]
      im.data[i * 4] = r; im.data[i * 4 + 1] = gg; im.data[i * 4 + 2] = b; im.data[i * 4 + 3] = 255
    }
    g.putImageData(im, 0, 0)
  }

  function drawOverlay(hid, pid) {
    const c = overlayRef.current; const d = ids.current
    if (!c || !d) return
    c.width = d.w; c.height = d.h
    const g = c.getContext('2d'); g.clearRect(0, 0, d.w, d.h)
    if (showBoxes && frame) {
      g.lineWidth = 1
      for (const [, o] of Object.entries(frame.objects)) {
        g.strokeStyle = classes[o.category_id]?.color || '#fff'
        g.strokeRect(o.bbox[0] + 0.5, o.bbox[1] + 0.5, o.bbox[2], o.bbox[3])
      }
    }
    for (const [id, col] of [[pid, [240, 64, 140]], [hid, [255, 255, 255]]]) {
      const o = objOf(id)
      if (!id || !o) continue
      const [x0, y0, bw, bh] = o.bbox
      const im = g.getImageData(x0, y0, bw, bh)
      for (let y = 0; y < bh; y++) for (let x = 0; x < bw; x++) {
        if (d.data[(y0 + y) * d.w + (x0 + x)] !== Number(id)) continue
        const k = (y * bw + x) * 4
        im.data[k] = col[0]; im.data[k + 1] = col[1]; im.data[k + 2] = col[2]; im.data[k + 3] = 120
      }
      g.putImageData(im, x0, y0)
      g.strokeStyle = `rgb(${col.join(',')})`; g.lineWidth = 2; g.strokeRect(x0, y0, bw, bh)
    }
  }

  useEffect(() => { drawOverlay(hover?.id, pinned) }, [hover, pinned, showBoxes, frame]) // eslint-disable-line react-hooks/exhaustive-deps

  function pick(e) {
    const d = ids.current; if (!d) return null
    const r = e.currentTarget.getBoundingClientRect()
    const x = Math.floor(((e.clientX - r.left) / r.width) * d.w), y = Math.floor(((e.clientY - r.top) / r.height) * d.h)
    if (x < 0 || y < 0 || x >= d.w || y >= d.h) return null
    return { id: d.data[y * d.w + x], x, y }
  }

  const shown = pinned ? { id: pinned } : hover
  const o = objOf(shown?.id)
  const parent = o?.parent ? objOf(o.parent) : null
  const size3d = o?.bbox_3d ? [0, 1, 2].map((i) => (o.bbox_3d[i + 3] - o.bbox_3d[i]).toFixed(2)) : null
  const tree = useMemo(() => {                        // House -> objects; bay windows nested under their bay
    if (!frame) return []
    const houses = {}
    for (const [id, ob] of Object.entries(frame.objects)) {
      (houses[ob.house] = houses[ob.house] || []).push({ id: Number(id), ...ob })
    }
    return Object.keys(houses).map(Number).sort((a, b) => a - b).map((h) => {
      const list = houses[h].sort((a, b) => a.id - b.id)
      const kids = (pid) => list.filter((o) => o.parent === pid)
      return { house: h, roots: list.filter((o) => !o.parent || !list.some((p) => p.id === o.parent)).map((o) => ({ ...o, children: kids(o.id) })) }
    })
  }, [frame])
  const [openHouses, setOpenHouses] = useState({})
  const counts = useMemo(() => {
    const c = {}; if (frame) for (const v of Object.values(frame.objects)) c[v.class] = (c[v.class] || 0) + 1
    return Object.entries(c).sort((a, b) => b[1] - a[1])
  }, [frame])

  if (!index) return <div className="lx lx-loading">Loading dataset…</div>
  const meta = index.frames.find((f) => f.id === frameId) || {}
  const layers = meta.layers || ['beauty', 'class', 'instance']
  const views = VIEWS.filter((v) => layers.includes(v.key))
  if (!layers.includes(view)) setTimeout(() => setView('beauty'), 0)
  const src = view === 'beauty' ? base + frameId + '.jpg' : view === 'class' ? base + frameId + '_class.png'
    : view === 'depth' ? base + frameId + '_depth.jpg' : view === 'normal' ? base + frameId + '_normal.png' : null

  return (
    <figure className="lx">
      <div className="lx-bar">
        <div className="switch-tabs" role="group" aria-label="Layer">
          {views.map((v) => <button key={v.key} type="button" className="chip" aria-pressed={view === v.key} onClick={() => setView(v.key)}>{v.label}</button>)}
        </div>
        <button type="button" className="chip lx-toggle" aria-pressed={showBoxes} onClick={() => setShowBoxes(!showBoxes)}>{showBoxes ? '☑' : '☐'} Show boxes</button>
        {view === 'beauty' && (
          <label className="lx-slider">Label overlay <input type="range" min="0" max="1" step="0.05" value={overlay} onChange={(e) => setOverlay(Number(e.target.value))} /></label>
        )}
      </div>
      <div className="lx-main">
      <div className="lx-left">
      <div className="lx-stage" style={{ aspectRatio: frame ? `${frame.width} / ${frame.height}` : '16 / 9' }}
        onMouseMove={(e) => { const p = pick(e); setHover(p && p.id ? p : null) }} onMouseLeave={() => setHover(null)}
        onClick={(e) => { const p = pick(e); setPinned(p && p.id ? (pinned === p.id ? null : p.id) : null) }}>
        {src && <img className={view === 'class' || view === 'normal' ? 'lx-px' : undefined} src={src} alt={`${VIEWS.find((v) => v.key === view).label} for frame ${frameId}`} draggable="false" />}
        <canvas ref={instRef} className="lx-layer" style={{ display: view === 'instance' ? 'block' : 'none' }} aria-hidden="true" />
        {view === 'beauty' && <img className="lx-layer" src={base + frameId + '_class.png'} alt="" aria-hidden="true" style={{ opacity: overlay * 0.6 }} draggable="false" />}
        <canvas ref={overlayRef} className="lx-layer" aria-hidden="true" />
      </div>
      <div className="lx-info" aria-live="polite">
        {o ? (
          <>
            <div className="lx-title"><span className="swatch" style={{ background: classes[o.category_id]?.color }} />{o.class}<small>instance {shown.id}{pinned ? ' · pinned' : ''}</small></div>
            <dl>
              <div><dt>House</dt><dd>{o.house === 0 ? 'Hero' : o.house}</dd></div>
              <div><dt>Inside</dt><dd>{parent ? `${parent.class} ${o.parent}` : '—'}</dd></div>
              <div><dt>2D box</dt><dd>{o.bbox.join(', ')}</dd></div>
              <div><dt>Pixels</dt><dd>{o.area}</dd></div>
              <div><dt>3D size (m)</dt><dd>{size3d ? size3d.join(' × ') : '—'}</dd></div>
            </dl>
            <div className="lx-usd"><span>USD primvars on its faces</span><code>primvars:semantic_id = {o.category_id}</code><code>primvars:instance_id = {shown.id}</code><code>primvars:parent_id = {o.parent || 0}</code></div>
            {pinned && <pre className="lx-json">{JSON.stringify({ instance_id: Number(shown.id), ...o }, null, 1)}</pre>}
          </>
        ) : (
          <p className="lx-hint">Hover the image to see what each pixel is labelled as. Click to pin an object and see its annotation.</p>
        )}
      </div>
      </div>
      <nav className="lx-tree" aria-label="Label hierarchy">
        <div className="lx-tree-head">Label hierarchy</div>
        <ul>
          <li><span className="lx-node lx-street">Street <small>road, sidewalk, trees, furniture (classes only)</small></span>
            <ul>
              {tree.map((h) => {
                const open = openHouses[h.house] ?? (shown && objOf(shown.id)?.house === h.house)
                return (
                  <li key={h.house}>
                    <button type="button" className="lx-node lx-house" aria-expanded={!!open} onClick={() => setOpenHouses({ ...openHouses, [h.house]: !open })}>
                      {open ? '▾' : '▸'} {h.house === 0 ? 'Hero house' : `House ${h.house}`}<small>{h.roots.length + h.roots.reduce((n, r) => n + r.children.length, 0)} objects</small>
                    </button>
                    {open && (
                      <ul>
                        {h.roots.map((r) => (
                          <li key={r.id}>
                            <TreeNode o={r} active={shown?.id} classes={classes} onHover={(id) => setHover(id ? { id } : null)} onPick={(id) => setPinned(pinned === id ? null : id)} />
                            {r.children.length > 0 && (
                              <ul>{r.children.map((c) => <li key={c.id}><TreeNode o={c} active={shown?.id} classes={classes} onHover={(id) => setHover(id ? { id } : null)} onPick={(id) => setPinned(pinned === id ? null : id)} /></li>)}</ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>
          </li>
        </ul>
      </nav>
      </div>
      <div className="lx-frames" role="group" aria-label="Frame">
        <span className="lx-label">Frame</span>
        {index.frames.map((f) => (
          <button key={f.id} type="button" className="chip" aria-pressed={frameId === f.id} onClick={() => setFrameId(f.id)}>{frameName(f)}</button>
        ))}
      </div>
      <figcaption>
        {frame && <>{frameName(meta)}: {Object.keys(frame.objects).length} labelled objects ({counts.map(([k, v]) => `${v} ${k.replace('_', ' ')}`).join(', ')}).</>}
      </figcaption>
    </figure>
  )
}
