import { Link } from 'react-router-dom'


function ProjectCard({
  number,
  brand,
  services,
  color,
  image,
  href
}) {

  return (

    <Link
      to={href}
      className="project-card"
      style={{ background: color }}
    >

      <div className="project-image-wrapper">

        <img
          src={image}
          alt={brand}
          className="project-image"
        />

      </div>


      <div className="project-overlay"></div>


      <div className="project-card-top">

        <span className="project-number">
          {number}
        </span>


        <span className="project-services">
          {services}
        </span>

      </div>


      <div className="project-card-bottom">

        <h3>
          {brand}
        </h3>


        <span className="project-arrow">
          ↗
        </span>

      </div>

    </Link>

  )

}


export default ProjectCard