import PixelStar from './PixelStar'
import { EMAIL, LINKEDIN, GITHUB } from '../site'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <span><PixelStar size={14} /> Lots of love, Felicity</span>
        <span>
          <a href={`mailto:${EMAIL}`}>Email</a> ·
          <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a> ·
          <a href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
        </span>
      </div>
    </footer>
  )
}
