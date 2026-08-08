import { Link } from 'react-router-dom'

import InteractiveVideo
  from '../components/InteractiveVideo'

import realBlendsCover
  from '../assets/projects/realblends-cover.png'

import campaign01
  from '../assets/realblends/campaign-01.mp4'

import reel01
  from '../assets/realblends/reel-01.mp4'

import reel02
  from '../assets/realblends/reel-02.mp4'

import design01
  from '../assets/realblends/design-01.png'

import design02
  from '../assets/realblends/design-02.png'


function RealBlends() {

  return (

    <main className="case-study">


      {/* NAVEGACIÓN */}

      <nav className="case-nav">

        <Link
          to="/"
          className="case-logo"
        >
          SC<span>.</span>
        </Link>

        <Link
          to="/"
          className="case-back"
        >
          ← VOLVER AL INICIO
        </Link>

      </nav>



      {/* HERO */}

      <section className="case-hero">

        <div className="case-hero-image">

          <img
            src={realBlendsCover}
            alt="Real Blends"
          />

          <div className="case-hero-overlay"></div>

        </div>


        <div className="case-hero-info">

          <div className="case-index">
            01 / CASO DE ESTUDIO
          </div>


          <h1 className="case-title">

            REAL

            <span>
              BLENDS
            </span>

          </h1>


          <div className="case-meta">

            <div>

              <span>ROL</span>

              <p>
                Gestión de redes sociales<br />
                Estrategia creativa<br />
                Contenido y diseño
              </p>

            </div>


            <div>

              <span>ENFOQUE</span>

              <p>
                Redes sociales<br />
                E-commerce<br />
                Creatividad para performance
              </p>

            </div>


            <div>

              <span>PROYECTO</span>

              <p>
                Contenido de marca<br />
                Estrategia digital<br />
                Dirección creativa
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* CONTEXTO */}

      <section className="case-intro">

        <div className="case-section-number">
          01 — CONTEXTO
        </div>


        <div className="case-intro-grid">

          <h2>

            UNA MARCA

            <span>
              HECHA PARA
            </span>

            DESTACAR.

          </h2>


          <div className="case-intro-copy">

            <p>
              Real Blends es un proyecto en el que
              estrategia, contenido, diseño y producto
              conviven dentro de un mismo ecosistema
              digital.
            </p>


            <p>
              Mi participación combina dirección creativa,
              contenido para redes sociales, campañas,
              producción audiovisual, e-commerce e
              inteligencia artificial.
            </p>

          </div>

        </div>

      </section>



      {/* IMAGEN DESTACADA */}

      <section className="case-media-full">

        <img
          src={realBlendsCover}
          alt="Dirección creativa Real Blends"
          loading="lazy"
          decoding="async"
        />

      </section>



      {/* ESTRATEGIA */}

      <section className="case-strategy">

        <div className="case-section-number">
          02 — ESTRATEGIA
        </div>


        <div className="case-strategy-grid">

          <h2>

            IDEA
            <br />

            <span>→</span>

            CONTENIDO
            <br />

            <span>→</span>

            RESULTADO

          </h2>


          <div className="strategy-items">

            <div>

              <span>01</span>

              <h3>PENSAR</h3>

              <p>
                Entender producto, audiencia,
                comportamiento y oportunidad.
              </p>

            </div>


            <div>

              <span>02</span>

              <h3>CREAR</h3>

              <p>
                Convertir estrategia en conceptos,
                diseños, videos, guiones y campañas.
              </p>

            </div>


            <div>

              <span>03</span>

              <h3>DISTRIBUIR</h3>

              <p>
                Integrar contenido orgánico,
                pauta digital y e-commerce.
              </p>

            </div>


            <div>

              <span>04</span>

              <h3>OPTIMIZAR</h3>

              <p>
                Analizar qué funciona y convertir
                datos en nuevas decisiones creativas.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* CONTENIDO */}

      <section className="case-work">

        <div className="case-section-number">
          03 — CONTENIDO SELECCIONADO
        </div>


        <div className="case-work-title">

          <h2>

            CONTENIDO

            <span>
              EN MOVIMIENTO.
            </span>

          </h2>


          <p>
            Diseño, campañas, reels y contenido
            audiovisual desarrollados alrededor
            del universo de Real Blends.
          </p>

        </div>



        <div className="portfolio-media-grid">


          <InteractiveVideo
            src={campaign01}
            label="CAMPAÑA / VIDEO"
            number="01"
            className="media-wide"
          />


          <InteractiveVideo
            src={reel01}
            label="REEL / CONTENIDO SOCIAL"
            number="02"
            className="media-vertical"
          />


          <InteractiveVideo
            src={reel02}
            label="REEL / CONTENIDO SOCIAL"
            number="03"
            className="media-vertical"
          />



          <div className="media-item media-square">

            <img
              src={design01}
              alt="Diseño publicitario Real Blends"
              loading="lazy"
              decoding="async"
            />


            <div className="media-caption">

              <span>
                DISEÑO / CAMPAÑA
              </span>

              <span>
                04
              </span>

            </div>

          </div>



          <div className="media-item media-square">

            <img
              src={design02}
              alt="Contenido para redes Real Blends"
              loading="lazy"
              decoding="async"
            />


            <div className="media-caption">

              <span>
                DISEÑO / REDES SOCIALES
              </span>

              <span>
                05
              </span>

            </div>

          </div>


        </div>

      </section>



      {/* CIERRE */}

      <section className="case-closing">

  <p>
    ESTRATEGIA CREATIVA · REDES SOCIALES ·
    DISEÑO · VIDEO
  </p>


  <h2>

    DE LA

    <span>
      IDEA
    </span>

    <br />

    AL

    <span>
      IMPACTO.
    </span>

  </h2>

</section>



      {/* SIGUIENTE PROYECTO */}

      <Link
        to="/project/senor-constructor"
        className="next-project next-project-clickable"
      >

        <span>
          SIGUIENTE PROYECTO
        </span>


        <h2>
          SEÑOR
          <br />
          CONSTRUCTOR
        </h2>


        <div>
          VER PROYECTO →
        </div>

      </Link>



      <footer className="case-footer">

        <span>
          SEBASTIÁN CALDERÓN © 2026
        </span>


        <Link to="/">
          VOLVER AL INICIO ↑
        </Link>

      </footer>


    </main>

  )

}


export default RealBlends