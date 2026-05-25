// Meta Reality Labs imagery
import VistasFarField from './images/work/meta/switchable-vistas/vistas-far-field.png'
import HyperscapeHero from './images/hyperscape-hero.jpg'
import MetaRealityLabsHero from './images/meta-reality-labs-hero.png'

// TikTok hero images
import TikTokHero from './images/TikTokEffects/tiktok-hero.png'
import TikTokCreateWithAIHero from './images/TikTokEffects/effecthouse-create-with-ai.png'

// Company logos
import MetaLogo from './images/logos/meta.svg'
import TikTokLogo from './images/logos/tiktok.svg'

// Personal project imagery (reused from graphics-project-info / art-project-info)
import Klaus from './images/Klaus/Klaus-03.jpg'
import TinyTavern from './images/TinyTavern/TinyTavern01.jpg'
import ProceduralTerrariumRender from './images/Terrarium/procedural-terrariums.png'
import MinecraftSlime from './images/MiniMinecraft/Minecraft-Slime.gif'
import LSystem from './images/LSystemGif.gif'
import MiniMayaCube from './images/MiniMayaCube.gif'
import Minka from './images/Minka/MinkaRender2.png'
import Blinn from './images/ShaderFun/shader-fun-blinn.png'

const CAT = {
    PIPELINE: 'Pipelines & Tooling',
    PROCGEN: 'Procedural Generation',
    REALTIME: 'Real-Time / VR',
    SHADERS: 'Shaders & Rendering',
    AI: 'AI & LLM Tooling',
    ART: '3D Art',
}

const selectedWork = [
    {
        image: VistasFarField,
        logo: MetaLogo,
        title: 'Meta Reality Labs — Immersive Homes for Connect 2025',
        scope: 'Meta Reality Labs',
        tools: ['Python', 'Unreal Engine', 'USD', 'Lightmap Baking', 'Quest'],
        categories: [CAT.PIPELINE, CAT.REALTIME, CAT.SHADERS],
        blurb: 'Productionised the team\'s Unreal→USD ingestion pipeline (Blueprints + Python, custom C++ source extensions) — LODs, atlases, tuned lightmap baking for standalone VR. Shipped in Quest OS v81 for Connect 2025.',
        page: '/work/switchable-vistas',
    },
    {
        image: MetaRealityLabsHero,
        logo: MetaLogo,
        title: '(In Progress) Meta Reality Labs — AI-Powered Mobile Game Creation Platform',
        scope: 'Meta Reality Labs',
        tools: ['LLM Orchestration', 'AI Tooling', 'Experimentation', 'Mobile'],
        categories: [CAT.AI, CAT.PIPELINE],
        blurb: 'AI-native pod building a mobile game-creation platform around LLM agents — skills system, orchestration, in-game spatial editing, and A/B experimentation infrastructure.',
        page: '/work/ai-game-creation-platform',
        unlisted: true,
        unlistedNote: 'Unlisted — work in progress. Please request access for the full case study.',
    },
    {
        image: Minka,
        title: 'Japanese Minka Generator',
        scope: 'Personal Project',
        tools: ['Houdini', 'VEX'],
        categories: [CAT.PROCGEN],
        blurb: 'Houdini Digital Asset procedurally generating traditional Japanese houses; artist-tunable via a flexible parameter set.',
        page: '/project/minka-generator',
    },
    {
        image: TikTokHero,
        logo: TikTokLogo,
        title: 'TikTok — AR Effect Production',
        scope: 'TikTok',
        tools: ['Lua', 'TypeScript', 'GLSL', 'Effect House', 'Mobile AR'],
        categories: [CAT.REALTIME, CAT.SHADERS, CAT.AI],
        blurb: 'Embedded technical artist on rotating production pods — owned 50+ AR effects end-to-end across shader R&D, GAN transformations, server-rendered ML, and branded campaigns (DreamWorks, Met Gala 2024). 10M+ users reached.',
        page: '/work/tiktok-ar-effects',
    },
    {
        image: TikTokCreateWithAIHero,
        logo: TikTokLogo,
        title: 'TikTok — Create with AI Product for Effect House',
        scope: 'TikTok',
        tools: ['TypeScript', 'LLM Tooling', 'Visual Scripting', 'Effect House'],
        categories: [CAT.AI, CAT.PIPELINE],
        blurb: 'Core engineer on Effect House\'s "Create with AI" platform feature — modular TypeScript framework auto-generating visual-scripting logic. Supported 10K+ AI-generated effects on launch.',
        page: '/work/tiktok-ai-effects',
    },
    {
        image: HyperscapeHero,
        logo: MetaLogo,
        title: 'Hyperscape Prototyping',
        scope: 'Meta Reality Labs',
        tools: ['3D Gaussian Splatting', 'Radiance Fields', 'Unreal Engine', 'Python', 'Quest'],
        categories: [CAT.PIPELINE, CAT.REALTIME, CAT.AI],
        blurb: 'Prototyped 3DGS capture pipeline from Unreal; partnered with Hyperscape engineering on splat optimisation for Quest; experimented with rigid-body and rig-bound splat animation.',
        page: '/work/hyperscape-prototyping',
        unlisted: true,
        unlistedNote: 'Unlisted — please request access for the full case study.',
    },
    {
        image: Klaus,
        title: 'Klaus',
        scope: 'Personal Project',
        tools: ['ZBrush', 'Autodesk Maya', 'Arnold'],
        categories: [CAT.ART],
        blurb: 'Sculpt of the title character from Netflix Original Klaus. Sculpted and textured in ZBrush, rendered in Arnold and Maya.',
        page: '/project/klaus',
    },
    {
        image: ProceduralTerrariumRender,
        title: 'Procedural Terrariums',
        scope: 'Personal Project',
        tools: ['Houdini', 'Substance Designer'],
        categories: [CAT.PROCGEN],
        blurb: 'Houdini HDAs that procedurally generate a wide variety of succulents and décor inside an enclosed terrarium.',
        page: '/project/procedural-terrariums',
    },
    {
        image: TinyTavern,
        title: 'Tiny Tavern',
        scope: 'Personal Project',
        tools: ['Autodesk Maya', 'ZBrush', 'Substance Painter', 'Arnold'],
        categories: [CAT.ART],
        blurb: 'Original tavern diorama. All assets modelled in Maya and ZBrush, textured in Substance Painter, rendered in Arnold.',
        page: '/project/tiny-tavern',
    },
    {
        image: MinecraftSlime,
        title: 'A Mini Minecraft: Far Far Away',
        scope: 'Personal Project',
        tools: ['C++', 'GLSL', 'Photoshop', 'Qt'],
        categories: [CAT.SHADERS, CAT.PROCGEN],
        blurb: 'Final group project for CIS 460. Responsible for texturing, animation, custom biomes, and procedurally placed assets.',
        page: '/project/mini-minecraft',
    },
    {
        image: LSystem,
        title: 'Procedural Orange Tree',
        scope: 'Personal Project',
        tools: ['WebGL', 'TypeScript', 'L-Systems', 'Autodesk Maya'],
        categories: [CAT.PROCGEN],
        blurb: 'L-system-based orange tree generator. Users manipulate age, iteration count, and orange count to shape the result.',
        page: '/project/procedural-orange-tree',
    },
    {
        image: MiniMayaCube,
        title: 'Mini Maya',
        scope: 'Personal Project',
        tools: ['Qt', 'C++', 'GLSL'],
        categories: [CAT.PIPELINE],
        blurb: 'Reduced-functionality Maya clone built on half-edge data structures. Loads .obj files; manipulates vertices, faces, edges.',
        page: '/project/mini-maya',
    },
    {
        image: Blinn,
        title: 'Shader Fun',
        scope: 'Personal Project',
        tools: ['GLSL', 'C++'],
        categories: [CAT.SHADERS],
        blurb: 'A collection of shader implementations — Blinn-Phong, Matcap, Gaussian Blur, Worley Noise, and more.',
        page: '/project/ShaderFun/shader-fun',
    },
]

export const CATEGORIES = [
    'All',
    CAT.PIPELINE,
    CAT.PROCGEN,
    CAT.REALTIME,
    CAT.SHADERS,
    CAT.AI,
    CAT.ART,
]

export default selectedWork
