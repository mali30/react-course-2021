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
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
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
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* inline styles */}
        <button
          onClick={this.handleIncrementClickArrow}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.renderTags()}
      </React.Fragment>
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
      count: this.state.count + 1,
    });
  };

  formatCount = () => {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
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
