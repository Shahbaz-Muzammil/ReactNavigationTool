import React from "react";
import { useState } from "react";
import axios from "axios";
const PostData = () => {
  const [userId, setUserId] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const postDetails = () => {
    const request = { userId, title, body };
    axios.post("http://localhost:3000/kuchbhi", request);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="userId"
        onChange={(e) => setUserId(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="body"
        onChange={(e) => setBody(e.target.value)}
      />
      <br />
      <button onClick={postDetails}>Post Deatails</button>
    </div>
  );
};

export default PostData;
