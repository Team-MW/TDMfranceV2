import React from 'react'
import { motion } from 'framer-motion'
import { Rat, Shield, CheckCircle, AlertTriangle, FileText, Zap, HeartPulse } from 'lucide-react'
import FAQ from '../components/FAQ'

const Deratisation = () => {
  const faqs = [
    { question: "Comment savoir si j'ai des rats chez moi ?", answer: "Plusieurs signes ne trompent pas : bruits de grattement dans les murs ou plafonds, présence d'excréments noirs allongés, traces de dents sur les fils ou emballages, et odeurs d'ammoniac." },
    { question: "Les produits que vous utilisez sont-ils dangereux ?", answer: "Nous utilisons des produits homologués et sécurisés, placés dans des boîtiers d'appâtage sécurisés inaccessibles aux enfants et aux animaux domestiques." },
    { question: "Combien de temps dure une intervention ?", answer: "Une intervention dure généralement entre 45 et 90 minutes selon la taille du logement, mais le processus complet d'éradication peut nécessiter plusieurs passages." }
  ]

  const risks = [
    { 
      title: "Maladies Graves", 
      icon: <HeartPulse className="accent" size={40} />, 
      content: "Les rongeurs sont porteurs de maladies transmissibles à l'homme comme la Leptospirose (maladie du rat), la Salmonellose, et la Fièvre hémorragique. Une simple morsure ou le contact avec leurs déjections suffit." 
    },
    { 
      title: "Dégâts Matériels", 
      icon: <Zap className="accent" size={40} />, 
      content: "Les rats doivent ronger constamment. Ils s'attaquent aux câbles électriques (cause n°1 d'incendies d'origine inconnue), aux isolations de combles et aux cloisons de plâtre." 
    },
    { 
      title: "Pollution Alimentaire", 
      icon: <AlertTriangle className="accent" size={40} />, 
      content: "L'urine et les excréments contaminent vos stocks alimentaires et surfaces de préparation, rendant tout produit impropre à la consommation et dangereux pour la santé publique." 
    }
  ]

  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="service-hero-premium">
        <div className="hero-bg">
          <img src="/hero-deratisation.png" alt="Dératisation Professionnelle" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content-mini"
          >
            <h1>DÉRATISATION <span className="accent">RADICALE</span></h1>
            <p>
              Rats, souris, mulots ou surmulots ? Ne laissez pas une infestation compromettre votre sécurité. 
              TDM FRANCE intervient sous 24h avec des protocoles d'éradication certifiés.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Risks Section */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontSize: '2.5rem' }}>Pourquoi Agir <span className="accent">Immédiatement</span> ?</h2>
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

      {/* Legislation Section */}
      <section style={{ padding: '8rem 0', background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="intervention-grid">
            <motion.div 
              style={{ background: 'var(--dark-bg)', padding: '3rem', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <FileText className="accent" size={50} style={{ marginBottom: '1.5rem' }} />
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>CE QUE DIT LA <span className="accent">LOI</span></h2>
              <p style={{ color: 'var(--text-gray)', marginBottom: '1.5rem' }}>
                Le Règlement Sanitaire Départemental oblige les propriétaires et locataires à prendre toutes les mesures pour éviter l'introduction des rongeurs.
              </p>
              <ul style={{ color: 'var(--text-white)', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={18} className="accent" /> <strong>Restaurants / Commerces :</strong> Obligation de plan de lutte contre les nuisibles (Norme HACCP).</li>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={18} className="accent" /> <strong>Syndics :</strong> Responsabilité pénale en cas d'infestation prolongée non traitée.</li>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={18} className="accent" /> <strong>Particuliers :</strong> Obligation de maintien de l'insalubrité publique.</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>PROTECTION TOTALE</h3>
              <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                Une infestation de rats peut détruire la réputation d'un établissement en quelques heures. 
                Nos contrats de maintenance vous assurent une sérénité totale tout au long de l'année avec un suivi rigoureux et des rapports d'intervention conformes aux contrôles hygiène.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ title="Dératisation" questions={faqs} />
    </div>
  )
}

export default Deratisation
