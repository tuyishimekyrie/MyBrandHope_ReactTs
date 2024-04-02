import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../styles/sections/Home.css";
import "../styles/sections/Contact.css";
import Map from "../assets/map.png"

export const Contact = () => {
  return (
    <div className="Home App">
      <Header />
      <div className="contact">
        <div className="content">
          <h2>
            Let's <span className="connect">Connect</span> and Create
            <span className="together">Together</span>
          </h2>
          <p>
            Reach out and let's start a conversation! Whether you have a project
            in mind, a question to ask, or just want to connect, I'm here. Drop
            a message below, and let's turn your ideas into reality.
          </p>
          <div className="address">
            <p>Email: tuyishimehope01@gmail.com</p>
            <p>Address: kigali, Rwanda</p>
          </div>
          <form className="form">
            <div>
              <label>Email</label>
              <input
                type="text"
                id="email"
                placeholder="Type your Email"
                required
              />
            </div>
            <div>
              <label>Message</label>
              <textarea
                placeholder="Type your Message"
                id="message"
                required
              ></textarea>

              <span className="error"></span>
            </div>
            <button className="btn-submit">submit</button>
          </form>
        </div>
        <div className="location">
          <img src={Map} alt="" className="imgs" />
        </div>
      </div>
      <Footer />
    </div>
  );
};
