import React from 'react'
import { motion } from 'framer-motion'
import { realisations } from '../data/realisations'
import { Camera, Play } from 'lucide-react'

const Realisations = () => {
  // Séparer les images et les vidéos
  const images = realisations.filter(file => file.endsWith('.jpeg') || file.endsWith('.jpg') || file.endsWith('.png'))
  const videos = realisations.filter(file => file.endsWith('.mp4'))

  return (
    <div className="realisations-page" style={{ paddingTop: '15rem', paddingBottom: '8rem', background: 'var(--dark-bg)' }}>
      <div className="container">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title"
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <span className="accent" style={{ fontSize: '1.2rem', fontWeight: '800', letterSpacing: '2px' }}>NOS CHANTIERS</span>
          <h1 style={{ fontSize: '3.5rem', marginTop: '1rem', lineHeight: '1.2' }}>
            NOS TRAVAUX <span className="accent">EN IMAGE</span>
          </h1>
          <p style={{ maxWidth: '600px', margin: '2rem auto 0', color: 'var(--text-gray)', fontSize: '1.1rem' }}>
            Découvrez nos interventions en direct. Résultats garantis, avant/après et démonstrations de notre expertise sur le terrain.
          </p>
        </motion.div>

        {/* Vidéos Section */}
        {videos.length > 0 && (
          <div style={{ marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Play className="accent" size={28} /> Vidéos <span className="accent"> d'interventions</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {videos.map((video, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{ 
                    background: 'var(--dark-surface)', 
                    borderRadius: '20px', 
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.05)'
                  }}
                >
                  <video 
                    src={`/avant-apres/${video}`} 
                    controls 
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Galerie Photos */}
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Camera className="accent" size={28} /> Galerie <span className="accent"> Photos</span>
          </h2>
          <div className="gallery-grid" style={{ 
            display: 'columns',
            columnWidth: '300px',
            columnGap: '1.5rem',
          }}>
            {images.map((image, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 5) * 0.1 }}
                style={{ 
                  breakInside: 'avoid',
                  marginBottom: '1.5rem',
                  borderRadius: '15px', 
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.05)',
                  background: 'var(--dark-surface)',
                  cursor: 'pointer'
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <img 
                  src={`/avant-apres/${image}`} 
                  alt={`Réalisation TDM France ${index + 1}`} 
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Realisations
