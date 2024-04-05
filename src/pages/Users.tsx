import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
// import "../styles/sections/Admin.css";
import "../styles/sections/Users.css";
interface User {
  _id: string;
  name: string;
  email: string;
  photo?: string;
  isAdmin: string
}
const Users = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [usersData, setUsersData] = useState<User[]>();
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
        console.log(token)
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
        "https://mybrandbackend-q8gq.onrender.com/api/users/getALL",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token" : token || ""
          },
        }
      );
      const {users} = await response.json();
      setUsersData(users);
    }
    if (token) {
      fetchUsers();
    }
  }, [token])
  console.log(token)
  console.log(usersData);
  const handleDeleteUser = async (id: string) => {
   await fetch("https://mybrandbackend-q8gq.onrender.com/api/users/delete/"+id, {
     method: "Delete",
     headers: {
       "Content-Type": "application/json",
       "x-auth-token": token || "",
     },
   });
    setUsersData(usersData?.filter((user) => user._id !== id));
  }
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
            {usersData?.map((user) => {
              return <div className="user" key={user._id}>
                <p>{user._id.length > 4 ? user._id.substring(0,4) : ""}</p>
                <p>{user.name}</p>
                <p>{user.email}</p>
              <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
            </div>
            })}
            {/* <div className="user">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
