import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";
import MyCarouselChild from "./MyCarouselChild";
const MyCarousel = () => {
  const [carouselData, setCarouselData] = useState([]);
  const myCarousel = useSelector((state) => state.carouselReducer.myCarousel);
  useEffect(() => {
    setCarouselData(myCarousel);
  }, [myCarousel]);
  return (
    <div>
      <Carousel>
        {carouselData.map((itemCurrent) => {
          return (
            <Carousel.Item interval={100}>
              <img
                className="d-block w-100"
                src={itemCurrent.carouselImg}
                alt="First slide"
                style={{ height: "500px" }}
              />
              <Carousel.Caption>
                <h3>{itemCurrent.carouselTitle}</h3>
                <p>{itemCurrent.carouselDescription}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
