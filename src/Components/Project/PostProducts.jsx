// Note:- JSON Server
// Installation:- npm install -g json-server
// Start Server:- json-server --watch db.json (It will on localhost:3000)
// Now you have to change your react localhost to something else like 3001:- package.json==> "start": "set PORT=3001 && react-scripts start"
import React, { useState } from "react";
import axios from "axios";

const PostProducts = () => {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  // const [image, setImage] = useState();
  const [category, setCategory] = useState();

  const submitProducts = () => {
    const request = {
      title: title,
      price: price,
      description: description,
      image:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      //   image: image,
      category: category,
    };
    axios
      .post("http://localhost:3000/products", request)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        name="price"
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        name="description"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <br />
      {/* <input
        type="file"
        name="image"
        onChange={(e) => setImage(e.target.value)}
      /> */}
      <br />
      <br />
      <input
        type="text"
        name="category"
        placeholder="Category"
        onChange={(e) => setCategory(e.target.value)}
      />
      <br />
      <br />
      <button onClick={submitProducts}>Add Details</button>
    </div>
  );
};

export default PostProducts;
