import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const links = ['Accueil', 'À propos', 'Prestations', 'Pourquoi nous', 'Contact']
  const ids   = ['hero', 'about', 'services', 'whyus', 'contact']

  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* STYLE INTÉGRÉ */}
      <style>{`
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          transition: all .3s ease;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo img {
          height: 42px;
        }

        .logo span {
          color: white;
          font-weight: 700;
          font-size: 16px;
        }

        .desktop-nav {
          display: flex;
          gap: 30px;
          list-style: none;
        }

        .desktop-nav a {
          color: rgba(255,255,255,.85);
          text-decoration: none;
          font-size: 14px;
          transition: 0.2s;
        }

        .desktop-nav a:hover {
          color: #c9a227;
        }

        .cta {
          background: linear-gradient(135deg,#c9a227,#e8c45a);
          color: #1a4a35;
          padding: 8px 18px;
          border-radius: 4px;
          font-weight: 700;
          font-size: 13px;
          text-decoration: none;
        }

        .burger {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 75%;
          height: 100vh;
          background: #1a4a35;
          display: flex;
          flex-direction: column;
          padding: 80px 30px;
          gap: 25px;
          transition: right 0.3s ease;
          z-index: 999;
        }

        .mobile-menu.open {
          right: 0;
        }

        .mobile-menu a {
          color: white;
          text-decoration: none;
          font-size: 18px;
        }

        .mobile-cta {
          margin-top: 20px;
          background: #c9a227;
          color: #1a4a35;
          padding: 12px;
          text-align: center;
          border-radius: 4px;
          font-weight: bold;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .cta {
            display: none;
          }

          .burger {
            display: block;
          }
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        background: scrolled ? 'rgba(26,74,53,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,.25)' : 'none',
      }}>
        
        {/* LOGO */}
        <div className="logo">
          <img src="/logo.png" alt="logo" />
          <span>EGENEM</span>
        </div>

        {/* DESKTOP MENU */}
        <ul className="desktop-nav">
          {links.map((l, i) => (
            <li key={l}>
              <a href={`#${ids[i]}`}>{l}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" className="cta">
          Nous contacter
        </a>

        {/* BURGER */}
        <button className="burger" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map((l, i) => (
          <a key={l} href={`#${ids[i]}`} onClick={() => setOpen(false)}>
            {l}
          </a>
        ))}

        <a href="#contact" className="mobile-cta">
          Nous contacter
        </a>
      </div>
    </>
  )
}
