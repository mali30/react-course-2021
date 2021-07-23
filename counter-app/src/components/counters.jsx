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

    handleReset = () => {
        const counters = this.state.counter.map((c) => {
            c.value = 0;
            return c;
        });

        this.setState({
            counter: counters
        })
    };

  handleDelete = (counterId) => {
    const counters = this.state.counter.filter(
      (idToFilterOn) => counterId !== idToFilterOn.value
    );
    this.setState({
      counter: counters,
    });
    console.log("counterId", counterId);
  };
  render() {
    return (
        <div>
            <button onClick ={this.handleReset} className="btn btn-primary btn-sm m2">Reset</button>
        {this.state.counter.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
          >
            {/* passing a child element into our component */}
            {/* <h3> The id of each counter {counter.id}</h3> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
