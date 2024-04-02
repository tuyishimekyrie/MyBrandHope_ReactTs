import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CallToAction } from "../components/CallToAction";
import "../styles/sections/Blog.css"
import docker from '../assets/what-is-docker.png'
import likeImage from "../assets/Facebook Like.png";
import commentImage from "../assets/Topic.png";
import personImage from "../assets/A-removebg-preview.png";
export const Blog = () => {
  return (
    <div className="Home App">
          <Header />
            <div className="articles"></div>
       <div className="article">
        <div className="articleImg">
          <img src={docker} alt="" />
        </div>
        <div className="content">
          <h2>The future of Docker</h2>
          <p>
            Docker revolutionizes software deployment through
            containerization,encapsulating applications and dependencies for
            seamless portability. The Docker Engine orchestrates container
            creation, offering developers a standardized, reproducible
            environment. Docker's future lies in enhanced cloud integration,
            heightened security, and optimized resource utilization. It
            continues to be A pivotal force in modern application deployment,
            ensuring consistency across diverse environments while adapting to
            evolving industry demands.
          </p>
          <div className="features">
            <div className="likes">
              <p>10</p>
              <img src={likeImage} />
            </div>
            <div className="likes">
              <p>10</p>
              <img src={commentImage} />
            </div>
          </div>
          <div className="comments">
            <label >Leave a Comment:</label>
            <input
              type="text"
              name="comment"
              id="comment"
              placeholder="type a comment"
            />
          </div>
          <div className="comments-section">
            <div className="commented">
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
            </div>
            <div className="commented">
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
            </div>
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
