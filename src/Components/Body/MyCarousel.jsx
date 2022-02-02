import React from "react";
import { Carousel } from "react-bootstrap";
import { MyCarouselData } from "../Reducers/MyCarouselData";
const MyCarousel = () => {
  return (
    <div>
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
                <h3>{elements.carouselTitle}</h3>
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
