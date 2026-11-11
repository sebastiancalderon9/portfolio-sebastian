import { useRef, useState } from 'react'
import InteractiveVideo from './components/InteractiveVideo'

import heroVideo from './assets/hero-sebastian.mp4'
import heroVideoPoster from './assets/hero-sebastian-poster.webp'

import realBlendsCampaign from './assets/realblends/campaign-01.mp4'
import realBlendsReel from './assets/realblends/reel-01.mp4'
import senorConstructorReel from './assets/senorconstructor/sc-reel-01.mp4'
import gintracomReel from './assets/gintracom/gt-reel-01.mp4'
import multipapasVideo from './assets/otrosproyectos/op-multipapas-01.mp4'
import lucidbotVideo from './assets/otrosproyectos/op-lucidbot-01.mp4'

import realBlendsCampaignPoster from './assets/optimized/video-realblends-campaign.webp'
import realBlendsReelPoster from './assets/optimized/video-realblends-reel.webp'
import senorConstructorPoster from './assets/optimized/video-senorconstructor.webp'
import gintracomPoster from './assets/optimized/video-gintracom.webp'
import multipapasPoster from './assets/optimized/video-multipapas.webp'
import lucidbotPoster from './assets/optimized/video-lucidbot.webp'

import realBlendsDesignOne from './assets/optimized/design-realblends-01.webp'
import realBlendsDesignTwo from './assets/optimized/design-realblends-02.webp'
import senorConstructorDesignOne from './assets/optimized/design-senorconstructor-01.webp'
import senorConstructorDesignTwo from './assets/optimized/design-senorconstructor-02.webp'
import gintracomDesignOne from './assets/optimized/design-gintracom-01.webp'
import gintracomDesignTwo from './assets/optimized/design-gintracom-02.webp'
import opticaDesign from './assets/optimized/design-optica.webp'

import senorConstructorProof from './assets/senorconstructor/sc-result-01.png'
import gintracomProof from './assets/gintracom/gt-result-01.png'

const experience = [
  {
    period: 'Junio 2023 — Marzo 2024',
    company: 'Gintracom Logistics & E-commerce',
    role: 'Editor de video para pauta y Community Manager',
    description: 'Participé en la producción de contenido y activos digitales para campañas, redes sociales y e-commerce.',
    responsibilities: [
      'Edición de videos para campañas de Meta Ads.',
      'Creación de landing pages de productos en Shopify.',
      'Producción de contenido para redes sociales.',
      'Gestión de las redes sociales de la marca.'
    ],
    achievement: 'Durante este proceso se consolidó una comunidad de más de 45 mil seguidores en Instagram.'
  },
  {
    period: 'Abril 2024 — Mayo 2025',
    company: 'Desarrolladora TTerra Colombia',
    role: 'Community Manager y marketing digital',
    description: 'Gestión de comunidades, planeación de contenido y desarrollo de piezas para comunicación en redes sociales.',
    responsibilities: [
      'Planeación y administración de contenido para canales digitales.',
      'Diseño de piezas y apoyo en comunicación de campañas.',
      'Seguimiento a comunidades y necesidades de interacción en redes.'
    ],
    achievement: 'Lideré estrategia, diseño, edición, pauta y participación como modelo EGC en campañas que contribuyeron a la venta de más de 40 lotes campestres en menos de cuatro meses.'
  },
  {
    period: 'Mayo 2025 — Agosto 2026',
    company: 'Proyecto e-commerce Señor Constructor',
    role: 'Encargado de Comunicaciones y Community Manager',
    description: 'Responsable de la comunicación y ejecución digital de la marca para redes sociales, pauta y e-commerce.',
    responsibilities: [
      'Diseño de estrategia para contenido orgánico y campañas de pauta.',
      'Edición de todos los videos y participación como modelo EGC de la marca.',
      'Desarrollo web, diseño de piezas y gestión de redes sociales.'
    ],
    achievement: 'Más de 1.000 millones de pesos en ventas durante cinco meses, resultado respaldado en el reporte de la sección Logros.'
  },
  {
    period: '2023 — 2026',
    company: 'Proyectos independientes',
    role: 'Freelancer de marketing digital',
    description: 'Trabajo por contrato para marcas que necesitaban fortalecer su presencia, contenido, campañas o experiencia digital.',
    responsibilities: [
      'Estrategia, grabación, edición y diseño de contenido.',
      'Producción de contenido UGC y EGC.',
      'Gestión de redes sociales y diseño web.'
    ],
    projects: 'Lucidbot, Óptica La Terminal, Ópticas Cristian Aristizábal, Real Blends y Multipapas.'
  }
]

const videos = [
  { src: realBlendsCampaign, poster: realBlendsCampaignPoster, label: 'Real Blends · Campaña', number: '01' },
  { src: realBlendsReel, poster: realBlendsReelPoster, label: 'Real Blends · Contenido', number: '02' },
  { src: senorConstructorReel, poster: senorConstructorPoster, label: 'Señor Constructor · Pauta', number: '03' },
  { src: gintracomReel, poster: gintracomPoster, label: 'Gintracom · Redes sociales', number: '04' },
  { src: multipapasVideo, poster: multipapasPoster, label: 'Multipapas · Contenido B2B', number: '05' },
  { src: lucidbotVideo, poster: lucidbotPoster, label: 'Lucidbot · Video digital', number: '06' }
]

const designs = [
  { src: realBlendsDesignOne, brand: 'Real Blends', type: 'Campaña' },
  { src: realBlendsDesignTwo, brand: 'Real Blends', type: 'Redes sociales' },
  { src: senorConstructorDesignOne, brand: 'Señor Constructor', type: 'Creatividad de pauta' },
  { src: senorConstructorDesignTwo, brand: 'Señor Constructor', type: 'Campaña de producto' },
  { src: gintracomDesignOne, brand: 'Gintracom', type: 'Diseño social' },
  { src: gintracomDesignTwo, brand: 'Gintracom', type: 'Comunicación digital' },
  { src: opticaDesign, brand: 'Óptica La Terminal', type: 'Diseño y campaña' }
]

function SectionTitle({ title, description }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function App() {
  const [isHeroMuted, setIsHeroMuted] = useState(true)
  const heroVideoRef = useRef(null)

  const toggleHeroSound = () => {
    const player = heroVideoRef.current

    if (!player) return

    if (isHeroMuted) {
      player.currentTime = 0
      player.muted = false
      player.play()
      setIsHeroMuted(false)
      return
    }

    player.muted = true
    player.play()
    setIsHeroMuted(true)
  }

  return (
    <div className="cv-site" id="inicio">
      <header className="site-header">
        <a className="brand-mark" href="#inicio" aria-label="Ir al inicio">SC<span>.</span></a>
        <nav className="site-nav" aria-label="Navegación principal">
          <a href="#trayectoria">Trayectoria</a>
          <a href="#logros">Logros</a>
          <a href="#muestras">Muestras</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy-wrap">
            <p className="hero-location">Medellín, Colombia</p>
            <p className="hero-role">Marketing digital integral</p>
            <h1 id="hero-title">Sebastián Calderón</h1>
            <p className="hero-summary">
              Comunicador Social–Periodista con experiencia en estrategia digital,
              contenido, e-commerce, pauta y creatividad para marcas.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#trayectoria">Ver trayectoria</a>
              <a className="button button-secondary" href="#contacto">Contactarme</a>
            </div>
          </div>

          <figure className="hero-portrait-panel">
            <div className="hero-video-frame">
              <video
                ref={heroVideoRef}
                autoPlay
                loop={isHeroMuted}
                muted={isHeroMuted}
                playsInline
                preload="metadata"
                poster={heroVideoPoster}
                aria-label="Video de presentación de Sebastián Calderón"
              >
                <source src={heroVideo} type="video/mp4" />
              </video>
              <button
                className="hero-video-control"
                type="button"
                onClick={toggleHeroSound}
                aria-pressed={!isHeroMuted}
              >
                {isHeroMuted ? 'Escuchar presentación' : 'Silenciar presentación'}
              </button>
            </div>
            <figcaption>Presentación personal</figcaption>
          </figure>
        </section>

        <section className="section experience-section" id="trayectoria">
          <SectionTitle
            title="Trayectoria profesional"
            description="Experiencia en proyectos donde el contenido, la comunicación y las campañas hacen parte de objetivos reales de marca y negocio."
          />

          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" key={item.company}>
                <p>{item.period}</p>
                <div>
                  <h3>{item.company}</h3>
                  <strong>{item.role}</strong>
                </div>
                <div className="experience-detail">
                  <span>{item.description}</span>
                  <ul>
                    {item.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
                  </ul>
                  {item.achievement && <p className="experience-achievement">{item.achievement}</p>}
                  {item.projects && <p className="experience-projects"><strong>Marcas:</strong> {item.projects}</p>}
                </div>
              </article>
            ))}
          </div>

          <div className="education-block">
            <div>
              <span>Formación</span>
              <strong>Comunicación Social–Periodismo</strong>
              <p>Corporación Universitaria Minuto de Dios · 2018—2023</p>
            </div>
            <div>
              <span>Actualización profesional</span>
              <strong>Comunicaciones Integradas en Marketing</strong>
              <p>Diplomado en curso · Politécnico de Colombia</p>
            </div>
          </div>
        </section>

        <section className="section evidence-section" id="logros">
          <SectionTitle
            title="Resultados respaldados"
            description="Estos datos se presentan junto con la evidencia visual original del reporte o perfil correspondiente."
          />

          <div className="evidence-grid">
            <article className="evidence-card">
              <div className="evidence-copy">
                <p>Señor Constructor</p>
                <h3>Resultados de e-commerce y pauta</h3>
                <span>Reporte Meta Ads · enero a mayo de 2026</span>
                <ul>
                  <li>1.290.795.862 COP en ventas registradas</li>
                  <li>5.188 pedidos registrados</li>
                  <li>72.177.505 COP de inversión publicitaria</li>
                </ul>
              </div>
              <img src={senorConstructorProof} alt="Reporte de resultados de Señor Constructor en Meta Ads" loading="lazy" />
            </article>

            <article className="evidence-card">
              <div className="evidence-copy">
                <p>Gintracom</p>
                <h3>Comunidad digital en Instagram</h3>
                <span>Captura de perfil de Instagram</span>
                <ul>
                  <li>45,9 mil seguidores visibles en el perfil</li>
                  <li>310 publicaciones al momento de la captura</li>
                  <li>Contenido y comunicación para redes sociales</li>
                </ul>
              </div>
              <img src={gintracomProof} alt="Perfil de Instagram de Gintracom con 45,9 mil seguidores" loading="lazy" />
            </article>
          </div>
        </section>

        <section className="section work-section" id="muestras">
          <SectionTitle
            title="Muestras de trabajo"
            description="Una selección de videos, campañas y piezas visuales desarrolladas para distintos proyectos."
          />

          <div className="work-heading"><h3>Videos</h3><p>Haz clic para reproducir</p></div>
          <div className="video-grid">
            {videos.map((video) => <InteractiveVideo key={video.number} {...video} />)}
          </div>

          <div className="work-heading work-heading-design"><h3>Diseños</h3><p>Contenido, campañas y creatividad de pauta</p></div>
          <div className="design-grid">
            {designs.map((design) => (
              <figure className="design-card" key={`${design.brand}-${design.type}`}>
                <img src={design.src} alt={`${design.type} para ${design.brand}`} loading="lazy" />
                <figcaption><strong>{design.brand}</strong><span>{design.type}</span></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="profile-section">
          <div>
            <h2>Perfil profesional</h2>
            <p>
              Me interesa aportar en equipos donde la creatividad se conecte con la estrategia,
              la ejecución y los objetivos comerciales. Puedo acompañar una idea desde su
              planteamiento hasta su salida a canales digitales.
            </p>
          </div>
          <ul>
            <li>Estrategia y comunicación digital</li>
            <li>Contenido, diseño y producción audiovisual</li>
            <li>Meta Ads, e-commerce y creatividad para performance</li>
            <li>Landing pages, IA y experiencias digitales</li>
          </ul>
        </section>
      </main>

      <footer className="contact-section" id="contacto">
        <div><h2>Hablemos.</h2><p>Estoy disponible para oportunidades y proyectos en marketing digital.</p></div>
        <div className="contact-links">
          <a href="mailto:09sacm@gmail.com"><span>Correo</span><strong>09sacm@gmail.com</strong></a>
          <a href="https://wa.me/573233004012" target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>+57 323 300 4012</strong></a>
        </div>
        <div className="footer-bottom"><span>© 2026 Sebastián Calderón</span><a href="#inicio">Volver al inicio</a></div>
      </footer>

      <a
        className="whatsapp-float"
        href="https://wa.me/573233004012"
        target="_blank"
        rel="noreferrer"
        aria-label="Escribir a Sebastián por WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.5 11.7a8.5 8.5 0 0 1-12.56 7.48L3.5 20.5l1.36-4.25A8.5 8.5 0 1 1 20.5 11.7Z" />
          <path d="M9.2 7.9c.2-.5.45-.52.72-.5h.45c.14 0 .35.05.48.34l.68 1.6c.1.25.06.42-.03.58l-.3.43c-.1.12-.2.25-.08.47.12.22.53.86 1.15 1.4.8.7 1.48.91 1.7 1.02.22.12.35.1.48-.07l.62-.72c.15-.18.32-.15.54-.07l1.55.73c.25.12.42.18.48.29.06.1.06.62-.15 1.2-.2.58-1.16 1.1-1.6 1.15-.42.05-.95.2-3.22-.68-2.72-1.04-4.47-3.63-4.6-3.8-.13-.18-1.1-1.45-1.1-2.76 0-1.31.68-1.95.92-2.22Z" />
        </svg>
        <span>WhatsApp</span>
      </a>
    </div>
  )
}

export default App
