import React from "react";
import { useRoutes } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import ContactUs from "pages/ContactUs";
import BloggerDetails from "pages/BloggerDetails";
import Home from "./components/Home";
import NotFound from "./pages/NotFound";
import BlogDetails from "components/BlogDetails";
import Blogs from "components/Blogs/Blogs";
import CreateBlog from "pages/createBlog/CreateBlog";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/blogs",
      element: <Blogs />,
    },
    {
      path: "blogdetails",
      element: <BlogDetails />,
    },
    {
      path: "contactus",
      element: <ContactUs />,
    },
    {
      path: "bloggerdetails",
      element: <BloggerDetails />,
    },
    {
      path: "new-post",
      element: <CreateBlog />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
