const initialState = {
  myCarousel: [
    {
      id: 1,
      carouselImg: `https://www.tutsmake.com/wp-content/uploads/2021/07/React-Bootstrap-Carousel-Slider.jpg`,
      carouselTitle: `First Slide`,
      carouselDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor neque natus doloremque repudiandae modi eaque nobis id nemo ipsum.`,
    },
    {
      id: 2,
      carouselImg: `https://i.ytimg.com/vi/mxb08zLz0vs/maxresdefault.jpg`,
      carouselTitle: `Second Slide`,
      carouselDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor neque natus doloremque repudiandae modi eaque nobis id nemo ipsum.`,
    },
    {
      id: 3,
      carouselImg: `https://visuallightbox.com/content/data/upload/2018/06/ampslider-7.jpg`,
      carouselTitle: `Third Slide`,
      carouselDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor neque natus doloremque repudiandae modi eaque nobis id nemo ipsum.`,
    },
  ],
};
export const carouselReducer = (state = initialState, action) => {
  // By usning Swicth case
  // switch (action.type) {
  //   case "ADD_CAROUSEL":
  //     return {
  //       ...state,
  //       myCarousel: [...state.myCarousel, action.data],
  //     };
  //   default:
  //     return state;
  // }
  // By usning if else
  console.log(action);
  if (action.type === "ADD_CAROUSEL") {
    return {
      ...state,
      myCarousel: [...state.myCarousel, action.data],
    };
  } else {
    return state;
  }
};
