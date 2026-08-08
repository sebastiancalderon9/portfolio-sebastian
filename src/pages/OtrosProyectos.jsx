import { Link } from 'react-router-dom'

import InteractiveVideo
  from '../components/InteractiveVideo'

import otrosCover
  from '../assets/projects/otros-cover.png'

import educacion02
  from '../assets/otrosproyectos/op-educacion-02.mp4'

import gimnasio01
  from '../assets/otrosproyectos/op-gimnasio-01.mp4'

import multipapas01
  from '../assets/otrosproyectos/op-multipapas-01.mp4'

import multipapas02
  from '../assets/otrosproyectos/op-multipapas-02.mp4'

import optica01
  from '../assets/otrosproyectos/op-optica-01.png'

import extra01
  from '../assets/otrosproyectos/op-lucidbot-01.mp4'

import './OtrosProyectos.css'


function OtrosProyectos() {

  return (

    <main className="op-case">


      {/* ===================================
          NAV
      =================================== */}

      <nav className="op-nav">

        <Link
          to="/"
          className="op-logo"
        >
          SC<span>.</span>
        </Link>


        <Link
          to="/"
          className="op-back"
        >
          ← BACK TO WORK
        </Link>

      </nav>



      {/* ===================================
          HERO
      =================================== */}

      <section className="op-hero">

        <div className="op-hero-media">

          <img
            src={otrosCover}
            alt="Otros proyectos de Sebastián Calderón"
          />

          <div className="op-hero-overlay"></div>

        </div>


        <div className="op-hero-content">

          <p>
            04 / CREATIVE ARCHIVE
          </p>


          <h1>

            OTROS

            <span>
              PROYECTOS
            </span>

          </h1>


          <div className="op-hero-bottom">

            <span>
              DIFFERENT INDUSTRIES
            </span>

            <span>
              DIFFERENT CHALLENGES
            </span>

            <strong>
              SAME CREATIVE MINDSET.
            </strong>

          </div>

        </div>

      </section>



      {/* ===================================
          INTRO
      =================================== */}

      <section className="op-intro">

        <div className="op-section-label">
          01 — CREATIVE RANGE
        </div>


        <div className="op-intro-grid">

          <h2>

            DIFFERENT

            <span>
              BRANDS.
            </span>

            NEW IDEAS.

          </h2>


          <div>

            <p>
              Una selección de trabajos desarrollados
              para proyectos de diferentes industrias,
              públicos y necesidades de comunicación.
            </p>


            <p>
              El objetivo cambia de una marca a otra.
              La lógica permanece: entender qué hay
              que comunicar y encontrar una forma
              visual de hacerlo relevante.
            </p>

          </div>

        </div>

      </section>



      {/* ===================================
          ARCHIVE
      =================================== */}

      <section className="op-archive">

        <div className="op-section-label">
          02 — SELECTED PROJECTS
        </div>


        <div className="op-archive-heading">

          <h2>

            CREATIVE

            <span>
              ARCHIVE.
            </span>

          </h2>


          <p>
            Social content, campañas,
            diseño y video en formato vertical.
          </p>

        </div>



        <div className="op-grid">


          {/* MULTIPAPAS 01 */}

          <article className="op-project">

            <InteractiveVideo
              src={multipapas01}
              label="B2B / SOCIAL CONTENT"
              number="01"
              className="op-media"
            />


            <div className="op-project-info">

              <h3>
                MULTIPAPAS
              </h3>

              <span>
                FOOD · B2B · CONTENT
              </span>

            </div>

          </article>



          {/* MULTIPAPAS 02 */}

          <article className="op-project">

            <InteractiveVideo
              src={multipapas02}
              label="VIDEO / CAMPAIGN"
              number="02"
              className="op-media"
            />


            <div className="op-project-info">

              <h3>
                MULTIPAPAS
              </h3>

              <span>
                CAMPAIGN · VIDEO
              </span>

            </div>

          </article>



          {/* EDUCACIÓN */}

          <article className="op-project">

            <InteractiveVideo
              src={educacion02}
              label="EDUCATION / CONTENT"
              number="03"
              className="op-media"
            />


            <div className="op-project-info">

              <h3>
                EDUCACIÓN
              </h3>

              <span>
                SOCIAL · CAMPAIGN
              </span>

            </div>

          </article>



          {/* GIMNASIO */}

          <article className="op-project">

            <InteractiveVideo
              src={gimnasio01}
              label="FITNESS / CONTENT"
              number="04"
              className="op-media"
            />


            <div className="op-project-info">

              <h3>
                FITNESS
              </h3>

              <span>
                VIDEO · SOCIAL MEDIA
              </span>

            </div>

          </article>



          {/* ÓPTICA */}

          <article className="op-project">

            <div className="op-media op-image">

              <img
                src={optica01}
                alt="Diseño publicitario para óptica"
              />


              <div className="op-image-overlay"></div>


              <div className="media-caption">

                <span>
                  HEALTH / DESIGN
                </span>

                <span>
                  05
                </span>

              </div>

            </div>


            <div className="op-project-info">

              <h3>
                ÓPTICA
              </h3>

              <span>
                DESIGN · CAMPAIGN
              </span>

            </div>

          </article>

{/* EXTRA PROJECT */}

<article className="op-project">

  <InteractiveVideo
    src={extra01}
    label="SOCIAL MEDIA / VIDEO"
    number="06"
    className="op-media"
  />


  <div className="op-project-info">

    <h3>
      LUCIDBOT
    </h3>

    <span>
      CONTENT · VIDEO · SOCIAL MEDIA
    </span>

  </div>

</article>

        </div>

      </section>



      {/* ===================================
          STATEMENT
      =================================== */}

      <section className="op-statement">

        <div className="op-statement-top">

          <span>
            STRATEGY
          </span>

          <span>
            DESIGN
          </span>

          <span>
            CONTENT
          </span>

          <span>
            AI
          </span>

        </div>


        <h2>

          DIFFERENT

          <span>
            CHALLENGES.
          </span>

          SAME GOAL:

          <strong>
            MAKE PEOPLE LOOK.
          </strong>

        </h2>

      </section>



      {/* ===================================
          FINAL / HOME
      =================================== */}

      <Link
        to="/"
        className="op-final"
      >

        <span>
          END OF SELECTED WORK
        </span>


        <h2>

          BACK TO

          <span>
            HOME.
          </span>

        </h2>


        <div>
          START AGAIN ↑
        </div>

      </Link>



      {/* ===================================
          FOOTER
      =================================== */}

      <footer className="op-footer">

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


    </main>

  )

}


export default OtrosProyectos