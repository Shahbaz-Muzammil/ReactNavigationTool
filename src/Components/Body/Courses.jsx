import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import CoursesChild from "./CoursesChild";
const Courses = () => {
  const [courseData, setCourseData] = useState([]);
  const result = useSelector((state) => state.coursesReducer.courses);

  useEffect(() => {
    setCourseData(result);
  }, [result]);
  return (
    <div>
      {courseData.map((item) => {
        return (
          <Card style={{ width: "18rem", display: "inline-block" }}>
            <Card.Header>{item.title}</Card.Header>
            <Card.Body>
              <img
                src={item.img}
                alt="courseImage"
                width={"250px"}
                height="250px"
              />
            </Card.Body>
            <Card.Footer>{item.desc.slice(0, 30) + "..."}</Card.Footer>
          </Card>
        );
      })}
      <CoursesChild />
    </div>
  );
};

export default Courses;
