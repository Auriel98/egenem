import { motion } from 'framer-motion'
import { Shield, Star, Clock, Users } from 'lucide-react'
import { useState } from 'react'

const reasons = [
  {
    icon: Shield,
    title: 'Qualité Certifiée',
    desc: "Produits et méthodes conformes aux normes d'hygiène et de sécurité.",
    stat: '100%',
    statLabel: 'conformité',
  },
  {
    icon: Star,
    title: 'Excellence du Service',
    desc: 'Engagement total pour la satisfaction de chaque client.',
    stat: '5★',
    statLabel: 'satisfaction',
  },
  {
    icon: Clock,
    title: 'Réactivité',
    desc: 'Intervention rapide, planification souple selon vos contraintes.',
    stat: '24h',
    statLabel: 'intervention',
  },
  {
    icon: Users,
    title: 'Équipes Formées',
    desc: 'Personnel qualifié, en tenue, équipé et régulièrement formé.',
    stat: '+20',
    statLabel: 'experts',
  },
]

function ReasonCard({ r, i }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: i * 0.12, duration: 0.6, ease: 'easeOut' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: hovered ? '#fff' : '#fff',
        border: hovered ? '1.5px solid rgba(201,162,39,.6)' : '1.5px solid rgba(201,162,39,.2)',
        borderRadius: 16,
        padding: '40px 28px 32px',
        textAlign: 'center',
        cursor: 'default',
        overflow: 'hidden',
        transition: 'border-color .35s, box-shadow .35s',
        boxShadow: hovered
          ? '0 24px 60px rgba(201,162,39,.15), 0 8px 20px rgba(0,0,0,.1)'
          : '0 2px 12px rgba(0,0,0,.06)',
      }}
    >
      {/* Bande top : verte au repos → dorée au hover */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: i * 0.12 + 0.4, duration: 0.6 }}
        style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: 3,
          background: hovered
            ? 'linear-gradient(90deg,#c9a227,#e8c45a)'
            : 'linear-gradient(90deg,#1a4a35,#2d7a58)',
          transformOrigin: 'left',
          borderRadius: '16px 16px 0 0',
          transition: 'background .35s',
        }}
      />

      {/* Trait vertical vert à gauche */}
      <div style={{
        position: 'absolute', left: 0, top: '20%', bottom: '20%',
        width: 3,
        background: hovered ? 'transparent' : '#1a4a35',
        borderRadius: '0 3px 3px 0',
        opacity: hovered ? 0 : 0.15,
        transition: 'opacity .35s',
      }} />

      {/* Glow hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.5 }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'absolute', top: -40, left: '50%',
          transform: 'translateX(-50%)',
          width: 160, height: 160, borderRadius: '50%',
          background: 'radial-gradient(circle,rgba(201,162,39,.12),transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Numéro filigrane */}
      <motion.div
        animate={{ opacity: hovered ? 0.08 : 0.04, scale: hovered ? 1.1 : 1 }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'absolute', bottom: 8, right: 14,
          fontSize: 72, fontWeight: 900,
          fontFamily: 'Playfair Display,serif',
          color: '#1a4a35', lineHeight: 1,
          userSelect: 'none',
        }}
      >
        {String(i + 1).padStart(2, '0')}
      </motion.div>

      {/* Icône */}
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: i * 0.12 + 0.2, duration: 0.5, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.15, rotate: 8, y: -4 }}
        style={{
          width: 68, height: 68, borderRadius: '50%',
          background: hovered
            ? 'rgba(201,162,39,.15)'
            : 'rgba(26,74,53,.08)',
          border: hovered
            ? '2px solid rgba(201,162,39,.7)'
            : '1.5px solid rgba(26,74,53,.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 22px',
          boxShadow: hovered ? '0 8px 24px rgba(201,162,39,.2)' : 'none',
          transition: 'background .3s, border .3s, box-shadow .3s',
        }}
      >
        <r.icon size={28} color={hovered ? '#c9a227' : '#1a4a35'} style={{ transition: 'color .3s' }} />
      </motion.div>

      {/* Stat */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: i * 0.12 + 0.3, duration: 0.5 }}
        style={{
          fontSize: 28, fontWeight: 900,
          color: '#c9a227',
          fontFamily: 'Playfair Display,serif',
          marginBottom: 4,
        }}
      >
        {r.stat}
      </motion.div>

      <div style={{
        display: 'inline-block',
        background: hovered ? 'rgba(201,162,39,.12)' : 'rgba(26,74,53,.1)',
        color: hovered ? '#c9a227' : '#1a4a35',
        fontSize: 10, fontWeight: 700, letterSpacing: 2,
        textTransform: 'uppercase',
        padding: '3px 12px', borderRadius: 20,
        marginBottom: 16,
        transition: 'background .35s, color .35s',
      }}>
        {r.statLabel}
      </div>

      {/* Séparateur */}
      <motion.div
        animate={{ width: hovered ? 48 : 28 }}
        transition={{ duration: 0.3 }}
        style={{
          height: 2,
          background: 'linear-gradient(90deg,#c9a227,#e8c45a)',
          borderRadius: 2,
          margin: '0 auto 16px',
        }}
      />

      {/* Titre */}
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: i * 0.12 + 0.35, duration: 0.5 }}
        animate={{ color: hovered ? '#c9a227' : '#1a4a35' }}
        style={{
          fontSize: 17, fontWeight: 700,
          marginBottom: 12, lineHeight: 1.3,
        }}
      >
        {r.title}
      </motion.h3>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: i * 0.12 + 0.45, duration: 0.5 }}
        style={{
          color: '#6b7280',
          fontSize: 13, lineHeight: 1.8, margin: 0,
        }}
      >
        {r.desc}
      </motion.p>

      {/* Barre verte en bas de la carte */}
      <div style={{
        position: 'absolute', bottom: 0, left: '10%', right: '10%',
        height: 2,
        background: hovered ? 'transparent' : 'rgba(26,74,53,.15)',
        borderRadius: '2px 2px 0 0',
        transition: 'background .35s',
      }} />
    </motion.div>
  )
}

export default function WhyUs() {
  return (
    <section
      id="whyus"
      style={{
        background: '#f3f4f2',
        position: 'relative',
        overflow: 'hidden',
        padding: '100px 0',
      }}
    >
      {/* Blobs décoratifs adaptés au fond clair */}
      <motion.div
        animate={{ y: [0, -24, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', left: '-6%', bottom: '-10%',
          width: 420, height: 420,
          borderRadius: '60% 40% 55% 45%',
          background: 'radial-gradient(circle,rgba(26,74,53,.06),transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', right: '-6%', top: '-10%',
          width: 360, height: 360,
          borderRadius: '45% 55% 40% 60%',
          background: 'radial-gradient(circle,rgba(201,162,39,.07),transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Grille de points */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(26,74,53,.06) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />

      <div
        className="container"
        style={{
          position: 'relative', zIndex: 1,
          maxWidth: '1140px',
          margin: '0 auto', padding: '0 24px',
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 70 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              display: 'inline-block',
              background: 'rgba(26,74,53,.08)',
              border: '1px solid rgba(26,74,53,.2)',
              borderRadius: 4, padding: '6px 20px',
              color: '#1a4a35', fontSize: 11, fontWeight: 700,
              letterSpacing: 3, textTransform: 'uppercase',
              marginBottom: 18,
            }}
          >
            Nos engagements
          </motion.span>

          <h2 style={{
            fontFamily: 'Playfair Display,serif',
            fontSize: 'clamp(2rem,4vw,3rem)',
            color: '#1a4a35', marginBottom: 14,
          }}>
            Pourquoi choisir{' '}
            <span style={{ color: '#c9a227' }}>EGENEM</span> ?
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              width: 60, height: 3,
              background: 'linear-gradient(90deg,#c9a227,#e8c45a)',
              margin: '0 auto 18px', borderRadius: 2,
              transformOrigin: 'center',
            }}
          />

          <p style={{
            color: '#6b7280',
            maxWidth: 480, margin: '0 auto',
            fontSize: 15, lineHeight: 1.8,
          }}>
            Une équipe professionnelle dédiée à votre satisfaction et à la qualité de chaque intervention.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
        }}>
          {reasons.map((r, i) => (
            <ReasonCard key={r.title} r={r} i={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #whyus .container > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          #whyus .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}