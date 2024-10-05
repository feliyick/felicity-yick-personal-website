import '../../styles/project-page-styles/TinyTavern.scss'
import Navbar from '../../components/Navbar'
import PageEnd from '../PageEnd'
import {Fade, Bounce} from 'react-reveal'


const TinyTavern = () => {
    return(
        <div className='TinyTavern'>
            <Navbar/>
            <div className='tavern-content'>
                <div className='intro-row'>
                    <div className='tavern-left-col'>
                        <Fade cascade><div className='project-name'>Tiny Tavern</div></Fade>
                        <div className='responsible-for'>Responsible for all assets and environment design.</div>
                        <Bounce cascade>
                        <div className='tags'>
                            <div className='tag'>ZBrush</div>
                            <div className='tag'>Autodesk Maya</div>
                            <div className='tag'>Substance Painter</div>
                            <div className='tag'>Arnold</div>
                        </div>
                        </Bounce>
                    </div>
                    <div className='tavern-right-col'>
                        Environment model of an original concept tiny tavern. Inspired by a plethora of pirate and magic-themed concept art to best evoke a mysterious tavern.
                    </div>
                </div>
                
            </div>
            <div className='tavern-one'></div> 
            <div className='tavern-two'></div>
            <PageEnd/>
        </div>
    )
}

export default TinyTavern