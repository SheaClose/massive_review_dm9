import React, { Component } from "react";
import { Link } from "react-router-dom";

import Routes from "./Routes";
import "./App.css";

const style = {
  display: "flex",
  justifyContent: "space-around"
};

class App extends Component {
  constructor(props) {
    super(props);
    console.log("props: ", props);
  }
  render() {
    return (
      <div className="App">
        <div>
          <div style={style}>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
          </div>
        </div>
        <Routes />
      </div>
    );
  }
}

export default App;
