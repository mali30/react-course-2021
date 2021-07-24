import React, { Component } from "react";
import Counter from "../components/counter";

class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, onDecrement } = this.props;

    return (
      <div>
        <button
          style={{ margin: 10 }}
          onClick={onReset}
          className="btn btn-primary btn-sm m2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
