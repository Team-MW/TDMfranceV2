import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Deratisation from './pages/Deratisation'
import Desinsectisation from './pages/Desinsectisation'
import PunaisesDeLit from './pages/PunaisesDeLit'
import MentionsLegales from './pages/MentionsLegales'
import CityPage from './pages/CityPage'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Navbar />
        <WhatsAppButton />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/deratisation" element={<Deratisation />} />
            <Route path="/desinsectisation" element={<Desinsectisation />} />
            <Route path="/punaises-de-lit" element={<PunaisesDeLit />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/secteur/:cityId" element={<CityPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
