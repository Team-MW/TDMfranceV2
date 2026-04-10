import React from 'react'
import { motion } from 'framer-motion'
import { ShieldAlert, Zap, Search } from 'lucide-react'
import FAQ from '../components/FAQ'

const PunaisesDeLit = () => {
  const faqs = [
    { question: "Comment savoir si j'ai des punaises de lit ?", answer: "Les signes incluent des piqûres en ligne sur la peau, des petites taches de sang sur les draps, et des points noirs (excréments) dans les coutures du matelas." },
    { question: "Faut-il jeter mon matelas ?", answer: "Dans 95% des cas, non. Nos traitements professionnels permettent de sauver votre literie si les consignes de préparation sont suivies." },
    { question: "Combien de traitements sont nécessaires ?", answer: "Généralement, deux passages espacés de 15 jours sont nécessaires pour éliminer le cycle complet de reproduction (oeufs et adultes)." }
  ]

  return (
    <div className="page-content">
      <section className="service-hero" style={{ paddingTop: '10rem', paddingBottom: '5rem' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>PUNAISES DE LIT <span className="accent">EXTERMINATION</span></h1>
            <p style={{ fontSize: '1.5rem', color: 'var(--text-gray)', maxWidth: '800px' }}>
              Votre cauchemar se termine ici. Nous sommes les spécialistes de l'éradication des punaises de lit à Toulouse.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="services-grid">
            <div className="service-card">
              <Search className="icon" size={48} />
              <h3>Détection Canine</h3>
              <p>Mise en relation pour une détection ultra-précise si nécessaire.</p>
            </div>
            <div className="service-card">
              <Zap className="icon" size={48} />
              <h3>Traitement Choc</h3>
              <p>Élimination immédiate par vapeur sèche ou produits chimiques haute puissance.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ title="Punaises de Lit" questions={faqs} />
    </div>
  )
}

export default PunaisesDeLit
