import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './responsive.css'
import App from './App.jsx'
import { CallModalProvider } from './context/CallModalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CallModalProvider>
        <App />
      </CallModalProvider>
    </BrowserRouter>
  </StrictMode>,
)
