import { Header, Footer } from "../components/index";
import "../styles/sections/Home.css";
import "../styles/sections/Portfolio.css";
import { portfolios } from "../Data/Projects";
export const Portfolio = () => {
  return (
    <div className="Home">
      <Header />
      <div className="heading">
        <h2>
          Software Engineer: <span>Crafting Tomorrow's Tech</span>
        </h2>
        <p>
          Explore my portfolio where code meets creativity. As a software
          engineer, I architect solutions that redefine what's possible. Dive
          into projects showcasing innovation, optimization, and a passion for
          shaping the future of technology
        </p>
      </div>
      <div className="projects">
              <div className="projects-content">
                  {portfolios.map((project, index) => (
                      
          <div className="project" key={index}>
            <img className="projectImg" src={project.image} alt="" />
                          <h2 className="projectHeading">{project.heading}</h2>
            <h5 className="projectDesc">{project.desc}
            </h5>
            <button className="site">Live Site</button>
          </div>
                  ))}
        </div>
              
      </div>
      <Footer />
    </div>
  );
};
