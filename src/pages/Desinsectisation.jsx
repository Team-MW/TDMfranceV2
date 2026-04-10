import React from 'react'
import { motion } from 'framer-motion'
import { Bug, Droplets, Target } from 'lucide-react'
import FAQ from '../components/FAQ'

const Desinsectisation = () => {
  const faqs = [
    { question: "Comment se débarrasser définitivement des cafards ?", answer: "L'utilisation de gels professionnels et de traitements de choc est nécessaire. Une hygiène stricte couplée à notre intervention garantit une éradication totale." },
    { question: "Combien de temps après le traitement puis-je rentrer chez moi ?", answer: "Pour la plupart de nos traitements par gel, vous n'avez pas besoin de quitter votre logement. Pour une pulvérisation, un délai de 4 heures est généralement conseillé." },
    { question: "Intervenez-vous contre les frelons et guêpes ?", answer: "Oui, nous sommes équipés pour traiter les nids de guêpes et de frelons asiatiques en toute sécurité." }
  ]

  return (
    <div className="page-content">
      <section className="service-hero" style={{ paddingTop: '10rem', paddingBottom: '5rem' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>DÉSINSECTISATION <span className="accent">TOTALE</span></h1>
            <p style={{ fontSize: '1.5rem', color: 'var(--text-gray)', maxWidth: '800px' }}>
              Blattes, cafards, fourmis, insectes rampants et volants. 
              Technologies de pointe pour un environnement sain.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="services-grid">
            <div className="service-card">
              <Droplets className="icon" size={48} />
              <h3>Pulvérisation & Gel</h3>
              <p>Utilisation de biocide professionnel à haute rémanence.</p>
            </div>
            <div className="service-card">
              <Target className="icon" size={48} />
              <h3>Action Ciblée</h3>
              <p>Neutralisation des nids et des voies de passage des insectes.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ title="Désinsectisation" questions={faqs} />
    </div>
  )
}

export default Desinsectisation
