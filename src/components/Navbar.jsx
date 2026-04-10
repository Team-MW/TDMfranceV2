import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className="container nav-content">
        <Link to="/" className="logo">
          TDM <span>FRANCE</span> <span className="logo-small">DERATISATION</span>
        </Link>
        <div className="nav-links">
          <Link to="/">Accueil</Link>
          <Link to="/deratisation">Dératisation</Link>
          <Link to="/desinsectisation">Désinsectisation</Link>
          <Link to="/punaises-de-lit">Punaises de lit</Link>
        </div>
        <div className="contact-btn">
           <a href="tel:+33784819003" style={{ color: '#2ecc71', fontWeight: '900' }}>+33 7 84 81 90 03</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
