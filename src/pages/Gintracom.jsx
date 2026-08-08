import { Link } from 'react-router-dom'

import InteractiveVideo
  from '../components/InteractiveVideo'

import gintracomCover
  from '../assets/projects/gintracom-cover.png'

import result01
  from '../assets/gintracom/gt-result-01.png'

import reel01
  from '../assets/gintracom/gt-reel-01.mp4'

import reel02
  from '../assets/gintracom/gt-reel-02.mp4'

import design01
  from '../assets/gintracom/gt-design-01.jpg'

import design02
  from '../assets/gintracom/gt-design-02.jpg'

import './Gintracom.css'


function Gintracom() {

  return (

    <main className="case-study gt-case">


      {/* ===================================
          NAV
      =================================== */}

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



      {/* ===================================
          HERO
      =================================== */}

      <section className="case-hero gt-hero">

        <div className="case-hero-image">

          <img
            src={gintracomCover}
            alt="Gintracom"
          />

          <div className="case-hero-overlay"></div>

        </div>


        <div className="case-hero-info">

          <div className="case-index">
            03 / CASE STUDY
          </div>


          <h1 className="case-title gt-title">

            GINTRA

            <span>
              COM
            </span>

          </h1>


          <div className="case-meta">


            <div>

              <span>
                AREAS
              </span>

              <p>
                Social Media<br />
                Content Creation<br />
                Visual Design
              </p>

            </div>


            <div>

              <span>
                CONTENT
              </span>

              <p>
                Reels<br />
                Social Design<br />
                Digital Communication
              </p>

            </div>


            <div>

              <span>
                COMMUNITY
              </span>

              <p>
                Instagram<br />
                +45K Followers<br />
                Current Community
              </p>

            </div>


          </div>

        </div>

      </section>



      {/* ===================================
          CONTEXT
      =================================== */}

      <section className="case-intro gt-intro">

        <div className="case-section-number">
          01 — DIGITAL PRESENCE
        </div>


        <div className="case-intro-grid">

          <h2>

            CONTENT

            <span>
              BUILDS
            </span>

            COMMUNITY.

          </h2>


          <div className="case-intro-copy">

            <p>
              Gintracom cuenta con una presencia digital
              consolidada y una comunidad activa en
              Instagram que actualmente supera los
              45 mil seguidores.
            </p>


            <p>
              El trabajo seleccionado reúne contenido
              audiovisual y piezas gráficas desarrolladas
              para comunicación en redes sociales,
              combinando información, diseño y formatos
              pensados para consumo digital.
            </p>

          </div>

        </div>

      </section>



      {/* ===================================
          COMMUNITY
      =================================== */}

      <section className="gt-community">

        <div className="case-section-number">
          02 — COMMUNITY
        </div>


        <div className="gt-community-header">


          <div className="gt-community-stat">

            <span>
              CURRENT INSTAGRAM COMMUNITY
            </span>


            <h2>
              +45K
            </h2>


            <strong>
              FOLLOWERS
            </strong>

          </div>



          <div className="gt-community-copy">

            <p>
              Una comunidad digital consolidada
              alrededor de una presencia constante
              en redes sociales y contenido pensado
              para conectar con audiencias reales.
            </p>


            <span>
              SOCIAL MEDIA × CONTENT × COMMUNITY
            </span>

          </div>


        </div>



        <div className="gt-result-image">

          <img
            src={result01}
            alt="Perfil de Instagram de Gintracom"
          />

        </div>

      </section>



      {/* ===================================
          CONTENT SYSTEM
      =================================== */}

      <section className="gt-system">

        <div className="case-section-number">
          03 — CONTENT SYSTEM
        </div>


        <div className="gt-system-grid">


          <div className="gt-system-title">

            <span>
              DIGITAL COMMUNICATION
            </span>


            <h2>

              INFORM

              <span>
                +
              </span>

              CONNECT

              <span>
                +
              </span>

              CREATE

            </h2>

          </div>



          <div className="gt-system-items">


            <div>

              <span>
                01
              </span>


              <div>

                <h3>
                  INFORM
                </h3>

                <p>
                  Transformar información en mensajes
                  visuales claros y fáciles de consumir.
                </p>

              </div>

            </div>



            <div>

              <span>
                02
              </span>


              <div>

                <h3>
                  CONNECT
                </h3>

                <p>
                  Construir contenido pensado para
                  personas y para el comportamiento
                  natural de las redes sociales.
                </p>

              </div>

            </div>



            <div>

              <span>
                03
              </span>


              <div>

                <h3>
                  CREATE
                </h3>

                <p>
                  Combinar diseño, video y formatos
                  digitales dentro de una comunicación
                  visual consistente.
                </p>

              </div>

            </div>


          </div>

        </div>

      </section>



      {/* ===================================
          SELECTED CONTENT
      =================================== */}

      <section className="case-work gt-work">

        <div className="case-section-number">
          04 — SELECTED CONTENT
        </div>


        <div className="case-work-title">

          <h2>

            SOCIAL

            <span>
              IN MOTION.
            </span>

          </h2>


          <p>
            Una selección de reels y piezas gráficas
            creadas para comunicación digital y
            contenido de redes sociales.
          </p>

        </div>



        <div className="portfolio-media-grid">


          {/* REEL 01 */}

          <InteractiveVideo
            src={reel01}
            label="SOCIAL MEDIA / REEL"
            number="01"
            className="media-vertical"
          />



          {/* REEL 02 */}

          <InteractiveVideo
            src={reel02}
            label="CONTENT / REEL"
            number="02"
            className="media-vertical"
          />



          {/* DESIGN 01 */}

          <div className="media-item media-square gt-media-item">

            <img
              src={design01}
              alt="Diseño de contenido Gintracom"
            />


            <div className="media-caption">

              <span>
                SOCIAL DESIGN
              </span>

              <span>
                03
              </span>

            </div>

          </div>



          {/* DESIGN 02 */}

          <div className="media-item media-square gt-media-item">

            <img
              src={design02}
              alt="Contenido para redes Gintracom"
            />


            <div className="media-caption">

              <span>
                DIGITAL CONTENT
              </span>

              <span>
                04
              </span>

            </div>

          </div>


        </div>

      </section>



      {/* ===================================
          CLOSING
      =================================== */}

      <section className="gt-closing">


        <div className="gt-closing-labels">

          <span>
            SOCIAL MEDIA
          </span>

          <span>
            CONTENT
          </span>

          <span>
            DESIGN
          </span>

        </div>


        <h2>

          BE SEEN.

          <span>
            BE RELEVANT.
          </span>

          <strong>
            STAY CONNECTED.
          </strong>

        </h2>

      </section>



      {/* ===================================
          NEXT PROJECT
      =================================== */}

      <Link
  to="/project/otros-proyectos"
  className="next-project gt-next next-project-clickable"
>

  <span>
    NEXT PROJECT
  </span>


  <h2>
    OTROS
    <br />
    PROYECTOS
  </h2>


  <div>
    VIEW PROJECT →
  </div>

</Link>


      {/* ===================================
          FOOTER
      =================================== */}

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


export default Gintracom