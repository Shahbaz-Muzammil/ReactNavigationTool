const initialState = {
  test: [
    { heading: "Test Reducer", desc: "This is test reducer" },
    { heading: "Test Reducer", desc: "This is test reducer" },
  ],
};
export const testReducer = (state = initialState, action) => {
  console.log(action);
  if (action.type === "ADD_TEST") {
    return {
      ...state,
      test: [...state.test, action.data],
    };
  } else {
    return state;
  }
};
