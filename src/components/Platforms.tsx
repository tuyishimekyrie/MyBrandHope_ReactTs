import "../styles/sections/Platforms.css"
import Website from '../assets/dgnlrompyp0nkl4kfti4.svg'
import Desktop from '../assets/Other 07.png'
import Mobile from "../assets/mob.png";
const Platforms = () => {
  return (
    <div className="platforms">
      <h3>Platforms</h3>
      <p>From Website to Desktop and Mobile applications</p>
      <div className="platform-content">
        <div className="application">
          <img src={Website} alt="" />
          <h2>Website Application</h2>
          <h5>
            Embark on a journey through my collection of meticulously crafted
            web applications, where each project represents a fusion of
            creativity and functionality. From sleek and intuitive user
            interfaces to robust backend architectures, these web applications
            showcase my passion for bringing ideas to life in the digital realm.
          </h5>
        </div>
        <div className="application">
          <img src={Desktop} alt="" />
          <h2>Desktop Application</h2>
          <h5>
            Embark on a journey through my collection of meticulously crafted
            web applications, where each project represents a fusion of
            creativity and functionality. From sleek and intuitive user
            interfaces to robust backend architectures, these web applications
            showcase my passion for bringing ideas to life in the digital realm.
          </h5>
        </div>
        <div className="application">
          <img src={Mobile} alt="" />
          <h2>Mobile Application</h2>
          <h5>
            Embark on a journey through my collection of meticulously crafted
            web applications, where each project represents a fusion of
            creativity and functionality. From sleek and intuitive user
            interfaces to robust backend architectures, these web applications
            showcase my passion for bringing ideas to life in the digital realm.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Platforms