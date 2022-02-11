import React, { useEffect, useState } from "react";
import "./Navigation.css";
import { useSelector, useDispatch } from "react-redux";
import { NavigationAction } from "../State/Actions/NavigationAction";
export const Navigation = () => {
  const [navData, setNavData] = useState([]);
  const [name, setName] = useState();
  const [link, setLink] = useState();
  const [target, setTarget] = useState();

  const finalResult = useSelector((state) => state.navReducer.navData);
  useEffect(() => {
    setNavData(finalResult);
  }, [finalResult]);

  const dispatch = useDispatch();
  const handleAddLink = () => {
    dispatch({ type: "ADD_NAV_LINk", navData: { name, link, target } });
    // OR
    // dispatch(NavigationAction(name, link, target));
  };
  return (
    <div>
      <nav>
        {navData.map((elemnets) => {
          return (
            <a href={elemnets.link} target={elemnets.target}>
              {elemnets.name}
            </a>
          );
        })}
      </nav>
      <div style={{ float: "right", margin: "15px" }}>
        <input
          className="m-2"
          type="text"
          placeholder="Add New Link Name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className="m-2"
          type="text"
          placeholder="Add New Link URL"
          onChange={(e) => setLink(e.target.value)}
        />
        <input
          className="m-2"
          type="text"
          placeholder="Add New Link Target"
          onChange={(e) => setTarget(e.target.value)}
        />
        <button onClick={handleAddLink}>Add Link</button>
      </div>
    </div>
  );
};
