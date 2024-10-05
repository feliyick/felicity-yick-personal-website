import '../styles/GraphicsProjects.scss'
import ProjectCard from '../components/ProjectCard'
import graphicsProjectInfo from '../graphics-project-info'

import Fade from 'react-reveal/Fade'; 
import Slide from 'react-reveal/Slide';

// import { Fade, Slide } from "react-awesome-reveal";


const GraphicsProjects = ({start, end}) => {
    return (
        <div className="graphics-container">

            <div className='project-cards'>
                {graphicsProjectInfo && end ?
					graphicsProjectInfo.slice(start, end).map((pr, i) => 
                       <Fade bottom duration={1000}>
                       <ProjectCard
                           image={pr.image}
                           title={pr.title}
                           desc={pr.description}
                           tags={pr.tags}
                           page={pr.page}
                       /> </Fade>)
					: graphicsProjectInfo.slice(start).map((pr, i) => 
                    <Fade bottom duration={1000}>
                       <ProjectCard
                           image={pr.image}
                           title={pr.title}
                           desc={pr.description}
                           tags={pr.tags}
                           page={pr.page}
                       /> </Fade>)
				}
            </div>
        </div>
    )
}

export default GraphicsProjects