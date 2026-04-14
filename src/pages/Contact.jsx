import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Loader2, ShieldCheck, Activity, Search, CheckCircle } from 'lucide-react'
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
              
              <div style={{ marginBottom: '3rem' }}>
                <p className="block-intro" style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                  TDM FRANCE est une entreprise spécialisée dans le traitement et la désinfection des moisissures à Toulouse et dans toute la Haute-Garonne. Notre mission est simple : vous offrir un environnement sain, durable et sécurisé, que ce soit dans votre logement, vos bureaux, vos locaux commerciaux ou vos parties communes.
                </p>
                <p style={{ color: 'var(--text-gray)', lineHeight: '1.8' }}>
                  Nous savons à quel point les problèmes d’humidité et de moisissures peuvent impacter la santé, le confort et la valeur d’un bien immobilier. C’est pourquoi nous avons développé une expertise unique pour traiter les causes en profondeur et garantir des résultats durables.
                </p>
              </div>

              <div className="commitments-area" style={{ marginBottom: '4rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'white' }}>Nos Engagements</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                  <div className="block-item" style={{ padding: '1.5rem' }}>
                    <div className="block-item-header">
                      <Clock size={20} className="accent" />
                      <span className="block-item-target">RÉACTIVITÉ</span>
                    </div>
                    <p className="block-item-content">Réponse rapide à vos demandes, avec un devis gratuit sous 48h.</p>
                  </div>
                  <div className="block-item" style={{ padding: '1.5rem' }}>
                    <div className="block-item-header">
                      <Search size={20} className="accent" />
                      <span className="block-item-target">PRÉCISION</span>
                    </div>
                    <p className="block-item-content">Diagnostic précis et détaillé grâce à nos outils professionnels.</p>
                  </div>
                  <div className="block-item" style={{ padding: '1.5rem' }}>
                    <div className="block-item-header">
                      <ShieldCheck size={20} className="accent" />
                      <span className="block-item-target">NORMES</span>
                    </div>
                    <p className="block-item-content">Utilisation de produits homologués et respectueux des normes.</p>
                  </div>
                  <div className="block-item" style={{ padding: '1.5rem' }}>
                    <div className="block-item-header">
                      <Activity size={20} className="accent" />
                      <span className="block-item-target">SUIVI</span>
                    </div>
                    <p className="block-item-content">Accompagnement rigoureux pour garantir un résultat durable.</p>
                  </div>
                </div>
              </div>

              <div className="team-clients">
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'white' }}>Une équipe qualifiée à votre service</h3>
                <p style={{ color: 'var(--text-gray)', lineHeight: '1.8', marginBottom: '2rem' }}>
                  Notre équipe est composée de techniciens expérimentés, formés aux dernières techniques de traitement de l’humidité, de désinfection et d’assainissement de l’air.
                </p>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <h4 style={{ marginBottom: '1rem', color: 'var(--primary-green)' }}>Nous accompagnons :</h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-white)' }}>
                    <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={18} className="accent" /> Les particuliers (maisons, appartements, caves, salles de bain)</li>
                    <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={18} className="accent" /> Les professionnels (bureaux, commerces, restaurants, santé)</li>
                    <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={18} className="accent" /> Les syndics de copropriété et collectivités</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="block-footer-info" style={{ background: 'var(--dark-surface)', borderLeft: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center' }}>
               <div className="footer-card" style={{ padding: '3rem' }}>
                  <h3 style={{ fontSize: '1.5rem !important', marginBottom: '1.5rem' }}>PHILOSOPHIE</h3>
                  <p style={{ color: 'var(--text-gray)', fontSize: '1rem', lineHeight: '2' }}>
                    Chez TDM FRANCE, nous croyons que chaque client mérite une solution personnalisée. Chaque intervention est réalisée avec le souci du détail et le respect total des occupants et des lieux.
                  </p>
                  <div className="availability" style={{ marginTop: '2rem' }}>
                    <ShieldCheck size={18} className="accent" />
                    <span>Expertise Certifiée Haute-Garonne</span>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
