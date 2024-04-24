import React, { useEffect, useState } from "react";
import Header from "../Header";
import BlogList from "../../components/Blogs/BlogList";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const getAllBlogs = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/articles/all-articles"
      );
      setBlogs(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, [blogs]);

  return (
    <div>
      <Header />
      {/* <BlogList /> */}

      <div className="flex justify-between w-[85%] mx-auto flex-wrap">
        {blogs.map((blog) => {
          return (
            <div className="w-[31%] shadow-md rounded-md mx-3 my-3">
              <div className="w-full rounded-md">
                <img src={blog.coverImg} alt="" className="w-full rounded-md" />
              </div>
              <div className="my-3 px-3 mx-auto">
                <h2 className="">{blog.title}</h2>
                <p className="">{blog.article}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
