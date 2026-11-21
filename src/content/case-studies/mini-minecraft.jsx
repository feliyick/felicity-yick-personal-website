import { Media, Gallery, Embed } from '../../components/case/blocks'
import MinecraftDesert from '../../images/MiniMinecraft/Minecraft-Desert.mp4'
import MinecraftDesertPoster from '../../images/MiniMinecraft/Minecraft-Desert-poster.jpg'
import MinecraftGrass from '../../images/MiniMinecraft/Minecraft-Grass.mp4'
import MinecraftGrassPoster from '../../images/MiniMinecraft/Minecraft-Grass-poster.jpg'
import MinecraftSlime from '../../images/MiniMinecraft/Minecraft-Slime.mp4'
import MinecraftSlimePoster from '../../images/MiniMinecraft/Minecraft-Slime-poster.jpg'
import MinecraftIce from '../../images/MiniMinecraft/Minecraft-Ice.mp4'
import MinecraftIcePoster from '../../images/MiniMinecraft/Minecraft-Ice-poster.jpg'
import MinecraftTextures from '../../images/MiniMinecraft/minecraft_textures_all.png'

export default {
  slug: 'mini-minecraft',
  path: '/project/mini-minecraft',
  title: 'Mini Minecraft: Far Far Away',
  summary:
    "'A Mini Mineraft: Far Far Away' is a final group project for CIS 460 (Interactive Computer Graphics) produced in the final 5 weeks of my Sophomore Spring semester. I worked with Flora Feng and Samantha Lee. Despite the time zone differences and distance from Covid-19,  my teammates and I successfully built this stylised-version of the popular game Minecraft.",
  meta: {
    where: 'CIS 460 (Interactive Computer Graphics)',
    role: 'Responsible for custom biomes, procedudral asset generation and placement, and animation and texturing.',
    tools: ['C++', 'GLSL', 'Photoshop', 'Qt'],
  },
  links: [{ label: 'GitHub', href: 'https://github.com/feliyick/Mini-Minecraft' }],
  hero: MinecraftDesertPoster,
  heroVideo: MinecraftDesert,
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      body: (
        <>
          <Embed src="https://player.vimeo.com/video/412736781?h=7995d48d44" title="Mini Minecraft Demo" />
        </>
      ),
    },
    {
      id: 'procedural-terrain-and-asset-generation',
      title: 'Procedural Terrain and Asset Generation',
      body: (
        <>
          <Gallery
            items={[
              { video: MinecraftDesert, poster: MinecraftDesertPoster, alt: 'Mars-like desert biome' },
              { video: MinecraftGrass, poster: MinecraftGrassPoster, alt: 'Dark grasslands biome' },
              { video: MinecraftSlime, poster: MinecraftSlimePoster, alt: 'Slime islands biome' },
              { video: MinecraftIce, poster: MinecraftIcePoster, alt: 'Lilac snowy crater mountains biome' },
            ]}
            cols={2}
          />
          <p>One of the main components I was responsible for is procedural terrain generation.</p>
          <p>
            There are four different biomes: a Mars-like desert (top left), islands surrounded with slime (top right), dark grasslands with rivers of lava and water (bottom left), and lilac snowy crater mountains (bottom right).
          </p>
          <p>
            I utilised a combination of noise functions to create a height field. For each (x,z) coordinate, the noise functions would generate a y value which dictates the type of block drawn at that point.

            The dark grasslands were generated using a mix of Worley and Voronoi noise, and slightly perturbed with Fractal Brownian Motion.

            The snowy mountains utilises summed perlin noise.

            The desert utilises a variation of the same summed perlin noise function, however it is flattened out by raising every y-value to an exponent less than 1.

            As for the slime islands, I used a perlin noise based FBM function to achieve the shapes of islands. I also increased the contrast via exponents and smoothstep to distinguish between flat bodies of slime and islands.
          </p>
          <p>
            To  interpolate between the four biomes, I sampled the perlin function at two distant points and used them as 2D coordinates.  I divided the same perlin noise function into quadrants to represent the different biomes, and the 2D coordinates dictated the biome and height of the terrain. I referenced this website: https://structx.com/Bilinear_interpolation.html, and used bilinear interpolation to blend the heights together at the borders.
          </p>
          <p>
            I hardcoded custom trees and cacti of random heights. These assets were placed randomly based on noise functions and probability within their appropriate biomes. Leaf colours varied per biome. L-System Rivers, implemented by a fellow teammate, were placed procedurally with a similar method, the only restriction being a maximum of one river per chunk.
          </p>
        </>
      ),
    },
    {
      id: 'custom-textures-and-animation',
      title: 'Custom Textures and Animation',
      body: (
        <>
          <p>
            To texture blocks, my program reads an image file divided into 16x16 block faces and passes it into the GPU and associates the texture with a sampler2D. Every block has a designated enumeration. I write a function that indexes into the image based on the enum, and appends the uv coordinates of every visible face to the interleaved VBO's (Vertex Buffer Objects). In order to efficiently render all the faces, I split the interleaved VBO to handle opaque and transparent blocks, as well as enabled alpha blending functionality. I utilised Adobe Photoshop to design the pixel art for custom textures.
          </p>
          <p>
            To animate, I altered a standard lambert glsl shader to shift the UV coordinates of 'animateable' blocks based on an incrementing time variable.
          </p>
          <Media src={MinecraftTextures} alt="Custom Minecraft block texture atlas" />
        </>
      ),
    },
  ],
}
