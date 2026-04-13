import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, ShieldCheck, Zap, Phone, ArrowRight, CheckCircle } from 'lucide-react'
import { cityData } from '../data/cities'

const CityPage = () => {
  const { cityId } = useParams()
  // Conversion en minuscules pour assurer la correspondance avec les clés de cityData
  const city = cityData[cityId?.toLowerCase()]

  console.log("Loading city page for:", cityId)

  if (!city) {
    return (
      <div className="container" style={{ paddingTop: '15rem', textAlign: 'center', minHeight: '80vh', color: 'white' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Oups ! Secteur inconnu</h1>
        <p style={{ marginBottom: '3rem', opacity: 0.7 }}>Nous ne trouvons pas d'informations spécifiques pour "{cityId}".</p>
        <Link to="/" className="cta-btn-refined" style={{ display: 'inline-block' }}>Retour à l'accueil</Link>
      </div>
    )
  }

  return (
    <div className="city-page">
      <section className="service-hero-premium">
        <div className="hero-bg">
          <img src="/hero.png" alt={`Dératisation ${city.name}`} />
          <div className="hero-overlay"></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            className="hero-content-mini"
          >
            <span className="accent" style={{ fontSize: '1.2rem', fontWeight: '800' }}>INTERVENTION 31</span>
            <h1 style={{ marginTop: '0.5rem' }}>DÉRATISATION & DÉSINSECTISATION À <span className="accent">{city.name.toUpperCase()}</span> ({city.zip.split(',')[0]})</h1>
            <p>{city.description}</p>
            <button className="cta-btn-refined" onClick={() => window.open('https://wa.me/33784819003')}>
              DEVIS GRATUIT {city.name.toUpperCase()}
            </button>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <div className="intervention-grid">
            <div className="city-info-block">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Spécialiste Nuisibles à <span className="accent">{city.name}</span></h2>
              <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                Basée en Haute-Garonne, TDM FRANCE intervient quotidiennement à <strong>{city.name}</strong> pour protéger les habitations et les locaux professionnels. 
                Que vous soyez près du centre-ville ou en périphérie, nos techniciens certifiés garantissent une éradication totale.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <CheckCircle className="accent" /> <span>Expertise locale sur <strong>{city.name}</strong></span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <CheckCircle className="accent" /> <span>Intervention sous 24h garantie</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <CheckCircle className="accent" /> <span>Produits certifiés et sécurisés</span>
                </li>
              </ul>
            </div>

            <div style={{ background: 'var(--dark-surface)', padding: '3rem', borderRadius: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ background: 'var(--primary-green)', padding: '1rem', borderRadius: '15px' }}>
                  <MapPin color="white" size={30} />
                </div>
                <div>
                  <h3 style={{ marginBottom: '0.2rem' }}>Secteur {city.name}</h3>
                  <p style={{ color: 'var(--text-gray)' }}>Code Postal: {city.zip}</p>
                </div>
              </div>
              <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '15px', borderLeft: '4px solid var(--primary-green)' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Focus Local :</h4>
                <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>{city.focus}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '8rem 0', background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Nos Solutions à <span className="accent">{city.name}</span></h2>
          </div>
          <div className="services-grid">
            <Link to="/deratisation" className="service-card">
              <ShieldCheck className="accent" size={40} style={{ marginBottom: '1.5rem' }} />
              <h3>Dératisation</h3>
              <p>Élimination des rats et souris avec protection des points d'entrée à {city.name}.</p>
            </Link>
            <Link to="/desinsectisation" className="service-card">
              <Zap className="accent" size={40} style={{ marginBottom: '1.5rem' }} />
              <h3>Désinsectisation</h3>
              <p>Traitement contre les blattes, cafards et fourmis dans tout le secteur.</p>
            </Link>
            <Link to="/punaises-de-lit" className="service-card">
              <Phone className="accent" size={40} style={{ marginBottom: '1.5rem' }} />
              <h3>Punaises de Lit</h3>
              <p>Solution radicale en deux passages pour retrouver un sommeil paisible.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-modern">
        <div className="container">
          <div className="cta-flex-container">
            <div className="cta-left">
              <h3>Besoin d'un expert à {city.name} ?</h3>
              <p>Devis gratuit et déplacement immédiat dans votre commune.</p>
            </div>
            <button className="cta-btn-refined" onClick={() => window.open('https://wa.me/33784819003')}>
              CONTACTER TDM FRANCE <ArrowRight size={20} style={{ marginLeft: '10px' }} />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CityPage
