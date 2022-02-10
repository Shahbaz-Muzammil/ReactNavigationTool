const initState = {
  navData: [
    { name: "React", link: "https://reactjs.org/", target: "_self" },
    {
      name: "React-Bootstrap",
      link: "https://react-bootstrap.github.io/",
      target: "_blank",
    },
    { name: "Material UI", link: "https://mui.com/", target: "_self" },
    { name: "Node js", link: "https://nodejs.org/en/", target: "_blank" },
  ],
};
export const navReducer = (state = initState, action) => {
  return state;
};
