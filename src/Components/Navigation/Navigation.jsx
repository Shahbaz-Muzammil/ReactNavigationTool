import React, { useEffect, useState } from "react";
import "./Navigation.css";
import { useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import NavigationChild from "./NavigationChild";
import MyCarouselChild from "../Body/MyCarouselChild";
import CoursesChild from "../Body/CoursesChild";
import OurMentorsChild from "../Body/CoursesChild";
export const Navigation = () => {
  const [navData, setNavData] = useState([]);
  const [show, setShow] = useState(false);
  const finalResult = useSelector((state) => state.navReducer.navData);
  useEffect(() => {
    setNavData(finalResult);
  }, [finalResult]);
  return (
    <div>
      <nav>
        {navData.map((elemnets) => {
          return (
            <a
              href={elemnets.link}
              target={elemnets.target}
              className="myAnchor"
            >
              {elemnets.name}
            </a>
          );
        })}
      </nav>

      <Button onClick={() => setShow(true)}>Dashboard</Button>
      {/* Modal Start From Here */}

      <Modal show={show} onHide={() => setShow(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>DASHBOARD</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Add Navigations</h4>
          <NavigationChild />
          <h4>Add Carousels</h4>
          <MyCarouselChild />
          <h4>Add Courses</h4>
          <CoursesChild />
          <h4>Add Mentors</h4>
          <OurMentorsChild />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
