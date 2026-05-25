import '../../styles/work-page-styles/WorkPage.scss'
import Navbar from '../../components/Navbar'
import PageEnd from '../PageEnd'
import { Fade, Bounce } from 'react-awesome-reveal'

const HyperscapePrototyping = () => {
    return (
        <div className="WorkPage">
            <Navbar />
            <div className='work-content'>
                <div className='intro-row'>
                    <div className='work-left-col'>
                        <div className='work-top-row'>
                            <Fade cascade><div className='project-name'>Immersive Homes — Hyperscape Prototyping</div></Fade>
                        </div>
                        <div className='role-line'>Meta Reality Labs · Senior Technical Artist (IC5) · Exploratory prototyping</div>
                        <Bounce cascade>
                            <div className='tags'>
                                <div className='tag'>3D Gaussian Splatting</div>
                                <div className='tag'>Radiance Fields</div>
                                <div className='tag'>Unreal Engine</div>
                                <div className='tag'>Python</div>
                                <div className='tag'>Quest</div>
                            </div>
                        </Bounce>
                    </div>
                    <div className='work-right-col'>
                        Hyperscape is Meta's product for capturing real-world environments as 3D Gaussian Splats
                        (radiance-field representations) for photoreal playback in VR. I prototyped its integration
                        into the Immersive Homes pipeline — building tooling to feed the splat reconstruction
                        pipeline from synthetic Unreal scenes, partnering with Hyperscape engineering on
                        runtime optimisation, and experimenting with post-training splat animation.
                    </div>
                </div>
            </div>

            <div className='work-details'>
                <div className='work-section'>
                    <div className='work-section-title'>Unreal-Driven Capture Pipeline</div>
                    <p>
                        Prototyped a pipeline for generating 3DGS training datasets directly from Unreal Engine
                        scenes — automating 360° panoramic plate captures alongside per-pixel spatial metadata
                        (depth, world position) and exporting the result in the format expected by the
                        Gaussian Splatting reconstruction pipeline. This let the team iterate on splat training
                        against fully controlled synthetic inputs rather than only real-world captures.
                    </p>
                </div>

                <div className='work-section'>
                    <div className='work-section-title'>Splat Optimisation for Standalone VR</div>
                    <p>
                        Worked alongside the Hyperscape engineering team to bring trained splat models within
                        the memory and frame-time budget of the Quest standalone runtime. Areas of focus included:
                    </p>
                    <ul>
                        <li>Gaussian pruning and densification strategies to balance visual fidelity against splat count.</li>
                        <li>Per-Gaussian attribute quantisation to reduce the on-device footprint.</li>
                        <li>LOD strategies for splat models, including view-dependent culling.</li>
                    </ul>
                </div>

                <div className='work-section'>
                    <div className='work-section-title'>Post-Training Splat Animation</div>
                    <p>
                        Explored animating splat models after training — moving beyond static scene playback:
                    </p>
                    <ul>
                        <li>
                            <strong>Rigid-body animation</strong> — applied scripted transforms to segmented
                            Gaussian clusters, driving sub-regions of the scene independently while preserving
                            the rest of the splat geometry.
                        </li>
                        <li>
                            <strong>Skeleton-bound deformation</strong> — bound splat groups to rigs to drive
                            character-style articulated motion on splat representations, testing how far the
                            representation could be pushed beyond static capture.
                        </li>
                    </ul>
                </div>
            </div>
            <PageEnd />
        </div>
    )
}

export default HyperscapePrototyping
