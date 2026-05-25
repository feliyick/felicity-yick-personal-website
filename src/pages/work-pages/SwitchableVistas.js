import '../../styles/work-page-styles/WorkPage.scss'
import Navbar from '../../components/Navbar'
import PageEnd from '../PageEnd'
import { Fade, Bounce } from 'react-awesome-reveal'

import VistasFarField from '../../images/work/meta/switchable-vistas/vistas-far-field.png'
import VistasPocketContent from '../../images/work/meta/switchable-vistas/vistas-pocket-content.png'

const SwitchableVistas = () => {
    return (
        <div className="WorkPage">
            <Navbar />
            <div className='work-content'>
                <div className='intro-row'>
                    <div className='work-left-col'>
                        <div className='work-top-row'>
                            <Fade cascade><div className='project-name'>Immersive Homes — Switchable Vistas Pipeline</div></Fade>
                        </div>
                        <div className='role-line'>Meta Reality Labs · Senior Technical Artist (IC5) · Shipped Quest OS v81, Connect 2025</div>
                        <Bounce cascade>
                            <div className='tags'>
                                <div className='tag'>Python</div>
                                <div className='tag'>Unreal Engine</div>
                                <div className='tag'>USD</div>
                                <div className='tag'>Lightmap Baking</div>
                                <div className='tag'>Quest</div>
                            </div>
                        </Bounce>
                    </div>
                    <div className='work-right-col'>
                        As a pipeline and production TA, I helped architect and ship the Switchable Vistas system
                        for Meta's Quest OS home environment — the feature allowing users to swap between distinct
                        scenery themes (Central, Valley, Midnight, Oceanarium), each replacing not just the
                        far-field environment but the pocket content within the home footprint as well.
                    </div>
                </div>
            </div>

            <div className='work-details'>
                <div className='work-section'>
                    <div className='work-section-title'>Vista Themes</div>
                    <p>
                        Each vista swaps both the far-field scenery and the in-footprint pocket content,
                        giving the home environment a fully coherent reskin per theme.
                    </p>
                    <div className='work-image-row'>
                        <img src={VistasFarField} alt="Far-field scenery: Midnight, Valley, and Oceanarium vistas" className='work-image' />
                        <div className='work-image-caption'>Far-field scenery across the Midnight, Valley, and Oceanarium themes.</div>
                    </div>
                    <div className='work-image-row'>
                        <img src={VistasPocketContent} alt="Pocket content within the home footprint" className='work-image' />
                        <div className='work-image-caption'>Pocket content within the home footprint — material, lighting, and architectural variations across themes.</div>
                    </div>
                </div>

                <div className='work-section'>
                    <div className='work-section-title'>Pipeline</div>
                    <p>
                        I held the baton on the Switchable Vistas asset ingestion pipeline — work the team
                        had begun before I joined the effort, which I carried forward by hardening it,
                        productionising it, and growing its capability surface across LODs, multi-material
                        setups, texture atlases, and baked lightmaps.
                    </p>
                    <p>
                        The tooling is a collection of Unreal Engine plugins authored in a mix of Unreal
                        Blueprints and Python. It exposes artist-facing operations to bake, merge, and export
                        lightmaps for Meta's internal rendering engine, and interfaces with custom C++ Unreal
                        Engine source code (mostly authored by an external vendor, with some contributions of
                        my own) where the public Unreal API fell short — extending native engine behaviour to
                        fit our internal pipeline's needs.
                    </p>
                    <p>
                        As the main point of contact for the tool, I onboarded the internal artist team,
                        fellow technical artists, and external vendors onto its use. The pipeline was
                        subsequently standardised and adopted as shared infrastructure across both the
                        Immersive Homes product and the Events team (VR concert experiences), reducing
                        duplicated effort across two product lines.
                    </p>
                </div>

                <div className='work-section'>
                    <div className='work-section-title'>Lightmap Baking</div>
                    <p>
                        Tuned the lightmap baking workflow to meet the performance and quality constraints of
                        standalone VR hardware — balancing bake quality against atlas size, memory budget, and
                        runtime sample cost for the Quest target.
                    </p>
                </div>

                <div className='work-section'>
                    <div className='work-section-title'>Cross-Team Collaboration</div>
                    <p>
                        The work required close coordination with OS engineering, MHE engineering, UX design,
                        and fellow technical artists to reconcile technical constraints with creative intent
                        at each stage of the pipeline.
                    </p>
                </div>
            </div>
            <PageEnd />
        </div>
    )
}

export default SwitchableVistas
