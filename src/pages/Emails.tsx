import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/sections/Emails.css";
import "../styles/sections/Users.css";
import { formatDistanceToNow } from "date-fns";
// import "../styles/sections/Admin.css";
interface Email {
  _id: string;
  email: string;
  message: string;
  createdAt: Date;
}
const Emails = () => {
  const [menuOpen, setMenuOpen] = useState(false);
    const [emailsData, setEmailsData] = useState<Email[]>();
  const [token, setToken] = useState<string | null>();
  const handleMenuOpen = () => {
    console.log("clicked");
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };
  useEffect(() => {
    const fetchTokenFromLocalStorage = async () => {
      const tokenData = localStorage.getItem("token-admin");
      if (tokenData) {
        try {
          const { token } = JSON.parse(tokenData);
          console.log(token);
          setToken(token);
        } catch (error) {
          console.error("Error processing token data:", error);
        }
      }
    };

    fetchTokenFromLocalStorage();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://mybrandbackend-q8gq.onrender.com/api/messages/getALL",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token || "",
          },
        }
      );
      const emails = await response.json();
      setEmailsData(emails);
    };
    if (token) {
      fetchUsers();
    }
  }, [token]);
  console.log(token);
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
            {emailsData?.map((email) => {
              return (
                <div className="email" key={email._id}>
                  <div className="email-header">
                    <span>{email.email}</span>
                    <p>{formatDistanceToNow(new Date(email.createdAt))} ago</p>
                  </div>
                  <div className="email-message">
                    <p>{email.message}</p>
                  </div>
                  <div className="email-buttons">
                    <button className="reply">Reply</button>
                    <button className="markasread">Mark as read</button>
                  </div>
                </div>
              );
            })}
            {/* <div className="email">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emails;
