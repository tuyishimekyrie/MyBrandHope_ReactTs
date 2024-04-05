import  { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Menu from "../assets/Menu.png";
import Multiply from "../assets/Multiply.png";
import { links } from "../Data/links";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={menuOpen ? "header active" : "header "}>
      <div className="logo">
        <img src={Logo} />
      </div>
      <div className={menuOpen ? "menu-links active" : "menu-links "}>
        <ul>
          {links.map((linkData, index) => (
            <li key={index}>
              <Link to={linkData.link}>{linkData.name}</Link>
            </li>
          ))}
        </ul>
        <Link to="/login">
          <button className="login">Login</button>
        </Link>
        <a className="logoutButtons"></a>
        <Link to="./UI/pages/adminLogin.html" className="adminButtons"></Link>
      </div>
      <div className="menu">
        <div
          className="menu-open"
          style={{ display: menuOpen ? "none" : "block" }}
        >
          <img src={Menu} alt="" onClick={handleMenuOpen} />
        </div>
        <div
          className="menu-close"
          style={{ display: menuOpen ? "block" : "none" }}
        >
          <img src={Multiply} alt="" onClick={handleMenuClose} />
        </div>
      </div>
    </header>
  );
};
