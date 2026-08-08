import { useEffect, useRef, useState } from 'react'
import './InteractiveVideo.css'


function InteractiveVideo({
  src,
  label,
  number,
  className = ''
}) {

  const videoRef = useRef(null)

  const [playing, setPlaying] = useState(false)
  const [started, setStarted] = useState(false)


  /* ========================================
     PAUSAR SI OTRO VIDEO EMPIEZA
  ======================================== */

  useEffect(() => {

    const pauseThisVideo = (event) => {

      if (
        event.detail !== videoRef.current &&
        !videoRef.current?.paused
      ) {

        videoRef.current.pause()

        setPlaying(false)

      }

    }


    window.addEventListener(
      'portfolio-video-play',
      pauseThisVideo
    )


    return () => {

      window.removeEventListener(
        'portfolio-video-play',
        pauseThisVideo
      )

    }

  }, [])



  /* ========================================
     PLAY / PAUSE
  ======================================== */

  const toggleVideo = async () => {

    const video = videoRef.current

    if (!video) return


    if (video.paused) {

      window.dispatchEvent(
        new CustomEvent(
          'portfolio-video-play',
          {
            detail: video
          }
        )
      )


      video.muted = false


      try {

        await video.play()

        setPlaying(true)
        setStarted(true)

      } catch (error) {

        console.error(
          'No se pudo reproducir el video',
          error
        )

      }

    } else {

      video.pause()

      setPlaying(false)

    }

  }



  /* ========================================
     TECLADO
  ======================================== */

  const handleKeyDown = (event) => {

    if (
      event.key === 'Enter' ||
      event.key === ' '
    ) {

      event.preventDefault()

      toggleVideo()

    }

  }



  return (

    <div
      className={`
        media-item
        interactive-video
        ${className}
        ${playing ? 'is-playing' : ''}
      `}
      role="button"
      tabIndex="0"
      onClick={toggleVideo}
      onKeyDown={handleKeyDown}
      aria-label={
        playing
          ? 'Pausar video'
          : 'Reproducir video con sonido'
      }
    >


      {/* VIDEO */}

      <video
        ref={videoRef}
        src={src}
        playsInline
        loop
        preload="metadata"

        onPlay={() => setPlaying(true)}

        onPause={() => setPlaying(false)}
      />



      {/* OSCURECIMIENTO */}

      <div className="video-shade"></div>



      {/* PLAY CENTRAL */}

      {!playing && (

        <div
          className={`
            video-start-control
            ${started ? 'has-started' : ''}
          `}
        >

          <div className="video-play-circle">

            <span className="video-play-icon">
              ▶
            </span>

          </div>


          <div className="video-play-copy">

            <strong>
              {started
                ? 'CONTINUAR'
                : 'VER VIDEO'
              }
            </strong>

            <span>
              CON SONIDO
            </span>

          </div>

        </div>

      )}



      {/* PAUSE */}

      {playing && (

        <div className="video-pause-control">

          <span>
            Ⅱ
          </span>

          PAUSAR

        </div>

      )}



      {/* INFORMACIÓN */}

      <div className="media-caption">

        <span>
          {label}
        </span>

        <span>
          {number}
        </span>

      </div>


    </div>

  )

}


export default InteractiveVideo