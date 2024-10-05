import '../../styles/project-page-styles/Klaus.scss'
import Navbar from '../../components/Navbar'
import PageEnd from '../PageEnd'

import {Fade, Bounce} from 'react-reveal'

const Klaus = () => {
    return(
        <div className='Klaus'>
            <Navbar/>
            <div className='klaus-content'>
                <div className='intro-row'>
                    <div className='klaus-left-col'>
                        <Fade bottom cascade><div className='project-name'>Klaus</div></Fade>
                        <div className='responsible-for'>Responsible for the whole sculpt. Credit to Netflix Animation for the character design.</div>
                        <Bounce cascade>
                        <div className='tags'>
                            <div className='tag'>ZBrush</div>
                            <div className='tag'>Autodesk Maya</div>
                            <div className='tag'>Arnold</div>
                        </div>
                        </Bounce>
                    </div>
                    <div className='klaus-right-col'>
                        A ZBrush sculpt of Klaus from 
                        <a href="https://en.wikipedia.org/wiki/Klaus_(film)" class="klaus-wiki" target="_blank" rel="noreferrer"> 'Klaus'</a>! Loved this movie :) This was my first sculpt ever; Was really excited to learn about the software. Sculpted initially in T-Pose, then used the rigging tool to pose.
                    </div>
                </div>
                <div className='klaus-background'>
                    <div className='klaus-video'>
                        <iframe src="https://www.youtube.com/embed/WOw49N6Rfek?si=4tZqi7TP1hz1vCbL" width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                
            </div>
            <div className='klaus-renders'>
                <div id='klaus-one'></div>
                <div id='klaus-two'></div>
                <div id='klaus-three'></div>
                <div id='klaus-four'></div>
            </div>
            <PageEnd/>
        </div>
    )
}

export default Klaus