import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import GuiaInventario from './pages/GuiaInventario'
import GuiaDivorcio from './pages/GuiaDivorcio'
import Arbitragem from './pages/Arbitragem'
import Divorcio from './pages/Divorcio/Divorcio'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/guia-inventario" element={<GuiaInventario />} />
      <Route path="/guia-divorcio" element={<GuiaDivorcio />} />
      <Route path="/arbitragem" element={<Arbitragem />} />
      <Route path="/divorcio" element={<Divorcio />} />
    </Routes>
    
  )
}

export default App
