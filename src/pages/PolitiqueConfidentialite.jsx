import React from 'react'
import { motion } from 'framer-motion'

const PolitiqueConfidentialite = () => {
  return (
    <div className="mentions-legales-page" style={{ paddingTop: '18rem', paddingBottom: '5rem' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="highlight-red" style={{ fontSize: '3rem', marginBottom: '3rem' }}>Politique de Confidentialité</h1>
          
          <div className="legal-content" style={{ color: 'var(--text-gray)', lineHeight: '1.8' }}>
            <section style={{ marginBottom: '2.5rem' }}>
              <h2 className="accent" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontStyle: 'normal' }}>1. COLLECTE DES DONNÉES VIA FORMULAIRE</h2>
              <p>
                Les données personnelles collectées (nom, prénom, numéro de téléphone, adresse email, etc.) via notre formulaire de contact sont strictement utilisées dans le seul but de traiter votre demande, de vous relancer et d'assurer le suivi des interventions demandées. Nous nous engageons à ne pas utiliser ces informations à d'autres fins commerciales et à ne jamais les revendre ou les céder à des tiers.
              </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 className="accent" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontStyle: 'normal' }}>2. UTILISATION DU PIXEL FACEBOOK</h2>
              <p>
                Notre site utilise le Pixel Facebook, un outil d'analyse fourni par Meta. Ce pixel nous permet de mesurer l'efficacité de nos campagnes publicitaires et de comprendre les actions que les visiteurs effectuent sur notre site. Les données recueillies par ce biais nous aident à optimiser nos publicités et à cibler nos offres de services.
              </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 className="accent" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontStyle: 'normal' }}>3. VOS DROITS</h2>
              <p>
                Conformément à la réglementation en vigueur (notamment le RGPD), vous disposez d'un droit d'accès, de rectification, de portabilité et d'effacement de vos données personnelles, ainsi que d'un droit de limitation ou d'opposition à leur traitement. Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : <strong>contact@tdm-france.com</strong>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PolitiqueConfidentialite
