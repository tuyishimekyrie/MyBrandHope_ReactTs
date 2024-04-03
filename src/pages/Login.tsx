import { Link } from "react-router-dom";
import "../styles/sections/Login.css";
import "../styles/sections/Register.css";

const Login = () => {
  return (
    <div className="container">
      <div className="container-quote">
        <div className="line">
          <h1>A wise Quote</h1>
          {/* <!-- <img src="../assests/Line 8.png" alt=""> --> */}
        </div>
        <div>
          <h1>Get Everything You Want</h1>
          <p>
            You can get anything you want , if you work hard. Trust the process
            , and stick to the plan
          </p>
        </div>
      </div>
      <div className="container-register">
        <h1>Sign In</h1>
        <form className="formLogin">
          <div className="inputs">
            <label>Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your Email"
            />
          </div>

          <div className="inputs">
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <a href="./forgot.html" className="button pass">
            Forget Password ?
          </a>
          <div className="message"></div>
          <div className="btns">
            <a href="" className="button">
              Sign In
            </a>
            <button className="registerGoogle">
              <img src="../assests/Google.png" alt="" />
              Sign In with Google
            </button>
          </div>
        </form>
        <p>
          Log in as admin{" "}
          <Link className="reg" to="/adminLogin">
            <span>Sign in</span>
          </Link>
        </p>
        <p>
          Don't have an account{" "}
          <Link className="reg" to="/Register">
            <span>Sign Up</span>
          </Link>
        </p>
        <p>
          Go Back to the Homepage{" "}
          <Link className="reg" to="/Home">
            <span>Home</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
