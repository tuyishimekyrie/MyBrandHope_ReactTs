import { Header, Footer } from "../components/index";
import "../styles/sections/Home.css";
import "../styles/sections/Blogs.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import likeImage from "../assets/Facebook Like.png";
import commentImage from "../assets/Topic.png";
import apiClient from "../services/api-client";

export interface BlogPost {
  comments: unknown[];
  commentsCount: number;
  desc: string;
  header: string;
  img: string;
  likedBy: string[];
  likesCount: number;
  __v: number;
  _id: string;
}

export const Blogs = () => {
  const [blogsData, setBlogsData] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get<BlogPost[]>(
          "https://mybrandbackend-q8gq.onrender.com/api/blogs",
          { signal: controller.signal }
        );
        console.log(response);
        setBlogsData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    return () => controller.abort();
  }, []);
  return (
    <div className="Home">
      <Header />
      <div className="head">
        <h2>Expand Your Within Understanding.</h2>
      </div>
      <div className="blogsElement">
        {loading && <h2 style={{ textAlign: "center" }}>Loading...</h2>}

        {blogsData.map((blog, index) => (
          <div className="blogElement" key={index}>
            <img className="img" src={blog.img} alt="" />
            <h3>{blog.header}</h3>
            <p>
              {blog.desc.length > 100
                ? blog.desc.substring(0, 100) + "..."
                : blog.desc}
            </p>

            <div className="features">
              <div className="likeCount">
                <p>{blog.likesCount}</p>
                <img className="likesCounts" src={likeImage} alt="count" />
              </div>
              <div className="likeCount">
                <p>{blog.commentsCount}</p>
                <img src={commentImage} alt="Topic" />
              </div>
            </div>
            <Link to={"/Blog" + "/" + blog._id}>
              <button>Read More</button>
            </Link>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};
