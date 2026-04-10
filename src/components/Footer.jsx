import React from 'react'
import { MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: '#050505' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
        <div className="logo">TDM <span>FRANCE</span></div>
        <p style={{ color: 'var(--text-gray)' }}>&copy; 2026 TDM France - Tous droits réservés.</p>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <MapPin size={20} /> Toulouse & Alentours
          <a href="mailto:contact@tdm-france.com" className="accent">contact@tdm-france.com</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
