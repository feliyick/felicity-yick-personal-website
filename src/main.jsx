import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/global.css'

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
// Pages are pre-rendered at build time (scripts/prerender.mjs): hydrate them; in dev the root is empty.
const el = document.getElementById('root')
if (el.hasChildNodes()) hydrateRoot(el, app)
else createRoot(el).render(app)
