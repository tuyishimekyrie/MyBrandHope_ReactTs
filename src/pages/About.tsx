import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../styles/sections/Home.css";
import AboutMe from "../components/AboutMe";
import { CallToAction } from "../components/CallToAction";
import Platforms from "../components/Platforms";
export const About = () => {
  return (
    <div className="Home App">
      <Header />
          <h2 style={{ padding: "0 5rem"}}>
        Explore the intricacies of my work and discover the unparalleled
        offerings we provide.
      </h2>
      <AboutMe />
      <Platforms />
      <CallToAction />
      <Footer />
    </div>
  );
};
