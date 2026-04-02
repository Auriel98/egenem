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

  // Bloquer le scroll du body quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <style>{`
        /* Empêche le scroll horizontal global */
        html, body {
          overflow-x: hidden;
          max-width: 100%;
        }

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
          margin: 0;
          padding: 0;
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
          white-space: nowrap;
        }

        .burger {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 4px;
          z-index: 1100;
        }

        /* OVERLAY sombre derrière le menu */
        .overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          z-index: 998;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .overlay.open {
          display: block;
          opacity: 1;
        }

        /* MENU MOBILE — occupe tout l'écran en largeur */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;          /* ← était 75%, cause du scroll horizontal */
          height: 100dvh;       /* dynamic viewport height pour mobile */
          max-width: 320px;     /* limite sur grands écrans */
          background: #1a4a35;
          display: flex;
          flex-direction: column;
          padding: 70px 28px 40px;
          gap: 0;
          transform: translateX(100%);   /* ← translateX au lieu de right: -100% */
          transition: transform 0.3s ease;
          z-index: 999;
          overflow-y: auto;
          box-sizing: border-box;
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        .mobile-menu a {
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          font-size: 17px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          display: block;
          transition: color 0.2s;
        }

        .mobile-menu a:hover {
          color: #c9a227;
        }

        .mobile-menu a:last-of-type {
          border-bottom: none;
        }

        .mobile-cta {
          margin-top: 28px;
          background: #c9a227;
          color: #1a4a35 !important;
          padding: 14px !important;
          text-align: center;
          border-radius: 4px;
          font-weight: bold;
          border-bottom: none !important;
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

        {/* CTA desktop */}
        <a href="#contact" className="cta">
          Nous contacter
        </a>

        {/* BURGER */}
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* OVERLAY */}
      <div
        className={`overlay ${open ? 'open' : ''}`}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map((l, i) => (
          <a key={l} href={`#${ids[i]}`} onClick={() => setOpen(false)}>
            {l}
          </a>
        ))}
        <a href="#contact" className="mobile-cta" onClick={() => setOpen(false)}>
          Nous contacter
        </a>
      </div>
    </>
  )
}