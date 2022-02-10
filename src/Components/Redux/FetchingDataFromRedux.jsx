import React from "react";
import { useSelector } from "react-redux";
const FetchingDataFromRedux = () => {
  const selector = useSelector((state) => state.sampleReducer.myState);
  return (
    <div>
      {selector.map((itemCurrent) => {
        return (
          <div key={itemCurrent.id}>
            <h3>Name:{itemCurrent.name}</h3>
            <img
              src={itemCurrent.image}
              alt="redux"
              style={{ width: "18rem" }}
            />
            <p>Desc:{itemCurrent.desc}</p>
          </div>
        );
      })}
    </div>
  );
};
export default FetchingDataFromRedux;
