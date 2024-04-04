import { Link, useNavigate } from "react-router-dom";
import "../styles/sections/Login.css";
import "../styles/sections/Register.css";
import { SubmitHandler, useForm } from "react-hook-form";
type Inputs = {
  email: string;
  names: string;
  password: string;
  confirmpassword: string;
};

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const requestBody = JSON.stringify({
        email: data.email,
        names: data.names,
        password: data.password,
        confirmpassword: data.confirmpassword,
      });
      const response = await fetch(
        "https://mybrandbackend-q8gq.onrender.com/api/users/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: requestBody,
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      navigate("/login");
      reset();
    } catch (error) {
      console.error("Error:", error);
    }
  };
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
        <form className="formRegister" onSubmit={handleSubmit(onSubmit)}>
          <div className="inputs">
            <label>Email</label>
            <input
              type="email"
              //   name="email"
              id="email"
              placeholder="Enter your Email"
              {...register("email")}
            />
          </div>
          <div className="inputs">
            <label>Names</label>
            <input
              type="text"
              //   name="names"
              id="names"
              placeholder="Enter your Names"
              {...register("names")}
            />
          </div>
          <div className="inputs">
            <label>Password</label>
            <input
              type="password"
              //   name="password"
              id="password"
              placeholder="Enter your password"
              {...register("password")}
            />
          </div>
          <div className="inputs">
            <label>confirm-password</label>
            <input
              type="password"
              //   name="confirm-password"
              id="confirm-password"
              placeholder="Enter your password"
              {...register("confirmpassword")}
            />
          </div>
          <div className="error"></div>
          <div className="btns">
            <button className="button">Sign Up</button>
            <button className="registerGoogle">
              <img src="../assests/Google.png" alt="" />
              Sign Up with Google
            </button>
          </div>
        </form>
        <p>
          Already have an account?{" "}
          <Link className="reg" to="/Login">
            <span>Sign in</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
