import '../styles/ArtProjectCard.scss'
import { useLocation } from 'react-router-dom';
import background from '../images/PaintBrushBroad.png';
import { useNavigate } from 'react-router-dom';

const ArtProjectCard = ({image, title, desc, tags, page}) => {

    const navigate = useNavigate();
    return(

        <div className='ArtProjectCard' onClick= {_ => navigate(page)} >
        
            <div className='art-preview-image'style={{backgroundImage:`url(${image})`}}></div>
            <div className='art-project-info'>
                <div className='art-project-title'>{title}</div>
                <div className='art-project-desc'>{desc}</div>
                <div className='art-tags'>
                {tags ?
					tags.map((tag, i) => 
                    <div className='art-tag'>{tag}</div>)
					: <></>
				}
                </div>
            </div>
            
        </div>
    )
}

export default ArtProjectCard