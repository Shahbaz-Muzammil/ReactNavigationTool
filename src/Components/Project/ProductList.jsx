import React, { useState, useEffect } from "react";
import "./ProductItem.css";
import { ProductItem } from "./ProductItem";
import axios from "axios";

export const ProductList = () => {
  const [data, setData] = useState([]);
  const getProducts = async () => {
    const result = await axios.get("http://localhost:3000/products");
    setData(result.data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      {data.map((items) => {
        return (
          <div key={items.id}>
            <ProductItem items={items} />
          </div>
        );
      })}
    </div>
  );
};
