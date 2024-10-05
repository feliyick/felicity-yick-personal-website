import '../../styles/project-page-styles/MiniMinecraft.scss'
import Navbar from '../../components/Navbar'
import PageEnd from '../PageEnd'
import {Fade, Bounce} from 'react-reveal'


const MiniMinecraft = () => {

    return (
        <div className="MiniMinecraft">
            <Navbar />
            <div className='minecraft-content'>
                <div className='intro-row'>
                    <div className='minecraft-left-col'>
                        <div className='top-row'>
                            <Fade cascade><div className='project-name'>Mini Minecraft: Far Far Away</div></Fade>
                            <a href="https://github.com/feliyick/Mini-Minecraft" class='git-link' target="_blank" rel="noreferrer"> </a>
                        </div>
                        <div className='responsible-for'>Responsible for custom biomes, procedudral asset generation and placement, and animation and texturing.</div>
                        <Bounce cascade>
                        <div className='tags'>
                            <div className='tag'>C++</div>
                            <div className='tag'>GLSL</div>
                            <div className='tag'>Photoshop</div>
                            <div className='tag'>Qt</div>
                        </div>
                        </Bounce>
                    </div>
                    <div className='minecraft-right-col'>
                        'A Mini Mineraft: Far Far Away' is a final group project for CIS 460 (Interactive Computer Graphics) produced in the final 5 weeks of my Sophomore Spring semester. I worked with Flora Feng and Samantha Lee. Despite the time zone differences and distance from Covid-19,  my teammates and I successfully built this stylised-version of the popular game Minecraft.
                    </div>
                </div>
                <div className='minecraft-background'>
                    <div className='minecraft-video'>
                        <iframe src="https://player.vimeo.com/video/412736781?h=7995d48d44" width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>                
                    </div>
                </div>
            </div>
            <div className='minecraft-details'>
                <div className='procedural-terrain'>
                    <h1 className='procedural-title'>Procedural Terrain and Asset Generation</h1>
                    <div className='terrain-gifs'>
                        <div id='terrain-one'></div>
                        <div id='terrain-two'></div>
                        <div id='terrain-three'></div>
                        <div id='terrain-four'></div>
                    </div>
                    
                    <div className='procedural-details'>
                        One of the main components I was responsible for is procedural terrain generation.
                        <br />
                        <br />
                        There are four different biomes: a Mars-like desert (top left), islands surrounded with slime (top right), dark grasslands with rivers of lava and water (bottom left), and lilac snowy crater mountains (bottom right).
                        <br />
                        <br />
                        I utilised a combination of noise functions to create a height field. For each (x,z) coordinate, the noise functions would generate a y value which dictates the type of block drawn at that point.

                        The dark grasslands were generated using a mix of Worley and Voronoi noise, and slightly perturbed with Fractal Brownian Motion.

                        The snowy mountains utilises summed perlin noise.

                        The desert utilises a variation of the same summed perlin noise function, however it is flattened out by raising every y-value to an exponent less than 1.

                        As for the slime islands, I used a perlin noise based FBM function to achieve the shapes of islands. I also increased the contrast via exponents and smoothstep to distinguish between flat bodies of slime and islands.
                        <br />
                        <br />
                        To  interpolate between the four biomes, I sampled the perlin function at two distant points and used them as 2D coordinates.  I divided the same perlin noise function into quadrants to represent the different biomes, and the 2D coordinates dictated the biome and height of the terrain. I referenced this website: https://structx.com/Bilinear_interpolation.html, and used bilinear interpolation to blend the heights together at the borders.
                        <br />
                        <br />
                        I hardcoded custom trees and cacti of random heights. These assets were placed randomly based on noise functions and probability within their appropriate biomes. Leaf colours varied per biome. L-System Rivers, implemented by a fellow teammate, were placed procedurally with a similar method, the only restriction being a maximum of one river per chunk.
                    </div>
                </div>

                {/*  CUSTOM ANIMATIONS AND TEXTURES */}
                <div className='animation-textures'>
                    <div className='animtext-left'>
                        <h1 className='animtext-title'>Custom Textures and Animation</h1>
                        <div className='animtext-details'>
                            To texture blocks, my program reads an image file divided into 16x16 block faces and passes it into the GPU and associates the texture with a sampler2D. Every block has a designated enumeration. I write a function that indexes into the image based on the enum, and appends the uv coordinates of every visible face to the interleaved VBO's (Vertex Buffer Objects). In order to efficiently render all the faces, I split the interleaved VBO to handle opaque and transparent blocks, as well as enabled alpha blending functionality. I utilised Adobe Photoshop to design the pixel art for custom textures.
                            <br/>
                            <br/>
                            To animate, I altered a standard lambert glsl shader to shift the UV coordinates of 'animateable' blocks based on an incrementing time variable.

                        </div>
                    </div>
                    <div className='animtext-image'></div>
                </div>
            </div>
            <PageEnd/>
        </div>
    )
}

export default MiniMinecraft