import React, { Component } from "react";

class Counter extends Component {
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
        <button className="btn btn-secondary btn-sm">Increment</button>

        <ul>
          {this.state.tags.map((tag) => (
            //   unique key for each item in list
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  formatCount = () => {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
