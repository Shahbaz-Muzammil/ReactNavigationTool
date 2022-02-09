import React from "react";
import "./App.css";
import FetchData from "./Components/API/FetchData";
import PostData from "./Components/API/PostData";
// import MyCarousel from "./Components/Body/MyCarousel";
// import { OurMenters } from "./Components/Body/OurMenters";
// import { Navigation } from "./Components/Navigation/Navigation";
// import { ProductList } from "./Components/Project/ProductList";
// import PostProducts from "./Components/Project/PostProducts";
import FetchingDataFromRedux from "./Components/Redux/FetchingDataFromRedux";

function App() {
  return (
    <div className="App">
      {/* <h1>App Component</h1> */}
      {/* <Navigation /> */}
      {/* <MyCarousel /> */}
      {/* <OurMenters /> */}
      {/* <PostProducts /> */}
      {/* <ProductList /> */}
      {/* <PostData /> */}
      {/* <FetchData /> */}
      <FetchingDataFromRedux />
    </div>
  );
}

export default App;
