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


      {/* NAVEGACIÓN */}

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
          ← VOLVER AL INICIO
        </Link>

      </nav>



      {/* HERO */}

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
            04 / ARCHIVO CREATIVO
          </p>


          <h1>

            OTROS

            <span>
              PROYECTOS
            </span>

          </h1>


          <div className="op-hero-bottom">

            <span>
              DIFERENTES INDUSTRIAS
            </span>

            <span>
              DIFERENTES RETOS
            </span>

            <strong>
              MISMA MENTALIDAD CREATIVA.
            </strong>

          </div>

        </div>

      </section>



      {/* INTRO */}

      <section className="op-intro">

        <div className="op-section-label">
          01 — VERSATILIDAD CREATIVA
        </div>


        <div className="op-intro-grid">

          <h2>

            MARCAS

            <span>
              DISTINTAS.
            </span>

            NUEVAS IDEAS.

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



      {/* ARCHIVO */}

      <section className="op-archive">

        <div className="op-section-label">
          02 — PROYECTOS SELECCIONADOS
        </div>


        <div className="op-archive-heading">

          <h2>

            ARCHIVO

            <span>
              CREATIVO.
            </span>

          </h2>


          <p>
            Contenido social, campañas,
            diseño y video en formato vertical.
          </p>

        </div>



        <div className="op-grid">


          {/* MULTIPAPAS 01 */}

          <article className="op-project">

            <InteractiveVideo
              src={multipapas01}
              label="B2B / CONTENIDO SOCIAL"
              number="01"
              className="op-media"
            />


            <div className="op-project-info">

              <h3>
                MULTIPAPAS
              </h3>

              <span>
                ALIMENTOS · B2B · CONTENIDO
              </span>

            </div>

          </article>



          {/* MULTIPAPAS 02 */}

          <article className="op-project">

            <InteractiveVideo
              src={multipapas02}
              label="VIDEO / CAMPAÑA"
              number="02"
              className="op-media"
            />


            <div className="op-project-info">

              <h3>
                MULTIPAPAS
              </h3>

              <span>
                CAMPAÑA · VIDEO
              </span>

            </div>

          </article>



          {/* EDUCACIÓN */}

          <article className="op-project">

            <InteractiveVideo
              src={educacion02}
              label="EDUCACIÓN / CONTENIDO"
              number="03"
              className="op-media"
            />


            <div className="op-project-info">

              <h3>
                EDUCACIÓN
              </h3>

              <span>
                REDES · CAMPAÑA
              </span>

            </div>

          </article>



          {/* GIMNASIO */}

          <article className="op-project">

            <InteractiveVideo
              src={gimnasio01}
              label="FITNESS / CONTENIDO"
              number="04"
              className="op-media"
            />


            <div className="op-project-info">

              <h3>
                FITNESS
              </h3>

              <span>
                VIDEO · REDES SOCIALES
              </span>

            </div>

          </article>



          {/* ÓPTICA */}

          <article className="op-project">

            <div className="op-media op-image">

              <img
                src={optica01}
                alt="Diseño publicitario para óptica"
                loading="lazy"
                decoding="async"
              />


              <div className="op-image-overlay"></div>


              <div className="media-caption">

                <span>
                  SALUD / DISEÑO
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
                DISEÑO · CAMPAÑA
              </span>

            </div>

          </article>



          {/* LUCIDBOT */}

          <article className="op-project">

            <InteractiveVideo
              src={extra01}
              label="REDES SOCIALES / VIDEO"
              number="06"
              className="op-media"
            />


            <div className="op-project-info">

              <h3>
                LUCIDBOT
              </h3>

              <span>
                CONTENIDO · VIDEO · REDES SOCIALES
              </span>

            </div>

          </article>


        </div>

      </section>



      {/* STATEMENT */}

      <section className="op-statement">

        <div className="op-statement-top">

          <span>
            ESTRATEGIA
          </span>

          <span>
            DISEÑO
          </span>

          <span>
            CONTENIDO
          </span>

          <span>
            IA
          </span>

        </div>


        <h2>

          DIFERENTES

          <span>
            RETOS.
          </span>

          MISMO OBJETIVO:

          <strong>
            CAPTAR MIRADAS.
          </strong>

        </h2>

      </section>



      {/* VOLVER */}

      <Link
        to="/"
        className="op-final"
      >

        <span>
          FIN DE PROYECTOS SELECCIONADOS
        </span>


        <h2>

          VOLVER AL

          <span>
            INICIO.
          </span>

        </h2>


        <div>
          EMPEZAR DE NUEVO ↑
        </div>

      </Link>



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