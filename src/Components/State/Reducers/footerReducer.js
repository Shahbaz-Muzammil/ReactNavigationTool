const initState = {
  arrOne: [
    { title: "ABOUT", link: "https://pickupbiz.com/", target: "_self" },
    { title: "CONTACT", link: "https://pickupbiz.com/", target: "_self" },
    { title: "SERVICES", link: "https://pickupbiz.com/", target: "_self" },
  ],
  arrTwo: [
    { title: "ABOUT", link: "https://pickupbiz.com/", target: "_blank" },
    { title: "CONTACT", link: "https://pickupbiz.com/", target: "_blank" },
    { title: "SERVICES", link: "https://pickupbiz.com/", target: "_blank" },
  ],
  arrThree: [
    { title: "ABOUT", link: "https://pickupbiz.com/", target: "_slef" },
    { title: "CONTACT", link: "https://pickupbiz.com/", target: "_blank" },
    { title: "SERVICES", link: "https://pickupbiz.com/", target: "_self" },
  ],
};
export const footerReducer = (state = initState, action) => {
  return state;
};
