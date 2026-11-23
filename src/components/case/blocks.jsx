// Building blocks used inside case-study section bodies (src/content/case-studies/*.jsx).
import { useState } from 'react'

export function Media({ src, video, poster, alt = '', caption, maxWidth }) {
  return (
    <figure className="media-block" style={{ margin: '22px 0', maxWidth }}>
      {video ? (
        <video src={video} poster={poster} autoPlay loop muted playsInline preload="metadata" aria-label={alt || caption} />
      ) : (
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export function Gallery({ items = [], cols = 2, aspect }) {
  return (
    <div className="gallery" data-cols={cols} style={{ '--cols': cols, '--aspect': aspect || 'auto' }}>
      {items.map((it, i) => (
        <figure key={i}>
          {it.video ? (
            <video src={it.video} poster={it.poster} autoPlay loop muted playsInline preload="metadata" aria-label={it.alt} />
          ) : (
            <img src={it.src} alt={it.alt || ''} loading="lazy" decoding="async" />
          )}
          {it.caption && <figcaption>{it.caption}</figcaption>}
        </figure>
      ))}
    </div>
  )
}

export function Stats({ items = [] }) {
  return (
    <div className="stats">
      {items.map((s, i) => (
        <div key={i}><b>{s.value}</b><span>{s.label}</span></div>
      ))}
    </div>
  )
}

export function Embed({ src, title = 'Embedded video' }) {
  return (
    <div className="embed">
      <iframe src={src} title={title} loading="lazy" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
    </div>
  )
}

export function Callout({ children }) {
  return <div className="callout">{children}</div>
}

// Same shot, several versions (lighting looks, clay vs beauty...): chip tabs over stacked images that crossfade.
export function Switcher({ items = [], caption, label = 'Version', maxWidth }) {
  const [on, setOn] = useState(0)
  return (
    <figure className="media-block switcher">
      <div className="switch-tabs" role="group" aria-label={label}>
        {items.map((it, i) => (
          <button key={it.label} type="button" className="chip" aria-pressed={on === i} onClick={() => setOn(i)}>{it.label}</button>
        ))}
      </div>
      <div className="switch-stack" style={maxWidth ? { maxWidth } : undefined}>
        {items.map((it, i) => (
          <img key={it.label} src={it.src} alt={it.alt || it.label} className={on === i ? 'on' : ''} aria-hidden={on !== i} decoding="async" />
        ))}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

// Marks media that hasn't been made yet. Only visible in `npm run dev`; renders nothing in the built site.
export function Placeholder({ children }) {
  if (!import.meta.env.DEV) return null
  return <div className="placeholder">Coming: {children}</div>
}

// Colour key: swatch -> label (for colour-coded diagrams and blockouts).
export function Legend({ items = [] }) {
  return (
    <ul className="legend">
      {items.map((it) => (
        <li key={it.label}><span className="swatch" style={{ background: it.color }} aria-hidden="true" />{it.label}</li>
      ))}
    </ul>
  )
}
