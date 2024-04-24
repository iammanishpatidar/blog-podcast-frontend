import React, { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { usePostData } from "hooks/postData";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Cookies from "js-cookie";

const SignIn = ({ setShowSignIn }) => {
  const [formState, setFormState] = useState("Sign In");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/api/users/register", {
        firstName,
        lastName,
        email,
        password,
      });

      Cookies.set("accessToken", res.data.data.accessToken);

      Swal.fire({
        icon: "success",
        title: res.data.message,
        showConfirmButton: false,
        timer: 1500,
      });

      setfirstName("");
      setlastName("");
      setEmail("");
      setPassword("");

      setShowSignIn(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };

  const signInHandler = async (e) => {
    e.preventDefault();
    let userData = {
      email,
      password,
    };

    try {
      const res = await axios.post(
        "http://localhost:3002/api/users/login",
        userData
      );
      Cookies.set("accessToken", res.data.data.accessToken);
      Swal.fire({
        icon: "success",
        title: res.data.message,
        showConfirmButton: false,
        timer: 1500,
      });

      setEmail("");
      setPassword("");

      setShowSignIn(false);
    } catch (error) {
      // Swal.fire({
      //   icon: "error",
      //   title: "Oops...",
      //   text: error.response.data.message,
      // });
      console.log("Error in sign in...", error);
    }
  };

  return (
    <>
      <div className="w-[37%] left-1/2 transform -translate-x-1/2 bg-white-A700 p-5 shadow-xl rounded-md absolute inset-x-0 top-[6rem]">
        <h2
          className="text-right text-3xl text-black-900 cursor-pointer"
          onClick={() => {
            setShowSignIn(false);
          }}
        >
          X
        </h2>
        <h2 className="text-center text-2xl font-bold text-indigo-900">
          {formState}
        </h2>
        <div className="p-5 w-full">
          {formState == "Sign Up" ? (
            <div className="px-5 py-3  w-full flex justify-between justify-center ">
              <Input
                value={firstName}
                placeholder="First Name"
                className="w-[48%] h-[45px] text-base text-black-900"
                onChange={(e) => {
                  setfirstName(e.target.value);
                }}
              />
              <Input
                value={lastName}
                placeholder="Last Name"
                className="w-[48%] h-[45px] text-base text-black-900"
                onChange={(e) => {
                  setlastName(e.target.value);
                }}
              />
            </div>
          ) : (
            ""
          )}
          <div className="px-5 py-3  w-full">
            <Input
              type="email"
              value={email}
              placeholder="Email"
              className="w-full h-[45px] text-base text-black-900"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="px-5 py-3  w-full">
            <Input
              type="password"
              value={password}
              placeholder="Password"
              className="w-full h-[45px] text-base text-black-900"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="px-5 py-3  w-full">
            {formState == "Sign Up" ? (
              <Button
                className="w-full h-[45px] bg-indigo-900_01 text-white-A700  rounded-md py-2 "
                onClick={signUpHandler}
              >
                Sign Up
              </Button>
            ) : (
              <Button
                className="w-full h-[45px] bg-indigo-900_01 text-white-A700  rounded-md py-2 "
                onClick={signInHandler}
              >
                Sign In
              </Button>
            )}
          </div>

          <div className="w- px-5 py-5 flex align-middle justify-center ">
            <p className="text-sm">
              {formState == "Sign In"
                ? "Don't have an account"
                : "Already have an account"}
            </p>
            {formState == "Sign In" ? (
              <p
                className="text-sm mx-2 text-indigo-900 cursor-pointer"
                onClick={() => {
                  setFormState("Sign Up");
                }}
              >
                Sign Up
              </p>
            ) : (
              <p
                className="text-sm mx-2 text-indigo-900 cursor-pointer"
                onClick={() => {
                  setFormState("Sign In");
                }}
              >
                Sign In
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
