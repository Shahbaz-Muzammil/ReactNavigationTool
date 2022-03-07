import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { putApiDetails } from "../Services/apiServices";
import { deleteApiDetails } from "../Services/apiServices";
export const ProductItem = (props) => {
  console.log(props.items);
  const [show, setShow] = useState(false);
  const [editEmpName, setEditEmpName] = useState("");
  const [editEmpSalary, setEditEmpSalary] = useState("");
  const [editEmpAge, setEditEmpAge] = useState("");
  const [editEmpImage, setEditEmpImage] = useState("");

  const handleEdit = () => {
    setShow(true);
    setEditEmpName(props.items.title);
    setEditEmpSalary(props.items.price);
    setEditEmpAge(props.items.description);
    // setEditEmpImage(props.items.category);
  };

  const updateDetails = async (id) => {
    const request = {
      employee_name: editEmpName,
      employee_salary: editEmpSalary,
      employee_age: editEmpAge,
      profile_image: editEmpImage,
    };
    await putApiDetails(id, request);
    window.location.reload();
  };

  const handleDelete = async (id) => {
    await deleteApiDetails(id);
    window.location.reload();
  };
  const handleImageUpload = (e) => {
    if (window.FileReader) {
      let file = e.target.files[0],
        reader = new FileReader();

      reader.onload = (event) => {
        setEditEmpImage(event.target.result);
      };
      reader.readAsDataURL(file);
      setEditEmpImage(reader);
    } else {
      alert("Soryy, your browser does'nt support for preview");
    }
  };
  return (
    <div>
      <Card style={{ width: "18rem", height: "30rem", overflow: "hidden" }}>
        <Card.Title>
          <h4>Employee Name: {props.items.employee_name}</h4>
        </Card.Title>
        <Card.Body>
          <img
            src={props.items.profile_image}
            alt="EmpPicture"
            style={{ width: "15rem", height: "15rem" }}
          />
          <p>Employee Age: {props.items.employee_age}</p>
          <p>Employee Salary: {props.items.employee_salary} &#8377;</p>
          <button className="m-2" onClick={() => handleEdit(props.items.id)}>
            Edit
          </button>
          <button className="m-2" onClick={() => handleDelete(props.items.id)}>
            Delete
          </button>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        style={{ textAlign: "center" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <input
            type="text"
            name="name"
            placeholder="Edit Emp Name"
            value={editEmpName}
            onChange={(e) => setEditEmpName(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            name="salary"
            placeholder="Edit Emp Salary"
            value={editEmpSalary}
            onChange={(e) => setEditEmpSalary(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            name="age"
            placeholder="Edit Emp Age"
            value={editEmpAge}
            onChange={(e) => setEditEmpAge(e.target.value)}
          />
          <br />
          <br />
          {/* <input
            type="file"
            name="image"
            placeholder="Edit Emp Image"
            value={editEmpAge}
            onChange={handleImageUpload}
          />
          <br /> */}
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
