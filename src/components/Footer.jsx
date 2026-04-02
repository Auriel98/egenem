import { motion } from 'framer-motion'

const navLinks = [
  { name: 'Accueil', id: 'hero' },
  { name: 'À propos', id: 'about' },
  { name: 'Prestations', id: 'services' },
  { name: 'Pourquoi nous', id: 'whyus' },
  { name: 'Contact', id: 'contact' },
]

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, marginTop: 2 }}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.1 4.18 2 2 0 0 1 5.1 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, marginTop: 2 }}>
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-10 6L2 7"/>
  </svg>
)

const MapPinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, marginTop: 2 }}>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const contacts = [
  { Icon: PhoneIcon, label: 'Téléphone', value: '+241 76 48 51 46' },
  { Icon: MailIcon,  label: 'Email',     value: 'contact@egenem.ga' },
  { Icon: MapPinIcon,label: 'Adresse',   value: 'Port-Gentil, Gabon' },
]

const chips = [
  'Nettoyage Industriel',
  'Haute Pression',
  'Espaces Verts',
  'Structures Métalliques',
]

export default function Footer() {
  return (
    <footer style={{ background: '#0a1f14', color: '#fff' }}>

      <style>{`
        .footer-grid {
          padding: 60px 40px;
          display: grid;
          gridTemplateColumns: 1.5fr 1fr 1fr;
          gap: 40px;
          box-sizing: border-box;
        }

        .footer-brand h2 {
          color: #c9a227;
          margin: 0 0 12px;
          font-size: 22px;
        }

        .footer-brand p {
          opacity: 0.6;
          margin: 0;
          line-height: 1.6;
          font-size: 14px;
        }

        .footer-col h4 {
          color: #c9a227;
          margin: 0 0 12px;
          font-size: 15px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .footer-col a {
          display: block;
          margin-top: 10px;
          color: #ccc;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
        }

        .footer-col a:hover {
          color: #c9a227;
        }

        .contact-item {
          display: flex;
          gap: 10px;
          margin-top: 10px;
          align-items: flex-start;
          font-size: 14px;
          color: #ccc;
          word-break: break-word;
        }

        .footer-chips {
          border-top: 1px solid rgba(255,255,255,.1);
          padding: 20px 40px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          box-sizing: border-box;
        }

        .footer-chip {
          border: 1px solid #1a4a35;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 12px;
          color: #ccc;
          white-space: nowrap;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,.1);
          padding: 20px 40px;
          text-align: center;
          font-size: 12px;
          opacity: 0.6;
          box-sizing: border-box;
        }

        /* TABLETTE */
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            padding: 40px 24px;
            gap: 32px;
          }

          .footer-brand {
            grid-column: 1 / -1;   /* occupe toute la largeur */
          }

          .footer-chips {
            padding: 20px 24px;
          }

          .footer-bottom {
            padding: 20px 24px;
          }
        }

        /* MOBILE */
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;   /* une seule colonne */
            padding: 36px 20px;
            gap: 28px;
          }

          .footer-brand {
            grid-column: auto;
          }

          .footer-chips {
            padding: 16px 20px;
          }

          .footer-bottom {
            padding: 16px 20px;
          }
        }
      `}</style>

      {/* TOP — 3 colonnes → 2 → 1 */}
      <div className="footer-grid">

        {/* BRAND */}
        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>EGENEM</h2>
          <p>Entreprise de nettoyage moderne au Gabon.</p>
        </motion.div>

        {/* NAVIGATION */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4>Navigation</h4>
          {navLinks.map(link => (
            <a key={link.id} href={`#${link.id}`}>{link.name}</a>
          ))}
        </motion.div>

        {/* CONTACT */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4>Contact</h4>
          {contacts.map(c => (
            <div key={c.label} className="contact-item">
              <c.Icon />
              <span>{c.value}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* CHIPS */}
      <div className="footer-chips">
        {chips.map(c => (
          <span key={c} className="footer-chip">{c}</span>
        ))}
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} EGENEM — Tous droits réservés
      </div>

    </footer>
  )
}