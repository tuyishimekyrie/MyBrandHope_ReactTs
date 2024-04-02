import App from "../App";
import { About } from "../pages/About";
import { Blog } from "../pages/Blog";
import { Blogs } from "../pages/Blogs";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Portfolio } from "../pages/Portfolio";

export const routes = [
  {
    path: "/",
    element: <App />,
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
  }
];