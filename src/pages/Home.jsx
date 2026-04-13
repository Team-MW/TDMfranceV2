import React from 'react'
import { motion } from 'framer-motion'
import { Bug, Rat, Star, MessageSquare, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  const services = [
    { title: 'DÉRATISATION', icon: <Rat size={32} />, path: '/deratisation', description: 'Solutions rapides pour rats, souris et rongeurs.' },
    { title: 'DÉSINSECTISATION', icon: <Bug size={32} />, path: '/desinsectisation', description: 'Élimination des blattes, cafards et fourmis.' },
    { title: 'PUNAISES DE LIT', icon: <Bug size={32} />, path: '/punaises-de-lit', description: 'Expertise spécialisée en éradication totale.' },
  ]

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-bg">
          <img src="/hero.png" alt="Pest Control Specialist" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1 style={{ marginBottom: '0rem' }}>TDM FRANCE</h1>
            <h1 className="highlight-red" style={{ fontSize: '4.5rem', marginBottom: '0.5rem' }}>ERADICATION<br />INSECTICIDE</h1>

            <div className="whatsapp-bar" onClick={() => window.open('https://wa.me/33784819003')}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" width="24" />
              <span>+33 7 84 81 90 03</span>
            </div>

            <div className="sector-info" style={{ marginTop: '2rem' }}>
               <h3 style={{ textDecoration: 'underline' }}>Secteur Disponible</h3>
               <p style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '900' }}>TOULOUSE & ALENTOURS</p>
            </div>

            <div className="rating-box">
              <span>QUALITÉ MAGIQUE</span>
              <div className="stars">
                5 <Star fill="#ea2027" color="#ea2027" size={20} />
                <Star fill="#ea2027" color="#ea2027" size={20} />
                <Star fill="#ea2027" color="#ea2027" size={20} />
                <Star fill="#ea2027" color="#ea2027" size={20} />
                <Star fill="#ea2027" color="#ea2027" size={20} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="section-title">
            <h2>Nos <span className="accent">Prestations</span></h2>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <Link to={service.path} key={index} style={{ color: 'inherit' }}>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="service-card"
                >
                  <div className="icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-modern">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-flex-container"
          >
            <div className="cta-left">
              <h3>Demandez votre devis gratuit en 48h</h3>
              <p>Une urgence ? Un projet ? Intervention rapide garantie en Haute-Garonne.</p>
            </div>
            <div className="cta-right">
              <button className="cta-btn-refined" onClick={() => window.open('https://wa.me/33784819003')}>
                FAIRE UNE DEMANDE
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="intervention-zone" style={{ padding: '8rem 0', background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Zone <span className="accent">d'intervention</span></h2>
            <p style={{ marginTop: '1rem', color: 'var(--text-gray)' }}>
              Nous intervenons rapidement dans toute la Haute-Garonne (31) 24h/24 et 7j/7.
            </p>
          </div>
          
          <div className="intervention-grid">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="map-container"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369871.2173163155!2d1.0118501328014073!3d43.58169123847424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a95f9fd5157833%3A0x306f170cf3275b0!2sHaute-Garonne!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr" 
                width="100%" 
                height="450" 
                style={{ border: 0, borderRadius: '20px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte d'intervention Haute-Garonne"
              ></iframe>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="cities-list"
            >
              <h3>Villes desservies en <span className="accent">priorité</span> :</h3>
              <div className="cities-grid">
                {[
                  { name: "Toulouse", id: "toulouse" }, { name: "Balma", id: "balma" },
                  { name: "Blagnac", id: "blagnac" }, { name: "Colomiers", id: "colomiers" },
                  { name: "Tournefeuille", id: "tournefeuille" }, { name: "Ramonville", id: "ramonville" },
                  { name: "Muret", id: "muret" }, { name: "Cugnaux", id: "cugnaux" },
                  { name: "Saint-Orens", id: "saint-orens" }, { name: "Castanet", id: "castanet" },
                  { name: "L'Union", id: "lunion" }, { name: "Portet-sur-Garonne", id: "portet-sur-garonne" },
                  { name: "Revel", id: "revel" }, { name: "Auterive", id: "auterive" },
                  { name: "Villefranche-de-L.", id: "villefranche" }, { name: "Grenade", id: "grenade" },
                  { name: "Plaisance-du-Touch", id: "plaisance-du-touch" }, 
                  { name: "Frouzins", id: "frouzins" }, { name: "Seysses", id: "seysses" },
                  { name: "Launaguet", id: "launaguet" }
                ].map((city, index) => (
                  <Link key={index} to={`/secteur/${city.id}`} className="city-tag">
                    <MapPin size={14} className="accent" />
                    <span>{city.name}</span>
                  </Link>
                ))}
              </div>
              <p className="plus-info">
                Et dans tout le département de la <strong>Haute-Garonne (31)</strong>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="testimonials" style={{ padding: '8rem 0', background: 'var(--dark-bg)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Avis <span className="accent">Clients</span></h2>
          </div>
          <div className="services-grid">
            {[
              {
                name: "Claire M.",
                city: "Toulouse",
                text: "« J’avais des moisissures récurrentes dans ma salle de bain malgré plusieurs nettoyages. L’équipe de TDM FRANCE est intervenue rapidement, a diagnostiqué l’origine du problème et a tout traité de façon durable. Deux mois après, plus aucune trace, et l’air est beaucoup plus sain. »"
              },
              {
                name: "Sophie R.",
                city: "Colomiers",
                text: "« Entreprise très professionnelle ! Les techniciens ont pris le temps d’expliquer chaque étape du traitement contre les moisissures. Ils ont également donné des conseils de prévention pour éviter que ça revienne. Très rassurant et efficace. »"
              },
              {
                name: "Marc L.",
                city: "Ramonville-Saint-Agne",
                text: "« Excellent service ! J’ai contacté TDM FRANCE pour des moisissures dans ma cave. Intervention rapide, résultats visibles immédiatement et aucune odeur désagréable après le traitement. Entreprise de confiance. »"
              },
              {
                name: "Jean-Paul D.",
                city: "Blagnac",
                text: "« Suite à un dégât des eaux, j’ai fait appel à TDM FRANCE pour la déshumidification et la désinfection de mon appartement. Travail sérieux, devis clair et respecté, et surtout un suivi avec rapport détaillé. Je recommande vivement. »"
              }
            ].map((avis, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="service-card"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div className="stars" style={{ marginBottom: '1rem', display: 'flex', gap: '2px' }}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--primary-green)" color="var(--primary-green)" />)}
                  </div>
                  <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-white)' }}>{avis.text}</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary-green)', marginBottom: '0.2rem' }}>{avis.name}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)' }}>{avis.city}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
