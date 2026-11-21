// Building blocks used inside case-study section bodies (src/content/case-studies/*.jsx).

export function Media({ src, video, poster, alt = '', caption }) {
  return (
    <figure className="media-block" style={{ margin: '22px 0' }}>
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
