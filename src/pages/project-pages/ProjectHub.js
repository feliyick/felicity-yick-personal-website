import '../../styles/project-page-styles/ProjectHub.scss'
import GraphicsProjects from "../GraphicsProjects"
import ArtProjects from "../ArtProjects"
import TechProjects from "../TechProjects"
import Navbar from '../../components/Navbar'
import PageEnd from '../PageEnd'

import {Fade as FadeRegular } from 'react-reveal';
import { Fade, Slide } from "react-awesome-reveal";

const ProjectHub = () => {
    return(
        <div className="ProjectHub"  id="projectstop">
            <Navbar/>
            <FadeRegular bottom cascade>
                <div className='project-hub-header'>projects.</div>
            </FadeRegular>
            <div className='graphics-title'>
                <div className='graphics-header'>
                <Slide>
                    <div className='graphics-featured'>COMPUTER GRAPHICS</div>
                </Slide>
                </div>
                <Fade direction={"up"}>
                <p>Graphics Projects</p> 
                </Fade>
            </div>
            
            <div><GraphicsProjects start={0}/></div>

            <div className='tech-title'>
                <div className='tech-header'>
                <Slide>
                    <div className='tech-featured'>FULLSTACK</div>
                </Slide>
                </div>
                <Fade direction={"up"}>
                    <p>Tech Projects</p>
                </Fade>
            </div>
            <div id="tech-projects"><TechProjects start={0} end={2}/></div>

            
            <div className='arts-title'>
                <div className='arts-header'>
                <Slide>
                    <div className='arts-featured'>2D+3D</div>
                </Slide>
                </div>
                <Fade direction='up'>
                    <p>Art Projects</p>
                </Fade>
            </div>
            <div><ArtProjects start={0}/></div>
            <PageEnd/>
        </div>
    )
}

export default ProjectHub