import React, { Component } from "react";
import Counter from "../components/counter";

class Counters extends Component {
  state = {
    counter: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
    ],
  };
  render() {
    return (
      <div>
        {this.state.counter.map((counter) => (
          <Counter key={counter.id} value={counter.value} />
        ))}
      </div>
    );
  }
}

export default Counters;
