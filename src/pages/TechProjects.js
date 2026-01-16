import '../styles/TechProjects.scss'
import techProjectInfo from '../tech-project-info'
import TechProjectCard from '../components/TechProjectCards'
import { Fade } from 'react-awesome-reveal'; 

const TechProjects = ({start, end}) => {

    return (
        <div className="tech-container">

            <div className='tech-project-cards'>
                {techProjectInfo && end ?
					techProjectInfo.slice(start, end).map((pr, i) => 
                    <Fade direction="up" duration={1000}>
                       <TechProjectCard
                           image={pr.image}
                           title={pr.title}
                           desc={pr.description}
                           tags={pr.tags}
                           page={pr.page}
                       /> </Fade>)
					: techProjectInfo.slice(start).map((pr, i) => 
                    <Fade direction="up" duration={1000}>
                       <TechProjectCard
                           image={pr.image}
                           title={pr.title}
                           desc={pr.description}
                           tags={pr.tags}
                           page={pr.page}
                       /></Fade>)
				}
            </div>
        </div>
    )
}

export default TechProjects