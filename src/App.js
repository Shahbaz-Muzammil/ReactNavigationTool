import React from "react";
import "./App.css";
// import UseRef from "./Components/Hooks/UseRef";
// import FetchData from "./Components/API/FetchData";
// import PostData from "./Components/API/PostData";
import MyCarousel from "./Components/Body/MyCarousel";
// import { OurMenters } from "./Components/Body/OurMenters";
import { Navigation } from "./Components/Navigation/Navigation";
// import { ProductList } from "./Components/ProjectCRUD/ProductList";

// import FetchingDataFromRedux from "./Components/Redux/FetchingDataFromRedux";
function App() {
  return (
    <div className="App">
      {/* <h1>App Component</h1> */}
      <Navigation />
      <MyCarousel />
      {/* <OurMenters /> */}
      {/* <ProductList /> */}
      {/* <PostData /> */}
      {/* <FetchData /> */}
      {/* <FetchingDataFromRedux /> */}
      {/* <UseRef /> */}
    </div>
  );
}

export default App;
