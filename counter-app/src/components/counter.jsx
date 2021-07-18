import React, { Component } from "react";

class Counter extends Component {
  // object that includes any data we need
  state = {
    count: 0,
  };
  render() {
    return (
      <React.Fragment>
        <span> {this.formatCount()} </span>
        <button>Click Me</button>
      </React.Fragment>
    );
  }

  formatCount = () => {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  };
}

export default Counter;
