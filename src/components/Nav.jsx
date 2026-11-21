import { Link, useLocation } from 'react-router-dom'
import PixelStar from './PixelStar'
import { RESUME_URL } from '../site'

export default function Nav() {
  const { pathname, hash } = useLocation()
  const onCase = pathname !== '/'
  return (
    <header className="nav">
      <div className="nav-in">
        <Link className="logo" to="/" aria-label="Felicity Yick, home">
          <PixelStar size={18} />
          <span>felicity yick</span>
        </Link>
        <nav className="nav-links" aria-label="Main">
          <Link to="/#work" className={hash === '#work' || onCase ? 'on' : ''}>Work</Link>
          <Link to="/#about" className={hash === '#about' && !onCase ? 'on' : ''}>About</Link>
          <a href={RESUME_URL} className="cta" target="_blank" rel="noreferrer">Résumé</a>
        </nav>
      </div>
    </header>
  )
}
