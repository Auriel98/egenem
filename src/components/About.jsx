import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function About() {
  const points = [
    'Personnel qualifié et formé aux normes HSE',
    'Produits professionnels homologués',
    'Matériels modernes haute performance',
    'Intervention sur site selon vos horaires',
  ]

  return (
    <section id="about" style={{background:'#fff'}}>
      <div className="container" style={{
        display:'grid',gridTemplateColumns:'1fr 1fr',gap:72,alignItems:'center'
      }}>
        {/* Image block */}
        <motion.div
          initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}}
          viewport={{once:true}} transition={{duration:.7}}
          style={{position:'relative'}}
        >
          <div style={{
            width:'100%',
            paddingBottom:'80%',
            position:'relative',
            borderRadius:12,
            overflow:'hidden',
            boxShadow:'0 20px 60px rgba(0,0,0,.15)',
            background:'#eef2ee',
          }}>
            <img
              src="/ImageGroupe.png"
              alt="Équipe EGENEM"
              style={{
                position:'absolute',
                inset:0,
                width:'100%',
                height:'100%',
                objectFit:'contain',
                objectPosition:'center',
                padding:'8px',
              }}
            />
            {/* Overlay subtle en bas */}
            <div style={{
              position:'absolute',bottom:0,left:0,right:0,height:'25%',
              background:'linear-gradient(to top, rgba(26,74,53,.3), transparent)',
            }}/>
          </div>

          {/* Badge N°1 */}
          <div style={{
            position:'absolute',bottom:-20,right:-20,
            background:'linear-gradient(135deg,#c9a227,#e8c45a)',
            borderRadius:8,padding:'20px 28px',
            boxShadow:'0 12px 40px rgba(201,162,39,.4)'
          }}>
            <div style={{fontSize:32,fontWeight:900,color:'#1a4a35',fontFamily:'Playfair Display,serif'}}>N°1</div>
            <div style={{fontSize:12,color:'#1a4a35',fontWeight:600}}>Port-Gentil</div>
            <div style={{fontSize:12,color:'#1a4a35',fontWeight:600}}>Oyem</div>

          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}}
          viewport={{once:true}} transition={{duration:.7}}
        >
          <h2 className="section-title">Qui sommes-nous ?</h2>
          <div className="gold-bar"/>
          <p style={{color:'#4b5563',lineHeight:1.8,marginBottom:24,fontSize:16}}>
          <strong>EGENEM</strong> est une entreprise gabonaise spécialisée dans l’entretien et le nettoyage des établissements modernes. Présente à <strong>Port-Gentil</strong> et <strong>Oyem</strong>, elle intervient dans les secteurs industriels, tertiaires et logistiques avec professionnalisme et rigueur.
         </p>
          <p style={{color:'#4b5563',lineHeight:1.8,marginBottom:32,fontSize:16}}>
            Notre mission : garantir des environnements propres, sains et conformes aux exigences
            de nos clients, avec des produits certifiés et des équipements de dernière génération.
          </p>

          <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:14}}>
            {points.map(p => (
              <li key={p} style={{display:'flex',alignItems:'center',gap:12}}>
                <CheckCircle size={20} color="#2d6e50" strokeWidth={2.5}/>
                <span style={{color:'#374151',fontSize:15}}>{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}