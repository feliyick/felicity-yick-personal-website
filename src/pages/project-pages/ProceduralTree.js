import '../../styles/project-page-styles/ProceduralTree.scss'
import Navbar from '../../components/Navbar'
import PageEnd from '../PageEnd'
import { Fade, Bounce } from 'react-reveal'

const ProceduralTree = () => {

    return (
        <div className="ProceduralTree">
            <Navbar />
            <div className='tree-content'>
                <div className='intro-row'>
                    <div className='tree-left-col'>
                        <div className='tree-top-row'>
                            <Fade cascade><div className='project-name'>Procedural Orange Tree</div></Fade>
                            <a href="https://github.com/feliyick/hw04-l-systems" class='tree-git-link' target="_blank" rel="noreferrer"> </a>
                        </div>

                        <div className='responsible-for'>Responsible for all code and .obj files.</div>
                        <Bounce cascade>
                            <div className='tags'>
                                <div className='tag'>WebGL</div>
                                <div className='tag'>Typescript</div>
                                <div className='tag'>L-Systems</div>
                                <div className='tag'>Autodesk Maya</div>
                            </div>
                        </Bounce>
                    </div>
                    <div className='tree-right-col'>
                        This is a procedural orange tree generator based on L-systems. I experimented with a variety of different grammar rules to give variety and to mimic the organic shape of orange trees. Users can manipulate the age of the tree,
                        number of iterations, and the number of oranges. The age slider simulates the transition between pink leaves to green leaves with oranges, as seen in nature.
                    </div>
                </div>



                <div className='tree-background'>

                    <div className='terrarium-details'>
                        <div className='terrarium-features'>
                            <div className='terrarium-features-title'>Demo</div>
                            <br />
                            Feel free to try out the project
                            <a href="https://feliyick.github.io/hw04-l-systems/" class="hyperlink" target="_blank" rel="noreferrer"> here. </a>
                            <br></br>
                            <br></br>
                            <div className='.terrarium-video-one'>
                                <iframe src="https://www.youtube.com/embed/NfBCGw2VdVs?si=kR0hixpyx2ltizJ2" width="1000" height="600" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>

                    <a href="https://feliyick.github.io/hw04-l-systems/" class='hyperlink' target="_blank" rel="noreferrer"> here!</a>


                </div>
            </div>
            <div className='tree-details'>
                {/*  GRAMMARS AND TURTLES */}
                <div className='grammars'>
                    <h1 className='grammars-title'>GUI and Features</h1>
                    <br></br>
                    <br></br>
                    <ul class="terrarium-feature-list">
                        <li> Utilised a custom L System Axiom to generate the main trunk, smaller branches, leaves. The axiom also includes rotation of the leaves.</li>
                        <li> Edit the number of iterations of the grammar from a range of 1 to 12. The user can see the tree grow from a little sapling to a full tree.</li>
                        <li> The colour of the tree (from more spring time to a Wisteria colour palette). For both the branch and leaf meshes, I lerped betwen two colour palettes.</li>
                        <li> The maximum angle at which the branches can rotate.</li>
                        <li> I added an FBM sky in the flat shader, coloured with a mixed colour palette. The 'clouds' move along the x and y axis very gradually.</li>
                    </ul>
                    <div className='grammars-details'>
                    </div>
                </div>
            </div>
            <PageEnd />
        </div>
    )
}

export default ProceduralTree