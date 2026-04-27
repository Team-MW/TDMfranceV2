import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={isOpen ? 'nav-open' : ''}>
      <div className="container nav-content">
        <Link 
          to="/" 
          className="logo" 
          onClick={() => {
            setIsOpen(false);
            if (window.location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <img src="/logo.png" alt="TDM France" />
        </Link>
        
        {/* Mobile Toggle */}
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/deratisation" onClick={() => setIsOpen(false)}>Dératisation</Link>
          <Link to="/desinsectisation" onClick={() => setIsOpen(false)}>Désinsectisation</Link>
          <Link to="/punaises-de-lit" onClick={() => setIsOpen(false)}>Punaises de lit</Link>
          <Link to="/humidite" onClick={() => setIsOpen(false)}>Humidité</Link>
          <Link to="/realisations" onClick={() => setIsOpen(false)}>Nos Travaux</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          
          <div className="mobile-only-contact">
             <a href="tel:+33784819003" className="whatsapp-bar">
                <Phone size={18} /> Appeler maintenant
             </a>
          </div>
        </div>

        <div className="contact-btn">
           <a href="tel:+33784819003" style={{ color: '#2ecc71', fontWeight: '900' }}>+33 7 84 81 90 03</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
