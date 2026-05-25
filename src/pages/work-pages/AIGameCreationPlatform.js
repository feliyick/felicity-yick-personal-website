import '../../styles/work-page-styles/WorkPage.scss'
import Navbar from '../../components/Navbar'
import PageEnd from '../PageEnd'
import { Fade, Bounce } from 'react-awesome-reveal'

const AIGameCreationPlatform = () => {
    return (
        <div className="WorkPage">
            <Navbar />
            <div className='work-content'>
                <div className='intro-row'>
                    <div className='work-left-col'>
                        <div className='work-top-row'>
                            <Fade cascade><div className='project-name'>AI-Powered Game Creation Platform</div></Fade>
                        </div>
                        <div className='role-line'>Meta Reality Labs · Senior Technical Artist (IC5) · AI-native technical art pod</div>
                        <Bounce cascade>
                            <div className='tags'>
                                <div className='tag'>LLM Orchestration</div>
                                <div className='tag'>AI Tooling</div>
                                <div className='tag'>Experimentation</div>
                                <div className='tag'>Mobile</div>
                            </div>
                        </Bounce>
                    </div>
                    <div className='work-right-col'>
                        Within a small pod of technical artists operating in an explicitly AI-native way, we set
                        out to build a fundamentally different approach to game creation for mobile — moving away
                        from traditional 3D editors entirely in favor of a platform where human creators
                        collaborate with AI agents to build games across a wide range, from simple arcade games
                        to idle games to open-world experiences, regardless of technical background.
                    </div>
                </div>
            </div>

            <div className='work-details'>
                <div className='work-section'>
                    <div className='work-section-title'>Platform Architecture</div>
                    <ul>
                        <li>Architected new constructs on top of raw LLM inference to make the AI a more capable and reliable creative partner.</li>
                        <li>Built a skills system and a novel orchestration technique enabling the LLM to build mobile games rapidly, with taste, and in genuine collaboration with the human creator.</li>
                        <li>New constructs improved the model's context management, spatial awareness, and ability to proactively suggest and build creation tools as the project evolved.</li>
                        <li>System could flag issues and drift before they compounded, keeping long-form game builds coherent over time.</li>
                        <li>Supported in-game spatial editing — creators could place and manipulate objects directly inside a running experience, with changes persisted as actual source code updates.</li>
                    </ul>
                </div>

                <div className='work-section'>
                    <div className='work-section-title'>Experimentation Infrastructure</div>
                    <ul>
                        <li>Designed and implemented an A/B testing framework integrated with an LLM-based experimentation platform, giving the team systematic infrastructure to measure pipeline performance and validate features.</li>
                        <li>Authored the team's internal experiments guide, establishing shared practices for designing, running, and interpreting experiments across the pipeline.</li>
                    </ul>
                </div>
            </div>
            <PageEnd />
        </div>
    )
}

export default AIGameCreationPlatform
