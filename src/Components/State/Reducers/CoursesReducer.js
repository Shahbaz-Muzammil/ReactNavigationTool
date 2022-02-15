export const coursesReducer = (state = initState, action) => {
  if (action.type === "ADD_COURSES") {
    return {
      ...state,
      courses: [...state.courses, action.data],
    };
  } else return state;
};

const initState = {
  courses: [
    {
      title: "HTML",
      desc: "HTML stands for Hyper Text Markup Language · HTML is the standard markup language for creating Web pages ",
      img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
    },
    {
      title: "CSS",
      desc: "CSS stands for Cascading Style Sheets · CSS describes how HTML elements are to be displayed on screen, paper, or in other media · CSS saves a lot of work.",
      img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
    },
    {
      title: "JavaScript",
      desc: "JavaScript is used to perform action on the web page",
      img: "https://www.pragimtech.com/wp-content/uploads/2019/03/java-script.jpg",
    },
    {
      title: "React",
      desc: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications",
      img: "Assets/ReactImg.png",
    },
  ],
};
