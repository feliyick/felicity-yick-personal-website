import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PixelStar from '../components/PixelStar'

export default function NotFound() {
  useEffect(() => { document.title = 'Not found | Felicity Yick' }, [])
  return (
    <main id="main" className="notfound">
      <div className="wrap">
        <PixelStar size={48} />
        <h1>This page drifted off the island.</h1>
        <p style={{ marginBottom: 24 }}>The link may be old. Everything I've made is on the home page.</p>
        <Link className="btn primary" to="/">Back to the island</Link>
      </div>
    </main>
  )
}
