// Server entry used only at build time (scripts/prerender.mjs): renders each route to static HTML so crawlers,
// link previews and AI agents get the real page text. The browser then hydrates it (src/main.jsx).
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App.jsx'
import { caseStudies } from './content/case-studies'
import work from './data/work'

const SITE = 'Felicity Yick'
const text = (node) => (typeof node === 'string' ? node : renderToStaticMarkup(<>{node}</>)).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()

const short = (t) => (t.length <= 158 ? t : t.slice(0, t.lastIndexOf(' ', 155)) + '…')

export function routes() {
  return [
    { path: '/', title: `${SITE} | Pipeline Technical Artist`, description: null },
    ...caseStudies.map((s) => {
      const w = work.find((x) => x.path === s.path) || {}
      return {
        path: s.path,
        title: w.company ? `${s.title} · ${w.company} | ${SITE}` : `${s.title} | ${SITE}`,
        description: w.seo || short(w.blurb || (s.summary ? text(s.summary) : '')) || null,   // search snippet: ~155 chars
        noindex: !!w.hidden || !w.path,                                  // hidden from the grid -> kept out of search
      }
    }),
  ]
}

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  )
}
