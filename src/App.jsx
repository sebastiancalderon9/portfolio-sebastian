import {
  useEffect,
  useLayoutEffect,
  useRef
} from 'react'

import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import ProjectCard
  from './components/ProjectCard'

import RealBlends
  from './pages/RealBlends'

import SenorConstructor
  from './pages/SenorConstructor'

import Gintracom
  from './pages/Gintracom'

import OtrosProyectos
  from './pages/OtrosProyectos'

import sebastianPhoto
  from './assets/profile/sebastian.png'

import realBlendsCover
  from './assets/projects/realblends-cover.png'

import senorConstructorCover
  from './assets/projects/senorconstructor-cover.png'

import gintracomCover
  from './assets/projects/gintracom-cover.png'

import otrosCover
  from './assets/projects/otros-cover.png'


gsap.registerPlugin(ScrollTrigger)



/* =========================================================
   SCROLL TO TOP
========================================================= */

function ScrollToTop() {

  const { pathname } = useLocation()


  useEffect(() => {

    window.scrollTo(0, 0)

  }, [pathname])


  return null

}



/* =========================================================
   HOME
========================================================= */

function Home() {

  const portfolioRef = useRef(null)


  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      const intro = gsap.timeline({
        defaults: {
          ease: 'power3.out'
        }
      })


      intro

        .from(
          '.logo',
          {
            y: -30,
            opacity: 0,
            duration: 0.7
          }
        )

        .from(
          '.nav-links a',
          {
            y: -20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.08
          },
          '-=0.4'
        )

        .from(
          '.hero-topline span',
          {
            y: 15,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1
          },
          '-=0.25'
        )

        .from(
          '.eyebrow',
          {
            y: 25,
            opacity: 0,
            duration: 0.6
          },
          '-=0.2'
        )

        .from(
          '.hero h1 span:first-child',
          {
            y: 100,
            opacity: 0,
            duration: 1
          },
          '-=0.2'
        )

        .from(
          '.outline-text',
          {
            y: 100,
            opacity: 0,
            duration: 0.95,
            ease: 'power4.out'
          },
          '-=0.75'
        )

        .from(
          '.hero-description',
          {
            y: 30,
            opacity: 0,
            duration: 0.65
          },
          '-=0.4'
        )

        .from(
          '.hero-statement > *',
          {
            y: 20,
            opacity: 0,
            duration: 0.55,
            stagger: 0.08
          },
          '-=0.35'
        )

        .from(
          '.hero-portrait-card',
          {
            x: 60,
            scale: 0.96,
            opacity: 0,
            duration: 0.9
          },
          '-=0.7'
        )


      gsap.to(
        '.glow-one',
        {
          scale: 1.18,
          opacity: 0.32,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        }
      )


      gsap.to(
        '.glow-two',
        {
          x: 80,
          y: -40,
          scale: 1.15,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        }
      )


      gsap.utils
        .toArray('.project-card')
        .forEach((card) => {

          gsap.from(
            card,
            {
              scrollTrigger: {
                trigger: card,
                start: 'top 85%'
              },

              y: 80,
              scale: 0.97,
              opacity: 0,
              duration: 1,
              ease: 'power3.out'
            }
          )

        })


      gsap.utils
        .toArray('.reveal')
        .forEach((element) => {

          gsap.from(
            element,
            {
              scrollTrigger: {
                trigger: element,
                start: 'top 85%'
              },

              y: 60,
              opacity: 0,
              duration: 0.9,
              ease: 'power3.out'
            }
          )

        })


    }, portfolioRef)


    return () => ctx.revert()

  }, [])



  return (

    <div
      className="portfolio"
      ref={portfolioRef}
    >


      {/* =====================================================
          NAVEGACIÓN
      ===================================================== */}

      <nav className="navbar">

        <a
          href="#top"
          className="logo"
        >
          SC<span>.</span>
        </a>


        <div className="nav-links">

          <a href="#work">
            PROYECTOS
          </a>

          <a href="#about">
            SOBRE MÍ
          </a>

          <a href="#contact">
            CONTACTO
          </a>

        </div>

      </nav>



      {/* =====================================================
          HERO
      ===================================================== */}

      <main
        className="hero"
        id="top"
      >

        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>


        <div className="hero-topline">

          <span>
            MEDELLÍN, COLOMBIA
          </span>

          <span>
            DISPONIBLE PARA NUEVOS PROYECTOS
          </span>

        </div>


        <div className="hero-content">

          <div className="hero-main">


            {/* TEXTO */}

            <div className="hero-copy">

              <p className="eyebrow">
                REDES SOCIALES · ESTRATEGIA CREATIVA
              </p>


              <h1>

                <span>
                  SEBASTIÁN
                </span>

                <span className="outline-text">
                  CALDERÓN
                </span>

              </h1>


              <div className="hero-bottom">

                <p className="hero-description">

                  Creo ideas, contenido y estrategias
                  digitales que hacen que las marcas
                  llamen la atención, conecten y
                  generen resultados.

                </p>


                <div className="hero-statement">

                  <span>
                    CREO.
                  </span>

                  <span>
                    PIENSO.
                  </span>

                  <strong>
                    LO HAGO FUNCIONAR.
                  </strong>

                </div>

              </div>

            </div>



            {/* FOTO */}

            <div className="hero-portrait-wrapper">

              <div className="hero-portrait-card">

                <img
                  src={sebastianPhoto}
                  alt="Sebastián Calderón"
                  className="hero-portrait"
                  loading="eager"
                />


                <div className="hero-portrait-badge">

                  <span>
                    MEDELLÍN · COLOMBIA
                  </span>

                  <strong>
                    COMUNICADOR SOCIAL · PERIODISTA
                  </strong>

                </div>

              </div>


              {/* CONTACTO DEBAJO DE LA FOTO */}

              <a
                href="#contact"
                className="hero-contact-button"
              >

                <span>
                  CONTACTARME
                </span>

                <strong>
                  ↓
                </strong>

              </a>

            </div>


          </div>

        </div>

      </main>



      {/* =====================================================
          PROYECTOS SELECCIONADOS
      ===================================================== */}

      <section
        id="work"
        className="work-section"
      >

        <div className="work-number">
          01 / PROYECTOS SELECCIONADOS
        </div>


        <div className="work-intro">

          <h2>

            PROYECTOS

            <span>
              SELECCIONADOS
            </span>

          </h2>


          <p>
            Estrategia, contenido, diseño y performance
            aplicados a proyectos y marcas reales.
          </p>

        </div>



        <div className="projects-grid">


          <ProjectCard

            number="01"

            brand="REAL BLENDS"

            services="
              REDES SOCIALES ·
              ESTRATEGIA CREATIVA ·
              CONTENIDO ·
              E-COMMERCE
            "

            color="#d8292f"

            image={realBlendsCover}

            href="/project/real-blends"

          />



          <ProjectCard

            number="02"

            brand="SEÑOR CONSTRUCTOR"

            services="
              CREATIVIDAD DE PERFORMANCE ·
              META ADS ·
              E-COMMERCE
            "

            color="#171717"

            image={senorConstructorCover}

            href="/project/senor-constructor"

          />



          <ProjectCard

            number="03"

            brand="GINTRACOM"

            services="
              REDES SOCIALES ·
              CONTENIDO ·
              DISEÑO
            "

            color="#151515"

            image={gintracomCover}

            href="/project/gintracom"

          />



          <ProjectCard

            number="04"

            brand="OTROS PROYECTOS"

            services="
              DISEÑO ·
              CAMPAÑAS ·
              CONTENIDO ·
              IA
            "

            color="#5637ff"

            image={otrosCover}

            href="/project/otros-proyectos"

          />


        </div>

      </section>



      {/* =====================================================
          MARQUEE
      ===================================================== */}

      <section className="marquee-section">

        <div className="marquee-track">

          <span>
            ESTRATEGIA · DISEÑO · CONTENIDO ·
            PERFORMANCE · IA ·
          </span>

          <span>
            ESTRATEGIA · DISEÑO · CONTENIDO ·
            PERFORMANCE · IA ·
          </span>

        </div>

      </section>



      {/* =====================================================
          SOBRE MÍ
      ===================================================== */}

      <section
        id="about"
        className="about-section"
      >

        <div className="section-label reveal">

          <span>
            02
          </span>

          <span>
            SOBRE MÍ
          </span>

        </div>


        <div className="about-main">

          <h2 className="about-title reveal">

            NO SOLO CREO

            <span>
              {' '}CONTENIDO.
            </span>

            <br />

            CONSTRUYO

            <span className="purple">
              {' '}ESTRATEGIAS.
            </span>

          </h2>


          <div className="about-copy reveal">

            <p>
              Soy comunicador social y trabajo
              en la intersección entre creatividad,
              estrategia digital, contenido
              y performance.
            </p>


            <p>
              Puedo llevar una idea desde
              el concepto y el guion hasta
              su diseño, producción, pauta,
              análisis y optimización.
            </p>

          </div>

        </div>



        <div className="process-grid">


          <div className="process-item reveal">

            <span>01</span>

            <h3>
              PENSAR
            </h3>

            <p>
              Investigación, estrategia,
              concepto y audiencia.
            </p>

          </div>



          <div className="process-item reveal">

            <span>02</span>

            <h3>
              CREAR
            </h3>

            <p>
              Diseño, copy, guion,
              fotografía, video e IA.
            </p>

          </div>



          <div className="process-item reveal">

            <span>03</span>

            <h3>
              LANZAR
            </h3>

            <p>
              Redes sociales, campañas,
              Meta Ads y e-commerce.
            </p>

          </div>



          <div className="process-item reveal">

            <span>04</span>

            <h3>
              OPTIMIZAR
            </h3>

            <p>
              Análisis, performance,
              aprendizaje y mejora continua.
            </p>

          </div>


        </div>

      </section>



      {/* =====================================================
          COMPETENCIAS
      ===================================================== */}

      <section className="capabilities-section">

        <div className="section-label reveal">

          <span>
            03
          </span>

          <span>
            COMPETENCIAS
          </span>

        </div>



        <div className="capabilities-list">

          {[
            {
              title:
                'ESTRATEGIA DE REDES SOCIALES',

              description:
                'Estrategia de contenido, construcción de calendarios, definición de formatos, audiencias y oportunidades para hacer crecer la presencia digital de una marca.'
            },

            {
              title:
                'DIRECCIÓN CREATIVA',

              description:
                'Conceptualización de campañas, dirección visual, ideas creativas y construcción de sistemas de contenido alineados con los objetivos de cada proyecto.'
            },

            {
              title:
                'DISEÑO Y CONTENIDO',

              description:
                'Diseño de piezas publicitarias, contenido para redes sociales, campañas visuales, copy y adaptación de conceptos a diferentes formatos.'
            },

            {
              title:
                'VIDEO Y UGC',

              description:
                'Concepto, guion, grabación, edición y creación de contenido audiovisual pensado para redes sociales y comunicación digital.'
            },

            {
              title:
                'META ADS Y PERFORMANCE',

              description:
                'Creatividad orientada a pauta, análisis de resultados, pruebas de conceptos y optimización basada en comportamiento y performance.'
            },

            {
              title:
                'IA Y EXPERIENCIAS DIGITALES',

              description:
                'Integración de inteligencia artificial en procesos creativos, diseño, producción audiovisual, contenido y nuevas experiencias digitales.'
            }

          ].map((skill, index) => (

            <details
              className="capability capability-item reveal"
              key={skill.title}
            >

              <summary>

                <span>
                  0{index + 1}
                </span>


                <h3>
                  {skill.title}
                </h3>


                <span className="capability-toggle">
                  +
                </span>

              </summary>


              <p className="capability-description">
                {skill.description}
              </p>

            </details>

          ))}

        </div>

      </section>



      {/* =====================================================
          CONTACTO
      ===================================================== */}

      <section
        id="contact"
        className="contact-section"
      >

        <div className="contact-glow"></div>


        <div className="section-label contact-label reveal">

          <span>
            04
          </span>

          <span>
            CONTACTO
          </span>

        </div>



        <div className="contact-content">

          <p className="contact-small reveal">
            ¿TIENES UNA IDEA, MARCA O PROYECTO?
          </p>


          <h2 className="contact-title reveal">

            HAGAMOS

            <span>
              ALGO INCREÍBLE.
            </span>

          </h2>



          {/* CONTACTO DIRECTO */}

          <div className="contact-actions reveal">


            <a
              href="mailto:09sacm@gmail.com"
              className="contact-direct-link"
            >

              <span>
                EMAIL
              </span>

              <strong>
                09sacm@gmail.com
              </strong>

              <em>
                ↗
              </em>

            </a>



            <a
              href="https://wa.me/573233004012"
              target="_blank"
              rel="noreferrer"
              className="contact-direct-link"
            >

              <span>
                WHATSAPP
              </span>

              <strong>
                +57 323 300 4012
              </strong>

              <em>
                ↗
              </em>

            </a>


          </div>

        </div>



        <footer className="footer">

          <span>
            SEBASTIÁN CALDERÓN © 2026
          </span>


          <div>

            <a href="mailto:09sacm@gmail.com">
              EMAIL
            </a>


            <a
              href="https://wa.me/573233004012"
              target="_blank"
              rel="noreferrer"
            >
              WHATSAPP
            </a>

          </div>

        </footer>


      </section>


    </div>

  )

}



/* =========================================================
   APP + ROUTES
========================================================= */

function App() {

  return (

    <>

      <ScrollToTop />


      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/project/real-blends"
          element={<RealBlends />}
        />

        <Route
          path="/project/senor-constructor"
          element={<SenorConstructor />}
        />

        <Route
          path="/project/gintracom"
          element={<Gintracom />}
        />

        <Route
          path="/project/otros-proyectos"
          element={<OtrosProyectos />}
        />

      </Routes>

    </>

  )

}


export default App