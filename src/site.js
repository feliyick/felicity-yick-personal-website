import resume from './pdfs/Felicity - Design Engineer Resume.pdf'

export const RESUME_URL = resume
export const EMAIL = 'felicityyick@gmail.com'
export const LINKEDIN = 'https://www.linkedin.com/in/felicity-yick/'
export const GITHUB = 'https://github.com/feliyick'
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
