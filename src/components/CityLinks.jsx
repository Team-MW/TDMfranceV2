import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const CityLinks = ({ service = 'deratisation' }) => {
  const cities = [
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
  ]

  return (
    <section className="intervention-zone" style={{ padding: '8rem 0', background: 'var(--dark-surface)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Zones <span className="accent">d'intervention</span></h2>
          <p style={{ marginTop: '1rem', color: 'var(--text-gray)' }}>
            Nous intervenons rapidement en Haute-Garonne pour vos besoins en <span className="accent">{service.replace('-', ' ')}</span>.
          </p>
        </div>
        
        <div className="cities-grid">
          {cities.map((city, index) => (
            <Link key={index} to={`/secteur/${service}/${city.id}`} className="city-tag">
              <MapPin size={14} className="accent" />
              <span>{city.name}</span>
            </Link>
          ))}
        </div>
        
        <p className="plus-info" style={{ textAlign: 'center', marginTop: '3rem' }}>
          Intervention garantie 24h/24 et 7j/7 dans tout le département.
        </p>
      </div>
    </section>
  )
}

export default CityLinks
