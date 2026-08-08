import { Link } from 'react-router-dom'

import InteractiveVideo
  from '../components/InteractiveVideo'

import senorConstructorCover
  from '../assets/projects/senorconstructor-cover.png'

import result01
  from '../assets/senorconstructor/sc-result-01.png'

import reel01
  from '../assets/senorconstructor/sc-reel-01.mp4'

import reel02
  from '../assets/senorconstructor/sc-reel-02.mp4'

import design01
  from '../assets/senorconstructor/sc-design-01.png'

import design02
  from '../assets/senorconstructor/sc-design-02.png'

import './SenorConstructor.css'


function SenorConstructor() {

  return (

    <main className="case-study sc-case">


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

      <section className="case-hero sc-hero">

        <div className="case-hero-image">

          <img
            src={senorConstructorCover}
            alt="Señor Constructor"
          />

          <div className="case-hero-overlay"></div>

        </div>


        <div className="case-hero-info">

          <div className="case-index">
            02 / CASO DE ESTUDIO
          </div>


          <h1 className="case-title sc-title">

            SEÑOR

            <span>
              CONSTRUCTOR
            </span>

          </h1>


          <div className="case-meta">

            <div>

              <span>ROL</span>

              <p>
                Estrategia creativa<br />
                Creatividad para performance<br />
                Contenido y diseño
              </p>

            </div>


            <div>

              <span>ENFOQUE</span>

              <p>
                Meta Ads<br />
                E-commerce<br />
                Contenido de conversión
              </p>

            </div>


            <div>

              <span>PROYECTO</span>

              <p>
                Campañas de producto<br />
                Creatividades de venta<br />
                Performance digital
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* CONTEXTO */}

      <section className="case-intro sc-intro">

        <div className="case-section-number">
          01 — CONTEXTO
        </div>


        <div className="case-intro-grid">

          <h2>

            CREATIVIDAD

            <span>
              QUE
            </span>

            VENDE.

          </h2>


          <div className="case-intro-copy">

            <p>
              Señor Constructor compite dentro de un
              entorno de e-commerce donde cada creativo
              tiene una misión clara: detener el scroll,
              comunicar el producto y generar intención
              de compra.
            </p>


            <p>
              El trabajo creativo conecta contenido,
              producto, oferta, Meta Ads y análisis de
              performance para transformar aprendizajes
              de campaña en nuevas decisiones visuales.
            </p>

          </div>

        </div>

      </section>



      {/* RESULTADOS */}

      <section className="sc-performance">

        <div className="sc-performance-heading">

          <div className="case-section-number">
            02 — RESULTADOS
          </div>


          <div className="sc-performance-title">

            <div>

              <span className="sc-result-label">
                ENE — MAY
              </span>


              <h2>
                +$1.000
                <span>M</span>
              </h2>


              <p>
                COP EN VENTAS
              </p>

            </div>


            <div className="sc-performance-copy">

              <p>
                Creatividad orientada a performance,
                campañas digitales y un ecosistema
                de venta enfocado en conversión.
              </p>


              <span>
                CREATIVIDAD × PAUTA × E-COMMERCE
              </span>

            </div>

          </div>

        </div>


        <div className="sc-result-image">

          <img
            src={result01}
            alt="Resultados de campañas de Señor Constructor"
            loading="lazy"
            decoding="async"
          />

        </div>

      </section>



      {/* SISTEMA */}

      <section className="sc-strategy">

        <div className="case-section-number">
          03 — EL SISTEMA
        </div>


        <div className="sc-strategy-content">

          <div className="sc-strategy-title">

            <span>
              CICLO DE OPTIMIZACIÓN
            </span>


            <h2>

              PRODUCTO

              <span>↓</span>

              CREATIVIDAD

              <span>↓</span>

              PRUEBA

              <span>↓</span>

              ESCALA

            </h2>

          </div>



          <div className="sc-system-items">


            <div>

              <span>01</span>

              <div>

                <h3>PRODUCTO</h3>

                <p>
                  Identificar beneficios,
                  objeciones, usos y argumentos
                  comerciales del producto.
                </p>

              </div>

            </div>



            <div>

              <span>02</span>

              <div>

                <h3>CREATIVIDAD</h3>

                <p>
                  Convertir esos argumentos en
                  imágenes, videos, hooks,
                  ofertas y conceptos visuales.
                </p>

              </div>

            </div>



            <div>

              <span>03</span>

              <div>

                <h3>PRUEBA</h3>

                <p>
                  Llevar diferentes ángulos
                  creativos a pauta para descubrir
                  qué conecta mejor con la audiencia.
                </p>

              </div>

            </div>



            <div>

              <span>04</span>

              <div>

                <h3>ESCALA</h3>

                <p>
                  Convertir los aprendizajes
                  de performance en nuevas
                  iteraciones y oportunidades.
                </p>

              </div>

            </div>


          </div>

        </div>

      </section>



      {/* CREATIVIDAD SELECCIONADA */}

      <section className="case-work sc-work">

        <div className="case-section-number">
          04 — CREATIVIDAD SELECCIONADA
        </div>


        <div className="case-work-title">

          <h2>

            HECHO

            <span>
              PARA VENDER.
            </span>

          </h2>


          <p>
            Videos y piezas visuales diseñados
            para presentar producto, comunicar
            beneficios y competir por atención
            dentro de campañas digitales.
          </p>

        </div>



        <div className="portfolio-media-grid">


          <InteractiveVideo
            src={reel01}
            label="PAUTA / REEL"
            number="01"
            className="media-vertical"
          />


          <InteractiveVideo
            src={reel02}
            label="PRODUCTO / REEL"
            number="02"
            className="media-vertical"
          />



          <div className="media-item media-square sc-media-item">

            <img
              src={design01}
              alt="Creativo publicitario Señor Constructor"
              loading="lazy"
              decoding="async"
            />


            <div className="media-caption">

              <span>
                CREATIVIDAD DE PAUTA
              </span>

              <span>
                03
              </span>

            </div>

          </div>



          <div className="media-item media-square sc-media-item">

            <img
              src={design02}
              alt="Diseño de campaña Señor Constructor"
              loading="lazy"
              decoding="async"
            />


            <div className="media-caption">

              <span>
                CAMPAÑA DE PRODUCTO
              </span>

              <span>
                04
              </span>

            </div>

          </div>


        </div>

      </section>



      {/* CIERRE */}

      <section className="sc-closing">

        <div className="sc-closing-small">

          <span>
            ESTRATEGIA CREATIVA
          </span>

          <span>
            META ADS
          </span>

          <span>
            E-COMMERCE
          </span>

        </div>


        <h2>

          BUENAS IDEAS

          <span>
            CAPTAN ATENCIÓN.
          </span>

          GRANDES IDEAS

          <strong>
            GENERAN RESULTADOS.
          </strong>

        </h2>

      </section>



      {/* SIGUIENTE */}

      <Link
        to="/project/gintracom"
        className="next-project sc-next next-project-clickable"
      >

        <span>
          SIGUIENTE PROYECTO
        </span>

        <h2>
          GINTRACOM
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


export default SenorConstructor