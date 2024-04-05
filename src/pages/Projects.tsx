import  { useState } from "react";
import Sidebar from "../components/Sidebar";

const Projects = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    console.log("clicked");
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };
  return (
    <div className="containers">
      <Sidebar state={menuOpen} setState={setMenuOpen} />

      <div className="users-main">
        <div className="user-header">
          <h1>Projects</h1>
          <button className="menu" onClick={handleMenuOpen}>
            Menu
          </button>
        </div>
        <div className="scrollable">
          <div className="emails">
            <div className="email">
              <div className="email-header">
                <span>tuyishimehope01@gmail.com</span>
                <div>
                  <p>Active</p>
                </div>
              </div>
              <div className="email-message project-message">
                <span>Single Page Website (Commercial)</span>
                <h4>
                  A technical homepage showcases a seamless blend of innovation
                  and user-friendly design, featuring key technologies and
                  services. The contact page serves as a responsive gateway,
                  enabling effortless communication and collaboration, enhancing
                  user experience through intuitive forms and direct
                  communication channels.
                </h4>
              </div>
              <div className="email-buttons project-button">
                <button>Mark as Done</button>
              </div>
            </div>
            <div className="email">
              <div className="email-header">
                <span>tuyishimehope01@gmail.com</span>
                <div>
                  <p>Active</p>
                </div>
              </div>
              <div className="email-message project-message">
                <span>Single Page Website (Commercial)</span>
                <h4>
                  A technical homepage showcases a seamless blend of innovation
                  and user-friendly design, featuring key technologies and
                  services. The contact page serves as a responsive gateway,
                  enabling effortless communication and collaboration, enhancing
                  user experience through intuitive forms and direct
                  communication channels.
                </h4>
              </div>
              <div className="email-buttons project-button">
                <button>Mark as Done</button>
              </div>
            </div>
            <div className="email">
              <div className="email-header">
                <span>tuyishimehope01@gmail.com</span>
                <div>
                  <p>Active</p>
                </div>
              </div>
              <div className="email-message project-message">
                <span>Single Page Website (Commercial)</span>
                <h4>
                  A technical homepage showcases a seamless blend of innovation
                  and user-friendly design, featuring key technologies and
                  services. The contact page serves as a responsive gateway,
                  enabling effortless communication and collaboration, enhancing
                  user experience through intuitive forms and direct
                  communication channels.
                </h4>
              </div>
              <div className="email-buttons project-button">
                <button>Mark as Done</button>
              </div>
            </div>
            <div className="email">
              <div className="email-header">
                <span>tuyishimehope01@gmail.com</span>
                <div>
                  <p>Active</p>
                </div>
              </div>
              <div className="email-message project-message">
                <span>Single Page Website (Commercial)</span>
                <h4>
                  A technical homepage showcases a seamless blend of innovation
                  and user-friendly design, featuring key technologies and
                  services. The contact page serves as a responsive gateway,
                  enabling effortless communication and collaboration, enhancing
                  user experience through intuitive forms and direct
                  communication channels.
                </h4>
              </div>
              <div className="email-buttons project-button">
                <button>Mark as Done</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
