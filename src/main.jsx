import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './responsive.css'
import App from './App.jsx'
import { CallModalProvider } from './context/CallModalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CallModalProvider>
      <App />
    </CallModalProvider>
  </StrictMode>,
)
