import './App.css'
<<<<<<< HEAD
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
=======
import Header from './Components/Header'
import { Routes, Route } from 'react-router-dom'
import Divorcio from './pages/Divorcio/Divorcio'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Divorcio" element={<Divorcio />} />
      </Routes>
    </>
>>>>>>> f1003a838d09c6c42831c8724ccf942be64d3858
  )
}

export default App
