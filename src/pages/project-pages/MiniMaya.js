import '../../styles/project-page-styles/MiniMaya.scss'
import Navbar from '../../components/Navbar'
import PageEnd from '../PageEnd'
import {Fade, Bounce} from 'react-reveal'

const MiniMaya = () => {

    return (
        <div className="MiniMaya">
            <Navbar />
            <div className='maya-content'>
                <div className='intro-row'>
                    <div className='maya-left-col'>
                        <div className='top-row'>
                            <Fade cascade><div className='project-name'>Mini Maya</div></Fade>
                            <a href="https://github.com/feliyick/Mini-Maya" class='git-link' target="_blank" rel="noreferrer"> </a>
                        </div>
                        <div className='responsible-for'>Responsible for all code and classes.</div>
                        <Bounce cascade>
                        <div className='tags'>
                            <div className='tag'>C++</div>
                            <div className='tag'>GLSL</div>
                            <div className='tag'>Photoshop</div>
                            <div className='tag'>Qt</div>
                        </div>
                        </Bounce>
                    </div>
                    <div className='maya-right-col'>
                        "Mini Maya" is a version of Autodesk Maya with reduced functionality. This program is capable of loading various .obj files, manipulating vertices, faces, and edges. The program utilises half-edge data structures to store and draw mesh data. 
                    </div>
                </div>
                <div className='maya-video-background'>
                    <div className='maya-video-one'>
                        <iframe src="https://www.youtube.com/embed/KgivA9He360?si=28Fa726OWfHBjBCB" width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='maya-video-two'>
                        <iframe src="https://www.youtube.com/embed/3nIL43VZ7rk?si=X1TbiwxXh7HR6GN3" width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <div className='maya-details'>
                <div className='maya-features'>
                    <div className='maya-features-title'>Features</div>
                    <div className='maya-details'>
                        Mini Maya supports a handful of primitive mesh operations. Users can select different components via the labelled lists in the application GUI. This includes:
                        <br/>
                        <br/>
                        <ul class="maya-feature-list">
                            <li>Face Triangulation</li>
                            <li>Face Extrusion</li>
                            <li>Edge Splitting</li>
                            <li>Catmull-Clark Subdivision</li>
                            <li>Changing face colour</li>
                            <li>Changing vertex position</li>
                        </ul>
                        <br/>
                        <br/>
                        This project was completed for CIS460 (Interactive Computer Graphics) in the Spring semester of my sophomore year.
                    </div>
                </div>
            </div>
            <PageEnd />
        </div>
    )
}

export default MiniMaya