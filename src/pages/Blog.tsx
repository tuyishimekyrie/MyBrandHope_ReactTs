import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CallToAction } from "../components/CallToAction";
import "../styles/sections/Blog.css";
import likeImage from "../assets/Facebook Like.png";
import commentImage from "../assets/Topic.png";
import personImage from "../assets/A-removebg-preview.png";
import { useEffect, useState } from "react";
import { BlogPost } from "./Blogs";
import { useParams } from "react-router-dom";
// interface Comment {
//   id: string;
//   commenterName: string;
//   comment: string;
//   date: string;
//   time: string;
// }

export const Blog = () => {
  const [blogsData, setBlogsData] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetch(
          "https://mybrandbackend-q8gq.onrender.com/api/blogs"
        );
        const response = await data.json();
        console.log(response);
        setBlogsData(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const { id } = useParams();
  const specificBlog = blogsData.find((blog) => blog._id === id);
  console.log(specificBlog);
  return (
    <div className="Home App">
      <Header />
      <div className="articles"></div>
      {/* {specificBlog.} */}
      <div className="article">
        <div className="articleImg">
          {loading ? (
            <h1>Loading ...</h1>
          ) : (
            <img src={specificBlog?.img} alt="" />
          )}
        </div>
        <div className="content">
          <h2>{specificBlog?.header}</h2>
          <p>{specificBlog?.desc}</p>
          <div className="features">
            <div className="likes">
              <p>{specificBlog?.likesCount}</p>
              <img src={likeImage} />
            </div>
            <div className="likes">
              <p>{specificBlog?.commentsCount}</p>
              <img src={commentImage} />
            </div>
          </div>
          <div className="comments">
            <label>Leave a Comment:</label>
            <input
              type="text"
              name="comment"
              id="comment"
              placeholder="type a comment"
            />
          </div>
          <div className="comments-section">
            {specificBlog &&
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              specificBlog.comments.map((comment: any, index: number) => (
                <div className="commented" key={index}>
                  <div className="img">
                    <img src={personImage} alt="" />
                    <p>{comment.commenterName}</p>
                  </div>
                  <p>{comment.comment}</p>
                  <div className="time">
                    <p>{comment.date}</p>
                    <p>{comment.time}</p>
                  </div>
                </div>
              ))}

            {/* <div className="commented">
              <div className="img">
                <img src={personImage} alt="" />
                <p>Tuyishime Hope</p>
              </div>
              <p>
                Thanks to the emergence of Docker, we'll harness its
                capabilities to enhance software shipping and streamline the
                development process.
              </p>
              <div className="time">
                <p>2024-01.02</p>
                <p>12:34:23</p>
              </div>
            </div> */}
          </div>
          <a href="./Blogs.html">
            <button>Read More</button>
          </a>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};
