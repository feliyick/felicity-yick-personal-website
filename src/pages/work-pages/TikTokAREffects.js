import '../../styles/work-page-styles/WorkPage.scss'
import '../../styles/work-page-styles/TikTokAREffects.scss'
import Navbar from '../../components/Navbar'
import PageEnd from '../PageEnd'
import { Fade, Bounce } from 'react-awesome-reveal'

import Effect1 from '../../images/TikTokEffects/web/tiktok-effect1.mp4'
import Effect2 from '../../images/TikTokEffects/web/tiktok-effect2.mp4'
import Effect3 from '../../images/TikTokEffects/web/tiktok-effect3.mp4'
import Effect4 from '../../images/TikTokEffects/web/tiktok-effect4.mp4'
import Effect5 from '../../images/TikTokEffects/web/tiktok-effect5.mp4'
import Effect6 from '../../images/TikTokEffects/web/tiktok-effect6.mp4'
import Effect7 from '../../images/TikTokEffects/web/tiktok-effect7.mp4'
import Effect8 from '../../images/TikTokEffects/web/tiktok-effect8.mp4'
import MetGalaEffect from '../../images/TikTokEffects/web/tiktok-effect9.mp4'

const effects = [Effect1, Effect2, Effect3, Effect4, Effect5, Effect6, Effect7, Effect8]

const TikTokAREffects = () => {
    return (
        <div className="WorkPage">
            <Navbar />
            <div className='work-content'>
                <div className='intro-row'>
                    <div className='work-left-col'>
                        <div className='work-top-row'>
                            <Fade cascade><div className='project-name'>AR Effect Production — Effect House</div></Fade>
                        </div>
                        <div className='role-line'>TikTok · Mid-Level AR Interactive Engineer · Aug 2022 – Dec 2024</div>
                        <Bounce cascade>
                            <div className='tags'>
                                <div className='tag'>Lua</div>
                                <div className='tag'>TypeScript</div>
                                <div className='tag'>GLSL</div>
                                <div className='tag'>Effect House</div>
                                <div className='tag'>Mobile AR</div>
                            </div>
                        </Bounce>
                    </div>
                    <div className='work-right-col'>
                        Embedded technical artist on rotating production pods at TikTok Effect House — the
                        sole TA per pod, working alongside fellow technical artists across the wider team.
                        Owned the technical implementation of AR effects end-to-end on each pod — translating
                        the PM and creative team's vision into shippable Lua / TypeScript / shader code on
                        TikTok's internal AR engine. Over two and a half years, shipped 50+ effects spanning
                        shader R&amp;D, ML-driven transformations, branded campaigns, and game mechanics —
                        reaching audiences from hundreds of thousands to multi-millions per effect.
                    </div>
                </div>
            </div>

            <div className='work-details'>
                <div className='work-section'>
                    <div className='work-section-title'>Production Model</div>
                    <p>
                        Each production cycle (~monthly cadence) assembled a fresh pod: product manager,
                        2D/3D artists, QA, and one technical artist — me, for the effects on my pods. I
                        owned every line of effect logic and shader code on those effects, working tightly
                        with the artists on look-dev and the PM on creator and platform constraints. Most
                        effects shipped end-to-end through Effect House's internal AR runtime; a subset
                        routed through server-side ML inference for image-to-image transformations.
                    </p>
                </div>

                <div className='work-section'>
                    <div className='work-section-title'>Technical Scope</div>
                    <ul>
                        <li><strong>Shader R&amp;D</strong> — authored single- and multi-pass shaders for stylised look-dev, distortion, and post-processing chains.</li>
                        <li><strong>3D math</strong> — vector / matrix work for tracking, world-space placement, and procedural animation tied to facial landmarks and device IMU.</li>
                        <li><strong>Object segmentation</strong> — leveraged on-device ML segmentation (face, hair, body, scene) to drive selective transformations and compositing.</li>
                        <li><strong>Server-rendered ML effects</strong> — designed the round trip where the client captures the user's input image, transmits it to a model inference endpoint, and composites the returned result back into the live AR scene.</li>
                        <li><strong>GAN-driven transformations</strong> — facial aging / regression and stylised identity transforms (vampire, supernatural variants) via pretrained generative adversarial networks; coordinated client-side preprocessing with server-side inference.</li>
                        <li><strong>Game mechanics</strong> — physics-driven gameplay logic, scoring, and state machines for gamified effects with progression systems.</li>
                    </ul>
                </div>

                <div className='work-section'>
                    <div className='work-section-title'>Branded Partnerships</div>
                    <ul>
                        <li><strong>DreamWorks — Puss in Boots: The Last Wish</strong> — worked directly with the DreamWorks team to ship a promotional AR effect timed to the film's release.</li>
                        <li><strong>The Met Gala 2024</strong> — shipped a custom AR effect for the Met Gala campaign in coordination with the brand team on art direction and visual fidelity.</li>
                    </ul>
                </div>

                <div className='work-section'>
                    <div className='work-section-title'>Featured Effect — The Met Gala 2024</div>
                    <div className='featured-effect'>
                        <video
                            className='featured-effect-video'
                            src={MetGalaEffect}
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                        <div className='featured-effect-details'>
                            <p>
                                Branded effect built in partnership with the Met Gala campaign team. Users
                                point their camera at the ground to spawn a swarm of butterflies that flock
                                naturally around the scene, complemented by glittering particle accents.
                            </p>
                            <p className='featured-effect-techniques-label'>Techniques used:</p>
                            <ul className='featured-effect-techniques'>
                                <li><strong>AR plane detection</strong> — world-space horizontal-plane tracking to lock content to the detected ground plane.</li>
                                <li><strong>Boids-style flocking</strong> — Reynolds boids algorithm (separation, alignment, cohesion) for emergent butterfly swarm behaviour.</li>
                                <li><strong>Particle systems</strong> — layered emitters for sparkle, dust, and ambient glow accents.</li>
                                <li><strong>Custom scripting</strong> — orchestrated trigger timing, plane-anchor lifecycle, and interaction logic across the effect's full runtime.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='work-section'>
                    <div className='work-section-title'>Selected Effects</div>
                    <div className='tiktok-effects-grid'>
                        {effects.map((src, i) => (
                            <video
                                key={i}
                                className='tiktok-effect-video'
                                src={src}
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        ))}
                    </div>
                </div>

                <div className='work-section'>
                    <div className='work-section-title'>Reach &amp; Impact</div>
                    <ul>
                        <li><strong>50+ effects shipped</strong> across organic and branded campaigns.</li>
                        <li>Reached <strong>10M+ users globally</strong>; top effects drove multi-million view counts.</li>
                        <li>DRI for <strong>new-capability effect production</strong> — coordinated with the other technical artists on the team to scope what new effect types, directions, and technologies the team would pioneer next.</li>
                    </ul>
                </div>

                <div className='work-section'>
                    <div className='work-section-title'>Creator Community &amp; Internal Leadership</div>
                    <ul>
                        <li><strong>Effect House Open House</strong> — co-wrote and presented the Engineering session "Sneak Peek into Effect House"; sourced and recorded the effect demos featured on stage; gave editorial notes to the production team.</li>
                        <li><strong>Material Graph Challenge</strong> — organised and ran a cross-team challenge for the US + CN orgs to validate the Material Graph release. 30 participants across IEs, designers, and RDs surfaced <strong>15 bugs and 28 feature requests</strong>; ran live support throughout.</li>
                        <li><strong>Documentation &amp; templates</strong> — authored the <em>Advanced Procedural Terrain</em> TTEH template and the <em>UV Transforms in TTEH</em> documentation for the Material Graph Learning Resources hub.</li>
                        <li><strong>Live tutorials</strong> — presented the PCG Terrain Material Graph live on YouTube and again at the TTEH Ambassador sharing for the Material Graph release.</li>
                        <li><strong>Conference representation</strong> — repped the team at GDC, SIGGRAPH, and Adobe Max (booth host + live Effect House demos for visitors).</li>
                        <li><strong>Creator-facing content</strong> — produced five TikToks for the official Effect House account; top video reached <strong>1.1M views</strong>.</li>
                        <li><strong>Community support</strong> — answered creator questions in the Effect House Discord and community forum; volunteered in TTEH bug bashes.</li>
                        <li><strong>AIGC Hackathon</strong> — proposed the AI Fashion concept (segmenting GAN-generated apparel onto the user's body), designed the prompt structure, and implemented the segmentation + compositing pipeline as a 3-person team.</li>
                    </ul>
                </div>
            </div>
            <PageEnd />
        </div>
    )
}

export default TikTokAREffects
