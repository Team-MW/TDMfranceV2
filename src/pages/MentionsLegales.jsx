import React from 'react'
import { motion } from 'framer-motion'

const MentionsLegales = () => {
  return (
    <div className="mentions-legales-page" style={{ paddingTop: '18rem', paddingBottom: '5rem' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="highlight-red" style={{ fontSize: '3rem', marginBottom: '3rem' }}>Mentions Légales</h1>
          
          <div className="legal-content" style={{ color: 'var(--text-gray)', lineHeight: '1.8' }}>
            <section style={{ marginBottom: '2.5rem' }}>
              <h2 className="accent" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontStyle: 'normal' }}>1. INFORMATIONS LÉGALES</h2>
              <p>
                Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’Économie Numérique (LCEN), il est précisé aux utilisateurs et visiteurs du site www.tdm-france.com les informations suivantes :<br /><br />
                <strong>Éditeur du site :</strong><br />
                • Dénomination : TDM FRANCE<br />
                • Statut juridique : Auto-entrepreneur<br />
                • Siège social : Av. du Roucas, 31490 Léguevin, France<br />
                • Numéro SIRET : 990 350 902 00013<br />
                • Numéro TVA intracommunautaire : Non applicable (Auto-entrepreneur)<br />
                • Responsable de la publication : M. Khamis Khelifa-Madjoubi<br />
                • Contact : contact@tdm-france.com | 06 11 75 02 60
              </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 className="accent" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontStyle: 'normal' }}>2. HÉBERGEMENT</h2>
              <p>
                Le site est hébergé par :<br />
                <strong>Vercel Inc.</strong><br />
                • Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis<br />
                • Site : https://vercel.com
              </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 className="accent" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontStyle: 'normal' }}>3. PROPRIÉTÉ INTELLECTUELLE</h2>
              <p>
                Le site www.tdm-france.com et l’ensemble de ses éléments (textes, images, graphismes, logo, vidéos, icônes, etc.) sont protégés par le droit d’auteur et le code de la propriété intellectuelle.<br />
                Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, de ces éléments est interdite sans l’autorisation écrite préalable de TDM FRANCE.
              </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 className="accent" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontStyle: 'normal' }}>4. DONNÉES PERSONNELLES (RGPD)</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD – UE 2016/679), TDM FRANCE collecte uniquement les informations nécessaires au traitement des demandes effectuées via le formulaire de contact ou par email/téléphone.<br />
                • <strong>Responsable du traitement :</strong> TDM FRANCE – Khamis Khelifa-Madjoubi<br />
                • <strong>Finalité :</strong> gestion des demandes de devis, suivi des interventions, communication avec les clients.<br />
                • <strong>Données collectées :</strong> nom, prénom, email, téléphone, adresse et détails relatifs à la demande.<br />
                • <strong>Durée de conservation :</strong> maximum 3 ans à compter du dernier contact.<br />
                • <strong>Destinataires :</strong> exclusivement TDM FRANCE (aucune revente ni partage).<br />
                • <strong>Droits des utilisateurs :</strong> vous disposez d’un droit d’accès, de rectification, d’opposition, d’effacement et de portabilité de vos données.<br /><br />
                Pour exercer vos droits : <strong>contact@tdm-france.com</strong>
              </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 className="accent" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontStyle: 'normal' }}>5. COOKIES</h2>
              <p>
                Le site www.tdm-france.com peut utiliser des cookies techniques et statistiques afin d’améliorer l’expérience utilisateur et mesurer la fréquentation du site (ex. : Google Analytics).<br />
                Vous pouvez configurer votre navigateur pour refuser l’enregistrement des cookies.
              </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 className="accent" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontStyle: 'normal' }}>6. RESPONSABILITÉ</h2>
              <p>
                TDM FRANCE met tout en œuvre pour fournir des informations fiables et à jour. Toutefois, l’éditeur ne saurait être tenu responsable d’erreurs, d’omissions ou d’une indisponibilité temporaire du site.
              </p>
            </section>

            <section>
              <h2 className="accent" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontStyle: 'normal' }}>7. DROIT APPLICABLE</h2>
              <p>
                Le présent site et ses mentions légales sont soumis au droit français. En cas de litige, et à défaut d’accord amiable, compétence expresse est attribuée aux tribunaux compétents de Toulouse.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default MentionsLegales
