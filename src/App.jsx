import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import Home from './views/Home'
import CaseStudy from './views/CaseStudy'
import NotFound from './views/NotFound'
import { caseStudies } from './content/case-studies'

// New page without a #hash → start at the top.
function ScrollReset() {
  const { pathname, hash } = useLocation()
  useEffect(() => { if (!hash) window.scrollTo(0, 0) }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <ScrollReset />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {caseStudies.map((s) => (
          <Route key={s.path} path={s.path} element={<CaseStudy study={s} />} />
        ))}
        <Route path="/projects" element={<Navigate to="/#work" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Cursor />
    </>
  )
}
