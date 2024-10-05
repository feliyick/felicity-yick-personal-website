import '../../styles/project-page-styles/ShaderFun.scss'
import Navbar from '../../components/Navbar'
import PageEnd from '../PageEnd'
import {Fade, Bounce} from 'react-reveal'


const ShaderFun = () => {

    return (
        <div className="ShaderFun">
            <Navbar />
            <div className='shader-content'>
                <div className='intro-row'>
                    <div className='shader-left-col'>
                        <Fade cascade><div className='project-name'>Shader Fun!</div></Fade>
                        <div className='responsible-for'>All code and classes.</div>
                        <Bounce cascade>
                        <div className='tags'>
                            <div className='tag'>GLSL</div>
                            <div className='tag'>Qt</div>
                            <div className='tag'>C++</div>
                            <div className='tag'>OpenGL</div>
                        </div>
                        </Bounce>
                    </div>
                    <div className='shader-right-col'>
                        A fun and quick exercise in shader programming with GLSL and OpenGL. 
                    </div>
                </div>
                <div className='shader-video-background'>
                    <div className='shader-pics'>
                        <div id='shader-one'></div>
                        <div id='shader-two'></div>
                        <div id='shader-three'></div>
                        <div id='shader-four'></div>
                        <div id='shader-five'></div>
                        <div id='shader-six'></div>
                        <div id='shader-seven'></div>
                        <div id='shader-eight'></div>
                        <div id='shader-nine'></div>
                        <div id='shader-ten'></div>
                    </div>
                </div>
            </div>
            <div className='shader-details'>
                <div className='shader-types'>
                    <div className='shader-types-title'>Implemented Shaders</div>
                    <div className='shader-details'>
                        I implemented nine different reflection shader and post processed shaders ~ From left to right, top to bottom:
                        <br/>
                        <br/>
                        <ul class="shader-types-list">
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
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
            <PageEnd />
        </div>
    )
}

export default ShaderFun