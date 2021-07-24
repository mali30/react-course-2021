import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        {/* style object */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* inline styles */}
        <button
          // to pass event arguments use arrow function
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-md"
        >
          Increment
        </button>

        {/* 
        Since the state of the counters is in the parent component (counter) we are raising 
        that event to it. We then pass a reference from the parent to this component and handle it here
         */}
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2"> Delete </button>
        {/* {this.renderTags()} */}
      </div>
    );
  }

  // example of passing event arguments
  doHandleIncrement = () => {
    this.handleIncrementClickArrow({ id: 1 });
  };

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning btn-md" : "primary btn-md";
    return classes;
  }

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>No tags to display</p>;
    } else {
      return (
        <ul>
          {this.state.tags.map((tag) => (
            //   unique key for each item in list
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
    }
  }
}

export default Counter;
