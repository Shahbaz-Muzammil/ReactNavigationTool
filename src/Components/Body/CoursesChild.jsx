import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
const CoursesChild = () => {
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const dispatch = useDispatch();
  const handleDispatch = () => {
    const data = {
      title: title,
      desc: description,
      img: image,
    };
    dispatch({
      type: "ADD_COURSES",
      data,
    });
  };
  return (
    <div>
      <input
        type="text"
        id="html"
        className="mt-2"
        placeholder="Add Course Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        id="css"
        className="mt-2"
        placeholder="Add Course Image"
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        id="react"
        className="mt-2"
        placeholder="Add Course Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="mt-2" onClick={handleDispatch}>
        Add New Course
      </button>
    </div>
  );
};

export default CoursesChild;
