import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')
const app = <StrictMode><App /></StrictMode>
const pathname = window.location.pathname.replace(/\/$/, '') || '/'

if (root.dataset.prerenderedPath === pathname) {
  hydrateRoot(root, app)
} else {
  // A host may serve the static 404 document for an unmatched URL.
  document.querySelectorAll('[data-prerendered-head]').forEach((tag) => tag.remove())
  createRoot(root).render(app)
}
