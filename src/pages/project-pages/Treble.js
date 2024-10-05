import '../../styles/project-page-styles/Treble.scss'
import Navbar from '../../components/Navbar'
import PageEnd from '../PageEnd'
import {Fade, Bounce} from 'react-reveal'

const Treble = () => {

    return (
        <div className="Treble">
            <Navbar />
            <div className='treble-content'>
                <div className='intro-row'>
                    <div className='treble-left-col'>
                        <div className='treble-top-row'>
                            <Fade cascade><div className='project-name'>treble</div></Fade>
                            <a href="https://github.com/amyshennn/CIS450-Project" class='tree-git-link' target="_blank" rel="noreferrer"> </a>
                        </div>
                        
                        <div className='responsible-for'>Responsible for Figma UI/UX, Search functionality and Results, Grammy Awards. Incollaboration with Amy Shen, Bryan Nguyen, Andrew Song.</div>
                        <Bounce cascade>
                        <div className='tags'>
                            <div className='tag'>ReactJs</div>
                            <div className='tag'>HTML/CSS</div>
                            <div className='tag'>Fullstack</div>
                            <div className='tag'>MySQL</div>
                            <div className='tag'>Figma</div>
                        </div>
                        </Bounce>
                    </div>
                    <div className='treble-right-col'>
                    This webapp will analyze Spotify songs, song lyrics, artists, and Grammy awards.
        Users are able to search for particular songs, lyrics, artists, albums, as well as filter through
        Grammy Award data by year and category. Featuring a song and artist recomendation system.
        A four-person team project. The database has since been terminated.
                    </div>
                </div>
                <div className='treble-background'>
                    <div className="treble-video">
                        <iframe  class="treble-demo-video" src="https://drive.google.com/file/d/1hgVzRPwRKl6K4gKwfRWAHKlZjRhP5V3q/preview" allow="autoplay"></iframe>
                    </div>
                </div>
            </div>
            <div className='treble-details'>
                {/*  TREBLE FIGMA DESIGN */}
                <div className='treble-figma'>
                    <h1 className='treble-figma-title'>Figma UI/UX</h1>

                    <div className='treble-figma-details'>
                        <iframe class="treble-figma-design" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FQ4lWNLF7X9c0xCrQyIoK2z%2FMusic-Web-App%3Fnode-id%3D0%253A1" allowfullscreen></iframe>
                    </div>
                </div>

                {/*  TREBLE PAPER */}
                <div className='treble-paper'>
                    <h1 className='treble-paper-title'>Project Paper</h1>
                    <div className='treble-paper-details'>

                    </div>
                </div>
            </div>
            <PageEnd />
        </div>
    )
}

export default Treble