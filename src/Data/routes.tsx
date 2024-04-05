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
import Users from "../pages/Users";
import Emails from "../pages/Emails";
import Projects from "../pages/Projects";
import BlogsPage from "../pages/BlogsPage";
import ProtectedRoutes from "../routers/ProtectedRoutes";

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
    path: "/Blog/:id",
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
    element: (
      <ProtectedRoutes>
        <Admin />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/Admin/Users",
    element: (
      <ProtectedRoutes>
        <Users />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/Admin/Emails",
    element: (
      <ProtectedRoutes>
        <Emails />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/Admin/Projects",
    element: (
      <ProtectedRoutes>
        <Projects />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/Admin/Blogs",
    element: (
      <ProtectedRoutes>
        <BlogsPage />
      </ProtectedRoutes>
    ),
  },
  // {
  //   element: <ProtectedRoutes />,
  //   children: [
  //     {
  //       path: "/Admin",
  //       element: <Admin />,
  //     },
  //     {
  //       path: "/Admin/Users",
  //       element: <Users />,
  //     },
  //     {
  //       path: "/Admin/Emails",
  //       element: <Emails />,
  //     },
  //     {
  //       path: "/Admin/Projects",
  //       element: <Projects />,
  //     },
  //     {
  //       path: "/Admin/Blogs",
  //       element: <BlogsPage />,
  //     },
  //   ],
  // },
];
