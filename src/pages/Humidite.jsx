import React from 'react'
import { motion } from 'framer-motion'
import { Droplets, Wind, Home, ShieldCheck, Search, Activity, AlertTriangle } from 'lucide-react'
import FAQ from '../components/FAQ'

const Humidite = () => {
  const faqs = [
    { question: "Pourquoi des moisissures apparaissent-elles sur mes murs ?", answer: "Les moisissures sont le signe d'un excès d'humidité, souvent dû à une mauvaise ventilation (condensation) ou à des infiltrations (remontées capillaires, fuites). Notre diagnostic identifie la cause exacte." },
    { question: "Le diagnostic est-il gratuit ?", answer: "Oui, TDM FRANCE propose un pré-diagnostic gratuit pour évaluer l'étendue des dégâts et vous proposer la solution technique la plus adaptée." },
    { question: "L'humidité est-elle dangereuse pour la santé ?", answer: "Absolument. Elle favorise le développement d'acariens et de champignons dont les spores sont responsables d'allergies, d'asthme et de troubles respiratoires chroniques." }
  ]

  const risks = [
    { 
      title: "Santé Respiratoire", 
      icon: <Activity className="accent" size={40} />, 
      content: "Les spores de moisissures sont inhalées et causent des bronchites, des allergies cutanées et une aggravation sévère de l'asthme, particulièrement chez les plus fragiles." 
    },
    { 
      title: "Dégradation Structurelle", 
      icon: <Home className="accent" size={40} />, 
      content: "L'humidité fragilise les matériaux : effritement des plâtres, pourrissement des bois de charpente, décollement des papiers peints et cloquage des peintures." 
    },
    { 
      title: "Odeurs & Inconfort", 
      icon: <Wind className="accent" size={40} />, 
      content: "Une maison humide est difficile à chauffer et dégage une odeur de moisi persistante qui s'imprègne dans les textiles et réduit drastiquement la valeur de votre bien." 
    }
  ]

  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="service-hero-premium">
        <div className="hero-bg">
          <img src="/hero-humidite.png" alt="Traitement Humidité" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content-mini"
          >
            <h1>HUMIDITÉ & <span className="accent">MOISISSURES</span></h1>
            <p>
              Murs humides, salpêtre ou taches noires ? Ne masquez pas les symptômes. 
              TDM FRANCE traite la source du problème pour un habitat sain et durable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Risks Section */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontSize: '2.5rem' }}>Les Dangers d'un <span className="accent">Habitat Humide</span></h2>
          </div>
          <div className="services-grid">
            {risks.map((risk, index) => (
              <motion.div 
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div style={{ marginBottom: '1.5rem' }}>{risk.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{risk.title}</h3>
                <p style={{ color: 'var(--text-gray)', lineHeight: '1.6' }}>{risk.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocol Section */}
      <section className="protocol-section" style={{ padding: '8rem 0' }}>
        <div className="container">
          <motion.div 
            className="premium-block-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="block-content">
              <div className="block-header">
                <div className="block-icon-wrapper">
                  <Search className="accent" size={40} />
                </div>
                <div className="block-title-area">
                  <h2 className="block-title">NOTRE <span className="accent">DIAGNOSTIC</span> EXPERT</h2>
                  <div className="block-badge">RECHERCHE DE CAUSE</div>
                </div>
              </div>

              <p className="block-intro">
                On ne traite pas l'humidité sans en comprendre l'origine. Notre expertise permet d'isoler la cause réelle pour une efficacité garantie.
              </p>

              <div className="block-grid">
                <div className="block-item">
                  <div className="block-item-header">
                    <Droplets size={20} className="accent" />
                    <span className="block-item-target">DIAGNOSTIC COMPLET</span>
                  </div>
                  <p className="block-item-content">Mesure du taux d'humidité, recherche de fuites et analyse des ponts thermiques.</p>
                </div>

                <div className="block-item">
                  <div className="block-item-header">
                    <Droplets size={20} className="accent" />
                    <span className="block-item-target">TRAITEMENT DES MOISISSURES</span>
                  </div>
                  <p className="block-item-content">Nettoyage fongicide haute performance et assainissement des supports contaminés.</p>
                </div>

                <div className="block-item">
                  <div className="block-item-header">
                    <Droplets size={20} className="accent" />
                    <span className="block-item-target">SOLUTIONS PÉRENNES</span>
                  </div>
                  <p className="block-item-content">Installation de CTA, traitement des remontées capillaires par injection de résine hydrophobe.</p>
                </div>
              </div>
            </div>

            <div className="block-footer-info">
              <div className="footer-card">
                <h3>VOTRE MAISON RESPIRE</h3>
                <p>
                  Une maison saine commence par un air renouvelé. 
                  Nos solutions ne se contentent pas de nettoyer les murs, elles restaurent la qualité de l'air intérieur pour protéger durablement votre famille et votre patrimoine immobilier.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ title="Expertise Humidité" questions={faqs} />
    </div>
  )
}

export default Humidite
