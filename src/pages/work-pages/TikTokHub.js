import '../../styles/work-page-styles/TikTokHub.scss'
import Navbar from '../../components/Navbar'
import PageEnd from '../PageEnd'
import { Fade } from 'react-awesome-reveal'

const TikTokHub = () => {
    return (
        <div className="TikTokHub">
            <Navbar />
            <div className='tiktok-hub-content'>
                <div className='tiktok-hub-header'>
                    <Fade direction="down">
                        <div className='tiktok-hub-company'>TikTok</div>
                    </Fade>
                    <Fade direction="up">
                        <div className='tiktok-hub-subtitle'>Technical Artist</div>
                    </Fade>
                </div>
                <Fade direction="up">
                    <div className='tiktok-hub-placeholder'>
                        Case studies coming soon.
                    </div>
                </Fade>
            </div>
            <PageEnd />
        </div>
    )
}

export default TikTokHub
