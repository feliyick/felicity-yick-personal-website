import '../../styles/work-page-styles/MetaHub.scss'
import Navbar from '../../components/Navbar'
import PageEnd from '../PageEnd'
import metaWorkInfo from '../../meta-work-info'
import { useNavigate } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'

const MetaHub = () => {
    const navigate = useNavigate()

    return (
        <div className="MetaHub">
            <Navbar />
            <div className='meta-hub-content'>
                <div className='meta-hub-header'>
                    <Fade direction="down">
                        <div className='meta-hub-company'>Meta Reality Labs</div>
                    </Fade>
                    <Fade direction="up">
                        <div className='meta-hub-subtitle'>Senior Technical Artist (IC5) · Immersive Homes, Hyperscape, AI tooling</div>
                    </Fade>
                </div>

                <div className='meta-hub-experiences'>
                    {metaWorkInfo.map((entry, i) => (
                        <Fade direction="up" duration={1000} key={i}>
                            <div className='experience-block' onClick={() => navigate(entry.page)}>
                                <div className='experience-images'>
                                    {entry.images.map((src, j) => (
                                        <div
                                            key={j}
                                            className='experience-image'
                                            style={{ backgroundImage: `url(${src})` }}
                                        />
                                    ))}
                                </div>
                                <div className='experience-meta'>
                                    <div className='experience-company-role'>
                                        <span className='experience-company'>{entry.company}</span>
                                        <span className='experience-role'>{entry.role}</span>
                                    </div>
                                    <div className='experience-title'>{entry.title}</div>
                                    <div className='experience-blurb'>{entry.blurb}</div>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>
            <PageEnd />
        </div>
    )
}

export default MetaHub
