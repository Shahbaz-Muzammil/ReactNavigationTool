import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const Testing = () => {
  const [heading, setHeading] = useState();
  const [desc, setDesc] = useState();
  const [data, setData] = useState([]);
  const testingResult = useSelector((state) => state.testReducer.test);
  console.log(testingResult);
  useEffect(() => {
    setData(testingResult);
  }, [testingResult]);
  const dispatch = useDispatch();
  const handleDispatch = () => {
    dispatch({ type: "ADD_TEST", data: { heading, desc } });
  };
  return (
    <div>
      <h1>
        I want to fetch data from redux store
        {data.map((item) => {
          return (
            <div>
              <h1>{item.heading}</h1>
              <h1>{item.desc}</h1>
            </div>
          );
        })}
      </h1>
      <input
        type="text"
        placeholder="send heading from here"
        className="m-2"
        onChange={(e) => setHeading(e.target.value)}
      />
      <input
        type="text"
        placeholder="send description from here"
        className="m-2"
        onChange={(e) => setDesc(e.target.value)}
      />
      <button onClick={handleDispatch}>dispatch</button>
    </div>
  );
};

export default Testing;
