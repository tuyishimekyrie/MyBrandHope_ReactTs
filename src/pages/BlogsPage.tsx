import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/sections/BlogsPage.css";
import "../styles/sections/Users.css";
import docker from "../assets/what-is-docker.png";
import multiply from "../assets/Multiply.png";
const BlogsPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const handleMenuOpen = () => {
    console.log("clicked");
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };
  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <div className="Container">
      <Sidebar state={menuOpen} setState={setMenuOpen} />
      <div className="users-main">
        <div className="user-header">
          <h1>Blogs</h1>
          <button className="menu" onClick={handleMenuOpen}>
            Menu
          </button>
        </div>
        <div className="blog-container">
          <form action="" className="formCreate">
            <h1>Create a blog</h1>
            <div className="inputs">
              <label>Image</label>
              <input type="file" id="image" name="image" />
            </div>
            <div className="inputs">
              <label>Headline</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Type a headline"
              />
            </div>
            <div className="inputs">
              <label>Description</label>
              <textarea
                name="description"
                id="description"
                cols={30}
                rows={3}
                placeholder="Type a description"
              ></textarea>
            </div>
            <p className="message"></p>
            <button className="createBlog">Create</button>
          </form>
          <div className="scrollable">
            <div className="blogs">
              <div className="blog">
                <div className="content">
                  <h2>The Future of Docker</h2>
                  <div className="btns">
                    <button className="updateBtn" onClick={handleModalOpen}>
                      Update
                    </button>
                    <button>Delete</button>
                  </div>
                </div>
                <div className="image">
                  <img src={docker} alt="" />
                </div>
              </div>
              <div className="blog">
                <div className="content">
                  <h2>The Future of Docker</h2>
                  <div className="btns">
                    <button className="updateBtn">Update</button>
                    <button>Delete</button>
                  </div>
                </div>
                <div className="image">
                  <img src={docker} alt="" />
                </div>
              </div>
              <div className="blog">
                <div className="content">
                  <h2>The Future of Docker</h2>
                  <div className="btns">
                    <button className="updateBtn">Update</button>
                    <button>Delete</button>
                  </div>
                </div>
                <div className="image">
                  <img src={docker} alt="" />
                </div>
              </div>
              <div className="blog">
                <div className="content">
                  <h2>The Future of Docker</h2>
                  <div className="btns">
                    <button className="updateBtn">Update</button>
                    <button>Delete</button>
                  </div>
                </div>
                <div className="image">
                  <img src={docker} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={modalOpen ? "modal active" : "modal"}>
        <form action="" className="formUpdate">
          <div className="head">
            <h1>Update a blog</h1>
            <img
              className="close"
              src={multiply}
              alt=""
              onClick={handleModalOpen}
            />
          </div>
          <div className="inputs">
            <label>Image</label>
            <input type="file" id="images" name="image" />
          </div>
          <div className="inputs">
            <label>Headline</label>
            <input
              type="text"
              id="titles"
              name="title"
              placeholder="Type a headline"
            />
          </div>
          <div className="inputs">
            <label>Description</label>
            <textarea
              name="description"
              id="descriptions"
              cols={30}
              rows={3}
              placeholder="Type a description"
            ></textarea>
          </div>
          <p className="errorMessages"></p>
          <button className="submitBtn">Update</button>
        </form>
      </div>
    </div>
  );
};

export default BlogsPage;
