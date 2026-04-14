import React from 'react'
import { motion } from 'framer-motion'
import { Droplets, Wind, Home, ShieldCheck, Search, Activity, AlertTriangle, CheckCircle2, Thermometer, Fan, Zap, Clock } from 'lucide-react'
import FAQ from '../components/FAQ'

const Humidite = () => {
  const faqs = [
    { question: "Pourquoi des moisissures apparaissent-elles sur mes murs ?", answer: "Les moisissures sont le signe d'un excès d'humidité, souvent dû à une mauvaise ventilation (condensation) ou à des infiltrations (remontées capillaires, fuites). Notre diagnostic identifie la cause exacte." },
    { question: "Le diagnostic est-il gratuit ?", answer: "Oui, TDM FRANCE propose un pré-diagnostic gratuit pour évaluer l'étendue des dégâts et vous proposer la solution technique la plus adaptée." },
    { question: "L'humidité est-elle dangereuse pour la santé ?", answer: "Absolument. Elle favorise le développement d'acariens et de champignons dont les spores sont responsables d'allergies, d'asthme et de troubles respiratoires chroniques." }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="service-hero-premium">
        <div className="hero-bg">
          <img src="/hero-humidite.png" alt="Traitement Humidité et Moisissures Toulouse" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content-mini"
          >

            <h1>TRAITEMENT & <span className="accent">DÉSINFECTION</span></h1>
            <p>
              Intervention experte à Toulouse et ses alentours pour éradiquer 
              définitivement l'humidité, les moisissures et assainir votre air intérieur.
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

      {/* Traitement des moisissures */}
      <section style={{ padding: '8rem 0', background: 'var(--dark-bg)' }}>
        <div className="container">
          <div className="intervention-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>TRAITEMENT DES <span className="accent">MOISISSURES</span></h2>
              <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                Les moisissures se développent dans les zones humides et mal ventilées, provoquant des dégradations matérielles et des risques réels pour la santé (allergies, troubles respiratoires).
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  "Diagnostic complet pour identifier l’origine (condensation, infiltration, remontées capillaires).",
                  "Traitement anti-fongique professionnel sur murs, plafonds, caves et salles de bains.",
                  "Assainissement durable avec conseils de prévention (ventilation, étanchéité, isolation)."
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', color: 'var(--text-white)' }}>
                    <CheckCircle2 className="accent" size={24} style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              className="map-container"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ position: 'relative', height: '400px', overflow: 'hidden' }}
            >
              <img src="/hero-humidite.png" alt="Expertise moisissures" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--dark-bg), transparent)' }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Désinfection Section */}
      <section style={{ padding: '8rem 0', background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontSize: '2.5rem' }}>DÉSINFECTION <span className="accent">PROFESSIONNELLE</span></h2>
            <p style={{ maxWidth: '800px', margin: '1.5rem auto', color: 'var(--text-gray)' }}>
              Que ce soit après un sinistre, dans un logement insalubre ou pour des locaux professionnels, nous réalisons des désinfections conformes aux normes d’hygiène.
            </p>
          </div>
          <div className="services-grid">
            <motion.div className="service-card" whileHover={{ y: -10 }}>
              <ShieldCheck className="accent" size={40} style={{ marginBottom: '1.5rem' }} />
              <h3>LOGEMENTS & BUREAUX</h3>
              <p>Interventions dans les logements, bureaux, commerces, établissements de santé et parties communes.</p>
            </motion.div>
            <motion.div className="service-card" whileHover={{ y: -10 }}>
              <Activity className="accent" size={40} style={{ marginBottom: '1.5rem' }} />
              <h3>PROCÉDURES STRICTES</h3>
              <p>Protocoles rigoureux avec équipements de protection individuelle et produits certifiés.</p>
            </motion.div>
            <motion.div className="service-card" whileHover={{ y: -10 }}>
              <Search className="accent" size={40} style={{ marginBottom: '1.5rem' }} />
              <h3>RAPPORT DÉTAILLÉ</h3>
              <p>Remise d’un rapport d’intervention détaillé validant la conformité de l'assainissement.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diagnostic et traitement de l'humidité */}
      <section style={{ padding: '8rem 0', background: 'var(--dark-bg)' }}>
        <div className="container">
          <div className="premium-block-container">
            <div className="block-content">
              <div className="block-header">
                <div className="block-icon-wrapper">
                  <Thermometer className="accent" size={40} />
                </div>
                <div className="block-title-area">
                  <h2 className="block-title">DIAGNOSTIC & <span className="accent">TRAITEMENT</span></h2>
                  <div className="block-badge">TECHNOLOGIE DE MESURE</div>
                </div>
              </div>
              <p className="block-intro">
                L’humidité est souvent la cause des moisissures. Nos techniciens réalisent un diagnostic précis grâce à des outils de mesure (hygrométrie, thermographie).
              </p>
              <div className="block-grid">
                <div className="block-item">
                  <div className="block-item-header">
                    <Fan size={20} className="accent" />
                    <span className="block-item-target">VENTILATION</span>
                  </div>
                  <p className="block-item-content">Amélioration de la ventilation (VMC, entrées d'air) pour un renouvellement constant.</p>
                </div>
                <div className="block-item">
                  <div className="block-item-header">
                    <Home size={20} className="accent" />
                    <span className="block-item-target">ÉTANCHÉITÉ</span>
                  </div>
                  <p className="block-item-content">Traitement de l’étanchéité des murs et toitures pour bloquer les infiltrations.</p>
                </div>
                <div className="block-item">
                  <div className="block-item-header">
                    <Droplets size={20} className="accent" />
                    <span className="block-item-target">REMONTÉES CAPILLAIRES</span>
                  </div>
                  <p className="block-item-content">Injection de résines hydrophobes et barrières physiques contre l'humidité du sol.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dégât des eaux & Air intérieur */}
      <section style={{ padding: '8rem 0', background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="services-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <AlertTriangle className="accent" size={40} style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.8rem' }}>DÉSHUMIDIFICATION <br/><span style={{ fontSize: '1.2rem', opacity: 0.7 }}>APRÈS DÉGÂT DES EAUX</span></h3>
              <p style={{ margin: '1.5rem 0' }}>Séchage rapide essentiel pour éviter le développement systémique des moisissures.</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>• Déshumidificateurs professionnels</li>
                <li style={{ marginBottom: '0.5rem' }}>• Contrôles réguliers hygrométriques</li>
                <li style={{ marginBottom: '0.5rem' }}>• Rapport de séchage technique</li>
              </ul>
            </motion.div>

            <motion.div 
              className="service-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Wind className="accent" size={40} style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.8rem' }}>ASSAINISSEMENT <br/><span style={{ fontSize: '1.2rem', opacity: 0.7 }}>DE L'AIR INTÉRIEUR</span></h3>
              <p style={{ margin: '1.5rem 0' }}>Un air de mauvaise qualité favorise allergies et maux de tête chroniques.</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>• Nettoyage des systèmes de ventilation</li>
                <li style={{ marginBottom: '0.5rem' }}>• Installation de filtres de haute efficacité</li>
                <li style={{ marginBottom: '0.5rem' }}>• Conseils QAI (Qualité Air Intérieur)</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '4rem 0', background: 'var(--primary-green)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'black', fontSize: '2.5rem', marginBottom: '1rem' }}>BESOIN D’UNE INTERVENTION RAPIDE ?</h2>
          <p style={{ color: 'rgba(0,0,0,0.8)', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
            Demandez votre devis gratuit en 48h par nos experts.
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
            FAIRE UNE DEMANDE
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ title="Expertise Humidité" questions={faqs} />
    </div>
  )
}

export default Humidite

