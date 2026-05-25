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
                                <div className='tag'>Framework Design</div>
                                <div className='tag'>Effect House</div>
                            </div>
                        </Bounce>
                    </div>
                    <div className='work-right-col'>
                        Architected the framework powering <strong>Create with AI</strong> in TikTok Effect
                        House — a feature that lets a creator type a short prompt and receive a fully
                        playable AR mini-game complete with custom art, mechanics, and the underlying
                        visual-scripting graph, ready to publish or refine in the editor.
                    </div>
                </div>
            </div>

            <div className='work-details'>
                <div className='work-section'>
                    <div className='work-section-title'>The Feature</div>
                    <p>
                        <strong>Public documentation:</strong>{" "}
                        <a
                            href="https://effecthouse.tiktok.com/learn/guides/ai-capabilities/create-with-ai"
                            className="hyperlink"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Create with AI — Effect House Learn ↗
                        </a>
                    </p>
                    <p>
                        Inside Effect House, a creator clicks <em>Create with AI</em> and supplies an
                        English-language prompt — keywords describing style, subject, environment, and
                        atmosphere — optionally seeded by one of the available templates. The system
                        returns an interactive AR effect with a live preview; the creator can publish it
                        as-is or open it in the editor to customise further.
                    </p>
                    <p>
                        At launch the feature shipped <strong>13 generatable effect types</strong> spanning
                        interactive games (2D Blocks Game, Road Fury, Drop It, Cross Street), choice-based
                        effects (Random Picker, Decision Maker, Personality Test), reveal mechanics (Flip
                        Reveal, Scratch to Reveal), character transformations (Transform Me, Which AI
                        Character Am I, Flip Reveal AI Character), and social integrations (Social
                        Randomizer using a creator's TikTok friends).
                    </p>
                </div>

                <div className='work-section'>
                    <div className='work-section-title'>Architecture I Built</div>
                    <p>
                        I designed and built a TypeScript framework that compiles a natural-language prompt
                        into the visual-scripting graph and accompanying assets that make up a runnable AR
                        effect inside Effect House.
                    </p>
                    <p>
                        The pipeline runs in two stages with a structured intermediate representation
                        between them:
                    </p>
                    <ul>
                        <li><strong>Stage 1 — Content.</strong> A constrained LLM call produces a structured description of the game (the entities, conditions, animations, UI states, and player instructions) that an AR mini-game of the requested style would need.</li>
                        <li><strong>Stage 2 — Compilation.</strong> The framework walks that description and emits a graph of runtime components and node connections, wiring up the visual-scripting logic that drives the effect.</li>
                    </ul>
                    <p>
                        Anything that's the same across every effect — graph wiring, component instantiation,
                        the baseline shape of the intermediate document — is handled by the framework.
                        Anything that's specific to a given mini-game lives in a small set of extension
                        points that a skill developer (another engineer on the team) fills in. The result is
                        that adding a new mini-game type is a contained task, not a cross-framework rewrite.
                    </p>
                </div>

                <div className='work-section'>
                    <div className='work-section-title'>Constraining the LLM</div>
                    <p>
                        Each class of mini-game defines its own constraint set: what mechanics, win/lose
                        conditions, animation types, and entity quantities the LLM is allowed to produce
                        inside it. Those constraints are part of the prompt the framework hands to the model,
                        which keeps generated content valid for the runtime and the editor instead of
                        free-form drift that would fail to compile.
                    </p>
                    <p>
                        This guard-rail layer was as much a part of the work as the compiler — much of the
                        framework's reliability comes from refusing to ask the LLM questions whose answers
                        the runtime couldn't honour.
                    </p>
                </div>

                <div className='work-section'>
                    <div className='work-section-title'>The Skill-Developer Extension Point</div>
                    <p>
                        Between content generation and graph compilation, the framework hands off to the
                        skill developer for a composition pass — a chance to layer in skill-specific
                        structure that the generic constraint set can't express on its own. That output gets
                        folded back into the intermediate document so the compilation stage sees a single
                        unified source of truth.
                    </p>
                    <p>
                        After the framework emits the base graph, the skill developer layers on bespoke
                        adjustments — entity placement, scale, rotation, animation direction — referencing
                        the stable handles the framework has already created. AIGC image generation is wired
                        into the same step so that the runtime materialises the AI-authored art alongside
                        the graph it lives in.
                    </p>
                </div>

                <div className='work-section'>
                    <div className='work-section-title'>Impact</div>
                    <ul>
                        <li><strong>10K+ AI-generated effects</strong> supported on launch, the majority authored by first-time Effect House creators.</li>
                        <li>Materially reduced creator onboarding friction by lowering the technical floor required to ship a functioning AR effect from "learn the visual scripting editor" to "type a prompt."</li>
                        <li>Established the framework pattern other engineers on the team extend to add new mini-game classes — adding one is a contained, skill-developer-owned task instead of a cross-framework rewrite.</li>
                    </ul>
                </div>
            </div>
            <PageEnd />
        </div>
    )
}

export default TikTokAIEffects
