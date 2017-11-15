import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: "",
      people: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitUser = this.submitUser.bind(this);
  }

  handleChange(val, prop) {
    console.log(this.state);
    this.setState({ [prop]: val });
  }

  submitUser() {
    axios
      .post("/api/person", { name: this.state.name, number: this.state.number })
      .then(res => {
        this.setState({ people: res.data });
      });
  }

  componentDidMount() {
    axios.get("/api/people").then(res => {
      console.log("res: ", res);

      this.setState({ people: res.data });
    });
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <Home
                handleChange={this.handleChange}
                submitUser={this.submitUser}
              />
            );
          }}
        />
        <Route
          exact
          path="/About"
          render={props => <About people={this.state.people} />}
        />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    );
  }
}
