import React, { useState, useEffect } from "react";
import "./ProductItem.css";
import { ProductItem } from "./ProductItem";
import { getApiDetails, postApiDetails } from "../Services/apiServices";
import { Button, Modal } from "react-bootstrap";

export const ProductList = () => {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [category, setCategory] = useState();
  const [showPostModal, setShowPostModal] = useState(false);
  const [data, setData] = useState([]);
  // Fetching data from api
  const getProducts = async () => {
    // const result = await axios.get("http://localhost:3000/products");
    //api calling usnig api services
    const result = await getApiDetails("products");
    setData(result.data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  // Handling the image uploads
  const handleImageUpload = (e) => {
    if (window.FileReader) {
      let file = e.target.files[0],
        reader = new FileReader();

      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
      setImage(reader);
    } else {
      alert("Soryy, your browser does'nt support for preview");
    }
  };
  // dispatching the post request
  const submitProducts = async () => {
    const request = {
      title: title,
      price: price,
      description: description,
      // image:
      //   "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      image: image,
      category: category,
    };
    //api calling usnig api services
    await postApiDetails(request);
    window.location.reload();
  };

  return (
    <>
      <div className="m-2">
        <Button onClick={() => setShowPostModal(!showPostModal)}>
          Add Details
        </Button>
      </div>
      <div style={{ display: "flex" }}>
        {data.map((items) => {
          return (
            <div key={items.id}>
              <ProductItem items={items} />
            </div>
          );
        })}
      </div>

      <Modal
        show={showPostModal}
        onHide={() => setShowPostModal(false)}
        size="lg"
        style={{ textAlign: "center" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
              maxLength={5}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <br />
            <input
              type="text"
              name="description"
              placeholder="Description"
              maxLength={25}
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <br />
            <input
              type="text"
              name="category"
              placeholder="Category"
              maxLength={25}
              onChange={(e) => setCategory(e.target.value)}
            />
            <br />
            <br />
            <input type="file" name="image" onChange={handleImageUpload} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={submitProducts}>Post Details</Button>
          <Button variant="secondary" onClick={() => setShowPostModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
