import React, { Component } from "react";
import Players from "./players/Players";
import "./App.css";

class App extends Component {
  state = {};

  clickHandler = e => {
    this.setState({ greeting: "hello web students" });
  };

  render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
        <button onClick={this.clickHandler}>Greet</button>
        <div>{this.state.greeting}</div>
        {/*a button that says "greet". When clicked, displays "hello web students" */}
      </div>
    );
  }
}

export default App;
