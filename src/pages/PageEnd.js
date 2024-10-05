import '../styles/PageEnd.scss'
import Resume from '../pdfs/FelicityYickResume2021.pdf'
import {Zoom, Fade} from "react-awesome-reveal"

const PageEnd = () => {

    return (
        <div className="Page-End">
        <Zoom duration={1000}>
            <div className="socials">
                <a href="https://www.linkedin.com/in/felicity-yick/" class="linkedin" target="_blank" rel="noreferrer"> L</a>
                <a href="https://github.com/feliyick" class="github" target="_blank" rel="noreferrer"> G</a>
                <a href="mailto:felicityyick@gmail.com" class="email-link" target="_blank" rel="noreferrer"> M</a>
                <a href={Resume} class="resume" target="_blank" rel="noreferrer"> R</a>
            </div>
        </Zoom>
        <Fade direction="up">
            <h3>Built from Scratch | Lots of Love, Felicity Yick | 2022</h3>
        </Fade>
        </div>
    )
}

export default PageEnd