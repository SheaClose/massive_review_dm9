import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageFromRoutes: ""
    };
    this.updateMessageFromRoutes = this.updateMessageFromRoutes.bind(this);
  }

  updateMessageFromRoutes(val) {
    this.setState({ messageFromRoutes: val });
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <Home updateMessageFromRoutes={this.updateMessageFromRoutes} />
            );
          }}
        />
        <Route
          exact
          path="/About"
          render={props => <About message={this.state.messageFromRoutes} />}
        />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    );
  }
}
