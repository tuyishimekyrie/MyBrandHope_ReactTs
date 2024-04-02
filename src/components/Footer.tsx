import Linkedin from "../assets/LinkedIn.png"
import Whatsapp from "../assets/WhatsApp.png"
import Twitter from "../assets/TwitterX.png";
import Location from "../assets/Location.png";
import Email from "../assets/Email.png";
import { Link } from "react-router-dom";
export const Footer = () => {
    return (
      
    <footer>
      <div className="footer-content">
        <div className="links">
          <div className="footer-links">
            <h2>Links</h2>
            <ul>
              <Link to="/Home" >Home</Link>
              <Link to="/About" >About</Link>
              <Link to="/Portfolio">Portfolio</Link>
              <Link to="/Blogs">Blogs</Link>
              <Link to="/Contact">Contact</Link>
            </ul>
          </div>
          <div className="socials">
            <h2>Follow Me</h2>
            <div className="media">
              <img src={Linkedin} alt="" />
              <span>Linkendin</span>
            </div>
            <div className="media">
              <img src={Whatsapp} alt="" />
              <span>WhatsApp</span>
            </div>
            <div className="media">
              <img src={Twitter} alt="" />
              <span>TwitterX</span>
            </div>
          </div>
          <div className="address">
            <h2>Address</h2>
            <div className="location">
              <img src={Location} alt="" />
              <span>Kigali, Rwanda</span>
            </div>
            <div className="email">
              <img src={Email} alt="" />
              <span>tuyishimehope01@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="rights">@All Rights Reserved 2024</div>
      </div>
    </footer>
  );
}
