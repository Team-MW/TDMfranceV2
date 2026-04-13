import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const Contact = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://form.jotform.com/jsform/252534710391352"
    script.type = "text/javascript"
    script.async = true
    
    if (containerRef.current) {
      containerRef.current.appendChild(script)
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [])

  return (
    <div className="contact-page">
      <section className="service-hero-premium" style={{ background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("/hero.png") center/cover' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-content-mini"
          >
            <h1>Contactez <span className="accent">TDM France</span></h1>
            <p>Une question ? Une urgence ? Notre équipe est à votre écoute 24h/24 et 7j/7 pour protéger votre environnement.</p>
          </motion.div>
        </div>
      </section>

      <section className="contact-content" style={{ padding: '8rem 0', background: 'var(--dark-bg)' }}>
        <div className="container">
          <div className="intervention-grid">
            {/* Infos de contact */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="contact-infos-list"
            >
              <h2 style={{ marginBottom: '2rem' }}>Nos <span className="accent">Coordonnées</span></h2>
              
              <div className="service-card" style={{ marginBottom: '2rem' }}>
                <div className="contact-item" style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                  <Phone size={24} className="accent" />
                  <div>
                    <h4 style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>Téléphone</h4>
                    <a href="tel:+33784819003">+33 7 84 81 90 03</a>
                  </div>
                </div>
                
                <div className="contact-item" style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                  <Mail size={24} className="accent" />
                  <div>
                    <h4 style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>E-mail</h4>
                    <a href="mailto:contact@tdm-france.com">contact@tdm-france.com</a>
                  </div>
                </div>

                <div className="contact-item" style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                  <MapPin size={24} className="accent" />
                  <div>
                    <h4 style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>Zone d'intervention</h4>
                    <span>Toulouse & toute la Haute-Garonne</span>
                  </div>
                </div>

                <div className="contact-item" style={{ fontSize: '1.2rem' }}>
                  <Clock size={24} className="accent" />
                  <div>
                    <h4 style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>Disponibilité</h4>
                    <span>7j/7 - 24h/24</span>
                  </div>
                </div>
              </div>

              <div className="plus-info" style={{ borderLeftColor: 'var(--primary-green)', background: 'rgba(46, 204, 113, 0.05)' }}>
                <strong>Devis Gratuit :</strong> Nous vous répondons en moins de 48h avec une solution personnalisée.
              </div>
            </motion.div>

            {/* Formulaire JotForm */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="form-container"
            >
              <div className="service-card" style={{ padding: '1rem' }}>
                 <div ref={containerRef} className="jotform-embed">
                   {/* JotForm injected here */}
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
