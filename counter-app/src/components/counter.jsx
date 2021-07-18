import React, { Component } from "react";

class Counter extends Component {
  // object that includes any data we need
  state = {
    count: 0,
    // imageUrl: "https://picsum.photos/200",
  };

  styles = {
    fontSize: 40,
    fontWeight: "bold",
  };
  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt=""></img>
        {/* style object */}
        <span style={this.styles} className="badge badge-primary m-2">
          {" "}
          {this.formatCount()}{" "}
        </span>
        {/* inline styles */}
        <button style={{ fontSize: 30 }} className="btn btn-secondary btn-sm">
          Increment
        </button>
      </React.Fragment>
    );
  }

  formatCount = () => {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  };
}

export default Counter;
