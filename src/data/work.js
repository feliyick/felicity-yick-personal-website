// The Selected Work grid. Paths match the case-study routes (and the old site's URLs).
import VistasFarField from '../images/work/meta/switchable-vistas/vistas-far-field.jpg'
import HyperscapeHero from '../images/hyperscape-hero.jpg'
import MetaRealityLabsHero from '../images/meta-reality-labs-hero.png'
import TikTokHero from '../images/TikTokEffects/tiktok-hero.png'
import TikTokCreateWithAIHero from '../images/TikTokEffects/effecthouse-create-with-ai.jpg'
import MetaLogo from '../images/logos/meta.svg'
import TikTokLogo from '../images/logos/tiktok.svg'
import Klaus from '../images/Klaus/Klaus-03.jpg'
import TinyTavern from '../images/TinyTavern/TinyTavern01.jpg'
import ProceduralTerrariumRender from '../images/Terrarium/procedural-terrariums.png'
import MinecraftSlime from '../images/MiniMinecraft/Minecraft-Slime-poster.jpg'
import MinecraftSlimeVideo from '../images/MiniMinecraft/Minecraft-Slime.mp4'
import LSystem from '../images/LSystemGif-poster.jpg'
import LSystemVideo from '../images/LSystemGif.mp4'
import MiniMayaCube from '../images/MiniMayaCube-poster.jpg'
import MiniMayaCubeVideo from '../images/MiniMayaCube.mp4'
import Minka from '../images/Minka/MinkaRender2.jpg'
import Blinn from '../images/ShaderFun/shader-fun-blinn.png'

export const CAT = {
  PIPELINE: 'Pipelines & Tooling',
  PROCGEN: 'Procedural',
  REALTIME: 'Real-time / VR',
  SHADERS: 'Shaders & Rendering',
  AI: 'AI & LLM Tooling',
  ART: '3D Art',
}
export const CATEGORIES = ['All', ...Object.values(CAT)]

const work = [
  {
    image: VistasFarField, logo: MetaLogo, company: 'Meta', feat: true,
    title: 'Immersive Homes for Connect 2025',
    tools: ['Python', 'Unreal Engine', 'USD', 'Lightmap Baking', 'Quest'],
    categories: [CAT.PIPELINE, CAT.REALTIME, CAT.SHADERS],
    blurb: "Productionised the team's Unreal→USD ingestion pipeline (Blueprints + Python, custom C++ source extensions): LODs, atlases, tuned lightmap baking for standalone VR. Shipped in Quest OS v81 for Connect 2025.",
    path: '/work/switchable-vistas',
  },
  {
    image: MetaRealityLabsHero, logo: MetaLogo, company: 'Meta', locked: true, wip: true,
    title: 'AI-Powered Mobile Game Creation Platform',
    tools: ['LLM Orchestration', 'AI Tooling', 'Experimentation', 'Mobile'],
    categories: [CAT.AI, CAT.PIPELINE],
    blurb: 'AI-native pod building a mobile game-creation platform around LLM agents: skills system, orchestration, in-game spatial editing, and A/B experimentation infrastructure.',
    path: '/work/ai-game-creation-platform',
  },
  {
    image: Minka,
    title: 'Japanese Minka Generator',
    tools: ['Houdini', 'VEX'],
    categories: [CAT.PROCGEN],
    blurb: 'Houdini Digital Asset procedurally generating traditional Japanese houses; artist-tunable via a flexible parameter set.',
    path: '/project/minka-generator',
  },
  {
    image: TikTokHero, logo: TikTokLogo, logoH: 24, company: 'TikTok', feat: true,
    title: 'TikTok AR Effect Production',
    tools: ['Lua', 'TypeScript', 'GLSL', 'Effect House', 'Mobile AR'],
    categories: [CAT.REALTIME, CAT.SHADERS, CAT.AI],
    blurb: 'Embedded technical artist on rotating production pods. Owned 50+ AR effects end-to-end across shader R&D, GAN transformations, server-rendered ML, and branded campaigns (DreamWorks, Met Gala 2024). 10M+ users reached.',
    path: '/work/tiktok-ar-effects',
  },
  {
    image: TikTokCreateWithAIHero, logo: TikTokLogo, logoH: 24, company: 'TikTok',
    title: 'Create with AI for Effect House',
    tools: ['TypeScript', 'LLM Tooling', 'Visual Scripting', 'Effect House'],
    categories: [CAT.AI, CAT.PIPELINE],
    blurb: 'Core engineer on Effect House\'s "Create with AI" platform feature: a modular TypeScript framework auto-generating visual-scripting logic. Supported 10K+ AI-generated effects on launch.',
    path: '/work/tiktok-ai-effects',
  },
  {
    image: HyperscapeHero, logo: MetaLogo, company: 'Meta', locked: true,
    title: 'Hyperscape Prototyping',
    tools: ['3D Gaussian Splatting', 'Radiance Fields', 'Unreal Engine', 'Python', 'Quest'],
    categories: [CAT.PIPELINE, CAT.REALTIME, CAT.AI],
    blurb: 'Prototyped a 3DGS capture pipeline from Unreal; partnered with Hyperscape engineering on splat optimisation for Quest; experimented with rigid-body and rig-bound splat animation.',
    path: '/work/hyperscape-prototyping',
  },
  {
    image: Klaus,
    title: 'Klaus',
    tools: ['ZBrush', 'Autodesk Maya', 'Arnold'],
    categories: [CAT.ART],
    blurb: 'Sculpt of the title character from Netflix Original Klaus. Sculpted and textured in ZBrush, rendered in Arnold and Maya.',
    path: '/project/klaus',
  },
  {
    image: ProceduralTerrariumRender,
    title: 'Procedural Terrariums',
    tools: ['Houdini', 'Substance Designer'],
    categories: [CAT.PROCGEN],
    blurb: 'Houdini HDAs that procedurally generate a wide variety of succulents and décor inside an enclosed terrarium.',
    path: '/project/procedural-terrariums',
  },
  {
    image: TinyTavern,
    title: 'Tiny Tavern',
    tools: ['Autodesk Maya', 'ZBrush', 'Substance Painter', 'Arnold'],
    categories: [CAT.ART],
    blurb: 'Original tavern diorama. All assets modelled in Maya and ZBrush, textured in Substance Painter, rendered in Arnold.',
    path: '/project/tiny-tavern',
  },
  {
    image: MinecraftSlime, video: MinecraftSlimeVideo,
    title: 'A Mini Minecraft: Far Far Away',
    tools: ['C++', 'GLSL', 'Photoshop', 'Qt'],
    categories: [CAT.SHADERS, CAT.PROCGEN],
    blurb: 'Final group project for CIS 460. Responsible for texturing, animation, custom biomes, and procedurally placed assets.',
    path: '/project/mini-minecraft',
  },
  {
    image: LSystem, video: LSystemVideo,
    title: 'Procedural Orange Tree',
    tools: ['WebGL', 'TypeScript', 'L-Systems', 'Autodesk Maya'],
    categories: [CAT.PROCGEN],
    blurb: 'L-system-based orange tree generator. Users manipulate age, iteration count, and orange count to shape the result.',
    path: '/project/procedural-orange-tree',
  },
  {
    image: MiniMayaCube, video: MiniMayaCubeVideo,
    title: 'Mini Maya',
    tools: ['Qt', 'C++', 'GLSL'],
    categories: [CAT.PIPELINE],
    blurb: 'Reduced-functionality Maya clone built on half-edge data structures. Loads .obj files; manipulates vertices, faces, edges.',
    path: '/project/mini-maya',
  },
  {
    image: Blinn,
    title: 'Shader Fun',
    tools: ['GLSL', 'C++'],
    categories: [CAT.SHADERS],
    blurb: 'A collection of shader implementations: Blinn-Phong, Matcap, Gaussian Blur, Worley Noise, and more.',
    path: '/project/ShaderFun/shader-fun',
  },
]

export default work
