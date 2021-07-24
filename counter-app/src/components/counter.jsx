import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { onIncrement, onDelete, onDecrement} = this.props;
    return (
        <div className="row">

          <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        
        <div className="col">
            <button onClick={() => onIncrement(this.props.counter)}
              className="btn btn-secondary btn-md"> + </button>

            <button
              disabled={this.props.counter.value === 0 ? "btn btn-disabled disabled" : ""}
              onClick={() => onDecrement(this.props.counter)} className="btn btn-secondary btn-md m-2"> - </button>
      
            <button onClick={() => onDelete(this.props.counter.id)}  className="btn btn-danger btn-md">X</button>
          </div>     
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

  isDisableButton = (counter) => {
    // console.log(counter.value)
    if (counter.value === 0) {
      return "btn btn-disabled disabled"
    }
  }
}

export default Counter;
