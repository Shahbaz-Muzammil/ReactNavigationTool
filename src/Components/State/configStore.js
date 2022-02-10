import { createStore, combineReducers } from "redux";
import { sampleReducer } from "./Reducers/sampleReducer";
import { navReducer } from "./Reducers/navReducer";
import { bodyReducer } from "./Reducers/bodyReducer";
import { carouselReducer } from "./Reducers/carouselReducer";
export const configStore = () => {
  const store = createStore(
    combineReducers({
      sampleReducer,
      navReducer,
      bodyReducer,
      carouselReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
