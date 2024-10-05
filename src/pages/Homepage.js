import React from 'react'
import Navbar from '../components/Navbar';
import '../styles/Homepage.scss'
import ArtProjects from './ArtProjects';
import Demoreel from './Demoreel';
import GraphicsProjects from './GraphicsProjects';
import About from './About';
import PageEnd from './PageEnd';
import { useNavigate } from 'react-router-dom';
import TechProjects from './TechProjects';
import ProfileImage from './../images/profile-image.jpg';
import Resume from '../pdfs/FelicityYickResume2024.pdf'

// ANIMATIONS
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
// import Fade from 'react-reveal/Fade'; 
// import Slide from 'react-reveal/Slide';
import { Fade, Slide } from "react-awesome-reveal";

export default function Homepage() {
    const navigate = useNavigate();
    return (

        <div className='Homepage'>
            <Navbar />

            <div className="hero" id="pagetop">
                <div className="content">
                    <div className="homepage-left">
                        <Fade direction={"up"}>
                            <h2>Hello! It's me</h2>
                            <div className="my-name">
                                <h1>Felicity</h1>
                                <h1 id="fullstop">₊˚⊹♡</h1>
                            </div>

                            <div className='mini-bio'>
                                <Slide>
                                    <p>
                                        <br></br>
                                        AR Interactive Engineer @ 
                                        <a href='https://www.tiktok.com/' class="hyperlink" target="_blank" rel="noreferrer">TikTok.</a>
                                        <br></br>
                                        <br></br>
                                        Creative AR/VR developer with a passion for leading teams and delivering high-quality, immersive experiences for artists and users. Strong background in AI-driven tools, scripting, and interactive design.
                                    </p>
                                    <br></br>
                                    <br></br>
                                    <p><a href={Resume} class="resume-button" target="_blank" rel="noreferrer"> resume. </a></p>

                                </Slide>
                            </div>

                        </Fade>
                    </div>
                    <div className="homepage-right">
                        <Slide direction={"right"}>
                            <img src={ProfileImage} alt="Profile" className="profile-image" />
                        </Slide>
                    </div>


                </div>
                <div className='arrow-anim'></div>
            </div>
            <div id="demoreel"><Demoreel /></div>
            <div id="projects"></div>

            <div className='graphics-title'>
                <div className='graphics-header'>
                    <Slide duration={1500}>
                        <div className='graphics-featured'>FEATURED</div>
                    </Slide>
                    <Slide direction={"right"} duration={1500}>
                        <div className='graphics-see-more' onClick={_ => navigate("/projects")}>SEE MORE +</div>
                    </Slide>
                </div>
                <Fade direction={"up"} duration={1500}>
                    <p>Graphics Projects</p>
                </Fade>
            </div>
            <GraphicsProjects start={0} end={2} />



            <div className='tech-title'>
                <div className='tech-header'>
                    <Slide duration={1500}>
                        <div className='tech-featured'>FEATURED</div>
                    </Slide>
                    <Slide direction={"right"} duration={1500}>
                        <div className='tech-see-more' onClick={_ => navigate("/projects#tech-projects")}>SEE MORE +</div>
                    </Slide>
                </div>
                <Fade direction={"up"} duration={1500}>
                    <p>Tech Projects</p>
                </Fade>
            </div>
            <div id="tech-projects"><TechProjects start={0} end={2} /></div>


            <div className='arts-title'>
                <div className='arts-header'>
                    <Slide duration={1500}>
                        <div className='arts-featured'>FEATURED</div>
                    </Slide>
                    <Slide direction={"right"} duration={1500}>
                        <div className='arts-see-more' onClick={_ => navigate("/projects#arts-projects")}>SEE MORE +</div>
                    </Slide>
                </div>
                <Fade direction='up' duration={1500}>
                    <p>3D Projects</p>
                </Fade>
            </div>
            <div id="arts-projects"><ArtProjects start={0} end={2} /></div>
            <div id="about"><About /></div>
            <PageEnd />
        </div>


    )
}
