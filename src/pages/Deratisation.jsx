import React from 'react'
import { motion } from 'framer-motion'
import { Rat, Shield, CheckCircle } from 'lucide-react'
import FAQ from '../components/FAQ'

const Deratisation = () => {
  const faqs = [
    { question: "Comment savoir si j'ai des rats chez moi ?", answer: "Plusieurs signes ne trompent pas : bruits de grattement dans les murs ou plafonds, présence d'excréments noirs allongés, traces de dents sur les fils ou emballages, et odeurs d'ammoniac." },
    { question: "Les produits que vous utilisez sont-ils dangereux ?", answer: "Nous utilisons des produits homologués et sécurisés, placés dans des boîtiers d'appâtage sécurisés inaccessibles aux enfants et aux animaux domestiques." },
    { question: "Combien de temps dure une intervention ?", answer: "Une intervention dure généralement entre 45 et 90 minutes selon la taille du logement, mais le processus complet d'éradication peut nécessiter plusieurs passages." }
  ]

  return (
    <div className="page-content">
      <section className="service-hero" style={{ paddingTop: '10rem', paddingBottom: '5rem' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>DÉRATISATION <span className="accent">PROFESSIONNELLE</span></h1>
            <p style={{ fontSize: '1.5rem', color: 'var(--text-gray)', maxWidth: '800px' }}>
              Solutions radicales contre les rats, souris et mulots à Toulouse et ses environs. 
              Protection de votre santé et de vos biens.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="services-grid">
            <div className="service-card">
              <Shield className="icon" size={48} />
              <h3>Diagnostic Gratuit</h3>
              <p>Analyse complète des points d'entrée et de la source d'infestation.</p>
            </div>
            <div className="service-card">
              <CheckCircle className="icon" size={48} />
              <h3>Traitement Garanti</h3>
              <p>Élimination totale de la colonie avec garantie de résultat.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ title="Dératisation" questions={faqs} />
    </div>
  )
}

export default Deratisation
