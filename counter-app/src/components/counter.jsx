import React, { Component } from "react";

class Counter extends Component {
  /**
     *  binding event handler to this for handleIncrementClick function
     *  constructor() {
         super();
         this.handleIncrementClick = this.handleIncrementClick.bind(this);
     }
     * 
     */

  // object that includes any data we need
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 40,
    fontWeight: "bold",
  };
  render() {
    console.log('props', this.props);
    return (
      <div>
        {this.props.children}
        <img src={this.state.imageUrl} alt=""></img>
        {/* style object */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* inline styles */}
        <button
          // to pass event arguments use arrow function
          onClick={() => this.handleIncrementClickArrow()}
          className="btn btn-secondary btn-md"
        >
          Increment
        </button>
        {/* {this.renderTags()} */}
      </div>
    );
  }

  /* note that we pass a reference above vs calling function
    we can also use arrow functions 
  */
  // handleIncrementClick() {
  //     this.setState({
  //         count: this.state.count + 1
  //     })
  // };

  handleIncrementClickArrow = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  // example of passing event arguments
  doHandleIncrement = () => {
    this.handleIncrementClickArrow({ id: 1 });
  };

  formatCount = () => {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning btn-md" : "primary btn-md";
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
