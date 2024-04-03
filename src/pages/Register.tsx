import { Link } from "react-router-dom";
import "../styles/sections/Login.css";
import "../styles/sections/Register.css";

const Register = () => {
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
        <h1>Sign Up</h1>
        <form className="formRegister">
          <div className="inputs">
            <label >Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
              
    
            />
          </div>
          <div className="inputs">
            <label >Names</label>
            <input
              type="text"
              name="names"
              id="names"
              placeholder="Enter your Names"
            />
          </div>
          <div className="inputs">
            <label >Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="inputs">
            <label >confirm-password</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Enter your password"
            />
          </div>
          <div className="error"></div>
          <div className="btns">
           <Link to={"/"} className="button">Sign Up</Link>
            <button className="registerGoogle">
              <img src="../assests/Google.png" alt="" />
              Sign Up with Google
            </button>
          </div>
        </form>
        <p>Already have an account? <Link  className="reg" to="/Login"><span>Sign in</span></Link></p>
      </div>
    </div>
  );
};

export default Register;
