import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Loader2, ShieldCheck, Activity } from 'lucide-react'
const Contact = () => {
  const containerRef = useRef(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://form.jotform.com/jsform/252534710391352"
    script.type = "text/javascript"
    script.async = true

    script.onload = () => {
      // Small timeout to allow the iframe to start rendering
      setTimeout(() => setLoading(false), 800)
    }

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
              <div className="service-card" style={{ padding: '1rem', position: 'relative', minHeight: '600px', display: 'flex', flexDirection: 'column' }}>
                <AnimatePresence>
                  {loading && (
                    <motion.div
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--dark-bg)',
                        zIndex: 10,
                        borderRadius: '20px'
                      }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      >
                        <Loader2 className="accent" size={40} />
                      </motion.div>
                      <p style={{ marginTop: '1rem', color: 'var(--text-gray)', fontSize: '0.9rem', fontWeight: '600', letterSpacing: '1px' }}>
                        CHARGEMENT DU FORMULAIRE...
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div ref={containerRef} className="jotform-embed">
                  {/* JotForm injected here */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" style={{ paddingBottom: '8rem', background: 'var(--dark-bg)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="premium-block-container"
          >
            <div className="block-content" style={{ padding: '4rem' }}>
              <h2 className="block-title" style={{ marginBottom: '2rem' }}>À PROPOS DE <span className="accent">TDM FRANCE</span></h2>
              <p className="block-intro" style={{ marginBottom: '3rem' }}>
                TDM FRANCE est le leader de la lutte antiparasitaire en Haute-Garonne. Notre mission est de protéger votre santé, vos biens et votre environnement grâce à des technologies de pointe et une expertise certifiée.
              </p>
              
              <div className="law-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                <div className="about-feature">
                  <ShieldCheck className="accent" size={32} style={{ marginBottom: '1rem' }} />
                  <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>CERTIFIÉ BIOCIDE</h4>
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>Utilisation raisonnée et sécurisée de molécules professionnelles homologuées.</p>
                </div>
                <div className="about-feature">
                  <MapPin className="accent" size={32} style={{ marginBottom: '1rem' }} />
                  <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>PROXIMITÉ TOTALE</h4>
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>Intervention en moins de 24h sur Toulouse et toute la Haute-Garonne.</p>
                </div>
                <div className="about-feature">
                  <Activity className="accent" size={32} style={{ marginBottom: '1rem' }} />
                  <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>RÉSULTAT GARANTI</h4>
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>Protocoles d'éradication radicaux avec suivi post-intervention rigoureux.</p>
                </div>
              </div>
            </div>

            <div className="block-footer-info" style={{ background: 'var(--dark-surface)', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
               <div className="footer-card">
                  <h3 style={{ fontSize: '1.5rem !important' }}>NOTRE PHILOSOPHIE</h3>
                  <p style={{ color: 'var(--text-gray)', fontSize: '1rem', lineHeight: '1.8' }}>
                    Nous croyons qu'un environnement sain est un droit fondamental. C'est pourquoi nous investissons constamment dans des solutions durables et des méthodes qui respectent votre cadre de vie tout en étant impitoyables avec les nuisibles.
                  </p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
