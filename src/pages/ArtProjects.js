import '../styles/ArtProjects.scss'
import ArtProjectCard from '../components/ArtProjectCard'
import artProjectInfo from '../art-project-info'

import {Fade} from 'react-reveal'; 


const ArtProjects = ({start, end}) => {

    return (
        <div className="arts-container">

            <div className='arts-project-cards'>
                {artProjectInfo && end ?
					artProjectInfo.slice(start, end).map((pr, i) => 
                    <Fade bottom duration={1000}>
                       <ArtProjectCard
                           image={pr.image}
                           title={pr.title}
                           desc={pr.description}
                           tags={pr.tags}
                           page={pr.page}
                       /></Fade>)
					: artProjectInfo.slice(start).map((pr, i) => 
                    <Fade bottom duration={1000}>
                       <ArtProjectCard
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

export default ArtProjects