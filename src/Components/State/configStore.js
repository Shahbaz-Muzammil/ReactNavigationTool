import { createStore, combineReducers } from "redux";
import { sampleReducer } from "./Reducers/sampleReducer";
import { navReducer } from "./Reducers/navReducer";
import { bodyReducer } from "./Reducers/bodyReducer";
import { testReducer } from "./Reducers/testReducer";
import { carouselReducer } from "./Reducers/carouselReducer";
import { mentorReducer } from "./Reducers/mentorReducer";
import { coursesReducer } from "./Reducers/CoursesReducer";
export const configStore = () => {
  const store = createStore(
    combineReducers({
      sampleReducer,
      navReducer,
      bodyReducer,
      carouselReducer,
      testReducer,
      mentorReducer,
      coursesReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
