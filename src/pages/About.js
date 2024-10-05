import '../styles/About.scss';
import resume from '../pdfs/FelicityYickResume2021.pdf'

import {Fade, Slide} from "react-awesome-reveal";
import {Slide as SlideNormal} from "react-reveal"

const About = () => {
    return (
        <div className="About">
        
            <div className="info">
                <div className="info-top">
                <Fade direction="down">
                    <div className="about-me">About Me</div>
                </Fade>
                <Slide direction="right">
                    <p><a href={resume} class="resume-button" target="_blank" rel="noreferrer"> resume. </a></p>
                </Slide>
                </div>
                
                <Slide direction="left" duration={2000}>
                <div className="about-desc">Hello! Thanks for stopping by! I’m a technical artist currently based in San Francisco, CA.
                    <br></br>
                    <br></br>
                    I’m passionate about building tools that bridge the gap between users, creatives, and business goals. Getting to know the creatives and users, hearing their feedback, and understanding their needs is what drives me to make intuitive and impactful solutions.
                    <br></br>
                    <br></br>
                    Equally as important, I love to paint, cook, and keeping a full Google calendar of exciting things to do in the city and hangouts with friends. 
                    <br></br>
                    <br></br>
                    Feel free to reach out at
                    <a href="mailto:felicityyick@gmail.com" class="email">  felicityyick@gmail.com </a>. 
                    <br></br>
                    <br></br>
                    ˚ʚ♡ɞ˚⋆˚✿˖°
                </div>
                </Slide>
            </div>
            <SlideNormal top>
            <div className='TinTin'></div>
            </SlideNormal>
        </div>
    )
}

export default About