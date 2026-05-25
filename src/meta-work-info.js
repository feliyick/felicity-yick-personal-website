import VistasFarField from './images/work/meta/switchable-vistas/vistas-far-field.png'
import VistasPocketContent from './images/work/meta/switchable-vistas/vistas-pocket-content.png'
import VistasInterior from './images/work/meta/switchable-vistas/vistas-interior.png'
import Placeholder from './images/work/placeholder.svg'

const metaWorkInfo = [
    {
        company: 'Meta Reality Labs',
        role: 'Senior Technical Artist (IC5)',
        title: 'Immersive Homes — Switchable Vistas Pipeline',
        // eslint-disable-next-line no-multi-str
        blurb: 'Architected and shipped the Switchable Vistas system for Meta Quest OS Home — a Python-based \
        Unreal→USD asset ingestion pipeline with LODs, multi-material setups, texture atlases, and a tuned \
        lightmap baking solution for standalone VR. Shipped in v81 for Connect 2025.',
        images: [VistasFarField, VistasPocketContent, VistasInterior],
        page: '/work/switchable-vistas',
    },
    {
        company: 'Meta Reality Labs',
        role: 'Senior Technical Artist (IC5)',
        title: 'Immersive Homes — Hyperscape Prototyping',
        // eslint-disable-next-line no-multi-str
        blurb: 'Prototyped integration of Meta\'s Hyperscape (3D Gaussian Splatting) into the Immersive Homes \
        pipeline — Unreal-driven capture, splat-model optimisation for Quest, and post-training splat animation.',
        images: [Placeholder, Placeholder, Placeholder],
        page: '/work/hyperscape-prototyping',
    },
    {
        company: 'Meta Reality Labs',
        role: 'Senior Technical Artist (IC5)',
        title: 'APK Lifecycle Tool',
        // eslint-disable-next-line no-multi-str
        blurb: 'A unified GUI wrapping the entire APK lifecycle — build, install, test, publish — in a single \
        interface. Eliminated the context-switching across disconnected tools that fragmented every VR developer\'s \
        iteration cycle.',
        images: [Placeholder, Placeholder, Placeholder],
        page: '/work/apk-lifecycle-tool',
    },
    {
        company: 'Meta Reality Labs',
        role: 'Senior Technical Artist (IC5)',
        title: 'AI-Powered Game Creation Platform',
        // eslint-disable-next-line no-multi-str
        blurb: 'Within an AI-native pod of technical artists, helped architect a mobile game-creation platform \
        built around LLM agents collaborating with human creators. Built the skills system, orchestration layer, \
        in-game spatial editing, and the team\'s A/B experimentation infrastructure.',
        images: [Placeholder, Placeholder, Placeholder],
        page: '/work/ai-game-creation-platform',
    },
]

export default metaWorkInfo;
