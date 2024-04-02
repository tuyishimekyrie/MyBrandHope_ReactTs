import { projects } from "../Data/Projects"
import "../styles/sections/Projects.css"


const Projects = () => {
  return (
    <div className="projects">
      <h3>Projects</h3>
      <p>From Website to Desktop and Mobile applications</p>
      <div className="projects-content">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <img
              className="projectImg"
              src={project.image}
              alt={project.heading}
            />
            <h2 className="projectheading">{project.heading}</h2>
            <h5 className="projectDesc">{project.desc}</h5>
            <a
              className="site"
              href={project.site}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          </div>
        ))}
      </div>
      <button className="see-more">
        <a href="./UI/pages/Portfolio.html" className="">
          See More
        </a>
      </button>
    </div>
  );
}

export default Projects