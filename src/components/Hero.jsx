import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone } from 'lucide-react'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const stats = [
    { n: '100%', l: 'Satisfaction client' },
    { n: 'Pro', l: 'Équipes formées' },
    { n: '24h', l: 'Intervention rapide' },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const fadeScale = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.55, ease: [0.34, 1.56, 0.64, 1] },
    },
  }

  const lineReveal = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.8 },
    },
  }

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.9 + i * 0.12 },
    }),
  }

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ✅ FIX 1 : Image dans un <img> avec objectFit pour un cadrage parfait */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-10%',
          y: bgY,
        }}
      >
        <img
          src="/baground.png"
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
            filter: 'blur(2px) brightness(0.6)',
            display: 'block',
          }}
        />
      </motion.div>

      {/* ✅ FIX 2 : Overlay vert beaucoup plus léger — opacité réduite de moitié */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(145deg, rgba(12,45,28,.40) 0%, rgba(30,90,58,.30) 50%, rgba(12,45,28,.45) 100%)',
        }}
      />

      {/* Cercle décoratif 1 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
        style={{
          position: 'absolute',
          right: '-10%',
          top: '10%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'rgba(201,162,39,.06)',
          border: '1px solid rgba(201,162,39,.12)',
          pointerEvents: 'none',
        }}
      />

      {/* Cercle décoratif 2 — pulse */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{
          opacity: [0, 1, 0.8, 1],
          scale: [0.7, 1, 1.04, 1],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          delay: 0.5,
          times: [0, 0.5, 0.75, 1],
        }}
        style={{
          position: 'absolute',
          right: '5%',
          top: '25%',
          width: 320,
          height: 320,
          borderRadius: '50%',
          background: 'rgba(201,162,39,.08)',
          border: '1px solid rgba(201,162,39,.15)',
          pointerEvents: 'none',
        }}
      />

      {/* Particules dorées flottantes */}
      {[
        { top: '15%', left: '8%', size: 4, delay: 0 },
        { top: '70%', left: '5%', size: 3, delay: 0.3 },
        { top: '45%', right: '12%', size: 5, delay: 0.6 },
        { top: '80%', right: '20%', size: 3, delay: 1 },
        { top: '30%', left: '20%', size: 2, delay: 0.8 },
      ].map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.7, 0.4, 0.7],
            y: [0, -14, 0],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            delay: p.delay,
          }}
          style={{
            position: 'absolute',
            top: p.top,
            left: p.left,
            right: p.right,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: '#c9a227',
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Contenu avec scroll fade */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 20px',
          y: contentY,
          opacity,
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={fadeScale}>
            <motion.div
              whileHover={{ scale: 1.06 }}
              style={{
                display: 'inline-block',
                border: '1px solid rgba(201,162,39,.6)',
                borderRadius: 4,
                padding: '6px 16px',
                color: '#c9a227',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: 2,
                marginBottom: 24,
                textTransform: 'uppercase',
                backdropFilter: 'blur(8px)',
                background: 'rgba(201,162,39,.08)',
                cursor: 'default',
              }}
            >
              Gabon - Port-Gentil
            </motion.div>
          </motion.div>

          {/* Titre — mots animés un par un */}
          <motion.div variants={fadeUp}>
            <motion.h1
              style={{
                fontSize: 'clamp(2.8rem,6vw,5rem)',
                color: '#fff',
                lineHeight: 1.1,
                marginBottom: 20,
                fontFamily: 'Playfair Display, serif',
                textShadow: '0 4px 30px rgba(0,0,0,.4)',
              }}
            >
              {['Propreté,'].map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: 'inline-block', marginRight: '0.25em' }}
                >
                  {w}
                </motion.span>
              ))}
              <br />
              {[
                { text: 'Fiabilité', color: '#c9a227' },
                { text: 'et', color: '#fff' },
                { text: 'Excellence', color: '#e8c45a' },
              ].map((w, i) => (
                <motion.span
                  key={w.text}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ color: w.color, display: 'inline-block', marginRight: '0.25em' }}
                >
                  {w.text}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            style={{
              color: 'rgba(255,255,255,.9)',
              fontSize: 17,
              maxWidth: 600,
              lineHeight: 1.7,
              margin: '0 auto 40px',
              textShadow: '0 2px 10px rgba(0,0,0,.3)',
            }}
          >
            Entreprise Gabonaise d'Entretien et de Nettoyage des Établissements
            Modernes — des solutions professionnelles de nettoyage industriel et tertiaire.
          </motion.p>

          {/* Boutons */}
          <motion.div
            variants={fadeUp}
            style={{
              display: 'flex',
              gap: 16,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(201,162,39,.65)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              style={{
                background: 'linear-gradient(135deg,#c9a227,#e8c45a)',
                color: '#1a4a35',
                padding: '14px 32px',
                borderRadius: 4,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: 'none',
                boxShadow: '0 8px 30px rgba(201,162,39,.45)',
                display: 'inline-block',
              }}
            >
              Voir nos prestations
            </motion.a>

            <motion.a
              href="tel:0764851466"
              whileHover={{
                scale: 1.04,
                background: 'rgba(255,255,255,.15)',
                borderColor: 'rgba(255,255,255,.7)',
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                border: '1.5px solid rgba(255,255,255,.4)',
                color: '#fff',
                padding: '14px 28px',
                borderRadius: 4,
                fontWeight: 500,
                fontSize: 15,
                textDecoration: 'none',
                backdropFilter: 'blur(8px)',
                background: 'rgba(255,255,255,.08)',
              }}
            >
              <Phone size={16} />
              076 48 51 46
            </motion.a>
          </motion.div>

          {/* Ligne de séparation animée */}
          <div style={{ marginTop: 60, paddingTop: 40, position: 'relative' }}>
            <motion.div
              variants={lineReveal}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'rgba(255,255,255,.15)',
                transformOrigin: 'left',
              }}
            />

            {/* Stats */}
            <div
              style={{
                display: 'flex',
                gap: 40,
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.l}
                  custom={i}
                  variants={statVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  style={{ textAlign: 'center', cursor: 'default' }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 1 + i * 0.12,
                      type: 'spring',
                      stiffness: 200,
                    }}
                    style={{
                      fontSize: 30,
                      fontWeight: 900,
                      color: '#c9a227',
                      fontFamily: 'Playfair Display, serif',
                      textShadow: '0 0 20px rgba(201,162,39,.4)',
                    }}
                  >
                    {s.n}
                  </motion.div>
                  <div
                    style={{
                      color: 'rgba(255,255,255,.75)',
                      fontSize: 13,
                      marginTop: 4,
                    }}
                  >
                    {s.l}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}