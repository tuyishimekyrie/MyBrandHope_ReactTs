import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../styles/sections/Home.css";
import { data } from "../Data/BlogsData";
import "../styles/sections/Blogs.css"
import { Link } from "react-router-dom";

export const Blogs = () => {
  return (
    <div className="Home">
      <Header />
      <div className="head">
        <h2>Expand Your Within Understanding.</h2>
      </div>
      <div className="blogs">
        {data.map((blog, index) => (
          <div className="blog" key={index}>
            <img className="img" src={blog.image} alt="" />
            <h3>{blog.title}</h3>
            <p>
              {blog.description.length > 100
                ? blog.description.substring(0, 100) + "..."
                : blog.description}
            </p>

            <div className="features">
              <div className="likes">
                <p>{blog.likesCount}</p>
                <img className="likesCounts" src={blog.likeImage} alt="count" />
              </div>
              <div className="likes">
                <p>{blog.likesCount}</p>
                <img src={blog.commentImage} alt="Topic" />
              </div>
            </div>
            <Link to="/Blog">
              <button>Read More</button>
            </Link>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
