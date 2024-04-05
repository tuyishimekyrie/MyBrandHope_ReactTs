import { Header,Footer, CallToAction,Testimonial,Platforms,Projects,Skills,AboutMe } from "../components/index";
import "../styles/index.css";
import "../styles/sections/Home.css";
import Hero from "../assets/herotest.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="Home App">
      <Header />
      <main>
        <div className="hero-content">
          <h1 className="hello">Hello 👋</h1>
          <h3 className="name">I’m Tuyishime Hope Wilberforce.</h3>
          <h1>
            Crafting Digital <span>Masterpieces</span>
          </h1>
          <h4>
            Welcome to the my lab where creativity meets technology. Here, every
            pixel tells a story and every line of code creates an experience.
            Dive into a world where innovative design and cutting-edge
            development transform your digital dreams into reality.
          </h4>
          <Link to="/Contact">
            <button className="bookCall">Book a call</button>
          </Link>
        </div>
        <div className="hero-image">
          <img src={Hero} alt="" />
        </div>
      </main>
      <AboutMe />
      <Skills />
      <Platforms />
      <Projects />
      <Testimonial />
      <CallToAction />
      <Footer />
    </div>
  );
};
