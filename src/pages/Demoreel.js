import '../styles/Demoreel.scss'

import { Fade } from 'react-awesome-reveal';

const Demoreel = () => {
    return (
        <Fade direction="up" delay={300}>
        <div className="demoreel-container">
            <div className='video'>
                <iframe src="https://www.youtube.com/embed/-co7LpUisB0?si=zZkkDyviky1EqXjn" width="1280" height="720" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Demo Reel"></iframe>
            </div>
        </div>
        </Fade>
    )
}

export default Demoreel