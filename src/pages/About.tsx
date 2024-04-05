import {
  Header,
  Footer,
  CallToAction,
  Platforms,
  AboutMe,
} from "../components/index";
import "../styles/sections/Home.css";
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
