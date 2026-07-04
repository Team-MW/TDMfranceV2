import React from 'react'
import { motion } from 'framer-motion'
import { Flame, Fan, CheckCircle2, ShieldCheck, Clock, Settings, Settings2, ShieldAlert } from 'lucide-react'
import FAQ from '../components/FAQ'
import CityLinks from '../components/CityLinks'

const DegraissageHotte = () => {
  const faqs = [
    { question: "Pourquoi le dégraissage de hotte est-il obligatoire ?", answer: "Avec le temps, une hotte s'encrasse de graisses combustibles, ce qui rend le dégraissage obligatoire au minimum une fois par an par une entreprise agréée, conformément aux articles GC18 et GC21 relatifs à la prévention des risques incendie en restauration." },
    { question: "À quelle fréquence faut-il nettoyer les filtres ?", answer: "Nous recommandons un nettoyage des filtres de hotte professionnelle au minimum une fois par semaine afin de maintenir une puissance d’aspiration optimale et d'éviter l’encrassement du moteur." },
    { question: "Délivrez-vous une attestation après intervention ?", answer: "Oui, à la fin de chaque prestation, nous délivrons une attestation certifiée conforme, indispensable lors des contrôles des services d’hygiène ou pour votre assurance professionnelle." }
  ]

  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="service-hero-premium">
        <div className="hero-bg">
          <img src="/hotte_degraissee.png" alt="Dégraissage Hotte PRO" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content-mini"
          >
            <h1>DÉGRAISSAGE <span className="accent">HOTTE PRO</span></h1>
            <p>
              Nettoyage, dégraissage et maintenance de hottes de cuisine professionnelles. Mise aux normes et sécurité incendie.
            </p>
            <div style={{ marginTop: '2.5rem' }}>
              <a href="/contact" className="whatsapp-bar" style={{ textDecoration: 'none' }}>
                <Clock size={20} />
                DEVIS GRATUIT EN 48H
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ padding: '8rem 0', background: 'var(--dark-bg)' }}>
        <div className="container">
          <div className="intervention-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>L'IMPORTANCE DU <span className="accent">DÉGRAISSAGE</span></h2>
              <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                La hotte de cuisine professionnelle est un élément central et indispensable au bon fonctionnement d’un restaurant, car une hotte d’extraction défaillante peut rapidement entraîner de graves conséquences : accumulation de fumée et d’odeurs dans la salle, bruit anormal du moteur de hotte, surconsommation énergétique, et surtout risque accru d’incendie lié à l’accumulation de graisses.
              </p>
              <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                Avec le temps, une hotte de restaurant s’encrasse naturellement en graisses combustibles, ce qui rend le dégraissage obligatoire au minimum une fois par an (conformément aux articles GC18 et GC21). Nous recommandons même un nettoyage hebdomadaire des filtres pour éviter toute perte de performance.
              </p>
            </motion.div>
            <motion.div
              className="map-container"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ position: 'relative', height: '400px', overflow: 'hidden' }}
            >
              <img src="/hotte_degraissee.png" alt="Dégraissage Hotte" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--dark-bg), transparent)' }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '8rem 0', background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontSize: '2.5rem' }}>NOS <span className="accent">PRESTATIONS</span></h2>
            <p style={{ maxWidth: '800px', margin: '1.5rem auto', color: 'var(--text-gray)' }}>
              HYGIS réalise un dégraissage complet de hotte de cuisine afin de restaurer la puissance d’aspiration d’origine et garantir la sécurité de votre établissement.
            </p>
          </div>
          <div className="services-grid">
            <motion.div className="service-card" whileHover={{ y: -10 }}>
              <Flame className="accent" size={40} style={{ marginBottom: '1.5rem' }} />
              <h3>NETTOYAGE & DÉGRAISSAGE</h3>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginTop: '1rem' }}>
                {["Protection fourneaux par bâche", "Dépose des filtres et moteur", "Pulvérisation dégraissant puissant", "Brossage et huile de coude", "Rinçage, Séchage & Lustrage", "Signature registre de sécurité"].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.8rem', marginBottom: '0.5rem', color: 'var(--text-gray)', fontSize: '0.95rem' }}>
                    <CheckCircle2 className="accent" size={16} style={{ flexShrink: 0, marginTop: '4px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div className="service-card" whileHover={{ y: -10 }}>
              <Settings2 className="accent" size={40} style={{ marginBottom: '1.5rem' }} />
              <h3>RÉPARATION & INSTALLATION</h3>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginTop: '1rem' }}>
                {["Remplacement moteurs de hotte", "Remplacement variateurs", "Installation hotte professionnelle", "Filtres mailles ou chocs sur-mesure", "Création trappe de visite", "Conseils techniques"].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.8rem', marginBottom: '0.5rem', color: 'var(--text-gray)', fontSize: '0.95rem' }}>
                    <CheckCircle2 className="accent" size={16} style={{ flexShrink: 0, marginTop: '4px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="service-card" whileHover={{ y: -10 }}>
              <Fan className="accent" size={40} style={{ marginBottom: '1.5rem' }} />
              <h3>TRAITEMENT DES ODEURS</h3>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginTop: '1rem' }}>
                {["Mise en place caisson charbons actifs", "Remplacement charbons actifs", "Pose de hotte HSE anti-odeurs", "Système traitement d'odeurs", "Traitement ozone", "Diagnostic & Solution"].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.8rem', marginBottom: '0.5rem', color: 'var(--text-gray)', fontSize: '0.95rem' }}>
                    <CheckCircle2 className="accent" size={16} style={{ flexShrink: 0, marginTop: '4px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Attestation & Conformité */}
      <section style={{ padding: '8rem 0', background: 'var(--dark-bg)' }}>
        <div className="container">
          <div className="premium-block-container">
            <div className="block-content">
              <div className="block-header">
                <div className="block-icon-wrapper">
                  <ShieldAlert className="accent" size={40} />
                </div>
                <div className="block-title-area">
                  <h2 className="block-title">ATTESTATION DE <span className="accent">CONFORMITÉ</span></h2>
                  <div className="block-badge">NORMES EN VIGUEUR</div>
                </div>
              </div>
              <p className="block-intro" style={{ marginBottom: '1.5rem' }}>
                À la fin de chaque prestation, nos techniciens agréés consignent vos observations sur le bon d’intervention. HYGIS vous délivre ensuite une attestation certifiée conforme de dégraissage, indispensable lors des contrôles des services d’hygiène, des inspections sanitaires ou pour votre assurance.
              </p>
              <p className="block-intro">
                Ce document officiel prouve que votre hotte de restaurant a été nettoyée selon les normes en vigueur (prévention incendie). Il est également essentiel de faire signer le registre de sécurité (carnet rouge) lors de l’intervention.
              </p>
              <div className="block-grid" style={{ marginTop: '2rem' }}>
                <div className="block-item">
                  <div className="block-item-header">
                    <ShieldCheck size={20} className="accent" />
                    <span className="block-item-target">SÉCURITÉ</span>
                  </div>
                  <p className="block-item-content">Prévention des risques d’incendie et respect de la réglementation GC18 et GC21.</p>
                </div>
                <div className="block-item">
                  <div className="block-item-header">
                    <Settings size={20} className="accent" />
                    <span className="block-item-target">PERFORMANCE</span>
                  </div>
                  <p className="block-item-content">Maintien d'une aspiration optimale et prolongation de la durée de vie du moteur.</p>
                </div>
                <div className="block-item">
                  <div className="block-item-header">
                    <CheckCircle2 size={20} className="accent" />
                    <span className="block-item-target">HYGIÈNE</span>
                  </div>
                  <p className="block-item-content">Produits conformes aux normes AFNOR, contact alimentaire autorisé.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '4rem 0', background: 'var(--primary-green)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'black', fontSize: '2.5rem', marginBottom: '1rem' }}>UN ENTRETIEN À PROGRAMMER ?</h2>
          <p style={{ color: 'rgba(0,0,0,0.8)', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
            N’attendez pas l'incident ! Faites réaliser le nettoyage de votre système de ventilation.
          </p>
          <a href="/contact" style={{
            display: 'inline-block',
            padding: '1.2rem 3rem',
            background: 'black',
            color: 'white',
            borderRadius: '50px',
            fontWeight: '900',
            textDecoration: 'none',
            fontSize: '1.1rem',
            transition: 'var(--transition-smooth)'
          }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            DEMANDER UN DEVIS
          </a>
        </div>
      </section>

      {/* City Sections */}
      <CityLinks service="degraissage-hotte" />

      {/* FAQ Section */}
      <FAQ title="Dégraissage Hotte" questions={faqs} />
    </div>
  )
}

export default DegraissageHotte
