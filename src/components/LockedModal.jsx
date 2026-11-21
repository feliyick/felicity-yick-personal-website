import { useEffect, useRef } from 'react'
import { EMAIL } from '../site'

export default function LockedModal({ item, onClose }) {
  const btn = useRef(null)
  useEffect(() => {
    btn.current?.focus()
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [onClose])
  return (
    <div className="modal" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="box" role="dialog" aria-modal="true" aria-labelledby="locked-title">
        <h3 id="locked-title">🔒 {item.title}</h3>
        <p>
          {item.wip ? 'This is work in progress at Meta, so the case study is shared by request. ' : 'This case study covers unreleased Meta work, so it’s shared by request. '}
          Email <a className="link" href={`mailto:${EMAIL}?subject=${encodeURIComponent('Case study access: ' + item.title)}`}>{EMAIL}</a> and I’ll send you the link.
        </p>
        <button ref={btn} className="btn primary" type="button" onClick={onClose}>Got it</button>
      </div>
    </div>
  )
}
