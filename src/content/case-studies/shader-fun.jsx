import { Gallery } from '../../components/case/blocks'
import ShaderLambert from '../../images/ShaderFun/shader-fun-lambert.png'
import ShaderBlinn from '../../images/ShaderFun/shader-fun-blinn-square.png'
import ShaderMatte from '../../images/ShaderFun/shader-fun-matte.png'
import ShaderGradient from '../../images/ShaderFun/shader-fun-gradient.png'
import ShaderGradientGif from '../../images/ShaderFun/shader-fun-gradient.mp4'
import ShaderGradientPoster from '../../images/ShaderFun/shader-fun-gradient-poster.jpg'
import ShaderGreyscale from '../../images/ShaderFun/shader-fun-greyscale.png'
import ShaderGaussian from '../../images/ShaderFun/shader-fun-gaussian.png'
import ShaderEdgy from '../../images/ShaderFun/shader-fun-edgy.png'
import ShaderBloom from '../../images/ShaderFun/shader-fun-bloom.png'
import ShaderWorley from '../../images/ShaderFun/shader-fun-worley.png'

export default {
  slug: 'shader-fun',
  path: '/project/ShaderFun/shader-fun',
  title: 'Shader Fun!',
  summary: 'A fun and quick exercise in shader programming with GLSL and OpenGL.',
  meta: {
    role: 'All code and classes.',
    tools: ['GLSL', 'Qt', 'C++', 'OpenGL'],
  },
  links: [],
  hero: ShaderLambert,
  heroVideo: undefined,
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      body: (
        <>
          <Gallery
            items={[
              { src: ShaderLambert, alt: 'Lambert shader' },
              { src: ShaderBlinn, alt: 'Blinn-Phong reflection shader' },
              { src: ShaderMatte, alt: 'Matcap reflection shader' },
              { src: ShaderGradient, alt: 'Iridescent shader' },
              { video: ShaderGradientGif, poster: ShaderGradientPoster, alt: 'Vertex deformation shader' },
              { src: ShaderGreyscale, alt: 'Greyscale x vignette shader' },
              { src: ShaderGaussian, alt: 'Gaussian blur shader' },
              { src: ShaderEdgy, alt: 'Sobel filter shader' },
              { src: ShaderBloom, alt: 'Bloom shader' },
              { src: ShaderWorley, alt: 'Worley distortion shader' },
            ]}
            cols={2}
          />
        </>
      ),
    },
    {
      id: 'implemented-shaders',
      title: 'Implemented Shaders',
      body: (
        <>
          <p>
            I implemented nine different reflection shader and post processed shaders ~ From left to right, top to bottom:
          </p>
          <ul>
            <li>Lambert Shader</li>
            <li>Blinn-Phong Reflection Shader</li>
            <li>Matcap Reflection Shader</li>
            <li>Iridescent Shader</li>
            <li>Vertex Deformation Shader</li>
            <li>Greyscale x Vignette Shader</li>
            <li>Gaussian Blur Shader</li>
            <li>Sobel Filter Shader</li>
            <li>Bloom Shader</li>
            <li>Worley Distortion</li>
          </ul>
        </>
      ),
    },
  ],
}
