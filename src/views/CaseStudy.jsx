import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import work from '../data/work'

// One template for every project page. Content lives in src/content/case-studies/*.jsx.
export default function CaseStudy({ study }) {
  const [activeSec, setActiveSec] = useState(study.sections[0]?.id)
  const gridItem = work.find((w) => w.path === study.path)
  const hero = study.hero || gridItem?.image
  const listed = work.filter((w) => !w.locked)
  const idx = listed.findIndex((w) => w.path === study.path)
  const next = listed[(idx + 1) % listed.length]

  useEffect(() => { document.title = `${study.title} · Felicity Yick` }, [study])

  // highlight the section currently in view in the side table of contents
  useEffect(() => {
    const els = study.sections.map((s) => document.getElementById(`s-${s.id}`)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSec(e.target.id.slice(2)) }),
      { rootMargin: '-30% 0px -60% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [study])

  const meta = [
    study.meta?.where && ['Where', study.meta.where],
    study.meta?.role && ['Role', study.meta.role],
    study.meta?.when && ['When', study.meta.when],
    study.meta?.tools?.length && ['Tools', study.meta.tools.join(', ')],
  ].filter(Boolean)

  const jump = (e, id) => {
    e.preventDefault()
    document.getElementById(`s-${id}`)?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  }

  return (
    <main id="main" className="case">
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Island</Link><span aria-hidden="true">/</span>
          <Link to="/#work">Work</Link><span aria-hidden="true">/</span>
          <span aria-current="page">{study.title}</span>
        </nav>
        <h1 className="cs-title">{study.title}</h1>
        {study.summary && <p className="cs-sum">{study.summary}</p>}
        {meta.length > 0 && (
          <dl className="meta" style={{ '--cols': meta.length }}>
            {meta.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
        )}
        {study.links?.length > 0 && (
          <div className="cs-links">
            {study.links.map((l) => <a key={l.href} className="btn" href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>)}
          </div>
        )}
        {(study.heroVideo || hero) && (
          <figure className="cs-hero" style={{ marginInline: 0 }}>
            {study.heroVideo
              ? <video src={study.heroVideo} poster={hero} autoPlay loop muted playsInline />
              : <img src={hero} alt="" />}
          </figure>
        )}
        <div className="cs-body">
          <nav className="toc" aria-label="On this page">
            {study.sections.map((s) => (
              <a key={s.id} href={`#s-${s.id}`} className={activeSec === s.id ? 'on' : ''} onClick={(e) => jump(e, s.id)}>{s.title}</a>
            ))}
          </nav>
          <div>
            {study.sections.map((s) => (
              <section key={s.id} id={`s-${s.id}`} className="cs-sec">
                <h2>{s.title}</h2>
                {s.body}
              </section>
            ))}
          </div>
        </div>
        {next && next.path !== study.path && (
          <Link className="next" to={next.path}>
            <div><small>Next project</small><h3>{next.title}</h3></div>
            <span className="arrow" aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </main>
  )
}
