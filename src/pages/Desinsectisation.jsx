import React from 'react'
import { motion } from 'framer-motion'
import { Bug, Droplets, Target, ShieldAlert, Thermometer, Wind, AlertCircle } from 'lucide-react'
import FAQ from '../components/FAQ'

const Desinsectisation = () => {
  const faqs = [
    { question: "Comment se débarrasser définitivement des cafards ?", answer: "L'utilisation de gels professionnels et de traitements de choc est nécessaire. Une hygiène stricte couplée à notre intervention garantit une éradication totale." },
    { question: "Combien de temps après le traitement puis-je rentrer chez moi ?", answer: "Pour la plupart de nos traitements par gel, vous n'avez pas besoin de quitter votre logement. Pour une pulvérisation, un délai de 4 heures est généralement conseillé." },
    { question: "Intervenez-vous contre les frelons et guêpes ?", answer: "Oui, nous sommes équipés pour traiter les nids de guêpes et de frelons asiatiques en toute sécurité." }
  ]

  const healthImpacts = [
    { 
      title: "Allergies & Asthme", 
      icon: <Wind className="accent" size={40} />, 
      content: "Les déjections et les mues de cafards/blattes libèrent des allergènes puissants qui peuvent déclencher des crises d'asthme sévères, surtout chez les enfants et les personnes âgées." 
    },
    { 
      title: "Vecteurs de Bactéries", 
      icon: <Thermometer className="accent" size={40} />, 
      content: "Les insectes rampants transportent des agents pathogènes comme la Salmonellose, la Dysenterie et la Gastro-entérite en passant des zones de déchets à vos plans de travail." 
    },
    { 
      title: "Dégâts Électriques", 
      icon: <ShieldAlert className="accent" size={40} />, 
      content: "Les blattes cherchent la chaleur et se logent souvent dans les appareils électroménagers (cafetières, micro-ondes), causant des pannes et des courts-circuits." 
    }
  ]

  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="service-hero-premium">
        <div className="hero-bg">
          <img src="/hero-desinsectisation.png" alt="Désinsectisation Professionnelle" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content-mini"
          >
            <h1>DÉSINSECTISATION <span className="accent">DÉFINITIVE</span></h1>
            <p>
              Cafards, blattes, fourmis ou frelons ? Une seule femelle cafard peut engendrer jusqu'à 100 000 descendants en un an. 
              Agissez avant que l'infestation ne devienne incontrôlable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Health Impacts Section */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontSize: '2.5rem' }}>Risques Sanitaires et <span className="accent">Hygiène</span></h2>
          </div>
          <div className="services-grid">
            {healthImpacts.map((risk, index) => (
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
                  <AlertCircle className="accent" size={40} />
                </div>
                <div className="block-title-area">
                  <h2 className="block-title">LA <span className="accent">MENACE</span> INVISIBLE</h2>
                  <div className="block-badge">INTERVENTION DE CHOC</div>
                </div>
              </div>

              <p className="block-intro">
                Saviez-vous que si vous voyez un cafard en plein jour, c'est que le nid est déjà saturé ?
              </p>

              <div className="block-grid">
                <div className="block-item">
                  <div className="block-item-header">
                    <Target size={20} className="accent" />
                    <span className="block-item-target">TRAITEMENT PAR GEL</span>
                  </div>
                  <p className="block-item-content">Application précise sans odeur et sans évacuation des locaux.</p>
                </div>

                <div className="block-item">
                  <div className="block-item-header">
                    <Target size={20} className="accent" />
                    <span className="block-item-target">NÉBULISATION / BRUMISATION</span>
                  </div>
                  <p className="block-item-content">Traitement des volumes importants et des infestations massives.</p>
                </div>

                <div className="block-item">
                  <div className="block-item-header">
                    <Target size={20} className="accent" />
                    <span className="block-item-target">DESTRUCTION DE NIDS</span>
                  </div>
                  <p className="block-item-content">Guêpes et frelons asiatiques même à grande hauteur ou accès difficiles.</p>
                </div>
              </div>
            </div>

            <div className="block-footer-info">
              <div className="footer-card">
                <h3>MÉTHODE SCIENTIFIQUE</h3>
                <p>
                  Nous n'utilisons pas de simples insecticides du commerce. Nos molécules professionnelles ciblent le système nerveux des insectes et profitent de leur comportement social (nécrophagie) pour contaminer l'ensemble de la colonie jusqu'au cœur du nid.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ title="Désinsectisation" questions={faqs} />
    </div>
  )
}

export default Desinsectisation
