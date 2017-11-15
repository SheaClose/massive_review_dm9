import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div className="">
        <input
          type="text"
          placeholder="New User"
          onChange={e => this.props.handleChange(e.target.value, "name")}
        />
        <input
          type="text"
          placeholder="New Number"
          onChange={e => this.props.handleChange(e.target.value, "number")}
        />
        <button onClick={this.props.submitUser}>Submit</button>
      </div>
    );
  }
}
