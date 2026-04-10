import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Deratisation from './pages/Deratisation'
import Desinsectisation from './pages/Desinsectisation'
import PunaisesDeLit from './pages/PunaisesDeLit'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/deratisation" element={<Deratisation />} />
            <Route path="/desinsectisation" element={<Desinsectisation />} />
            <Route path="/punaises-de-lit" element={<PunaisesDeLit />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
