
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import GuiaInventario from './pages/GuiaInventario'
import GuiaDivorcio from './pages/GuiaDivorcio'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/guia-inventario" element={<GuiaInventario />} />
      <Route path="/guia-divorcio" element={<GuiaDivorcio />} />
    </Routes>
  )
}

export default App
