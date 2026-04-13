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
      <section style={{ padding: '8rem 0', background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="intervention-grid">
            <motion.div 
              style={{ background: 'var(--dark-bg)', padding: '3rem', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <AlertCircle className="accent" size={50} style={{ marginBottom: '1.5rem' }} />
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>LA <span className="accent">MENACE</span> INVISIBLE</h2>
              <p style={{ color: 'var(--text-gray)', marginBottom: '1.5rem' }}>
                Saviez-vous que si vous voyez un cafard en plein jour, c'est que le nid est déjà saturé ?
              </p>
              <ul style={{ color: 'var(--text-white)', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', gap: '10px' }}><Target size={18} className="accent" /> <strong>Traitement par Gel :</strong> Application précise sans odeur et sans évacuation.</li>
                <li style={{ display: 'flex', gap: '10px' }}><Target size={18} className="accent" /> <strong>Nébulisation :</strong> Pour les volumes importants et infestations massives.</li>
                <li style={{ display: 'flex', gap: '10px' }}><Target size={18} className="accent" /> <strong>Destruction de nids :</strong> Guêpes et frelons asiatiques même à grande hauteur.</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>UNE MÉTHODE SCIENTIFIQUE</h3>
              <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                Nous n'utilisons pas de simples insecticides du commerce. Nos molécules professionnelles ciblent le système nerveux des insectes et profitent de leur comportement social (nécrophagie) pour contaminer l'ensemble de la colonie jusqu'au cœur du nid.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ title="Désinsectisation" questions={faqs} />
    </div>
  )
}

export default Desinsectisation
