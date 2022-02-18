import React, { useState } from "react";
import { useDispatch } from "react-redux";
const MyCarouselChild = () => {
  const [carouselImg, setCarouselImg] = useState();
  const [carouselTitle, setCarouselTitle] = useState();
  const [carouselDescription, setCarouselDescription] = useState();
  const myDispatch = useDispatch();
  const dispatchHandler = () => {
    if (!carouselImg && !carouselTitle && !carouselDescription) {
      alert("Please fill required field");
    } else if (!carouselImg) {
      alert("Please fill image");
    } else if (!carouselTitle) {
      alert("Please fill Title");
    } else if (!carouselDescription) {
      alert("Please fill Description");
    } else {
      myDispatch({
        type: "ADD_CAROUSEL",
        data: { carouselImg, carouselTitle, carouselDescription },
      });
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="dispatch image url here"
        className="m-2"
        onChange={(e) => setCarouselImg(e.target.value)}
      />
      <input
        type="text"
        placeholder="dispatch title here"
        className="m-2"
        onChange={(e) => setCarouselTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="dispatch desc "
        className="m-2"
        onChange={(e) => setCarouselDescription(e.target.value)}
      />
      <button onClick={dispatchHandler}>Add Carousel</button>
    </div>
  );
};

export default MyCarouselChild;
