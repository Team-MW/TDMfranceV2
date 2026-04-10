import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Bug, Rat, MessageSquare, Mail, MapPin, Star, Phone } from 'lucide-react'

const App = () => {
  const services = [
    { title: 'Blattes & Cafards', icon: <Bug size={32} />, description: 'Extermination complète et durable des insectes rampants.' },
    { title: 'Punaises de Lit', icon: <Bug size={32} />, description: 'Traitement thermique et chimique haute performance.' },
    { title: 'Rats & Souris', icon: <Rat size={32} />, description: 'Solutions de dératisation rapides et sécurisées pour tous locaux.' },
    { title: 'Fourmis', icon: <Bug size={32} />, description: 'Élimination des colonies et barrières de protection.' },
    { title: 'Mulots & Campagnols', icon: <Rat size={32} />, description: 'Protection de vos jardins et extérieurs contre les rongeurs.' },
    { title: 'Désinsectisation', icon: <Shield size={32} />, description: 'Eradication insecticide spécialisée avec garantie de résultat.' },
  ]

  return (
    <div className="app-wrapper">
      <nav>
        <div className="container nav-content">
          <div className="logo">
            TDM <span>FRANCE</span>
          </div>
          <div className="nav-links">
            <a href="#home">Accueil</a>
            <a href="#services">Prestations</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="contact-btn">
             <a href="tel:+33784819003" style={{ color: '#2ecc71', fontWeight: '900' }}>+33 7 84 81 90 03</a>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-bg">
          <img src="/hero.png" alt="Pest Control Specialist" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1 style={{ marginBottom: '0.2rem' }}>TDM FRANCE</h1>
            <h1 className="highlight-red" style={{ fontSize: '4.5rem' }}>ERADICATION<br />INSECTICIDE</h1>
            <p>Votre spécialiste en dératisation et désinsectisation. Qualité magique garantie.</p>
            
            <div className="whatsapp-bar" onClick={() => window.open('https://wa.me/33784819003')}>
              <MessageSquare size={24} />
              <span>+33 7 84 81 90 03</span>
            </div>

            <div className="sector-info" style={{ marginTop: '2rem' }}>
               <h3 style={{ textDecoration: 'underline' }}>Secteur Disponible</h3>
               <p style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '900' }}>TOULOUSE & ALENTOURS</p>
            </div>

            <div className="rating-box">
              <span>QUALITÉ MAGIQUE</span>
              <div className="stars">
                5 <Star fill="#ea2027" color="#ea2027" size={20} />
                <Star fill="#ea2027" color="#ea2027" size={20} />
                <Star fill="#ea2027" color="#ea2027" size={20} />
                <Star fill="#ea2027" color="#ea2027" size={20} />
                <Star fill="#ea2027" color="#ea2027" size={20} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Nos <span className="accent">Prestations</span></h2>
            <p>Une expertise complète pour tous vos problèmes de nuisibles</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="service-card"
              >
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: '8rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Prêt à retrouver un <br/><span className="accent">environnement sain ?</span></h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div className="service-card" style={{ minWidth: '300px' }}>
              <Mail className="icon" size={32} />
              <h3>Email</h3>
              <p>contact@tdm-france.com</p>
            </div>
            <div className="service-card" style={{ minWidth: '300px' }}>
              <Phone className="icon" size={32} />
              <h3>Téléphone</h3>
              <p>+33 7 84 81 90 03</p>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: '#050505' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo">TDM <span>FRANCE</span></div>
          <p style={{ color: 'var(--text-gray)' }}>&copy; 2026 TDM France - Tous droits réservés.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <MapPin size={20} /> Toulouse
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
