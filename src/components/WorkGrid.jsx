import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import work, { CATEGORIES } from '../data/work'
import LockedModal from './LockedModal'
import PixelStar from './PixelStar'
import { prefersReducedMotion } from '../site'

function CardInner({ item }) {
  return (
    <span className="card-in">
      <div className="media">
        {item.video
          ? <video src={item.video} poster={item.image} autoPlay={!prefersReducedMotion()} loop muted playsInline preload="metadata" aria-hidden="true" />
          : <img src={item.image} alt="" loading="lazy" decoding="async" />}
        {item.logo && <span className="badge logo"><img src={item.logo} alt={item.company} style={{ height: item.logoH || 15 }} /></span>}
        {item.locked && <span className="badge lock">🔒 {item.wip ? 'in progress · ' : ''}by request</span>}
      </div>
      <div className="body">
        <h3>{item.title}</h3>
        <p>{item.blurb}</p>
        <div className="tools">{item.tools.map((t) => <span key={t}>{t}</span>)}</div>
      </div>
    </span>
  )
}

export default function WorkGrid() {
  const [active, setActive] = useState('All')
  const [locked, setLocked] = useState(null)
  const close = useCallback(() => setLocked(null), [])
  const list = active === 'All' ? work : work.filter((w) => w.categories.includes(active))

  return (
    <>
      <div className="sec-head">
        <div>
          <div className="kicker"><PixelStar size={14} />Selected work</div>
          <h2>Things I’ve shipped</h2>
        </div>
        <div className="filters" role="group" aria-label="Filter projects">
          {CATEGORIES.map((c) => (
            <button key={c} type="button" className="chip" aria-pressed={active === c} onClick={() => setActive(c)}>{c}</button>
          ))}
        </div>
      </div>
      <div className="grid">
        {list.map((item) => {
          const cls = `card${item.feat && active === 'All' ? ' feat' : ''}`
          return item.locked ? (
            <button key={item.path} type="button" className={cls} data-cursor="by request" onClick={() => setLocked(item)}>
              <CardInner item={item} />
            </button>
          ) : (
            <Link key={item.path} to={item.path} className={cls} data-cursor="open">
              <CardInner item={item} />
            </Link>
          )
        })}
      </div>
      {locked && <LockedModal item={locked} onClose={close} />}
    </>
  )
}
