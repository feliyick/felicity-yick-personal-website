// Server entry used only at build time (scripts/prerender.mjs): renders each route to static HTML so crawlers,
// link previews and AI agents get the real page text. The browser then hydrates it (src/main.jsx).
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App.jsx'
import { caseStudies } from './content/case-studies'

const SITE = 'Felicity Yick'
const text = (node) => (typeof node === 'string' ? node : renderToStaticMarkup(<>{node}</>)).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()

export function routes() {
  return [
    { path: '/', title: `${SITE} | Pipeline Technical Artist`, description: null },
    ...caseStudies.map((s) => ({ path: s.path, title: `${s.title} | ${SITE}`, description: s.summary ? text(s.summary).slice(0, 300) : null })),
  ]
}

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  )
}
