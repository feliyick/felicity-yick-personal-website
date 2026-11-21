import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PixelStar from '../PixelStar'
import landmarks from '../../data/landmarks'
import { prefersReducedMotion } from '../../site'

// Mounts the three.js island inside the round globe. three.js is loaded as its own chunk
// so the hero text renders immediately; a pixel star shows while it loads (or if WebGL is unavailable).
export default function Island() {
  const globeRef = useRef(null)
  const canvasRef = useRef(null)
  const labelsRef = useRef(null)
  const navigate = useNavigate()
  const [state, setState] = useState('loading')

  useEffect(() => {
    let inst, cancelled = false
    import('./engine.js')
      .then(({ createIsland }) => {
        if (cancelled) return
        inst = createIsland({
          canvas: canvasRef.current,
          globe: globeRef.current,
          labelsEl: labelsRef.current,
          landmarks,
          reduce: prefersReducedMotion(),
          onOpen: (path) => navigate(path),
        })
        setState('ready')
      })
      .catch((err) => {
        console.warn('Island could not start:', err)
        if (!cancelled) setState('failed')
      })
    return () => { cancelled = true; inst?.destroy() }
  }, [navigate])

  return (
    <div className="globe-wrap">
      <div className="globe" ref={globeRef}>
        <canvas ref={canvasRef} aria-label="A small low-poly island. Each building is one of Felicity's projects; the projects are also listed below." />
        {state !== 'ready' && (
          <div className="globe-fallback"><PixelStar size={44} /></div>
        )}
      </div>
      <div className="labels" ref={labelsRef} />
      {state === 'ready' && <div className="hint" aria-hidden="true">drag to spin · click a building</div>}
    </div>
  )
}
