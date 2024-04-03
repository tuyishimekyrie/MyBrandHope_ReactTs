import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/sections/Emails.css";
import "../styles/sections/Users.css";
// import "../styles/sections/Admin.css";
const Emails = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    console.log("clicked");
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };
  return (
    <div className="Container">
      <Sidebar state={menuOpen} setState={setMenuOpen} />
      <div className="users-main">
        <div className="user-header">
          <h1>Emails</h1>
          <button className="menu" onClick={handleMenuOpen}>
            Menu
          </button>
        </div>
        <div className="scrollable">
          <div className="emails">
            <div className="email">
              <div className="email-header">
                <span>tuyishimehope01@gmail.com</span>
                <p>2 minutes ago</p>
              </div>
              <div className="email-message">
                <p>
                  Greetings, I am in search of a sophisticated website to
                  effectively showcase and promote my array of exquisite
                  products.
                </p>
              </div>
              <div className="email-buttons">
                <button className="reply">Reply</button>
                <button className="markasread">Mark as read</button>
              </div>
            </div>
            <div className="email">
              <div className="email-header">
                <span>tuyishimehope01@gmail.com</span>
                <p>2 minutes ago</p>
              </div>
              <div className="email-message">
                <p>
                  Greetings, I am in search of a sophisticated website to
                  effectively showcase and promote my array of exquisite
                  products.
                </p>
              </div>
              <div className="email-buttons">
                <button>Reply</button>
                <button>Mark as read</button>
              </div>
            </div>
            <div className="email">
              <div className="email-header">
                <span>tuyishimehope01@gmail.com</span>
                <p>2 minutes ago</p>
              </div>
              <div className="email-message">
                <p>
                  Greetings, I am in search of a sophisticated website to
                  effectively showcase and promote my array of exquisite
                  products.
                </p>
              </div>
              <div className="email-buttons">
                <button>Reply</button>
                <button>Mark as read</button>
              </div>
            </div>
            <div className="email">
              <div className="email-header">
                <span>tuyishimehope01@gmail.com</span>
                <p>2 minutes ago</p>
              </div>
              <div className="email-message">
                <p>
                  Greetings, I am in search of a sophisticated website to
                  effectively showcase and promote my array of exquisite
                  products.
                </p>
              </div>
              <div className="email-buttons">
                <button>Reply</button>
                <button>Mark as read</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emails;
