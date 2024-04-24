import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button, Input } from "components";
import Header from "../../components/Header";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [coverImg, setCoverImg] = useState(null);

  const publishArticleHandler = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("article", article);
      formData.append("coverImg", coverImg);

      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      };

      const res = await axios.post(
        "http://localhost:3002/api/articles/post",
        // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjI4ZTllNmE2ODQyMGJlZjBmMjliNTgiLCJlbWFpbCI6ImFydmluZDExQGdtYWlsLmNvbSIsImlhdCI6MTcxMzk1NzQwMiwiZXhwIjoxNzE0MDQzODAyfQ.-LaHI6nFGHXnOXYlidS9htuzM5crDCBXpE0MlREEgDQ
        formData,
        config
      );

      Swal.fire({
        icon: "success",
        title: res.data.message,
        showConfirmButton: false,
        timer: 1500,
      });

      setArticle("");
      setTitle("");
      setCoverImg(null);
    } catch (error) {
      // Swal.fire({
      //   icon: "error",
      //   title: "Oops...",
      //   // text: error.response.data.message,
      //   text: "Failed to create post",
      // });
      console.log("Erro while posting data...", error)
    }
  };

  return (
    <>
      <Header />
      <div className="w-full">
        <div className="w-[80%] mx-auto my-10 shadow-md rounded-none p-5">
          <div className="flex justify-between items-center w-full">
            <Input
              value={title}
              type="text"
              placeholder="Enter Blog Titile"
              className="my-5 w-[50%] h-[55px] shadow-md text-black-900 py-3 px-2 "
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                setCoverImg(file);
              }}
              className="my-3 w-[19.5%] h-[55px] shadow-md text-black-900 border-2 rounded-md py-3 px-2"
            />
            <select
              name=""
              id=""
              className="w-[12%] border-2 h-[55px] rounded-md py-3 px-2"
            >
              <option value="General">Category</option>
              <option value="Writing">Writing</option>
              <option value="Working">Working</option>
              <option value="Podcaster">Podcaster</option>
            </select>
            <Button
              onClick={publishArticleHandler}
              className="w-[12%] h-[55px] bg-indigo-900_01 text-white-A700  rounded-md py-2"
            >
              Publish
            </Button>
          </div>
          <Editor
            initialValue={article}
            apiKey="2efl4dtjvnasw6h9feh6y2frafq9ju50jv4okd6prf52poch"
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
            }}
            onEditorChange={(value) => {
              setArticle(value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
