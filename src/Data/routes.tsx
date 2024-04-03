import App from "../App";
import { About } from "../pages/About";
import { Blog } from "../pages/Blog";
import { Blogs } from "../pages/Blogs";
import { Contact } from "../pages/Contact";
import Error from "../pages/Error";
import { Home } from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Portfolio } from "../pages/Portfolio";
import Admin from "../pages/Admin";
import { Children } from "react";
import Users from "../pages/Users";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Portfolio",
    element: <Portfolio />,
  },
  {
    path: "/Blogs",
    element: <Blogs />,
  },
  {
    path: "/Blog",
    element: <Blog />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Admin/",
    element: <Admin />,
  },
  {
    path: "/Admin/Users",
    element: <Users />,
  },
];