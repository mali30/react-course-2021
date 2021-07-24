import React, { Component } from "react";
import Counter from "../components/counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
    ],
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({
      counters: counters,
    });
  };

  handleDelete = (counterId) => {
    const counter = this.state.counters.filter(
      (idToFilterOn) => counterId !== idToFilterOn.id
    );
    this.setState({
      counters: counter,
    });
    console.log("counterId", counterId);
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    // counters[index] = { ...counter };
    counters[index].value++;
    this.setState({
      counters,
    });
  };
  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          >
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
