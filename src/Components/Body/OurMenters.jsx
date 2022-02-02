import React, { Component } from "react";

class OurMenters extends Component {
  state = { name: "abc", age: 25 };
  render() {
    return (
      <div>
        <h1>
          Class Component {this.state.name} {this.state.age}
        </h1>
      </div>
    );
  }
}

export default OurMenters;
