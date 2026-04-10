import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = ({ title, questions }) => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="faq-section" style={{ padding: '8rem 0', backgroundColor: 'var(--dark-bg)' }}>
      <div className="container">
        <h2 style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>
          Questions <span className="accent">Fréquentes</span> - {title}
        </h2>
        <div className="faq-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {questions.map((q, index) => (
            <div key={index} className="faq-item" style={{ marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{ 
                  width: '100%', 
                  background: 'none', 
                  border: 'none', 
                  color: 'white', 
                  padding: '1.5rem 0', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  textAlign: 'left'
                }}
              >
                {q.question}
                {openIndex === index ? <Minus color="var(--primary-green)" /> : <Plus color="var(--primary-green)" />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ color: 'var(--text-gray)', paddingBottom: '1.5rem', lineHeight: '1.6' }}>
                      {q.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
