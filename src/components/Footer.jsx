import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const navLinks = [
  { name: 'Accueil', id: 'hero' },
  { name: 'À propos', id: 'about' },
  { name: 'Prestations', id: 'services' },
  { name: 'Pourquoi nous', id: 'whyus' },
  { name: 'Contact', id: 'contact' },
]

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.1 4.18 2 2 0 0 1 5.1 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
)

const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-10 6L2 7"/>
  </svg>
)

const MapPinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

// Numéros WhatsApp — format international sans espaces ni tirets
const phones = [
  { label: '+241 76 48 51 46 (Port-Gentil)',  wa: '+24176485146' },
  { label: '+241 65 94 46 55 (Port-Gentil)',  wa: '+24165944655' },
  { label: '+241 76 48 53 04 (Oyem)',         wa: '+24176485304' },
  { label: '+241 65 21 87 54 (Oyem)',         wa: '+24165218754' },
]

const emails = [
  'contact-portgentil@egenem.com',
  'contact-oyem@egenem.com',
]

const locations = [
  'Port-Gentil, Gabon',
  'Oyem, Gabon',
]

const chips = [
  'Nettoyage Industriel',
  'Haute Pression',
  'Espaces Verts',
  'Structures Métalliques',
]

const markers = [
  { lat: -0.7193, lng: 8.7815, label: 'Port-Gentil' },
  { lat: 1.6359, lng: 11.5833, label: 'Oyem' },
]

function MapCircle() {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)

  useEffect(() => {
    if (mapInstanceRef.current) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    document.head.appendChild(link)

    const script = document.createElement('script')
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
    script.onload = () => {
      const L = window.L

      const map = L.map(mapRef.current, {
        center: [0.4, 10.2],
        zoom: 6,
        zoomControl: false,
        scrollWheelZoom: false,
        attributionControl: false,
      })

      mapInstanceRef.current = map

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        maxZoom: 19,
      }).addTo(map)

      const goldIcon = L.divIcon({
        className: '',
        html: `
          <div style="
            width: 14px; height: 14px;
            background: #c9a227;
            border: 2px solid #fff;
            border-radius: 50%;
            box-shadow: 0 0 8px rgba(201,162,39,0.8);
          "></div>
        `,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
      })

      markers.forEach(({ lat, lng, label }) => {
        L.marker([lat, lng], { icon: goldIcon })
          .addTo(map)
          .bindPopup(`<b style="color:#c9a227">${label}</b>`, {
            className: 'egenem-popup',
          })
      })
    }
    document.head.appendChild(script)
  }, [])

  return (
    <>
      <style>{`
        .map-circle-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .map-circle-label {
          color: #c9a227;
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
          opacity: 0.85;
        }

        .map-circle {
          width: 220px;
          height: 220px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #1a4a35;
          box-shadow:
            0 0 0 4px rgba(201,162,39,0.12),
            0 0 20px rgba(0,0,0,0.5);
          position: relative;
        }

        .map-circle::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1.5px solid rgba(201,162,39,0.3);
          pointer-events: none;
          z-index: 1000;
        }

        .egenem-popup .leaflet-popup-content-wrapper {
          background: #0a1f14;
          color: #fff;
          border: 1px solid #1a4a35;
          border-radius: 6px;
          font-size: 13px;
        }

        .egenem-popup .leaflet-popup-tip {
          background: #0a1f14;
        }

        @media (max-width: 480px) {
          .map-circle {
            width: 170px;
            height: 170px;
          }
        }
      `}</style>

      <div className="map-circle-wrapper">
        <span className="map-circle-label">Nos agences</span>
        <div className="map-circle" ref={mapRef} />
      </div>
    </>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: '#0a1f14', color: '#fff' }}>

      <style>{`
        .footer-container {
          max-width: 1200px;
          margin: auto;
        }

        .footer-grid {
          padding: 60px 40px;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr auto;
          gap: 40px;
          align-items: start;
        }

        .footer-brand h2 {
          color: #c9a227;
          margin-bottom: 10px;
        }

        .footer-brand p {
          opacity: 0.7;
          font-size: 14px;
          line-height: 1.6;
        }

        .footer-col h4 {
          color: #c9a227;
          margin-bottom: 12px;
        }

        .footer-col a {
          display: block;
          margin-top: 8px;
          color: #ccc;
          text-decoration: none;
          font-size: 14px;
        }

        .footer-col a:hover {
          color: #c9a227;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 10px;
          font-size: 14px;
          color: #ccc;
        }

        /* Lien WhatsApp */
        .wa-link {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 10px;
          font-size: 14px;
          color: #ccc;
          text-decoration: none;
          transition: color 0.2s;
        }

        .wa-link:hover {
          color: #25D366;
        }

        .wa-link:hover .wa-icon {
          color: #25D366;
        }

        .wa-icon {
          flex-shrink: 0;
          transition: color 0.2s;
        }

        .footer-chips {
          border-top: 1px solid rgba(255,255,255,.1);
          padding: 20px 40px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }

        .footer-chip {
          border: 1px solid #1a4a35;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,.1);
          padding: 20px;
          text-align: center;
          font-size: 12px;
          opacity: 0.6;
        }

        /* TABLETTE */
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            padding: 40px 24px;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }

          .map-circle-wrapper {
            grid-column: 1 / -1;
            padding-top: 10px;
          }
        }

        /* MOBILE */
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
            padding: 30px 20px;
          }

          .map-circle-wrapper {
            grid-column: 1;
          }
        }
      `}</style>

      <div className="footer-container">

        <div className="footer-grid">

          <motion.div className="footer-brand">
            <h2>EGENEM</h2>
            <p>Entreprise de nettoyage moderne au Gabon.</p>
          </motion.div>

          <motion.div className="footer-col">
            <h4>Navigation</h4>
            {navLinks.map(link => (
              <a key={link.id} href={`#${link.id}`}>{link.name}</a>
            ))}
          </motion.div>

          <motion.div className="footer-col">
            <h4>Contact</h4>

            {/* Numéros WhatsApp cliquables */}
            {phones.map((p, i) => (
              <a
                key={i}
                className="wa-link"
                href={`https://wa.me/${p.wa}`}
                target="_blank"
                rel="noopener noreferrer"
                title={`Contacter via WhatsApp : ${p.label}`}
              >
                <span className="wa-icon"><WhatsAppIcon /></span>
                <span>{p.label}</span>
              </a>
            ))}

            {/* Emails */}
            {emails.map((email, i) => (
              <a
                key={i}
                className="wa-link"
                href={`mailto:${email}`}
                style={{ marginTop: i === 0 ? '16px' : '10px' }}
              >
                <MailIcon />
                <span>{email}</span>
              </a>
            ))}

            {/* Adresses */}
            {locations.map((loc, i) => (
              <div key={i} className="contact-item">
                <MapPinIcon />
                <span>{loc}</span>
              </div>
            ))}
          </motion.div>

          {/* CARTE CERCLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <MapCircle />
          </motion.div>

        </div>

        <div className="footer-chips">
          {chips.map(c => (
            <span key={c} className="footer-chip">{c}</span>
          ))}
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} EGENEM — Tous droits réservés
        </div>

      </div>
    </footer>
  )
}