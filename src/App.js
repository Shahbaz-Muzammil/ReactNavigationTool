import React from "react";
import "./App.css";
import Courses from "./Components/Body/Courses";
// import UseRef from "./Components/Hooks/UseRef";
// import FetchData from "./Components/API/FetchData";
// import PostData from "./Components/API/PostData";
import MyCarousel from "./Components/Body/MyCarousel";
// import UseCallBack from "./Components/Hooks/UseCallBack/UseCallBack";
import { OurMenters } from "./Components/Body/OurMenters";
import PageFooter from "./Components/Footer/PageFooter";
import { Navigation } from "./Components/Navigation/Navigation";
import TodoList from "./Components/Todo/TodoList";
// import Testing from "./Components/Testing";
// import { ProductList } from "./Components/ProjectCRUD/ProductList";
// import FetchingDataFromRedux from "./Components/Redux/FetchingDataFromRedux";
import Createtable from "./Components/Todo/Createtable";
function App() {
  return (
    <div className="App">
      {/* <h1>App Component</h1> */}
      {/* <Navigation /> */}
      {/* <MyCarousel /> */}
      {/* <Courses /> */}
      {/* <OurMenters /> */}
      {/* <ProductList /> */}
      {/* <PostData /> */}
      {/* <FetchData /> */}
      {/* <FetchingDataFromRedux /> */}
      {/* <UseRef /> */}
      {/* <UseCallBack /> */}
      {/* <Testing /> */}
      {/* <PageFooter /> */}
      {/* <TodoList /> */}
      <Createtable />
    </div>
  );
}

export default App;
