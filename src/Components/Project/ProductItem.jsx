import React from "react";

export const ProductItem = (props) => {
  console.log("props==>", props.items);
  return (
    <div className="prodItem">
      <h4>{props.items.title}</h4>
      <img
        src={props.items.image}
        alt="productImage"
        width="200px"
        height="300px"
      />
      <p>{props.items.price}</p>
      <p>{props.items.description}</p>
    </div>
  );
};
