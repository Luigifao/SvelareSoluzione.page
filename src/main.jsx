import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'
=======
import { BrowserRouter } from 'react-router-dom';
>>>>>>> f1003a838d09c6c42831c8724ccf942be64d3858
import './index.css'
import App from './App.jsx'

const basename = import.meta.env.MODE === 'production' ? '/svelareSolucine.page' : '/'

createRoot(document.getElementById('root')).render(
<<<<<<< HEAD
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
=======
  <BrowserRouter basename="/svelareSolucine.page">
    <App />
  </BrowserRouter>,
>>>>>>> f1003a838d09c6c42831c8724ccf942be64d3858
)
