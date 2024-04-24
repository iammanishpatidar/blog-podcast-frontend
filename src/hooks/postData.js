import axios from "axios";
import { useEffect, useState } from "react";

export const usePostData = () => {
  const [response, setResponse] = useState(null);
  const [err, setErr] = useState(null);

  const postData = async (url, formData) => {
    try {
      const res = await axios.post(
        `http://localhost:3000/api/users/${url}`,
        formData
      );
      setResponse(res.data);
    } catch (error) {
      setErr(error);
    }
  };
  return { response, err, postData };
};
