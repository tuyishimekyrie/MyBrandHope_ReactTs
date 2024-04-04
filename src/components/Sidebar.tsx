import Multiply from "../assets/Multiply.png";
import logo from "../assets/Logo.png";
import layout from "../assets/layout-dashboard.png";
import member from "../assets/Member.png";
import letter from "../assets/Letter.png";
import outline from "../assets/Outline.png";
import page from "../assets/Page.png";
import logout from "../assets/Logout Rounded.png";
import ctn from "../assets/ctn.png";
import "../styles/sections/Admin.css";
import { NavLink } from "react-router-dom";

const Sidebar = ({
  state,
  setState,
}: {
  state: boolean;
  setState: (value: boolean) => void;
}) => {
  console.log(state);
  const handleClose = () => {
    setState(!state);
  };
  return (
    <div className={state ? "sidebar active" : "sidebar"}>
      <div className="mobile-nav" style={{ display: state ? "flex" : "none" }}>
        <img src={Multiply} alt="" onClick={handleClose} />
      </div>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="links ">
        <NavLink
          to="/Admin"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <img src={layout} alt="" />
          <p>Dashboard</p>
        </NavLink>
        <NavLink
          to="/Admin/Users"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <img src={member} alt="" />
          <p>Users</p>
        </NavLink>
        <NavLink
          to="/Admin/Emails"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <img src={letter} alt="" />
          <p>Emails</p>
        </NavLink>
        <NavLink
          to="/Admin/Projects"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <img src={outline} alt="" />
          <p>Projects</p>
        </NavLink>
        <NavLink
          to="/Admin/Blogs"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <img src={page} alt="" />
          <p>Blogs</p>
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "link logout active" : "link logout"
          }
        >
          <img src={logout} alt="" />
          <p>Logout</p>
        </NavLink>
      </div>
      <div className="logger">
        <img src={ctn} alt="" />
        <p>
          <span>0</span>Risk, all systems are <br></br>operational
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
