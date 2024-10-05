import '../../styles/project-page-styles/ProceduralTerrarium.scss'
import Navbar from '../../components/Navbar'
import PageEnd from '../PageEnd'
import ThesisPDF from '../../pdfs/SeniorDesignDocument_FelicityYick.pdf'

import { Fade, Bounce } from 'react-reveal'

const ProceduralTerrariums = () => {
    return (
        <div className="ProceduralTerrarium">
            <Navbar />
            <div className='terrarium-content'>
                <div className='intro-row'>
                    <div className='terrarium-left-col'>
                        <div className='top-row'>
                            <Fade cascade><div className='project-name'>Procedural Terrariums</div></Fade>
                            <a href="https://github.com/feliyick/hw04-l-systems?organization=feliyick&organization=feliyick" class='git-link' target="_blank" rel="noreferrer"> </a>
                        </div>
                        <div className='responsible-for'>Responsible for all code and classes.</div>
                        <Bounce cascade>
                            <div className='tags'>
                                <div className='tag'>Houdini</div>
                                <div className='tag'>Substance Painter</div>
                            </div>
                        </Bounce>
                    </div>
                    <div className='terrarium-right-col'>
                        For my Senior Thesis, I built a set of Houdini Digital Assets to procedurally create a wide variety of succulents and decor, and spawn in an enclosed terrarium.
                    </div>
                </div>
                <div className='terrarium-details'>
                    <div className='terrarium-features'>
                        <div className='terrarium-features-title'>Overview</div>
                        <br />
                        Get to know the project by watching this (hopefully not cringey) final presentation! Or if you are a reader, check out my final thesis
                        <a href={ThesisPDF} class="hyperlink" target="_blank" rel="noreferrer"> here. </a>
                        <div className='terrarium-presentation-video'>
                            <iframe src="https://www.youtube.com/embed/dHzb96EucTk?si=IFu8OJxhhT92-5Rj?autoplay=1&mute=1" width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                        </div>
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
                            <li>HDAs with customisable parameters for a succulent varieties: Button Ferns, Fittonia, Aeonium Lily Pad, Kiwi Rare</li>
                            <li>Ability for users to choose their terrarium shape, as well as the terrain heights of soil and water levels</li>
                            <li>Polished interface that allows users to paint and place instanced plants within the interior of their terrarium along soil surfacesg</li>
                            <li>An alternative generation method: A simple ‘Generate’ button that gives random variations of terrariums</li>
                            <li>A connected pipeline to Autodesk Maya/UnReal Engine 4 for efficient texturing using materials made in Substance Designer, and real time rendering</li>
                        </ul>
                        <br />
                        <br />
                        <div className='terrarium-video-background'>

                            <p>Below is a sped up demo of the generator tool in action, showcasing how to quickly generate terrariums with randomized features.</p>

                            <div className='terrarium-video-one'>
                                <iframe src="https://www.youtube.com/embed/fHJIVween4s?si=cRaOhsdebWm217Qx" width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <br></br>
                            <br></br>
                            <p>Below is a demonstration of painting areas of the terrarium soil to spawn instanced plants.</p>
                            <br></br>
                            <p>Using Houdini paint nodes, the tool is configure so that users can paint on the soil terrain to define a density distribution map for each plant type. These maps would be greyscale. White would be additive, and black would be subtractive. The maps can be converted into a mesh of points where plants can be scattered. This user painting method would not implement any of the systematic ecosystem relationships. Placement of plants would be up to the user’s artistic direction.</p>
                            <br></br>
                            <br></br>
                            <div className='terrarium-video-two'>
                                <iframe src={`https://www.youtube.com/embed/HkwyvEdVu-U?si=3dLPG5UIsnIeLoAF?autoplay=1&mute=1`} width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <br></br>
                            <br></br>
                            <p>An example of the parameterised settings of the Button Fern HDA. Users can adjust: </p>
                            <br></br>
                            <br></br>
                            <ul class="terrarium-feature-list">
                                <li>Length, width, and taper of the individual leaves</li>
                                <li>The angle at which the stipes collectively bends downwards due to gravity</li>
                                <li>How much each pinna fans out and inwards towards the apex of the leaf</li>
                                <li>Length, width, and bend of the stem</li>
                            </ul>
                            <div className='terrarium-video-three'>
                                <iframe src="https://www.youtube.com/embed/PZOc5mBlcqc?si=upOV5mnASHppP8Yc" width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <PageEnd />
        </div>
    )
}

export default ProceduralTerrariums