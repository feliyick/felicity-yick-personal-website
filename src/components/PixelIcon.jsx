// Small pixel-art icons in the insignia's style: X = ink outline, O = pink, P = pale pink, H = white.
const COLORS = { X: 'var(--ink)', O: 'var(--coral)', P: 'var(--sun)', H: '#ffffff' }

export const ICONS = {
  cube: [
    '....X....',
    '..XXOXX..',
    'XXOOOOOXX',
    'XHXXOXXPX',
    'XHHHXPPPX',
    'XHHHXPPPX',
    'XHHHXPPPX',
    '.XXHXPXX.',
    '...XXX...',
  ],
  book: [
    'XXXX.XXXX',
    'XHHHXHHHX',
    'XOOHXOOHX',
    'XHHHXHHHX',
    'XOOHXOOHX',
    'XHHHXHHHX',
    'XOOHXOOHX',
    'XXXXXXXXX',
    '...X.X...',
  ],
  rewind: [
    '.........',
    '...X...X.',
    '..XX..XX.',
    '.XOX.XOX.',
    'XOOXXOOX.',
    '.XOX.XOX.',
    '..XX..XX.',
    '...X...X.',
    '.........',
  ],
}

export default function PixelIcon({ name, size = 18 }) {
  const rows = ICONS[name]
  const w = rows[0].length, h = rows.length
  const rects = []
  rows.forEach((r, y) => {
    let x = 0
    while (x < r.length) {
      const ch = r[x]
      if (ch === '.') { x++; continue }
      let e = x
      while (e < r.length && r[e] === ch) e++
      rects.push(<rect key={`${x}-${y}`} x={x} y={y} width={e - x} height={1} style={{ fill: COLORS[ch] }} />)
      x = e
    }
  })
  return (
    <svg className="picon" viewBox={`0 0 ${w} ${h}`} width={size} height={size * h / w} shapeRendering="crispEdges" aria-hidden="true">
      {rects}
    </svg>
  )
}
