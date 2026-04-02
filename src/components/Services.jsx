import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles, Droplets, Settings2, Zap,
  Building2, Factory, Leaf, Waves,
} from 'lucide-react'

const services = [
  { Icon: Sparkles,  title: 'Nettoyage & Désinfection', desc: 'Sols, surfaces, vitres — traitement complet et hygiénisation professionnelle.' },
  { Icon: Droplets,  title: 'Traitement Humidité',      desc: 'Diagnostic et traitement de l\'humidité sur les murs pour des locaux sains.' },
  { Icon: Settings2, title: 'Nettoyage Industriel',     desc: 'Entretien des installations et équipements industriels selon les normes HSE.' },
  { Icon: Zap,       title: 'Haute Pression',            desc: 'Nettoyage haute pression des cuves, bacs, réservoirs et citernes.' },
  { Icon: Building2, title: 'Structures Métalliques',   desc: 'Dégraissage et nettoyage des charpentes, passerelles et structures acier.' },
  { Icon: Factory,   title: 'Aires de Production',       desc: 'Nettoyage des zones logistiques et espaces de production industrielle.' },
  { Icon: Leaf,      title: 'Espaces Verts',             desc: 'Entretien des espaces de travail extérieurs, jardins et zones vertes.' },
  { Icon: Waves,     title: 'Curage Caniveaux',          desc: 'Curage manuel et mécanique des caniveaux, fossés et réseaux d\'évacuation.' },
]

const circleImages = [
  '/image1.jpeg',
  '/image2.jpeg',
  '/image3.jpeg',
  '/image4.jpeg',
  '/image5.jpeg',
]
function CircleSlider() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current)
      setCurrent(c => (c + 1) % circleImages.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [current])

  return (
    <div style={{
      width: 300,
      height: 300,
      borderRadius: '50%',
      overflow: 'hidden',
      position: 'relative',
      flexShrink: 0,
      boxShadow: '0 0 0 4px #c9a227, 0 0 0 8px rgba(201,162,39,0.15), 0 12px 40px rgba(0,0,0,0.18)',
    }}>
      <AnimatePresence>
        <motion.img
          key={current}
          src={circleImages[current]}
          alt=""
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </AnimatePresence>

      {/* Dots indicateurs */}
      <div style={{
        position: 'absolute',
        bottom: 12,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 5,
        zIndex: 10,
      }}>
        {circleImages.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? 16 : 6,
              height: 6,
              borderRadius: 3,
              background: i === current ? '#c9a227' : 'rgba(255,255,255,0.55)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function Services() {
  const tickerRef = useRef(null)

  useEffect(() => {
    const el = tickerRef.current
    if (!el) return
    const pause  = () => (el.style.animationPlayState = 'paused')
    const resume = () => (el.style.animationPlayState = 'running')
    el.addEventListener('mouseenter', pause)
    el.addEventListener('mouseleave', resume)
    return () => {
      el.removeEventListener('mouseenter', pause)
      el.removeEventListener('mouseleave', resume)
    }
  }, [])

  const tickerItems = [...services, ...services]

  return (
    <section id="services" style={{ background: '#f3f4f2', overflow: 'hidden' }}>

      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker-scroll 28s linear infinite;
        }
        @keyframes ring-pulse {
          0%, 100% { box-shadow: 0 0 0 0px rgba(201,162,39,0); }
          50%       { box-shadow: 0 0 0 7px rgba(201,162,39,0.18); }
        }
        .service-card {
          background: #fff;
          border-radius: 14px;
          padding: 22px 24px;
          border-top: 3px solid transparent;
          box-shadow: 0 2px 12px rgba(0,0,0,.06);
          transition: border-top-color .3s, box-shadow .3s;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 18px;
          position: relative;
          overflow: hidden;
          cursor: default;
        }
        .service-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(26,74,53,.04) 0%, transparent 60%);
          opacity: 0;
          transition: opacity .35s;
          pointer-events: none;
        }
        .service-card:hover::before { opacity: 1; }
        .service-card:hover {
          border-top-color: #c9a227;
          box-shadow: 0 20px 50px rgba(0,0,0,.13);
        }
        .service-card:hover .card-icon-wrap {
          background: rgba(26,74,53,.13);
          border-color: rgba(0,160,60,.45);
          animation: ring-pulse 1.4s ease-in-out infinite;
        }
        .service-card:hover .card-icon-wrap svg {
          color: #1a4a35;
          stroke: #1a4a35;
        }
        .service-card:hover .card-title { color: #c9a227; }
        .service-card::after {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%) scaleY(0);
          width: 3px;
          height: 60%;
          background: #c9a227;
          border-radius: 0 3px 3px 0;
          transition: transform .3s ease;
        }
        .service-card:hover::after { transform: translateY(-50%) scaleY(1); }
        .card-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(0,160,60,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background .3s, border-color .3s;
          border: 1.5px solid rgba(0,160,60,0.20);
        }
        .card-icon-wrap svg {
          width: 20px;
          height: 20px;
          color: #00a03c;
          stroke: #00a03c;
          stroke-width: 1.8;
          transition: color .3s, stroke .3s;
        }
        .card-title {
          font-size: 15px;
          font-weight: 700;
          color: #1a4a35;
          margin-bottom: 6px;
          line-height: 1.3;
          transition: color .3s;
        }
        .card-desc {
          color: #6b7280;
          font-size: 13px;
          line-height: 1.65;
          margin: 0;
        }
        .card-green-dot {
          position: absolute;
          top: 14px;
          right: 16px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #00a03c;
          opacity: 0.45;
          transition: opacity .3s;
        }
        .service-card:hover .card-green-dot { opacity: 1; }

        @media (max-width: 768px) {
          #services-grid { grid-template-columns: 1fr !important; }
          .services-header { flex-direction: column !important; align-items: center !important; text-align: center !important; }
        }
      `}</style>

      <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>

        {/* ── Header : texte à gauche + cercle à droite ── */}
        <div
          className="services-header"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 48,
            marginBottom: 48,
          }}
        >
          {/* Texte */}
          <div style={{ maxWidth: 460 }}>
            <h2 className="section-title">Nos Prestations</h2>
            <div className="gold-bar" style={{ margin: '12px 0 0' }} />
            <p style={{ color: '#6b7280', margin: '16px 0 0', fontSize: 16, lineHeight: 1.7 }}>
              Des services adaptés à tous les secteurs d'activité, assurés par des équipes expérimentées.
            </p>
          </div>

          {/* Cercle slider */}
          <CircleSlider />
        </div>

        {/* Ticker */}
        <div style={{
          background: '#1a4a35',
          overflow: 'hidden',
          padding: '12px 0',
          marginBottom: 48,
          borderRadius: 8,
          position: 'relative',
          marginLeft: 24,
          marginRight: 24,
        }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, bottom: 0, width: 60, zIndex: 2, pointerEvents: 'none',
            background: 'linear-gradient(to right, #1a4a35, transparent)',
          }} />
          <div style={{
            position: 'absolute', top: 0, right: 0, bottom: 0, width: 60, zIndex: 2, pointerEvents: 'none',
            background: 'linear-gradient(to left, #1a4a35, transparent)',
          }} />
          <div className="ticker-track" ref={tickerRef}>
            {tickerItems.map((s, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '0 32px', whiteSpace: 'nowrap',
                color: '#e8d9a0', fontSize: 11, fontWeight: 700,
                letterSpacing: '1.5px', textTransform: 'uppercase',
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#00c44f', display: 'inline-block' }} />
                {s.title}
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#00c44f', display: 'inline-block' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div
          id="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 18,
            alignItems: 'start',
            maxWidth: 1000,
            margin: '0 auto',
            paddingLeft: 24,
            paddingRight: 24,
          }}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
            >
              <div className="card-green-dot" />
              <div className="card-icon-wrap"><s.Icon /></div>
              <div style={{ flex: 1 }}>
                <h3 className="card-title">{s.title}</h3>
                <p className="card-desc">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}