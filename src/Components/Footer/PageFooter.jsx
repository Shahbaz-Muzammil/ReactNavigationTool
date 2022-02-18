import React from "react";
import "./PageFooter.css";
import { useSelector } from "react-redux";

const PageFooter = () => {
  const footerDataOne = useSelector((state) => state.footerReducer.arrOne);
  const footerDataTwo = useSelector((state) => state.footerReducer.arrTwo);
  const footerDataThree = useSelector((state) => state.footerReducer.arrThree);
  console.log(footerDataOne);
  return (
    <div className="mainDiv">
      <div>
        <img
          src="https://wallpaperaccess.com/full/314784.jpg"
          alt="footerImage"
          width={"100%"}
          height="250px"
        />
      </div>
      <div
        style={{
          position: "absolute",
          float: "right",
          backgroundColor: "gray",
        }}
      >
        <div
          style={{ display: "inline-block", marginRight: "100px" }}
          className="ml-2"
        >
          {footerDataOne.map((item) => {
            return (
              <>
                <a href={item.link} target={item.target}>
                  {item.title}
                </a>
                <br />
              </>
            );
          })}
        </div>
        <div
          style={{ display: "inline-block", marginRight: "100px" }}
          className="ml-2"
        >
          {footerDataTwo.map((item) => {
            return (
              <>
                <a href={item.link} target={item.target}>
                  {item.title}
                </a>
                <br />
              </>
            );
          })}
        </div>
        <div style={{ display: "inline-block" }} className="ml-2">
          {footerDataThree.map((item) => {
            return (
              <>
                <a href={item.link} target={item.target}>
                  {item.title}
                </a>
                <br />
              </>
            );
          })}
        </div>
      </div>
      <small style={{ color: "white", marginTop: "200px" }}>
        Copy Right Reserved PDAC
      </small>
    </div>
  );
};

export default PageFooter;
