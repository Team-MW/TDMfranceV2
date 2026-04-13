import React from 'react'
import { motion } from 'framer-motion'
import { ShieldAlert, Zap, Search, Bed, Brain, Users, Info } from 'lucide-react'
import FAQ from '../components/FAQ'

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
      <section style={{ padding: '8rem 0', background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="intervention-grid">
            <motion.div 
              style={{ background: 'var(--dark-bg)', padding: '3rem', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Info className="accent" size={50} style={{ marginBottom: '1.5rem' }} />
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>LES BONS <span className="accent">REFLEXES</span></h2>
              <p style={{ color: 'var(--text-gray)', marginBottom: '1.5rem' }}>
                En cas de suspicion, voici les étapes cruciales à suivre avant notre arrivée :
              </p>
              <ul style={{ color: 'var(--text-white)', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', gap: '10px' }}><Search size={18} className="accent" /> <strong>Ne déménagez rien :</strong> Ne changez pas de chambre pour dormir ailleurs, elles vous suivront.</li>
                <li style={{ display: 'flex', gap: '10px' }}><Search size={18} className="accent" /> <strong>Lavage à 60°C :</strong> Lavez votre linge de lit et vêtements à haute température.</li>
                <li style={{ display: 'flex', gap: '10px' }}><Search size={18} className="accent" /> <strong>Aspiration :</strong> Aspirez minutieusement et jetez immédiatement le sac dans une poubelle extérieure.</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>DOUBLE TRAITEMENT</h3>
              <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                Le cycle de vie de la punaise de lit est complexe. Les œufs sont extrêmement résistants aux produits chimiques. C'est pourquoi nous préconisons systématiquement deux passages : le premier pour éradiquer les adultes et larves, le second 15 jours plus tard pour neutraliser les nouvelles éclosions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ title="Punaises de Lit" questions={faqs} />
    </div>
  )
}

export default PunaisesDeLit
