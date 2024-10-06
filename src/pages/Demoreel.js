import '../styles/Demoreel.scss'

import Fade from 'react-reveal/Fade'; 
import Slide from 'react-reveal/Slide';

const Demoreel = () => {
    return (
        <Fade bottom delay={300}>
        <div className="demoreel-container">
        <div>
            <Slide bottom>
                <div className='video'>
                    <iframe src="https://www.youtube.com/embed/-co7LpUisB0?si=zZkkDyviky1EqXjn" width="1280" height="720" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                </div>
            </Slide>
            </div>
        </div>
        </Fade>
    )
}

export default Demoreel