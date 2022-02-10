import React, { useEffect, useState } from "react";
import "./Navigation.css";
import { useSelector } from "react-redux";
export const Navigation = () => {
  const [nanData, setNavData] = useState([]);
  const finalResult = useSelector((state) => state.navReducer.navData);
  useEffect(() => {
    setNavData(finalResult);
  }, [finalResult]);
  return (
    <div>
      <nav>
        {nanData.map((elemnets) => {
          return (
            <a href={elemnets.link} target={elemnets.target}>
              {elemnets.name}
            </a>
          );
        })}
      </nav>
    </div>
  );
};
