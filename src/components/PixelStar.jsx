// Felicity's insignia: a 9×9 pixel star. Fill uses --coral, outline uses --ink (see .pstar in global.css).
export const STAR_FILL = 'M4 1h1v2H4zM1 3h7v1H1zM2 4h5v1H2zM3 5h3v1H3zM2 6h2v1H2zM5 6h2v1H5zM2 7h1v1H2zM6 7h1v1H6z'
export const STAR_INK = 'M4 0h1v1H4zM3 1h1v1H3zM5 1h1v1H5zM0 2h4v1H0zM5 2h4v1H5zM0 3h1v1H0zM8 3h1v1H8zM1 4h1v1H1zM7 4h1v1H7zM2 5h1v1H2zM6 5h1v1H6zM1 6h1v1H1zM4 6h1v1H4zM7 6h1v1H7zM1 7h1v1H1zM3 7h1v1H3zM5 7h1v1H5zM7 7h1v1H7zM0 8h2v1H0zM7 8h2v1H7z'

export default function PixelStar({ size = 18, className = '', title }) {
  return (
    <svg
      className={`pstar ${className}`}
      viewBox="0 0 9 9"
      width={size}
      height={size}
      shapeRendering="crispEdges"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <path className="f" d={STAR_FILL} />
      <path className="o" d={STAR_INK} />
    </svg>
  )
}
