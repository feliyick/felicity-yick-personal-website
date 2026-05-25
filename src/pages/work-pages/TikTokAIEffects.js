import '../../styles/work-page-styles/WorkPage.scss'
import Navbar from '../../components/Navbar'
import PageEnd from '../PageEnd'
import { Fade, Bounce } from 'react-awesome-reveal'

const TikTokAIEffects = () => {
    return (
        <div className="WorkPage">
            <Navbar />
            <div className='work-content'>
                <div className='intro-row'>
                    <div className='work-left-col'>
                        <div className='work-top-row'>
                            <Fade cascade><div className='project-name'>AI Generated Effects — Effect House</div></Fade>
                        </div>
                        <div className='role-line'>TikTok · Mid-Level AR Interactive Engineer · "Create with AI" platform feature</div>
                        <Bounce cascade>
                            <div className='tags'>
                                <div className='tag'>TypeScript</div>
                                <div className='tag'>LLM Tooling</div>
                                <div className='tag'>Visual Scripting</div>
                                <div className='tag'>Effect House</div>
                                <div className='tag'>Mobile AR</div>
                            </div>
                        </Bounce>
                    </div>
                    <div className='work-right-col'>
                        Core engineer on Effect House's "Create with AI" — a platform feature enabling
                        AI-assisted generation of AR effects for first-time creators. Designed and built
                        a modular TypeScript framework that auto-generates visual-scripting logic to drive
                        gameplay flow at scale.
                    </div>
                </div>
            </div>

            <div className='work-details'>
                <div className='work-section'>
                    <div className='work-section-title'>Impact</div>
                    <ul>
                        <li><strong>10K+ AI-generated effects</strong> supported on launch, primarily authored by first-time creators.</li>
                        <li>Materially reduced creator onboarding friction by lowering the technical floor required to ship a functioning AR effect.</li>
                    </ul>
                </div>

                <div className='work-section'>
                    <div className='work-section-title'>Coming soon</div>
                    <p>
                        Deeper writeup on framework architecture, prompt-to-visual-script auto-generation,
                        and evaluation pipeline coming soon.
                    </p>
                </div>
            </div>
            <PageEnd />
        </div>
    )
}

export default TikTokAIEffects
