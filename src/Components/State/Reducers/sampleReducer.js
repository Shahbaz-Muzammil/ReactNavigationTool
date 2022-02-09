const initialState = {
  myState: [
    {
      id: 1,
      name: "Redux Practical",
      image: `https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max`,
      desc: "This Is First Group Created With Redux",
    },
    {
      id: 2,
      name: "PDAC",
      image: `https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max`,
      desc: "This Is First Group Created With Redux",
    },
    {
      id: 3,
      name: "Pickupbiz",
      image: `https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max`,
      desc: "This Is First Group Created With Redux",
    },
    {
      id: 4,
      name: "Khwaja",
      image: `https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max`,
      desc: "SE",
    },
  ],
};

export const sampleReducer = (state = initialState, action) => {
  return state;
};
