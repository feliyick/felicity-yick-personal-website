import { useEffect, useRef } from 'react'
import { STAR_FILL, STAR_INK } from './PixelStar'

/* Pixel-art cursor with a sparkle trail (desktop / fine pointers only).
   Label: any element with data-cursor="..." shows that text next to the cursor.
   Hand: links, buttons, and anything with data-hand. The island canvas updates its own data-cursor on hover. */

const ARROW = ['X...........','XX..........','XHX.........','XOOX........','XOOOX.......','XOOOOX......','XOOOOOX.....','XOOOOOOX....',
  'XOOOOOOOX...','XOOOOOOOOX..','XOOOOOOOOOX.','XOOOOOOXXXXX','XOOOXOOX....','XOOXXOOX....','XOX..XOOX...','XX...XOOX...','X.....XOOX..','......XOOX..','.......XX...']
const HAND = ['....XX........','...XHOX.......','...XOOX.......','...XOOX.......','...XOOXXX.....','...XOOXOOXXX..','.XXXOOXOOXOOXX','XOOXOOOOOOOOOX',
  'XOOXOOOOOOOOOX','.XOOOOOOOOOOOX','..XOOOOOOOOOOX','..XOOOOOOOOOX.','...XOOOOOOOOX.','...XOOOOOOOX..','....XOOOOOOX..','....XXXXXXXX..']

function sprite(rows, fill, cls) {
  const w = Math.max(...rows.map((r) => r.length))
  let rects = ''
  rows.forEach((r, y) => {
    let x = 0
    while (x < r.length) {
      const ch = r[x]
      if (ch === '.') { x++; continue }
      let e = x
      while (e < r.length && r[e] === ch) e++
      rects += `<rect x="${x}" y="${y}" width="${e - x}" height="1" fill="${ch === 'X' ? '#1d2340' : ch === 'H' ? '#ffffff' : fill}"/>`
      x = e
    }
  })
  return `<svg class="spr ${cls}" viewBox="0 0 ${w} ${rows.length}" width="${w * 2}" height="${rows.length * 2}" shape-rendering="crispEdges">${rects}</svg>`
}

function starCanvas() {
  const c = document.createElement('canvas')
  c.width = 9; c.height = 9
  const g = c.getContext('2d')
  g.fillStyle = '#f0408c'; g.fill(new Path2D(STAR_FILL))
  g.fillStyle = '#1d2340'; g.fill(new Path2D(STAR_INK))
  return c
}

export default function Cursor() {
  const curRef = useRef(null)
  const trailRef = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cur = curRef.current
    const tag = cur.querySelector('.tag')
    cur.insertAdjacentHTML('afterbegin', sprite(ARROW, '#f0408c', 'arrow') + sprite(HAND, '#ffc9e0', 'hand'))
    const root = document.documentElement
    root.classList.add('custom-cursor')

    const trail = trailRef.current
    const tg = trail.getContext('2d')
    const star = starCanvas()
    const fit = () => { trail.width = innerWidth; trail.height = innerHeight }
    fit()

    const COLS = ['#f0408c', '#ffc9e0', '#ff9ccb', '#7cbf5a', '#6cc6e6', '#ffffff']
    const parts = []
    let mx = -100, my = -100, lastX = 0, lastY = 0, raf = 0, trailOn = false, drawnX = -1, drawnY = -1

    const drawTrail = () => {
      tg.clearRect(0, 0, trail.width, trail.height)
      tg.imageSmoothingEnabled = false
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i]
        p.x += p.vx; p.y += p.vy; p.vy += 0.05; p.life -= 0.03
        if (p.life <= 0) { parts.splice(i, 1); continue }
        tg.globalAlpha = Math.min(1, p.life * 1.5)
        if (p.star) { tg.drawImage(star, p.x | 0, p.y | 0, 18, 18) }
        else {
          tg.fillStyle = '#1d2340'; tg.fillRect((p.x | 0) - 1, (p.y | 0) - 1, p.s + 2, p.s + 2)
          tg.fillStyle = p.c; tg.fillRect(p.x | 0, p.y | 0, p.s, p.s)
        }
      }
      tg.globalAlpha = 1
      if (parts.length) requestAnimationFrame(drawTrail)
      else { trailOn = false; tg.clearRect(0, 0, trail.width, trail.height) }
    }

    // hand + label state for whatever element is under the pointer
    const update = (target) => {
      const el = target && target.closest ? target : null
      const labelled = el?.closest('[data-cursor]')
      const clickable = el?.closest('a,button,summary,label,[data-hand]')
      const label = labelled ? labelled.dataset.cursor : ''
      cur.classList.toggle('is-hand', !!clickable || (labelled && labelled.hasAttribute('data-hand')))
      if (tag.textContent !== label) tag.textContent = label
      cur.classList.toggle('show-tag', !!label)
    }
    // re-check what's under a still pointer (page changed, scrolled, or content swapped)
    const refresh = () => { if (mx >= 0) update(document.elementFromPoint(mx, my)) }

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      cur.classList.remove('away')
      update(e.target)
      if (!reduce && Math.hypot(mx - lastX, my - lastY) > 14) {
        lastX = mx; lastY = my
        parts.push({
          x: mx + (Math.random() * 8 - 4), y: my + (Math.random() * 8 - 4),
          vx: (Math.random() - 0.5) * 0.6, vy: -Math.random() * 0.6, life: 1,
          c: COLS[(Math.random() * COLS.length) | 0], s: Math.random() < 0.3 ? 6 : 4, star: Math.random() < 0.12,
        })
        if (!trailOn) { trailOn = true; requestAnimationFrame(drawTrail) }
      }
    }
    let frame = 0
    const loop = () => {
      if (mx !== drawnX || my !== drawnY) { cur.style.transform = `translate3d(${mx}px,${my}px,0)`; drawnX = mx; drawnY = my }
      if (++frame % 8 === 0) refresh()
      raf = requestAnimationFrame(loop)
    }
    const away = () => cur.classList.add('away')
    const back = () => cur.classList.remove('away')
    // keep position exact on press, and block native link/image dragging (it freezes pointer events)
    const down = (e) => { mx = e.clientX; my = e.clientY }
    const noDrag = (e) => { if (e.target.closest?.('a,img,video')) e.preventDefault() }
    const afterNav = () => requestAnimationFrame(() => requestAnimationFrame(refresh))

    addEventListener('pointermove', onMove, { passive: true })
    addEventListener('pointerdown', down)
    addEventListener('dragstart', noDrag)
    addEventListener('click', afterNav)
    addEventListener('popstate', afterNav)
    addEventListener('scroll', refresh, { passive: true })
    addEventListener('resize', fit)
    root.addEventListener('mouseleave', away)
    root.addEventListener('mouseenter', back)
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('pointermove', onMove)
      removeEventListener('pointerdown', down)
      removeEventListener('dragstart', noDrag)
      removeEventListener('click', afterNav)
      removeEventListener('popstate', afterNav)
      removeEventListener('scroll', refresh)
      removeEventListener('resize', fit)
      root.removeEventListener('mouseleave', away)
      root.removeEventListener('mouseenter', back)
      root.classList.remove('custom-cursor')
      cur.querySelectorAll('.spr').forEach((n) => n.remove())
    }
  }, [])

  return (
    <>
      <div id="cur" ref={curRef} aria-hidden="true"><span className="tag" /></div>
      <canvas id="trail" ref={trailRef} aria-hidden="true" />
    </>
  )
}
