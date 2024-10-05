import '../../styles/project-page-styles/ProceduralTerrarium.scss'
import Navbar from '../../components/Navbar'
import PageEnd from '../PageEnd'
import MinkaRender1 from '../../images/Minka/MinkaRender1.png'
import MinkaRender2 from '../../images/Minka/MinkaRender2.png'
import MinkaParams from '../../images/Minka/MinkaParams.png'
import MinkaTwoStory from '../../images/Minka/MinkaTwoStory.png'
import MinkaCourtyard from '../../images/Minka/MinkaCourtyard.png'

import { Fade, Bounce } from 'react-reveal'

const ProceduralMinka = () => {
    return (
        <div className="ProceduralTerrarium">
            <Navbar />
            <div className='terrarium-content'>
                <div className='intro-row'>
                    <div className='terrarium-left-col'>
                        <div className='top-row'>
                            <Fade cascade><div className='project-name'>Procedural Minkas</div></Fade>
                            <a href="https://github.com/feliyick/final-project" class='git-link' target="_blank" rel="noreferrer"> </a>
                        </div>
                        <div className='responsible-for'>Responsible for all code and classes.</div>
                        <Bounce cascade>
                            <div className='tags'>
                                <div className='tag'>Houdini</div>
                            </div>
                        </Bounce>
                    </div>
                    <div className='terrarium-right-col'>
                        As part of my final project for my Procedural Graphics class, I built a set of Houdini Digital Asset to procedurally create Japanese Minkas.
                        My traditional Japanese house generator is capable of creating 1-2 story high houses, with an optional courtyard (which sacrifices the second floor).
                    </div>
                </div>
                <div className='terrarium-details'>
                    <div className='terrarium-features'>
                        <div className='terrarium-features-title'>Overview</div>
                        <br />
                        For more detailed information about this project, take a look at my detailed ReadMe in my project repository
                        <a href={"https://github.com/feliyick/final-project"} class="hyperlink" target="_blank" rel="noreferrer"> here. </a>
                        <img src={MinkaRender1} alt="Minka Render 1" class="project-image"/>

                        <div className='image-container'>
                        <img src={MinkaTwoStory} alt="Minka Render 1" class="side-image"/>
                        <img src={MinkaCourtyard} alt="Minka Render 1" class="side-image"/>
                        </div>
                        
                        <img src={MinkaRender2} alt="Minka Render 2" class="project-image"/>

                    </div>
                </div>
            </div>
            <div className='terrarium-details'>
                <div className='terrarium-features'>
                    <div className='terrarium-features-title'>Features</div>
                    <div className='terrarium-details'>
                        These Houdini Digital Assets provides a parameterised solution for quickly generating fully textured terrariums. Features include
                        <br />
                        <br />
                        <ul class="terrarium-feature-list">
                            <li>House base shape, base height, number of wall extrusions</li>
                            <li>Size of courtyard in the center(can be 0 for no courtyard)</li>
                            <li>Number of doors, windows, stairs</li>
                            <li>Railing, platform depth and height</li>
                            <li>Colours of all elements</li>
                        </ul>
                        <img src={MinkaParams} alt="Minka Render 1" class="project-image"/>

                        <br />
                        <br />
                    </div>
                </div>
            </div>
            <PageEnd />
        </div>
    )
}

export default ProceduralMinka