import React from 'react'
import { motion } from 'framer-motion'
import { ShieldAlert, Zap, Search, Bed, Brain, Users, Info } from 'lucide-react'
import FAQ from '../components/FAQ'
import CityLinks from '../components/CityLinks'

const PunaisesDeLit = () => {
  const faqs = [
    { question: "Comment savoir si j'ai des punaises de lit ?", answer: "Les signes incluent des piqûres en ligne sur la peau, des petites taches de sang sur les draps, et des points noirs (excréments) dans les coutures du matelas." },
    { question: "Faut-il jeter mon matelas ?", answer: "Dans 95% des cas, non. Nos traitements professionnels permettent de sauver votre literie si les consignes de préparation sont suivies." },
    { question: "Combien de traitements sont nécessaires ?", answer: "Généralement, deux passages espacés de 15 jours sont nécessaires pour éliminer le cycle complet de reproduction (oeufs et adultes)." }
  ]

  const impacts = [
    { 
      title: "Impact Psychologique", 
      icon: <Brain className="accent" size={40} />, 
      content: "L'infestation provoque une anxiété majeure, une hyper-vigilance et, dans certains cas, un syndrome de stress post-traumatique. Le sommeil est gravement perturbé par la peur des piqûres nocturnes." 
    },
    { 
      title: "Propagation Rapide", 
      icon: <Users className="accent" size={40} />, 
      content: "La punaise de lit est une excellente voyageuse. Elle se cache dans les bagages, les vêtements et les meubles d'occasion, colonisant tout un immeuble ou un hôtel en quelques semaines." 
    },
    { 
      title: "Literie & Mobilier", 
      icon: <Bed className="accent" size={40} />, 
      content: "Si elle n'est pas traitée, l'infestation rend votre literie, vos canapés et vos tapis irrécupérables en raison des taches de sang et des accumulations d'excréments noirs." 
    }
  ]

  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="service-hero-premium">
        <div className="hero-bg">
          <img src="/hero-punaises.png" alt="Extermination Punaises de Lit" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content-mini"
          >
            <h1>PUNAISES DE LIT : <span className="accent">STOP</span> AU CAUCHEMAR</h1>
            <p>
              Ne tentez pas de régler le problème avec des bombes insecticides du commerce, vous ne ferez que disperser les punaises dans les autres pièces. 
              Une intervention professionnelle est la seule solution viable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impacts Section */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontSize: '2.5rem' }}>Une Nuisance <span className="accent">Sociale & Mentale</span></h2>
          </div>
          <div className="services-grid">
            {impacts.map((risk, index) => (
              <motion.div 
                key={index}
                className="service-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
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

      {/* Advice Section */}
      <section className="advice-section" style={{ padding: '8rem 0' }}>
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
                  <Info className="accent" size={40} />
                </div>
                <div className="block-title-area">
                  <h2 className="block-title">LES BONS <span className="accent">RÉFLEXES</span></h2>
                  <div className="block-badge">PROTOCOLE PRÉ-INTERVENTION</div>
                </div>
              </div>

              <p className="block-intro">
                En cas de suspicion, voici les étapes cruciales à suivre avant notre arrivée :
              </p>

              <div className="block-grid">
                <div className="block-item">
                  <div className="block-item-header">
                    <Search size={20} className="accent" />
                    <span className="block-item-target">NE DÉMÉNAGEZ RIEN</span>
                  </div>
                  <p className="block-item-content">Ne changez pas de chambre pour dormir ailleurs, les punaises vous suivraient dans les autres pièces.</p>
                </div>

                <div className="block-item">
                  <div className="block-item-header">
                    <Search size={20} className="accent" />
                    <span className="block-item-target">LAVAGE À 60°C</span>
                  </div>
                  <p className="block-item-content">Lavez votre linge de lit et vos vêtements à haute température pour éliminer œufs et adultes.</p>
                </div>

                <div className="block-item">
                  <div className="block-item-header">
                    <Search size={20} className="accent" />
                    <span className="block-item-target">ASPIRATION MINUTIEUSE</span>
                  </div>
                  <p className="block-item-content">Aspirez les coutures du matelas et jetez immédiatement le sac dans une poubelle extérieure.</p>
                </div>
              </div>
            </div>

            <div className="block-footer-info">
              <div className="footer-card">
                <h3>DOUBLE TRAITEMENT</h3>
                <p>
                  Le cycle de vie de la punaise de lit est complexe. Les œufs sont extrêmement résistants aux produits chimiques. C'est pourquoi nous préconisons systématiquement deux passages pour neutraliser les nouvelles éclosions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* City Sections */}
      <CityLinks service="punaises-de-lit" />

      {/* FAQ Section */}
      <FAQ title="Punaises de Lit" questions={faqs} />
    </div>
  )
}

export default PunaisesDeLit
