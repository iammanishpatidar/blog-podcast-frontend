import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Heading, Img } from ".";
import SignIn from "./SignIn";

const index = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  return (
    <header className=" flex flex-row justify-between items-center w-full p-6 bg-white-A700">
      <div className="flex flex-row justify-between items-center w-[65%] ml-[139px]">
        <Img src="images/img_group_150.svg" alt="image" className="h-6" />
        <div className="flex flex-row justify-between items-center w-[68%]">
          <div className="flex flex-col items-center justify-start w-[13%] gap-0.5">
            <Link to={"/"}>
              <Heading
                as="h6"
                className="!text-indigo-900_01 tracking-[0.12px] text-center cursor-pointer"
              >
                Home
              </Heading>
            </Link>
            <div className="h-px w-full bg-indigo-900_01" />
          </div>
          <Link to={"/podcasts"}>
            <Heading
              as="h6"
              className="!text-indigo-200_01 tracking-[0.12px] text-center cursor-pointer"
            >
              Podcast
            </Heading>
          </Link>
          <Link to={"/blogs"}>
            <Heading
              as="h6"
              className="!text-indigo-200_01 tracking-[0.12px] text-center cursor-pointer"
            >
              Blog
            </Heading>
          </Link>
          <Link to={"/about"}>
            <Heading
              as="h6"
              className="!text-indigo-200_01 tracking-[0.12px] text-center cursor-pointer"
            >
              About
            </Heading>
          </Link>
          <Link to={"/new-post"}>
            <Heading
              as="h6"
              className="!text-indigo-200_01 tracking-[0.12px] text-center cursor-pointer"
            >
              New Post
            </Heading>
          </Link>
          <Link to={"/contactus"}>
            <Heading
              as="h6"
              className="!text-indigo-200_01 tracking-[0.12px] text-center cursor-pointer"
            >
              Contact
            </Heading>
          </Link>
        </div>
      </div>
      {/* <Img src="images/img_search.svg" alt="search_one" className="h-[30px] w-[30px] mr-[139px] cursor-pointer" /> */}
      <Button
        onClick={() => {
          setShowSignIn(true);
        }}
        className="bg-indigo-900_01 cursor-pointer mr-[7rem] !text-white-A700 px-3 rounded-[10px] flex items-center justify-center text-center cursor-pointer h-[40px] bg-indigo-900_01"
      >
        Sign In
      </Button>
      {showSignIn ? <SignIn setShowSignIn={setShowSignIn} /> : ""}
    </header>
  );
};

export default index;
