const initialState = {
  myCarousel: [
    {
      id: 1,
      carouselImg: `https://mdbootstrap.com/img/Photos/Slides/img%20(73).jpg`,
      carouselTitle: `First Slide`,
      carouselDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor neque natus doloremque repudiandae modi eaque nobis id nemo ipsum.`,
    },
    {
      id: 2,
      carouselImg: `https://i.stack.imgur.com/sRYBZ.jpg`,
      carouselTitle: `Second Slide`,
      carouselDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor neque natus doloremque repudiandae modi eaque nobis id nemo ipsum.`,
    },
    {
      id: 3,
      carouselImg: `https://wowslider.com/sliders/demo-9/data/images/1293441583_nature_forest_morning_in_the_forest_015232_.jpg`,
      carouselTitle: `Third Slide`,
      carouselDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor neque natus doloremque repudiandae modi eaque nobis id nemo ipsum.`,
    },
  ],
};
export const carouselReducer = (state = initialState, action) => {
  return state;
};
