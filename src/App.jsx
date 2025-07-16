import './App.css'
import Header from './Components/Header'
import { Routes, Route } from 'react-router-dom'
import Divorcio from './pages/Divorcio'
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
  )
}

export default App
