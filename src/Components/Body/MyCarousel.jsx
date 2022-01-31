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
        {/* <Carousel.Item interval={100}>
          <img
            className="d-block w-100"
            src={""}
            alt="First slide"
            style={{ height: "500px" }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
        {/* <Carousel.Item interval={100}>
          <img
            className="d-block w-100"
            src={""}
            alt="Second slide"
            style={{ height: "500px" }}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={100}>
          <img
            className="d-block w-100"
            src={""}
            alt="Third slide"
            style={{ height: "500px" }}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
