import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

// ──────────────────────────────────────────────
//  🔧 REMPLACE CES 3 VALEURS PAR LES TIENNES
// ──────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_cs5w6z9'  // ex: service_abc123
const EMAILJS_TEMPLATE_ID = 'template_ln23zjf' // ex: template_xyz789
const EMAILJS_PUBLIC_KEY  = '0fGB-0o_aoUP_TT9b'  // ex: aBcDeFgHiJkLmNoP
// ──────────────────────────────────────────────

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', message: '' })
  const [focused, setFocused] = useState(null)
  const [status, setStatus]   = useState(null) // 'sending' | 'success' | 'error'
  const formRef = useRef(null)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return

    setStatus('sending')  

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.name,
          from_email:   form.email,
          message:      form.message,
          to_name:      'EGENEM',           // apparaît dans le template
          reply_to:     form.email,
        },
        EMAILJS_PUBLIC_KEY
      )

      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(null), 5000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus(null), 5000)
    }
  }

  const contacts = [
    { Icon: Phone,  label: 'Telephone',   val: ['076 48 51 46', '065 94 46 55'],    color: '#c9a227' },
    { Icon: Mail,   label: 'Email',        val: ['contact.egenem@gmail.com'],         color: '#c9a227' },
    { Icon: MapPin, label: 'Localisation', val: ['Port-Gentil, Gabon'],               color: '#c9a227' },
  ]

  const isSending = status === 'sending'

  return (
    <section
      id="contact"
      style={{
        background: '#fff',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Texture points */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(201,162,39,.07) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        pointerEvents: 'none',
      }} />

      {/* Blob déco gauche */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', left: '-8%', top: '10%',
          width: 380, height: 380,
          borderRadius: '60% 40% 55% 45%',
          background: 'radial-gradient(circle,rgba(201,162,39,.08),transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Blob déco droite */}
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', right: '-8%', bottom: '5%',
          width: 320, height: 320,
          borderRadius: '45% 55% 40% 60%',
          background: 'radial-gradient(circle,rgba(26,74,53,.07),transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1140px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              display: 'inline-block',
              background: 'rgba(201,162,39,.12)',
              border: '1px solid rgba(201,162,39,.4)',
              borderRadius: 4, padding: '6px 20px',
              color: '#9a7a1a', fontSize: 11, fontWeight: 700,
              letterSpacing: 3, textTransform: 'uppercase', marginBottom: 18,
            }}
          >
            Parlons-nous
          </motion.span>

          <h2 style={{
            fontFamily: 'Playfair Display,serif',
            fontSize: 'clamp(2rem,4vw,3rem)',
            color: '#1a1a1a', marginBottom: 14,
          }}>
            Contactez <span style={{ color: '#c9a227' }}>EGENEM</span>
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

          <p style={{ color: '#7a6e5f', maxWidth: 480, margin: '0 auto', fontSize: 15, lineHeight: 1.8 }}>
            Demandez un devis gratuit ou renseignez-vous sur nos prestations.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 48, alignItems: 'start' }}>

          {/* Colonne gauche — infos */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h3 style={{
              fontSize: 20, fontWeight: 700, color: '#1a1a1a',
              marginBottom: 32, fontFamily: 'Playfair Display,serif',
            }}>
              Informations de contact
            </h3>

            {contacts.map(({ Icon, label, val }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                whileHover={{ x: 6 }}
                style={{
                  display: 'flex', gap: 16, marginBottom: 24,
                  padding: '18px 20px',
                  background: '#fff',
                  borderRadius: 12,
                  border: '1px solid rgba(201,162,39,.15)',
                  boxShadow: '0 2px 12px rgba(0,0,0,.05)',
                  transition: 'box-shadow .3s',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(201,162,39,.18)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,.05)' }}
              >
                <div style={{
                  width: 46, height: 46, borderRadius: 10, flexShrink: 0,
                  background: 'linear-gradient(135deg,#fdf6e3,#faedc4)',
                  border: '1.5px solid rgba(201,162,39,.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={20} color="#c9a227" />
                </div>
                <div>
                  <div style={{
                    fontSize: 11, color: '#9ca3af', fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 5,
                  }}>
                    {label}
                  </div>
                  {val.map(v => (
                    <div key={v} style={{ fontSize: 15, color: '#374151', fontWeight: 600 }}>{v}</div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Carte devise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{
                marginTop: 8, padding: '28px 24px',
                borderRadius: 12, overflow: 'hidden',
                background: 'linear-gradient(135deg,#1a4a35,#2d6e50)',
                position: 'relative',
              }}
            >
              <div style={{
                position: 'absolute', top: -20, right: -20,
                width: 100, height: 100, borderRadius: '50%',
                background: 'rgba(201,162,39,.1)',
                border: '1px solid rgba(201,162,39,.2)',
              }} />
              <div style={{
                fontSize: 11, color: 'rgba(255,255,255,.5)',
                fontWeight: 700, letterSpacing: 2,
                textTransform: 'uppercase', marginBottom: 10,
              }}>
                Notre devise
              </div>
              <div style={{
                fontSize: 17, fontStyle: 'italic',
                fontFamily: 'Playfair Display,serif',
                color: '#e8c45a', lineHeight: 1.6,
              }}>
                "Propreté • Fiabilité • Excellence"
              </div>
            </motion.div>
          </motion.div>

          {/* Colonne droite — formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            style={{
              background: '#fff',
              borderRadius: 16,
              padding: '44px 40px',
              boxShadow: '0 8px 40px rgba(0,0,0,.08)',
              border: '1px solid rgba(201,162,39,.12)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Bande dorée top */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: 4,
                background: 'linear-gradient(90deg,#c9a227,#e8c45a)',
                transformOrigin: 'left',
                borderRadius: '16px 16px 0 0',
              }}
            />

            <h3 style={{
              fontSize: 22, fontWeight: 700, color: '#1a1a1a',
              marginBottom: 32, fontFamily: 'Playfair Display,serif',
            }}>
              Demande de devis
            </h3>

            {/* Succès */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  background: 'rgba(26,74,53,.08)',
                  border: '1px solid rgba(26,74,53,.25)',
                  borderRadius: 8, padding: '14px 18px',
                  marginBottom: 24, color: '#1a4a35',
                  fontSize: 14, fontWeight: 600,
                }}
              >
                <CheckCircle size={18} color="#2d6e50" />
                Message envoyé avec succès !
              </motion.div>
            )}

            {/* Erreur */}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  background: 'rgba(220,38,38,.07)',
                  border: '1px solid rgba(220,38,38,.25)',
                  borderRadius: 8, padding: '14px 18px',
                  marginBottom: 24, color: '#b91c1c',
                  fontSize: 14, fontWeight: 600,
                }}
              >
                <AlertCircle size={18} color="#dc2626" />
                Une erreur est survenue. Réessayez ou contactez-nous directement.
              </motion.div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { name: 'name',  placeholder: 'Votre nom complet',      type: 'text'  },
                { name: 'email', placeholder: 'Votre adresse email',     type: 'email' },
              ].map(({ name, placeholder, type }) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: name === 'name' ? 0.4 : 0.5, duration: 0.5 }}
                  style={{ position: 'relative' }}
                >
                  <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={form[name]}
                    onChange={handle}
                    onFocus={() => setFocused(name)}
                    onBlur={() => setFocused(null)}
                    disabled={isSending}
                    style={{
                      width: '100%', padding: '14px 16px',
                      borderRadius: 8, fontSize: 15,
                      outline: 'none', fontFamily: 'DM Sans,sans-serif',
                      color: '#1c1c1c',
                      border: focused === name ? '2px solid #c9a227' : '1.5px solid #e5e7eb',
                      background: focused === name ? '#fffdf5' : '#fff',
                      transition: 'border-color .2s, background .2s',
                      boxSizing: 'border-box',
                      boxShadow: focused === name ? '0 0 0 4px rgba(201,162,39,.1)' : 'none',
                      opacity: isSending ? 0.6 : 1,
                    }}
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <textarea
                  name="message"
                  placeholder="Décrivez votre besoin en détail..."
                  rows={5}
                  value={form.message}
                  onChange={handle}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  disabled={isSending}
                  style={{
                    width: '100%', padding: '14px 16px',
                    borderRadius: 8, fontSize: 15,
                    outline: 'none', fontFamily: 'DM Sans,sans-serif',
                    color: '#1c1c1c', resize: 'vertical',
                    border: focused === 'message' ? '2px solid #c9a227' : '1.5px solid #e5e7eb',
                    background: focused === 'message' ? '#fffdf5' : '#fff',
                    transition: 'border-color .2s, background .2s',
                    boxSizing: 'border-box',
                    boxShadow: focused === 'message' ? '0 0 0 4px rgba(201,162,39,.1)' : 'none',
                    opacity: isSending ? 0.6 : 1,
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <motion.button
                  onClick={handleSubmit}
                  whileHover={!isSending ? { scale: 1.02, boxShadow: '0 14px 40px rgba(26,74,53,.4)' } : {}}
                  whileTap={!isSending ? { scale: 0.97 } : {}}
                  disabled={isSending}
                  style={{
                    width: '100%',
                    background: isSending
                      ? 'linear-gradient(135deg,#4a7a65,#5a9075)'
                      : 'linear-gradient(135deg,#1a4a35,#2d6e50)',
                    color: '#fff', padding: '16px',
                    borderRadius: 8, border: 'none',
                    fontWeight: 700, fontSize: 15,
                    cursor: isSending ? 'not-allowed' : 'pointer',
                    letterSpacing: .5,
                    fontFamily: 'DM Sans,sans-serif',
                    boxShadow: '0 8px 28px rgba(26,74,53,.3)',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center', gap: 10,
                    transition: 'background .3s',
                  }}
                >
                  {isSending ? (
                    <>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                        style={{ animation: 'spin 1s linear infinite' }}>
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={17} />
                      Envoyer la demande
                    </>
                  )}
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          #contact .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}