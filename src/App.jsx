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

import {
  ScrollTrigger
} from 'gsap/ScrollTrigger'


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

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })

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


      /* ===================================
         HERO INTRO
      =================================== */

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
            y: 120,
            opacity: 0,
            duration: 1.1
          },
          '-=0.2'
        )

        .from(
          '.outline-text',
          {
            y: 120,
            opacity: 0,
            duration: 1,
            ease: 'power4.out'
          },
          '-=0.85'
        )

        .from(
          '.hero-description',
          {
            y: 30,
            opacity: 0,
            duration: 0.7
          },
          '-=0.45'
        )

        .from(
          '.hero-statement > *',
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1
          },
          '-=0.45'
        )



      /* ===================================
         HERO GLOWS
      =================================== */

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



      /* ===================================
         PROJECT CARDS
      =================================== */

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



      /* ===================================
         GENERAL REVEALS
      =================================== */

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


      {/* ===================================
          NAV
      =================================== */}

      <nav className="navbar">

        <a
          href="#top"
          className="logo"
        >
          SC<span>.</span>
        </a>


        <div className="nav-links">

          <a href="#work">
            WORK
          </a>

          <a href="#about">
            ABOUT
          </a>

          <a href="#contact">
            CONTACT
          </a>

        </div>

      </nav>



      {/* ===================================
          HERO
      =================================== */}

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
            AVAILABLE FOR NEW PROJECTS
          </span>

        </div>


        <div className="hero-content">

          <p className="eyebrow">
            SOCIAL MEDIA MANAGER · CREATIVE STRATEGIST
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
              llamen la atención, conecten
              y generen resultados.

            </p>


            <div className="hero-statement">

              <span>
                I CREATE.
              </span>

              <span>
                I STRATEGIZE.
              </span>

              <strong>
                I MAKE IT WORK.
              </strong>

            </div>

          </div>

        </div>

      </main>



      {/* ===================================
          SELECTED WORK
      =================================== */}

      <section
        id="work"
        className="work-section"
      >

        <div className="work-number">
          01 / SELECTED WORK
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


          {/* REAL BLENDS */}

          <ProjectCard

            number="01"

            brand="REAL BLENDS"

            services="
              SOCIAL MEDIA ·
              CREATIVE STRATEGY ·
              CONTENT ·
              E-COMMERCE
            "

            color="#d8292f"

            image={realBlendsCover}

            href="/project/real-blends"

          />



          {/* SEÑOR CONSTRUCTOR */}

          <ProjectCard

            number="02"

            brand="SEÑOR CONSTRUCTOR"

            services="
              PERFORMANCE CREATIVE ·
              META ADS ·
              E-COMMERCE
            "

            color="#171717"

            image={senorConstructorCover}

            href="/project/senor-constructor"

          />



          {/* GINTRACOM */}

          <ProjectCard

            number="03"

            brand="GINTRACOM"

            services="
              SOCIAL MEDIA ·
              CONTENT ·
              DESIGN
            "

            color="#151515"

            image={gintracomCover}

            href="/project/gintracom"

          />



          {/* OTROS PROYECTOS */}

          <ProjectCard

            number="04"

            brand="OTROS PROYECTOS"

            services="
              DESIGN ·
              CAMPAIGNS ·
              CONTENT ·
              AI
            "

            color="#5637ff"

            image={otrosCover}

            href="/project/otros-proyectos"

          />


        </div>

      </section>



      {/* ===================================
          MARQUEE
      =================================== */}

      <section className="marquee-section">

        <div className="marquee-track">

          <span>
            STRATEGY · DESIGN · CONTENT ·
            PERFORMANCE · AI ·
          </span>

          <span>
            STRATEGY · DESIGN · CONTENT ·
            PERFORMANCE · AI ·
          </span>

        </div>

      </section>



      {/* ===================================
          ABOUT
      =================================== */}

      <section
        id="about"
        className="about-section"
      >

        <div className="section-label reveal">

          <span>
            02
          </span>

          <span>
            ABOUT ME
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

            <span>
              01
            </span>

            <h3>
              THINK
            </h3>

            <p>
              Investigación, estrategia,
              concepto y audiencia.
            </p>

          </div>



          <div className="process-item reveal">

            <span>
              02
            </span>

            <h3>
              CREATE
            </h3>

            <p>
              Diseño, copy, guion,
              fotografía, video e IA.
            </p>

          </div>



          <div className="process-item reveal">

            <span>
              03
            </span>

            <h3>
              LAUNCH
            </h3>

            <p>
              Redes sociales, campañas,
              Meta Ads y e-commerce.
            </p>

          </div>



          <div className="process-item reveal">

            <span>
              04
            </span>

            <h3>
              OPTIMIZE
            </h3>

            <p>
              Análisis, performance,
              aprendizaje y mejora continua.
            </p>

          </div>


        </div>

      </section>



      {/* ===================================
          CAPABILITIES
      =================================== */}

     {/* ===================================
    CAPABILITIES
=================================== */}

<section className="capabilities-section">

  <div className="section-label reveal">

    <span>
      03
    </span>

    <span>
      CAPABILITIES
    </span>

  </div>


  <div className="capabilities-list">

    {[
      {
        title: 'SOCIAL MEDIA STRATEGY',
        description:
          'Estrategia de contenido, construcción de calendarios, definición de formatos, audiencias y oportunidades para hacer crecer la presencia digital de una marca.'
      },

      {
        title: 'CREATIVE DIRECTION',
        description:
          'Conceptualización de campañas, dirección visual, ideas creativas y construcción de sistemas de contenido alineados con los objetivos de cada proyecto.'
      },

      {
        title: 'DESIGN & CONTENT',
        description:
          'Diseño de piezas publicitarias, contenido para redes sociales, campañas visuales, copy y adaptación de conceptos a diferentes formatos.'
      },

      {
        title: 'VIDEO & UGC',
        description:
          'Concepto, guion, grabación, edición y creación de contenido audiovisual pensado para redes sociales y comunicación digital.'
      },

      {
        title: 'META ADS & PERFORMANCE',
        description:
          'Creatividad orientada a pauta, análisis de resultados, pruebas de conceptos y optimización basada en comportamiento y performance.'
      },

      {
        title: 'AI & DIGITAL EXPERIENCES',
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



      {/* ===================================
          CONTACT
      =================================== */}

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
            LET'S TALK
          </span>

        </div>


        <div className="contact-content">

          <p className="contact-small reveal">

            ¿TIENES UNA IDEA, MARCA O PROYECTO?

          </p>


          <h2 className="contact-title reveal">

            LET'S CREATE

            <span>
              SOMETHING GREAT.
            </span>

          </h2>


          <a
            href="mailto:09sacm@gmail.com"
            className="contact-button reveal"
          >

            HABLEMOS

            <span>
              ↗
            </span>

          </a>

        </div>

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


        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />



        {/* REAL BLENDS */}

        <Route
          path="/project/real-blends"
          element={<RealBlends />}
        />



        {/* SEÑOR CONSTRUCTOR */}

        <Route
          path="/project/senor-constructor"
          element={<SenorConstructor />}
        />



        {/* GINTRACOM */}

        <Route
          path="/project/gintracom"
          element={<Gintracom />}
        />



        {/* OTROS PROYECTOS */}

        <Route
          path="/project/otros-proyectos"
          element={<OtrosProyectos />}
        />


      </Routes>

    </>

  )

}


export default App