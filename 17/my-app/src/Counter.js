//실습1

import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 2 }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>+2</button>
        <button onClick={this.handleDecrement}>-1</button>
      </div>
    );
  }
}

export default Counter;
