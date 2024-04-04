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
        <a href="/Admin" className="link active">
          <img src={layout} alt="" />
          <p>Dashboard</p>
        </a>
        <a href="/Admin/Users" className="link ">
          <img src={member} alt="" />
          <p>Users</p>
        </a>
        <a href="/Admin/Emails" className="link">
          <img src={letter} alt="" />
          <p>Emails</p>
        </a>
        <a href="/Admin/Projects" className="link">
          <img src={outline} alt="" />
          <p>Projects</p>
        </a>
        <a href="/Admin/Blogs" className="link">
          <img src={page} alt="" />
          <p>Blogs</p>
        </a>
        <a href="/login" className="link logout">
          <img src={logout} alt="" />
          <p>Logout</p>
        </a>
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
