import { useEffect, lazy, Suspense } from 'react'
import { Link, useLocation } from 'react-router-dom'
import WorkGrid from '../components/WorkGrid'
import PixelStar from '../components/PixelStar'
import PixelIcon from '../components/PixelIcon'
import RoleCycle from '../components/RoleCycle'
import profile from '../images/profile-image.jpg'
import { RESUME_URL, EMAIL, LINKEDIN, GITHUB, prefersReducedMotion } from '../site'

const ROLES = ['Pipeline Engineer', 'Technical Artist', 'AI Creative Developer']

const Island = lazy(() => import('../components/island/Island'))

// Tentative: edit freely.
const FOCUS = [
  ['Pipelines & tooling', 'Python, USD and Unreal pipelines that get art from DCCs into real-time engines, and the tools artists use every day.'],
  ['Real-time graphics', 'Shaders, effects and optimisation for VR, AR and mobile.'],
  ['AI-native systems', 'The architecture that lets agents generate worlds, assets and games, and the workflows that make a team faster with them.'],
]
const TOOLBOX = [
  ['Languages', ['Python', 'GLSL', 'VEX', 'JavaScript / TypeScript', 'C++']],
  ['Engines & DCCs', ['Houdini', 'Unreal Engine (Blueprints)', 'OpenUSD', 'Maya']],
  ['AI-native development', ['Claude Code', 'Codex', 'Agent orchestration', 'Skills & tool systems', 'AI content pipelines']],
  ['Workflow', ['Git', 'Perforce']],
]

export default function Home() {
  const location = useLocation()

  useEffect(() => { document.title = 'Felicity Yick | Pipeline Technical Artist' }, [])

  // Scroll to #work / #about on every navigation (including re-clicking the same link).
  useEffect(() => {
    const id = location.hash.slice(1)
    if (!id) return
    const el = document.getElementById(id)
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' }))
  }, [location.key, location.hash])

  return (
    <main id="main">
      <section className="hero" aria-label="Intro">
        <div className="hero-in">
          <div className="hero-copy">
            <p className="hello">Hello! It's me</p>
            <h1>
              Felicity
              <span className="name-star" aria-hidden="true"><PixelStar /><i /><i /><i /></span>
            </h1>
            <RoleCycle roles={ROLES} />
            <ul className="bio">
              <li><PixelIcon name="cube" /><span>Creation Pipelines at <a href="https://about.meta.com/realitylabs/" target="_blank" rel="noreferrer">Meta Reality Labs</a> (Contract)</span></li>
              <li><PixelIcon name="book" /><span>BSE in Computer Graphics at <b>UPenn</b></span></li>
              <li><PixelIcon name="rewind" /><span>Previously: <b>TikTok</b></span></li>
            </ul>
            <div className="btns">
              <a className="btn primary" href={RESUME_URL} target="_blank" rel="noreferrer">Résumé</a>
              <Link className="btn" to="/#about">About me</Link>
            </div>
          </div>
          <Suspense fallback={<div className="globe-wrap"><div className="globe"><div className="globe-fallback"><PixelStar size={44} /></div></div></div>}>
            <Island />
          </Suspense>
        </div>
        <Link className="scroll-cue" to="/#work" data-cursor="scroll">
          <span>selected work</span>
          <svg viewBox="0 0 7 4" width="21" height="12" shapeRendering="crispEdges" aria-hidden="true"><path d="M0 0h1v1h1v1h1v1h1V2h1V1h1V0h1v1H6v1H5v1H4v1H3V3H2V2H1V1H0z" fill="currentColor" /></svg>
        </Link>
      </section>

      <section className="block" id="work">
        <div className="wrap"><WorkGrid /></div>
      </section>

      <section className="block about" id="about">
        <div className="wrap about-grid">
          <figure className="portrait">
            <img src={profile} alt="Felicity Yick" loading="lazy" />
            <figcaption><PixelStar size={12} /> San Francisco</figcaption>
          </figure>
          <div>
            <h2>About me</h2>
            <p>Hello! Thanks for stopping by! I’m a technical artist currently based in San Francisco, CA.</p>
            <p>I’m passionate about building tools that bridge the gap between users, creatives, and business goals. Getting to know the creatives and users, hearing their feedback, and understanding their needs is what drives me to make intuitive and impactful solutions.</p>
            <p>Equally as important, I love to paint, cook, and keeping a full Google calendar of exciting things to do in the city and hangouts with friends.</p>
            <div className="focus">
              <div className="kicker">I’m happiest building</div>
              <ul>
                {FOCUS.map(([t, d]) => <li key={t}><b>{t}.</b> {d}</li>)}
              </ul>
            </div>
            <div className="toolbox">
              <div className="kicker">Toolbox</div>
              <dl>
                {TOOLBOX.map(([group, items]) => (
                  <div key={group}>
                    <dt>{group}</dt>
                    <dd>{items.map((i) => <span key={i}>{i}</span>)}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="contact">
              <a className="mail" href={`mailto:${EMAIL}`} data-cursor="email me">{EMAIL}</a>
              <a className="btn" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a className="btn" href={GITHUB} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a className="btn primary" href={RESUME_URL} target="_blank" rel="noreferrer">Résumé</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
