import axios from "axios";
import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
export const ProductItem = (props) => {
  const [show, setShow] = useState(false);
  const [editTitle, setEditTitle] = useState();
  const [editPrice, setEditPrice] = useState();
  const [editDesc, setEditDesc] = useState();
  const [editCateg, setEditCateg] = useState();

  const handleEdit = (itemId) => {
    setShow(true);
    console.log("itemId==>", itemId);
    setEditTitle(props.items.title);
    setEditPrice(props.items.price);
    setEditDesc(props.items.description);
    setEditCateg(props.items.category);
  };

  const updateDetails = (userId) => {
    const request = {
      title: editTitle,
      price: editPrice,
      description: editDesc,
      category: editCateg,
      image:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    };
    axios.put(`http://localhost:3000/products/${userId}`, request);
  };
  return (
    <div>
      <Card style={{ width: "18rem", height: "22rem" }}>
        <Card.Title>
          <h4>{props.items.title}</h4>
        </Card.Title>
        <Card.Body>
          <img
            src={props.items.image}
            alt="productImage"
            style={{ width: "15rem" }}
          />
          <p>{props.items.price}</p>
          <p>{props.items.description}</p>
          <button onClick={() => handleEdit(props.items.id)}>Edit</button>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        style={{ textAlign: "center" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <input
            type="text"
            name="title"
            placeholder="Edit Title"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            name="price"
            placeholder="Edit Price"
            value={editPrice}
            onChange={(e) => setEditPrice(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            name="description"
            placeholder="Edit Description"
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            name="category"
            placeholder="Edit Category"
            value={editCateg}
            onChange={(e) => setEditCateg(e.target.value)}
          />
          <br />
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => updateDetails(props.items.id)}>
            Update Details
          </Button>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
