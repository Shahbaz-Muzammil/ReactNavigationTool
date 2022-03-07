import React, { useState, useEffect } from "react";
import "./ProductItem.css";
import { ProductItem } from "./ProductItem";
import { getApiDetails, postApiDetails } from "../Services/apiServices";
import { Button, Modal } from "react-bootstrap";

export const ProductList = () => {
  const [empName, setEmpName] = useState();
  const [empImage, setEmpImage] = useState();
  const [empSalary, setEmpSalary] = useState();
  const [empAge, setEmpAge] = useState();
  const [showPostModal, setShowPostModal] = useState(false);
  const [data, setData] = useState([]);
  // Fetching data from api
  const getProducts = async () => {
    //api calling usnig api services
    const result = await getApiDetails("products");
    setData(result.data);
    console.log("data==>", result.data);
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
        setEmpImage(event.target.result);
      };
      reader.readAsDataURL(file);
      setEmpImage(reader);
    } else {
      alert("Soryy, your browser does'nt support for preview");
    }
  };
  // dispatching the post request
  const submitProducts = async () => {
    const request = {
      employee_name: empName,
      employee_salary: empSalary,
      employee_age: empAge,
      profile_image: empImage,
    };
    //api calling usnig api services
    await postApiDetails(request);
    window.location.reload();
  };

  return (
    <>
      <div className="m-2">
        <Button onClick={() => setShowPostModal(!showPostModal)}>
          Add Employee
        </Button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
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
              name="name"
              placeholder="Employee Name"
              onChange={(e) => setEmpName(e.target.value)}
            />
            <br />
            <br />
            <input
              type="text"
              name="salary"
              placeholder="Employee Salary"
              maxLength={5}
              onChange={(e) => setEmpAge(e.target.value)}
            />
            <br />
            <br />
            <input
              type="text"
              name="age"
              placeholder="Employee Age"
              maxLength={25}
              onChange={(e) => setEmpSalary(e.target.value)}
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
