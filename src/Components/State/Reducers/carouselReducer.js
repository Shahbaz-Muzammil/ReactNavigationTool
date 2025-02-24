const initialState = {
  myCarousel: [
    {
      id: 1,
      carouselImg: `https://wallpaperaccess.com/full/314838.jpg`,
      carouselTitle: `First Slide`,
      carouselDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor neque natus doloremque repudiandae modi eaque nobis id nemo ipsum.`,
    },
    {
      id: 2,
      carouselImg: `https://image.shutterstock.com/image-photo/software-source-code-programming-on-260nw-634574354.jpg`,
      carouselTitle: `Second Slide`,
      carouselDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor neque natus doloremque repudiandae modi eaque nobis id nemo ipsum.`,
    },
    {
      id: 3,
      carouselImg: `https://wallpapercave.com/wp/wp2936849.jpg`,
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
  if (action.type === "ADD_CAROUSEL") {
    return {
      ...state,
      myCarousel: [...state.myCarousel, action.data],
    };
  } else {
    return state;
  }
};
