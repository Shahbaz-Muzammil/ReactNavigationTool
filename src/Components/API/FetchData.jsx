import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const FetchData = () => {
  const [apiData, setApiData] = useState([]);
  const getPosts = async () => {
    const result = await axios.get("http://localhost:3000/kuchbhi");
    console.log(result.data);
    setApiData(result.data);
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      {apiData.map((items) => {
        return (
          <div>
            <h1>{items.title}</h1>
            <p>{items.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FetchData;
