// Post-build: write build/<route>/index.html with the server-rendered page, its title and description.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = path.resolve('build')
const template = fs.readFileSync(path.join(root, 'index.html'), 'utf8')
const { render, routes } = await import(pathToFileURL(path.resolve('build-ssr/entry-server.js')).href)
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

let n = 0
for (const r of routes()) {
  let html = template.replace('<div id="root"></div>', `<div id="root">${render(r.path)}</div>`)
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(r.title)}</title>`)
  html = html.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(r.title)}$2`)
  html = html.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1https://www.felicityyick.com${r.path === '/' ? '/' : r.path}$2`)
  if (r.description) {
    html = html.replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(r.description)}$2`)
    html = html.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(r.description)}$2`)
  }
  // '/x/y' -> build/x/y.html, served at /x/y by Vercel's cleanUrls (vercel.json)
  const out = r.path === '/' ? path.join(root, 'index.html') : path.join(root, r.path.replace(/^\//, '') + '.html')
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, html)
  n++
}
console.log(`prerendered ${n} routes`)
