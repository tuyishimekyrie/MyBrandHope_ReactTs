import { Link, useNavigate } from "react-router-dom";
import "../styles/sections/Login.css";
import "../styles/sections/Register.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../state/auth/auth";
type Inputs = {
  email: string;
  password: string;
};
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isLoading },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const requestBody = JSON.stringify({
        email: data.email,
        password: data.password,
      });
      const response = await fetch(
        "https://mybrandbackend-q8gq.onrender.com/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: requestBody,
        }
      );
      const responseData = await response.json();
      console.log(responseData.isAdmin);
      if (response.ok) {
        dispatch(login(responseData));
        // localStorage.setItem("token-admin", JSON.stringify(responseData));
      }
      if (responseData.isAdmin) {
        console.log("Admin Logged in");
        navigate("/Admin");
        return;
      } else {
        navigate("/");
      }
      reset();
    } catch (error) {
      console.error("Error:", error);
    }
  };
  console.log(isLoading);
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
        <form className="formLogin" onSubmit={handleSubmit(onSubmit)}>
          <div className="inputs">
            <label>Email</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your Email"
              {...register("email")}
            />
          </div>

          <div className="inputs">
            <label>Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              {...register("password")}
            />
          </div>
          <Link to="./forgot.html" className="buttons pass">
            Forget Password ?
          </Link>
          <div className="message"></div>
          <div className="btns">
            <button className="button" disabled={isLoading}>
              {isLoading ? "Sending Data...." : "Sign In"}
            </button>
            <button className="registerGoogle">
              <img src="../assests/Google.png" alt="" />
              Sign In with Google
            </button>
          </div>
        </form>
        {/* <p>
          Log in as admin{" "}
          <Link className="reg" to="/adminLogin">
            <span>Sign in</span>
          </Link>
        </p> */}
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
