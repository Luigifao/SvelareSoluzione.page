
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import GuiaInventario from './pages/GuiaInventario'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/guia-inventario" element={<GuiaInventario />} />
    </Routes>
  )
}

export default App
