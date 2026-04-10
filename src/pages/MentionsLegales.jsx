import React from 'react'
import { motion } from 'framer-motion'

const MentionsLegales = () => {
  return (
    <div className="mentions-legales-page" style={{ paddingTop: '10rem', paddingBottom: '5rem' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="highlight-red" style={{ fontSize: '3rem', marginBottom: '3rem' }}>Mentions Légales</h1>
          
          <div className="legal-content" style={{ color: 'var(--text-gray)', lineHeight: '1.8' }}>
            <section style={{ marginBottom: '2.5rem' }}>
              <h2 className="accent" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontStyle: 'normal' }}>1. ÉDITION DU SITE</h2>
              <p>
                Le présent site, accessible à l’URL <strong>https://tdmfrance.fr</strong> (le « Site »), est édité par :<br /><br />
                <strong>TDM FRANCE</strong><br />
                Société par actions simplifiée (SAS)<br />
                Siège social : [ADRESSE À COMPLÉTER], Toulouse<br />
                SIRET : [NUMÉRO SIRET À COMPLÉTER]<br />
                Directeur de la publication : Le Président de TDM FRANCE
              </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 className="accent" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontStyle: 'normal' }}>2. HÉBERGEMENT</h2>
              <p>
                Le Site est hébergé par la société <strong>Vercel Inc.</strong>, situé au 340 S Lemon Ave #4133 Walnut, CA 91789, États-Unis.
              </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 className="accent" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontStyle: 'normal' }}>3. PROPRIÉTÉ INTELLECTUELLE</h2>
              <p>
                L’ensemble de ce Site relève de la législation française et internationale sur le droit d’auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. La reproduction de tout ou partie de ce Site sur quelque support que ce soit est formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 className="accent" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontStyle: 'normal' }}>4. DONNÉES PERSONNELLES</h2>
              <p>
                Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l’Utilisateur dispose d’un droit d’accès, de modification et de suppression des informations collectées par TDM FRANCE. Pour exercer ce droit, il reviendra à l’Utilisateur d’envoyer un message à l’adresse suivante : <strong>contact@tdm-france.com</strong>.
              </p>
            </section>

            <section>
              <h2 className="accent" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontStyle: 'normal' }}>5. CONTACT</h2>
              <p>
                Par téléphone : +33 7 84 81 90 03<br />
                Par email : contact@tdm-france.com
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default MentionsLegales
