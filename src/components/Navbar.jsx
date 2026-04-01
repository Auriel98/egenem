import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['Accueil', 'À propos', 'Prestations', 'Pourquoi nous', 'Contact']
const ids   = ['hero', 'about', 'services', 'whyus', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    padding: '10px 32px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    transition: 'all .3s ease',
    background: scrolled ? 'rgba(26,74,53,0.97)' : 'transparent',
    backdropFilter: scrolled ? 'blur(10px)' : 'none',
    boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,.25)' : 'none',
  }

  return (
    <nav style={navStyle}>
      {/* Logo + nom */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img
          src="/logo.png"
          alt="EGENEM logo"
          style={{
            height: 48,
            width: 'auto',
            objectFit: 'contain',
            display: 'block',
          }}
        />
        <span style={{
          color: '#fff',
          fontFamily: 'Playfair Display, serif',
          fontWeight: 700,
          fontSize: 18,
          letterSpacing: 1,
          lineHeight: 1.2,
        }}>
          EGENEM
        </span>
      </div>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: 32, listStyle: 'none', margin: 0, padding: 0 }} className="desktop-nav">
        {links.map((l, i) => (
          <li key={l}>
            <a
              href={`#${ids[i]}`}
              style={{
                color: 'rgba(255,255,255,.85)',
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: .5,
                transition: 'color .2s',
              }}
              onMouseEnter={e => e.target.style.color = '#c9a227'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.85)'}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        style={{
          background: 'linear-gradient(135deg,#c9a227,#e8c45a)',
          color: '#1a4a35',
          padding: '9px 22px',
          borderRadius: 4,
          fontWeight: 700,
          fontSize: 13,
          textDecoration: 'none',
          letterSpacing: .5,
        }}
      >
        Nous contacter
      </a>

      {/* Mobile burger */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: '#fff',
          cursor: 'pointer',
        }}
        className="burger"
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed',
          top: 70,
          left: 0,
          right: 0,
          background: 'rgba(26,74,53,.98)',
          padding: '24px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}>
          {links.map((l, i) => (
            <a
              key={l}
              href={`#${ids[i]}`}
              onClick={() => setOpen(false)}
              style={{ color: '#fff', textDecoration: 'none', fontSize: 18, fontWeight: 500 }}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}