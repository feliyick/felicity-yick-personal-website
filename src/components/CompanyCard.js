import '../styles/CompanyCard.scss'
import { useNavigate } from 'react-router-dom'

const CompanyCard = ({ images, company, role, tagline, page }) => {
    const navigate = useNavigate()

    return (
        <div className='CompanyCard' onClick={() => navigate(page)}>
            <div className='company-images'>
                {images.map((src, i) => (
                    <div
                        key={i}
                        className='company-image'
                        style={{ backgroundImage: `url(${src})` }}
                    />
                ))}
            </div>
            <div className='company-meta'>
                <div className='company-name'>{company}</div>
                {role && <div className='company-role'>{role}</div>}
                {tagline && <div className='company-tagline'>{tagline}</div>}
            </div>
        </div>
    )
}

export default CompanyCard
