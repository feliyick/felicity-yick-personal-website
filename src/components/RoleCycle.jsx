import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../site'

/* Typewriter headline that cycles through roles. Screen readers get the full list once. */
export default function RoleCycle({ roles }) {
  const [text, setText] = useState(roles[0])
  const [still] = useState(prefersReducedMotion)

  useEffect(() => {
    if (still) return
    let i = 0, n = roles[0].length, deleting = false, t
    const tick = () => {
      const word = roles[i]
      if (!deleting && n === word.length) { deleting = true; t = setTimeout(tick, 2200); return }
      if (deleting && n === 0) { deleting = false; i = (i + 1) % roles.length; t = setTimeout(tick, 280); return }
      n += deleting ? -1 : 1
      setText(roles[i].slice(0, n))
      t = setTimeout(tick, deleting ? 28 : 55 + Math.random() * 45)
    }
    t = setTimeout(tick, 2200)
    return () => clearTimeout(t)
  }, [roles, still])

  if (still) return <p className="tagline">{roles.join(' · ')}</p>
  return (
    <p className="tagline">
      <span className="sr-only">{roles.join(', ')}</span>
      <span className="role" aria-hidden="true">{text}<span className="caret" /></span>
    </p>
  )
}
