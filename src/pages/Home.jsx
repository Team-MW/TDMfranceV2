import React from 'react'
import { motion } from 'framer-motion'
import { Bug, Rat, Star, MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  const services = [
    { title: 'DÉRATISATION', icon: <Rat size={32} />, path: '/deratisation', description: 'Solutions rapides pour rats, souris et rongeurs.' },
    { title: 'DÉSINSECTISATION', icon: <Bug size={32} />, path: '/desinsectisation', description: 'Élimination des blattes, cafards et fourmis.' },
    { title: 'PUNAISES DE LIT', icon: <Bug size={32} />, path: '/punaises-de-lit', description: 'Expertise spécialisée en éradication totale.' },
  ]

  return (
    <div className="home-page">
      <section className="hero">
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
            <h1 style={{ marginBottom: '0rem' }}>TDM FRANCE</h1>
            <h1 className="highlight-red" style={{ fontSize: '4.5rem', marginBottom: '0.5rem' }}>ERADICATION<br />INSECTICIDE</h1>
            <h3 className="specialiste-tag">- TON SPECIALISTE -</h3>

            <div className="whatsapp-bar" onClick={() => window.open('https://wa.me/33784819003')}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" width="24" />
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

      <section className="services">
        <div className="container">
          <div className="section-title">
            <h2>Nos <span className="accent">Prestations</span></h2>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <Link to={service.path} key={index} style={{ color: 'inherit' }}>
                <motion.div 
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
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
