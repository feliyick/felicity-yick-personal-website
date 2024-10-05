import '../styles/ProjectCard.scss'
import { useLocation } from 'react-router-dom';
import background from '../images/PaintBrushBroad.png';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({image, title, desc, tags, page}) => {
    const navigate = useNavigate();

    return(
        <div className='ProjectCard' onClick= {_ => navigate(page)} >
        
            <div className='preview-image' style={{backgroundImage:`url(${image})`}}></div>
            <div className='project-info'>
                <div className='project-title'>{title}</div>
                <div className='project-desc'>{desc}</div>
                <div className='tags'>
                {tags ?
					tags.map((tag, i) => 
                    <div className='tag'>{tag}</div>)
					: <></>
				}
                </div>
            </div>
            
        </div>
    )
}

export default ProjectCard