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
            02 / CASE STUDY
          </div>


          <h1 className="case-title sc-title">

            SEÑOR

            <span>
              CONSTRUCTOR
            </span>

          </h1>


          <div className="case-meta">

            <div>

              <span>
                ROLE
              </span>

              <p>
                Creative Strategy<br />
                Performance Creative<br />
                Content & Design
              </p>

            </div>


            <div>

              <span>
                FOCUS
              </span>

              <p>
                Meta Ads<br />
                E-commerce<br />
                Conversion Content
              </p>

            </div>


            <div>

              <span>
                PROJECT
              </span>

              <p>
                Product Campaigns<br />
                Sales Creatives<br />
                Digital Performance
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ===================================
          CONTEXT
      =================================== */}

      <section className="case-intro sc-intro">

        <div className="case-section-number">
          01 — CONTEXT
        </div>


        <div className="case-intro-grid">

          <h2>

            CREATIVE

            <span>
              THAT
            </span>

            SELLS.

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



      {/* ===================================
          PERFORMANCE RESULT
      =================================== */}

      <section className="sc-performance">

        <div className="sc-performance-heading">

          <div className="case-section-number">
            02 — PERFORMANCE
          </div>


          <div className="sc-performance-title">

            <div>

              <span className="sc-result-label">
                JAN — MAY
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
                CREATIVE × PERFORMANCE × E-COMMERCE
              </span>

            </div>

          </div>

        </div>


        <div className="sc-result-image">

          <img
            src={result01}
            alt="Resultados de campañas de Señor Constructor"
          />

        </div>

      </section>



      {/* ===================================
          STRATEGY
      =================================== */}

      <section className="sc-strategy">

        <div className="case-section-number">
          03 — THE SYSTEM
        </div>


        <div className="sc-strategy-content">

          <div className="sc-strategy-title">

            <span>
              PERFORMANCE LOOP
            </span>


            <h2>

              PRODUCT

              <span>
                ↓
              </span>

              CREATIVE

              <span>
                ↓
              </span>

              TEST

              <span>
                ↓
              </span>

              SCALE

            </h2>

          </div>



          <div className="sc-system-items">


            <div>

              <span>
                01
              </span>


              <div>

                <h3>
                  PRODUCT
                </h3>

                <p>
                  Identificar beneficios,
                  objeciones, usos y argumentos
                  comerciales del producto.
                </p>

              </div>

            </div>



            <div>

              <span>
                02
              </span>


              <div>

                <h3>
                  CREATIVE
                </h3>

                <p>
                  Convertir esos argumentos en
                  imágenes, videos, hooks,
                  ofertas y conceptos visuales.
                </p>

              </div>

            </div>



            <div>

              <span>
                03
              </span>


              <div>

                <h3>
                  TEST
                </h3>

                <p>
                  Llevar diferentes ángulos
                  creativos a pauta para descubrir
                  qué conecta mejor con la audiencia.
                </p>

              </div>

            </div>



            <div>

              <span>
                04
              </span>


              <div>

                <h3>
                  SCALE
                </h3>

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



      {/* ===================================
          SELECTED CREATIVE
      =================================== */}

      <section className="case-work sc-work">

        <div className="case-section-number">
          04 — SELECTED CREATIVE
        </div>


        <div className="case-work-title">

          <h2>

            BUILT

            <span>
              TO SELL.
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


          {/* REEL 01 */}

          <InteractiveVideo
            src={reel01}
            label="PERFORMANCE / REEL"
            number="01"
            className="media-vertical"
          />



          {/* REEL 02 */}

          <InteractiveVideo
            src={reel02}
            label="PRODUCT / REEL"
            number="02"
            className="media-vertical"
          />



          {/* DESIGN 01 */}

          <div className="media-item media-square sc-media-item">

            <img
              src={design01}
              alt="Creativo publicitario Señor Constructor"
            />


            <div className="media-caption">

              <span>
                PERFORMANCE CREATIVE
              </span>

              <span>
                03
              </span>

            </div>

          </div>



          {/* DESIGN 02 */}

          <div className="media-item media-square sc-media-item">

            <img
              src={design02}
              alt="Diseño de campaña Señor Constructor"
            />


            <div className="media-caption">

              <span>
                PRODUCT CAMPAIGN
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

      <section className="sc-closing">

        <div className="sc-closing-small">

          <span>
            CREATIVE STRATEGY
          </span>

          <span>
            META ADS
          </span>

          <span>
            E-COMMERCE
          </span>

        </div>


        <h2>

          GOOD CREATIVE

          <span>
            GETS ATTENTION.
          </span>

          GREAT CREATIVE

          <strong>
            GETS RESULTS.
          </strong>

        </h2>

      </section>



      {/* ===================================
          NEXT PROJECT
      =================================== */}

<Link
  to="/project/gintracom"
  className="next-project sc-next next-project-clickable"
>
  <span>
    NEXT PROJECT
  </span>

  <h2>
    GINTRACOM
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


export default SenorConstructor