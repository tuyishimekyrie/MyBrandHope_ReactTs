import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/sections/BlogsPage.css";
import "../styles/sections/Users.css";
import multiply from "../assets/Multiply.png";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  image: string;
  title: string;
  desc: string;
};
interface BlogData {
  _id: string;
  header: string;
  img: string;
  // Add other properties as needed
}

interface BlogsDatas {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
  blogs: BlogData[]; // Assuming 'blogs' is the array property
}
const BlogsPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [token, setToken] = useState<string | null>();
  const [blogsData, setBlogsData] = useState<BlogsDatas | null>(null);
  const [editedId,SetEditedId] = useState<string>();
  const {
    register,
    handleSubmit,
    reset
  } = useForm<Inputs>();
  // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
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
        "https://mybrandbackend-q8gq.onrender.com/api/blogs",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token || "",
          },
        }
      );
      const emails = await response.json();
      setBlogsData(emails);
    };
    if (token) {
      fetchUsers()
    }
  }, [token])
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);

    // Convert FileList to File object
    const imageFile = data.image[0];
    console.log(imageFile);

    // Send data to your server
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("header", data.title);
    formData.append("desc", data.desc);
    console.log(formData);
    try {
      const response = await fetch(
        "https://mybrandbackend-q8gq.onrender.com/api/blogs/upload",
        {
          method: "POST",
          headers: {
            "x-auth-token": token || "",
          },
          body: formData
        }
      );
      const data = response.json();
      console.log(data);
      if (response.ok) {
        reset();
        fetchUpdatedBlogs();
      }
    } catch (error) {
      console.log(error);
    }
    

    //  const result = await response.json();
    //  console.log(result);
  };
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        // Set base64 string to form field
        // For example, you can set it to a hidden input field
        // Or you can directly set it to the state if you want to preview the image
        // For now, let's just log the base64 string
        console.log(base64String);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleMenuOpen = () => {
    console.log("clicked");
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };
  const handleModalOpen = (id ?: string) => {
    setModalOpen(!modalOpen);
    SetEditedId(id)
  };
  const handleDeleteBlog = async(id: string) => {
        try {
          const response = await fetch(
            "https://mybrandbackend-q8gq.onrender.com/api/blogs/delete/"+id,
            {
              method: "Delete",
              headers: {
                "Content-Type": "application/json",
                "x-auth-token": token || "",
              },
            }
          );
          // const data = await response.json();
          // setBlogsData(data);
          if (response.ok) {
            fetchUpdatedBlogs();
          }
        } catch (error) {
          console.error("Error fetching updated blogs:", error);
        }
  }
  const onSubmitUpdate: SubmitHandler<Inputs> = async (data) => {
    try {
      // Convert FileList to File object
      const imageFile = data.image[0];

      // Send data to your server
      const formData = new FormData();
      formData.append("image", imageFile);
      formData.append("header", data.title);
      formData.append("desc", data.desc);

      const response = await fetch(
        "https://mybrandbackend-q8gq.onrender.com/api/blogs/updates/" + editedId,
        {
          method: "PATCH",
          headers: {
            "x-auth-token": token || "",
          },
          body: formData,
        }
      );

      if (response.ok) {
        reset();
        setModalOpen(false)
        fetchUpdatedBlogs();
      } else {
        console.error("Failed to update blog");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchUpdatedBlogs = async () => {
    try {
      const response = await fetch(
        "https://mybrandbackend-q8gq.onrender.com/api/blogs",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token || "",
          },
        }
      );
      const data = await response.json();
      setBlogsData(data);
    } catch (error) {
      console.error("Error fetching updated blogs:", error);
    }
  };
  return (
    <div className="containers">
      <Sidebar state={menuOpen} setState={setMenuOpen} />
      <div className="users-main">
        <div className="user-header">
          <h1>Blogs</h1>
          <button className="menu" onClick={handleMenuOpen}>
            Menu
          </button>
        </div>
        <div className="blog-container">
          <form className="formCreate" onSubmit={handleSubmit(onSubmit)}>
            <h1>Create a blog</h1>
            <div className="inputs">
              <label>Image</label>
              <input
                type="file"
                id="image"
                {...register("image")}
                onChange={handleImageChange}
              />
            </div>
            <div className="inputs">
              <label>Headline</label>
              <input
                type="text"
                id="title"
                placeholder="Type a headline"
                {...register("title")}
              />
            </div>
            <div className="inputs">
              <label>Description</label>
              <textarea
                id="description"
                cols={30}
                rows={3}
                placeholder="Type a description"
                {...register("desc")}
              ></textarea>
            </div>
            <p className="message"></p>
            <button className="createBlog">Create</button>
          </form>
          <div className="scrollable">
            <div className="blogs">
              {/* {blogsData && blogsData.map((blog: BlogData) => { */}
              {blogsData &&
                blogsData.map((blog: BlogData) => {
                  return (
                    <div className="blog" key={blog._id}>
                      <div className="content">
                        <h2>{blog.header}</h2>
                        <div className="btns">
                           <button
                        className="updateBtn"
                        onClick={() => handleModalOpen(blog._id)}
                      >Update</button>
                          <button onClick={() => handleDeleteBlog(blog._id)}>
                            Delete
                          </button>
                        </div>
                      </div>
                      <div className="image">
                        <img src={blog.img} alt="" />
                      </div>
                    </div>
                  );
                })}

              {/* <div className="blog">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className={modalOpen ? "modal active" : "modal"}>
        <form className="formUpdate" onSubmit={handleSubmit(onSubmitUpdate)}>
          <div className="head">
            <h1>Update a blog</h1>
            <img
              className="close"
              src={multiply}
              alt=""
              onClick={() => handleModalOpen()}
            />
          </div>
          <div className="inputs">
            <label>Image</label>
            <input type="file" id="images" {...register("image")} />
          </div>
          <div className="inputs">
            <label>Headline</label>
            <input
              type="text"
              id="titles"
              {...register("title")}
              placeholder="Type a headline"
            />
          </div>
          <div className="inputs">
            <label>Description</label>
            <textarea
              {...register("desc")}
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
