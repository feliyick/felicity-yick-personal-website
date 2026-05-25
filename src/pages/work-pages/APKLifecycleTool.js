import '../../styles/work-page-styles/WorkPage.scss'
import Navbar from '../../components/Navbar'
import PageEnd from '../PageEnd'
import { Fade, Bounce } from 'react-awesome-reveal'

const APKLifecycleTool = () => {
    return (
        <div className="WorkPage">
            <Navbar />
            <div className='work-content'>
                <div className='intro-row'>
                    <div className='work-left-col'>
                        <div className='work-top-row'>
                            <Fade cascade><div className='project-name'>APK Lifecycle Tool</div></Fade>
                        </div>
                        <div className='role-line'>Meta Reality Labs · Senior Technical Artist (IC5) · Internal developer tooling</div>
                        <Bounce cascade>
                            <div className='tags'>
                                <div className='tag'>Python</div>
                                <div className='tag'>GUI</div>
                                <div className='tag'>Developer Tooling</div>
                                <div className='tag'>VR</div>
                            </div>
                        </Bounce>
                    </div>
                    <div className='work-right-col'>
                        Developers building VR experiences had to move through multiple disconnected tools to
                        build, install, test, and publish mobile APKs — a fragmented process that added
                        meaningful friction to every iteration cycle.
                    </div>
                </div>
            </div>

            <div className='work-details'>
                <div className='work-section'>
                    <div className='work-section-title'>The Tool</div>
                    <p>
                        I designed and built a unified GUI application that wrapped the entire APK lifecycle in
                        a single interface, eliminating the context-switching across the previously disconnected
                        toolchain. The tool consolidated what had been a multi-step manual process into a
                        cohesive, end-to-end workflow.
                    </p>
                </div>
            </div>
            <PageEnd />
        </div>
    )
}

export default APKLifecycleTool
