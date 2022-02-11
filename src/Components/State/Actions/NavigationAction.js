export const NavigationAction = (name, link, target) => {
  return {
    type: "ADD_NAV_LINK",
    navData: { name, link, target },
  };
};
