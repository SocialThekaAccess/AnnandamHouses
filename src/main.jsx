import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import './responsive.css'
import App from './App.jsx'
import { CallModalProvider } from './context/CallModalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <CallModalProvider>
          <App />
        </CallModalProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
