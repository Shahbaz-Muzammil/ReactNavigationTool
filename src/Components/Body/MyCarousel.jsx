import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { MyCarouselData } from "../Reducers/MyCarouselData";
const MyCarousel = () => {
  const [data, setData] = useState(1);
  const [text, setText] = useState("abx");
  useEffect(() => {
    console.log("useEffect");
  }, [data]);

  return (
    <div>
      {text}
      <Carousel>
        {MyCarouselData.map((elements) => {
          return (
            <Carousel.Item interval={100} key={elements.id}>
              <img
                className="d-block w-100"
                src={elements.carouselImg}
                alt="First slide"
                style={{ height: "500px" }}
              />
              <Carousel.Caption>
                <h3 onClick={() => setText("xyz")}>{elements.carouselTitle}</h3>
                <p>{elements.carouselDescription}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
