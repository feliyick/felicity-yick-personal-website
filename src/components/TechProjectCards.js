import '../styles/TechProjectCard.scss'
import { useLocation } from 'react-router-dom';
import background from '../images/PaintBrushBroad.png';
import { useNavigate } from 'react-router-dom';

const TechProjectCard = ({image, title, desc, tags, page}) => {

    const navigate = useNavigate();
    return(

        <div className='TechProjectCard' onClick= {_ => navigate(page)} >
        
            <div className='tech-preview-image'style={{backgroundImage:`url(${image})`}}></div>
            <div className='tech-project-info'>
                <div className='tech-project-title'>{title}</div>
                <div className='tech-project-desc'>{desc}</div>
                <div className='tech-tags'>
                {tags ?
					tags.map((tag, i) => 
                    <div className='tech-tag'>{tag}</div>)
					: <></>
				}
                </div>
            </div>
            
        </div>
    )
}

export default TechProjectCard