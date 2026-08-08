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


      {/* NAV */}

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
          ← BACK TO WORK
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
            01 / CASE STUDY
          </div>


          <h1 className="case-title">

            REAL

            <span>
              BLENDS
            </span>

          </h1>


          <div className="case-meta">

            <div>

              <span>ROLE</span>

              <p>
                Social Media Manager<br />
                Creative Strategy<br />
                Content & Design
              </p>

            </div>


            <div>

              <span>FOCUS</span>

              <p>
                Social Media<br />
                E-commerce<br />
                Performance Creative
              </p>

            </div>


            <div>

              <span>PROJECT</span>

              <p>
                Brand Content<br />
                Digital Strategy<br />
                Creative Direction
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* CONTEXT */}

      <section className="case-intro">

        <div className="case-section-number">
          01 — CONTEXT
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



      {/* LARGE MEDIA */}

      <section className="case-media-full">

        <img
          src={realBlendsCover}
          alt="Dirección creativa Real Blends"
        />

      </section>



      {/* STRATEGY */}

      <section className="case-strategy">

        <div className="case-section-number">
          02 — STRATEGY
        </div>


        <div className="case-strategy-grid">

          <h2>

            IDEA
            <br />

            <span>→</span>

            CONTENT
            <br />

            <span>→</span>

            RESULT

          </h2>


          <div className="strategy-items">

            <div>

              <span>01</span>

              <h3>THINK</h3>

              <p>
                Entender producto, audiencia,
                comportamiento y oportunidad.
              </p>

            </div>


            <div>

              <span>02</span>

              <h3>CREATE</h3>

              <p>
                Convertir estrategia en conceptos,
                diseños, videos, guiones y campañas.
              </p>

            </div>


            <div>

              <span>03</span>

              <h3>DISTRIBUTE</h3>

              <p>
                Integrar contenido orgánico,
                pauta digital y e-commerce.
              </p>

            </div>


            <div>

              <span>04</span>

              <h3>OPTIMIZE</h3>

              <p>
                Analizar qué funciona y convertir
                datos en nuevas decisiones creativas.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* SELECTED CONTENT */}

      <section className="case-work">

        <div className="case-section-number">
          03 — SELECTED CONTENT
        </div>


        <div className="case-work-title">

          <h2>

            CONTENT

            <span>
              IN MOTION.
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
            label="CAMPAIGN / VIDEO"
            number="01"
            className="media-wide"
          />


          <InteractiveVideo
            src={reel01}
            label="REEL / SOCIAL CONTENT"
            number="02"
            className="media-vertical"
          />


          <InteractiveVideo
            src={reel02}
            label="REEL / SOCIAL CONTENT"
            number="03"
            className="media-vertical"
          />



          <div className="media-item media-square">

            <img
              src={design01}
              alt="Diseño publicitario Real Blends"
            />


            <div className="media-caption">

              <span>
                DESIGN / CAMPAIGN
              </span>

              <span>
                04
              </span>

            </div>

          </div>



          <div className="media-item media-square">

            <img
              src={design02}
              alt="Social Media Real Blends"
            />


            <div className="media-caption">

              <span>
                DESIGN / SOCIAL MEDIA
              </span>

              <span>
                05
              </span>

            </div>

          </div>


        </div>

      </section>



      {/* CLOSING */}

      <section className="case-closing">

        <p>
          CREATIVE STRATEGY · SOCIAL MEDIA ·
          DESIGN · VIDEO
        </p>


        <h2>

          FROM

          <span>
            IDEA
          </span>

          TO

          <span>
            IMPACT.
          </span>

        </h2>

      </section>



      {/* NEXT PROJECT */}

<Link
  to="/project/senor-constructor"
  className="next-project next-project-clickable"
>
  <span>
    NEXT PROJECT
  </span>

  <h2>
    SEÑOR
    <br />
    CONSTRUCTOR
  </h2>

  <div>
    VIEW PROJECT →
  </div>
</Link>



      <footer className="case-footer">

        <span>
          SEBASTIÁN CALDERÓN © 2026
        </span>


        <Link to="/">
          BACK TO HOME ↑
        </Link>

      </footer>


    </main>

  )

}


export default RealBlends