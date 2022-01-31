import React from "react";
import "./App.css";
import MyCarousel from "./Components/Body/MyCarousel";
import { Navigation } from "./Components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      <Navigation />
      <MyCarousel />
    </div>
  );
}

export default App;
