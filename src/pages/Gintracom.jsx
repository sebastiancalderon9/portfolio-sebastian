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
            03 / CASO DE ESTUDIO
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
                ÁREAS
              </span>

              <p>
                Redes sociales<br />
                Creación de contenido<br />
                Diseño visual
              </p>

            </div>


            <div>

              <span>
                CONTENIDO
              </span>

              <p>
                Reels<br />
                Diseño social<br />
                Comunicación digital
              </p>

            </div>


            <div>

              <span>
                COMUNIDAD
              </span>

              <p>
                Instagram<br />
                +45K seguidores<br />
                Comunidad actual
              </p>

            </div>


          </div>

        </div>

      </section>



      {/* PRESENCIA DIGITAL */}

      <section className="case-intro gt-intro">

        <div className="case-section-number">
          01 — PRESENCIA DIGITAL
        </div>


        <div className="case-intro-grid">

          <h2>

            CONTENIDO

            <span>
              CREA
            </span>

            COMUNIDAD.

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



      {/* COMUNIDAD */}

      <section className="gt-community">

        <div className="case-section-number">
          02 — COMUNIDAD
        </div>


        <div className="gt-community-header">


          <div className="gt-community-stat">

            <span>
              COMUNIDAD ACTUAL EN INSTAGRAM
            </span>


            <h2>
              +45K
            </h2>


            <strong>
              SEGUIDORES
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
              REDES SOCIALES × CONTENIDO × COMUNIDAD
            </span>

          </div>


        </div>



        <div className="gt-result-image">

          <img
            src={result01}
            alt="Perfil de Instagram de Gintracom"
            loading="lazy"
            decoding="async"
          />

        </div>

      </section>



      {/* SISTEMA */}

      <section className="gt-system">

        <div className="case-section-number">
          03 — SISTEMA DE CONTENIDO
        </div>


        <div className="gt-system-grid">


          <div className="gt-system-title">

            <span>
              COMUNICACIÓN DIGITAL
            </span>


            <h2>

              INFORMAR

              <span>+</span>

              CONECTAR

              <span>+</span>

              CREAR

            </h2>

          </div>



          <div className="gt-system-items">


            <div>

              <span>01</span>

              <div>

                <h3>
                  INFORMAR
                </h3>

                <p>
                  Transformar información en mensajes
                  visuales claros y fáciles de consumir.
                </p>

              </div>

            </div>



            <div>

              <span>02</span>

              <div>

                <h3>
                  CONECTAR
                </h3>

                <p>
                  Construir contenido pensado para
                  personas y para el comportamiento
                  natural de las redes sociales.
                </p>

              </div>

            </div>



            <div>

              <span>03</span>

              <div>

                <h3>
                  CREAR
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



      {/* CONTENIDO */}

      <section className="case-work gt-work">

        <div className="case-section-number">
          04 — CONTENIDO SELECCIONADO
        </div>


        <div className="case-work-title">

          <h2>

            CONTENIDO

            <span>
              EN MOVIMIENTO.
            </span>

          </h2>


          <p>
            Una selección de reels y piezas gráficas
            creadas para comunicación digital y
            contenido de redes sociales.
          </p>

        </div>



        <div className="portfolio-media-grid">


          <InteractiveVideo
            src={reel01}
            label="REDES SOCIALES / REEL"
            number="01"
            className="media-vertical"
          />


          <InteractiveVideo
            src={reel02}
            label="CONTENIDO / REEL"
            number="02"
            className="media-vertical"
          />



          <div className="media-item media-square gt-media-item">

            <img
              src={design01}
              alt="Diseño de contenido Gintracom"
              loading="lazy"
              decoding="async"
            />


            <div className="media-caption">

              <span>
                DISEÑO SOCIAL
              </span>

              <span>
                03
              </span>

            </div>

          </div>



          <div className="media-item media-square gt-media-item">

            <img
              src={design02}
              alt="Contenido para redes Gintracom"
              loading="lazy"
              decoding="async"
            />


            <div className="media-caption">

              <span>
                CONTENIDO DIGITAL
              </span>

              <span>
                04
              </span>

            </div>

          </div>


        </div>

      </section>



      {/* CIERRE */}

      <section className="gt-closing">


        <div className="gt-closing-labels">

          <span>
            REDES SOCIALES
          </span>

          <span>
            CONTENIDO
          </span>

          <span>
            DISEÑO
          </span>

        </div>


        <h2>

          HAZTE VER.

          <span>
            SÉ RELEVANTE.
          </span>

          <strong>
            SIGUE CONECTADO.
          </strong>

        </h2>

      </section>



      {/* SIGUIENTE */}

      <Link
        to="/project/otros-proyectos"
        className="next-project gt-next next-project-clickable"
      >

        <span>
          SIGUIENTE PROYECTO
        </span>


        <h2>
          OTROS
          <br />
          PROYECTOS
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


export default Gintracom