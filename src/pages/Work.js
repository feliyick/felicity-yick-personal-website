import '../styles/Work.scss'
import companiesInfo from '../companies-info'
import CompanyCard from '../components/CompanyCard'
import { Fade } from 'react-awesome-reveal'

const Work = ({ start, end }) => {
    const entries = end ? companiesInfo.slice(start, end) : companiesInfo.slice(start)

    return (
        <div className="work-container">
            <div className='work-project-cards'>
                {entries.map((c, i) => (
                    <Fade direction="up" duration={1000} key={i}>
                        <CompanyCard
                            images={c.images}
                            company={c.company}
                            role={c.role}
                            tagline={c.tagline}
                            page={c.page}
                        />
                    </Fade>
                ))}
            </div>
        </div>
    )
}

export default Work
