import Blinn from './images/ShaderFun/shader-fun-blinn.png'
import MinecraftSlime from './images/MiniMinecraft/Minecraft-Slime.gif'
import LSystem from './images/LSystemGif.gif'
import MiniMayaCube from './images/MiniMayaCube.gif'
import Minka from './images/Minka/MinkaRender2.png'
import ProceduralTerrariumRender from './images/Terrarium/procedural-terrariums.png'

const graphicsProjectInfo = [
    {
        image: `${ProceduralTerrariumRender}`,
        title: 'Procedural Terrariums',
        // eslint-disable-next-line no-multi-str
        description: 'developed in Houdini, I built a \
        set of HDAs to procedurally create a wide variety of\
        succulents and decor, and spawn in an enclosed terrarium',
        tags: ['Houdini', 'Substance Designer'],
        page: '/project/procedural-terrariums'
    },
    {
        image: `${MinecraftSlime}`,
        title: 'A Mini Minecraft: Far Far Away',
        // eslint-disable-next-line no-multi-str
        description: 'a final group project for CIS 460 (Interactive\
             Computer Graphics) produced in the final 5 weeks\
              of my Sophomore Spring semester. Responsible for \
              texturing and animation, custom biomes, procedurally\
              placed assets.',
        tags: ['C++', 'GLSL', 'Photoshop', 'Qt'],
        page: '/project/mini-minecraft'
    }, 
    {
        image: `${LSystem}`,
        title: 'Procedural Orange Tree',
        // eslint-disable-next-line no-multi-str
        description: 'a orange tree generator based on L-systems which allows users to\
        manipulate age, number of iterations, and number of oranges.',
        tags: ['WebGL', 'TypeScript', 'L-Systems', 'Autodesk Maya'],
        page: '/project/procedural-orange-tree'
    },
    {
        image: `${Minka}`,
        title: 'Japanese Minka Generator',
        // eslint-disable-next-line no-multi-str
        description: 'A Houdini Digital Asset which procedurally generates\
        a traditional Japanese house. A flexible tool that lets artists adjust\
        many sliders to achieve their desired look.',
        tags: ['Houdini', 'VEX'],
        page: '/project/minka-generator'
    },
    {
        image: `${MiniMayaCube}`,
        title: 'Mini Maya',
        // eslint-disable-next-line no-multi-str
        description: 'I created a mesh-based editor "Mini Maya", \
        a version of Autodesk Maya with reduced functionality. This \
        program is capable of loading various .obj files, manipulating\
         vertices, faces, and edges. The program utilises half-edge data\
          structures to store and draw mesh data. ',
        tags: ['Qt', 'C++', 'GLSL'],
        page: '/project/mini-maya'
    },
    {
        image: `${Blinn}`,
        title: 'Shader Fun',
        // eslint-disable-next-line no-multi-str
        description: 'Implementation of a variety of different\
        shaders. Including: Blinn-Phong, Mattecap, Gaussian Blur,\
        Worley Noise, ...',
        tags: ['GLSL', 'C++'],
        page: '/project/ShaderFun/shader-fun'
    }
]



export default graphicsProjectInfo;