import { useState } from "react";
import Sidebar from "../components/Sidebar";
// import "../styles/sections/Admin.css";
import "../styles/sections/Users.css";
const Users = () => {
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
          <h1>Users</h1>
          <button className="menu" onClick={handleMenuOpen}>
            Menu
          </button>
        </div>
        <div className="scrollable">
          <div className="users">
            <div className="user">
              <p>1</p>
              <p>Tuyishime Hope Wilberforce</p>
              <p>tuyishimehope01@gmail.com</p>
              <button>Delete</button>
            </div>
            <div className="user">
              <p>2</p>
              <p>Kyrie Irving</p>
              <p>kyrie01@gmail.com</p>
              <button>Delete</button>
            </div>
            <div className="user">
              <p>3</p>
              <p>Shema Manzi</p>
              <p>shema5@gmail.com</p>
              <button>Delete</button>
            </div>
            <div className="user">
              <p>1</p>
              <p>Tuyishime Hope Wilberforce</p>
              <p>tuyishimehope01@gmail.com</p>
              <button>Delete</button>
            </div>
            <div className="user">
              <p>1</p>
              <p>Tuyishime Hope Wilberforce</p>
              <p>tuyishimehope01@gmail.com</p>
              <button>Delete</button>
            </div>
            <div className="user">
              <p>1</p>
              <p>Tuyishime Hope Wilberforce</p>
              <p>tuyishimehope01@gmail.com</p>
              <button>Delete</button>
            </div>
            <div className="user">
              <p>1</p>
              <p>Tuyishime Hope Wilberforce</p>
              <p>tuyishimehope01@gmail.com</p>
              <button>Delete</button>
            </div>
            <div className="user">
              <p>1</p>
              <p>Tuyishime Hope Wilberforce</p>
              <p>tuyishimehope01@gmail.com</p>
              <button>Delete</button>
            </div>
            <div className="user">
              <p>1</p>
              <p>Tuyishime Hope Wilberforce</p>
              <p>tuyishimehope01@gmail.com</p>
              <button>Delete</button>
            </div>
            <div className="user">
              <p>1</p>
              <p>Tuyishime Hope Wilberforce</p>
              <p>tuyishimehope01@gmail.com</p>
              <button>Delete</button>
            </div>
            <div className="user">
              <p>1</p>
              <p>Tuyishime Hope Wilberforce</p>
              <p>tuyishimehope01@gmail.com</p>
              <button>Delete</button>
            </div>
            <div className="user">
              <p>1</p>
              <p>Tuyishime Hope Wilberforce</p>
              <p>tuyishimehope01@gmail.com</p>
              <button>Delete</button>
            </div>
            <div className="user">
              <p>1</p>
              <p>Tuyishime Hope Wilberforce</p>
              <p>tuyishimehope01@gmail.com</p>
              <button>Delete</button>
            </div>
            <div className="user">
              <p>1</p>
              <p>Tuyishime Hope Wilberforce</p>
              <p>tuyishimehope01@gmail.com</p>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
