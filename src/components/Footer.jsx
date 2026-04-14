import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ShieldCheck } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container footer-grid">
        {/* Brand Section */}
        <div className="footer-col brand">
          <Link to="/" className="logo">
            TDM <span>FRANCE</span>
          </Link>
          <p className="footer-tagline">
            Experts en dératisation et désinsectisation à Toulouse. 
            Protection radicale et durable de votre environnement.
          </p>
        </div>

        {/* Links Section */}
        <div className="footer-col">
          <h4>Nos Services</h4>
          <ul>
            <li><Link to="/deratisation">Dératisation</Link></li>
            <li><Link to="/desinsectisation">Désinsectisation</Link></li>
            <li><Link to="/punaises-de-lit">Punaises de lit</Link></li>
            <li><Link to="/humidite">Humidité</Link></li>
            <li><Link to="/contact">Contact & Devis</Link></li>
            <li><Link to="/traitement-nuisibles">Traitement Nuisibles</Link></li>
          </ul>
        </div>

        {/* Sectors Section */}
        <div className="footer-col">
          <h4>Secteurs</h4>
          <ul>
            <li><MapPin size={14} className="accent" /> <Link to="/secteur/toulouse">Toulouse</Link></li>
            <li><MapPin size={14} className="accent" /> <Link to="/secteur/blagnac">Blagnac</Link> / <Link to="/secteur/colomiers">Colomiers</Link></li>
            <li><MapPin size={14} className="accent" /> <Link to="/secteur/muret">Muret</Link></li>
            <li><MapPin size={14} className="accent" /> <Link to="/secteur/balma">Balma</Link></li>
            <li><MapPin size={14} className="accent" /> <Link to="/secteur/tournefeuille">Tournefeuille</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-col contact-col">
          <h4>Contact Direct</h4>
          <div className="contact-item">
            <Phone size={18} className="accent" />
            <a href="tel:+33784819003">+33 7 84 81 90 03</a>
          </div>
          <div className="contact-item">
            <Mail size={18} className="accent" />
            <a href="mailto:contact@tdm-france.com">contact@tdm-france.com</a>
          </div>
          <div className="availability">
            <ShieldCheck size={18} className="accent" />
            <span>Intervention 7j/7 - 24h/24</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>
            &copy; 2026 TDM France - Tous droits réservés. 
            <span style={{ marginLeft: '1rem', opacity: 0.6 }}>|</span>
            <a href="https://microdidact.com/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '1rem', transition: 'var(--transition-smooth)' }}>
              Réalisé par <span style={{ color: 'var(--primary-green)', fontWeight: '700' }}>microdidact</span>
            </a>
          </p>
          <div className="legal-links">
            <Link to="/mentions-legales">Mentions Légales</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
