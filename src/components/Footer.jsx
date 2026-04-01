import { motion } from 'framer-motion'

const navLinks = ['hero', 'about', 'services', 'whyus', 'contact']

// SVG Icons
const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

const MapPinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const ShieldIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)

const UsersIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
)

// LinkedIn icon
const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

// Facebook icon
const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

// WhatsApp icon
const WhatsAppIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.556 4.11 1.528 5.834L0 24l6.334-1.508A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.805 9.805 0 0 1-5.007-1.374l-.36-.214-3.728.888.904-3.638-.235-.374A9.794 9.794 0 0 1 2.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
  </svg>
)

const contacts = [
  { Icon: PhoneIcon, label: 'Téléphone', value: '+241 76 48 51 46' },
  { Icon: MailIcon,  label: 'Email',     value: 'contact@egenem.ga' },
  { Icon: MapPinIcon,label: 'Adresse',   value: 'Port-Gentil, Gabon' },
]

const guarantees = [
  { Icon: ShieldIcon, title: 'Normes HSE',       sub: 'Hygiène · Sécurité · Environnement' },
  { Icon: UsersIcon,  title: 'Personnel Formé',  sub: 'Équipes certifiées & équipées' },
  { Icon: ClockIcon,  title: 'Intervention 24h', sub: 'Réactivité garantie' },
]

const chips = [
  'Nettoyage Industriel', 'Haute Pression', 'Espaces Verts',
  'Structures Métalliques', 'Curage Caniveaux', 'Aires de Production',
]

const socials = [
  { Icon: LinkedInIcon, href: '#' },
  { Icon: FacebookIcon, href: '#' },
  { Icon: WhatsAppIcon, href: '#' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0a1f14', fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

      <style>{`
        .footer-nav-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,.45);
          font-size: 13px;
          margin-bottom: 10px;
          cursor: pointer;
          transition: color .2s;
          text-decoration: none;
          text-transform: capitalize;
        }
        .footer-nav-link:hover { color: #c9a227; }
        .footer-nav-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #1a4a35;
          flex-shrink: 0;
          transition: background .2s;
        }
        .footer-nav-link:hover .footer-nav-dot { background: #c9a227; }

        .footer-social-btn {
          width: 36px; height: 36px;
          border-radius: 8px;
          background: rgba(26,74,53,.5);
          border: 1px solid rgba(26,74,53,.8);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,.5);
          cursor: pointer;
          transition: background .25s, border-color .25s, color .25s;
          text-decoration: none;
        }
        .footer-social-btn:hover {
          background: rgba(201,162,39,.15);
          border-color: rgba(201,162,39,.5);
          color: #c9a227;
        }

        .footer-chip {
          font-size: 10px;
          color: rgba(255,255,255,.35);
          background: rgba(26,74,53,.35);
          border: 1px solid rgba(26,74,53,.7);
          border-radius: 20px;
          padding: 4px 12px;
          font-weight: 600;
          letter-spacing: .5px;
          transition: color .2s, border-color .2s;
        }
        .footer-chip:hover {
          color: rgba(255,255,255,.65);
          border-color: rgba(201,162,39,.3);
        }

        .footer-badge {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          background: rgba(26,74,53,.3);
          border: 1px solid rgba(26,74,53,.7);
          border-radius: 8px;
          padding: 10px 14px;
          margin-bottom: 10px;
          transition: border-color .25s;
        }
        .footer-badge:hover { border-color: rgba(201,162,39,.3); }
        .footer-badge-icon {
          width: 28px; height: 28px;
          border-radius: 6px;
          background: rgba(26,74,53,.6);
          border: 1px solid rgba(45,122,88,.5);
          display: flex; align-items: center; justify-content: center;
          color: #2d7a58;
          flex-shrink: 0;
        }
        .footer-badge:hover .footer-badge-icon {
          color: #c9a227;
          border-color: rgba(201,162,39,.3);
        }

        .contact-icon-wrap {
          width: 30px; height: 30px;
          border-radius: 6px;
          background: rgba(26,74,53,.5);
          border: 1px solid rgba(26,74,53,.9);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,.5);
          flex-shrink: 0;
          transition: color .2s, border-color .2s;
        }
        .contact-item:hover .contact-icon-wrap {
          color: #c9a227;
          border-color: rgba(201,162,39,.3);
        }
        .contact-item {
          display: flex; align-items: flex-start; gap: 10px;
          margin-bottom: 14px;
        }

        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-top { padding: 40px 24px 32px !important; }
          .footer-mid, .footer-bottom { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>

      {/* ── Top : 4 colonnes ── */}
      <div
        className="footer-top"
        style={{
          borderTop: '1px solid rgba(201,162,39,.18)',
          padding: '60px 48px 48px',
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr',
          gap: 40,
        }}
      >
        {/* Col 1 — Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 24, fontWeight: 700,
            color: '#c9a227', marginBottom: 6,
          }}>
            EGENEM
          </div>
          <div style={{
            fontSize: 11, color: 'rgba(255,255,255,.3)',
            lineHeight: 1.7, marginBottom: 22, maxWidth: 230,
          }}>
            Entreprise Gabonaise d'Entretien et de Nettoyage des Établissements Modernes · Port-Gentil
          </div>
          <div style={{
            fontSize: 13, color: 'rgba(255,255,255,.45)',
            lineHeight: 1.8, fontStyle: 'italic',
            borderLeft: '2px solid #c9a227',
            paddingLeft: 14, maxWidth: 230,
          }}>
            La propreté est notre engagement, votre satisfaction notre priorité.
          </div>
        </motion.div>

        {/* Col 2 — Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: 2,
            textTransform: 'uppercase', color: '#c9a227',
            marginBottom: 18, paddingBottom: 10,
            borderBottom: '1px solid rgba(201,162,39,.2)',
          }}>
            Navigation
          </div>
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase().replace(/\s/g, '-')}`} className="footer-nav-link">
              <span className="footer-nav-dot" />
              {link}
            </a>
          ))}
        </motion.div>

        {/* Col 3 — Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: 2,
            textTransform: 'uppercase', color: '#c9a227',
            marginBottom: 18, paddingBottom: 10,
            borderBottom: '1px solid rgba(201,162,39,.2)',
          }}>
            Contact
          </div>

          {contacts.map(c => (
            <div key={c.label} className="contact-item">
              <div className="contact-icon-wrap">
                <c.Icon />
              </div>
              <div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,.28)', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 2 }}>
                  {c.label}
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,.6)' }}>
                  {c.value}
                </div>
              </div>
            </div>
          ))}

          {/* Réseaux sociaux */}
          <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
            {socials.map(({ Icon, href }, i) => (
              <a key={i} href={href} className="footer-social-btn">
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Col 4 — Garanties */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: 2,
            textTransform: 'uppercase', color: '#c9a227',
            marginBottom: 18, paddingBottom: 10,
            borderBottom: '1px solid rgba(201,162,39,.2)',
          }}>
            Nos Garanties
          </div>

          {guarantees.map(g => (
            <div key={g.title} className="footer-badge">
              <div className="footer-badge-icon">
                <g.Icon />
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,.75)', marginBottom: 2 }}>
                  {g.title}
                </div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.35)' }}>
                  {g.sub}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Chips domaines ── */}
      <div
        className="footer-mid"
        style={{
          margin: '0 48px',
          borderTop: '1px solid rgba(255,255,255,.05)',
          padding: '22px 0',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          flexWrap: 'wrap',
        }}
      >
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,.22)', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', flexShrink: 0 }}>
          Nos domaines
        </span>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {chips.map(c => (
            <span key={c} className="footer-chip">{c}</span>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="footer-bottom"
        style={{
          borderTop: '1px solid rgba(255,255,255,.05)',
          padding: '18px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          flexWrap: 'wrap',
        }}
      >
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,.2)' }}>
          © {new Date().getFullYear()} EGENEM — Tous droits réservés
        </div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,.15)' }}>
          Port-Gentil · République Gabonaise
        </div>
      </div>

    </footer>
  )
}