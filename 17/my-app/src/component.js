import React, { Component } from "react";
import PropTypes from "prop-types";

class MyClass extends Component {
  state = {
    counter: 0,
  };

  up = () => {
    // this.counter = this.counter + 1; //이러면 안된다.
    this.setState({ counter: this.state.counter + 1 });
  };

  down = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  down2 = () => {
    this.setState((value) => ({ counter: this.state.counter - 1 }));
  };

  //클래스형 컴포넌트 render() 함수 필수
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h1>Hello World, Class Compoent</h1>

        <h5>{counter}</h5>
        <h5>{counter}</h5>
        <button onClick={this.up}>숫자업</button>
        <button onClick={this.down}>숫자다운</button>
        <button onClick={this.down}>숫자다운</button>
      </div>
    );
  }
}

MyClass.propTypes = {
  text: PropTypes.string.isRequired,
  valid: PropTypes.string,
};

export default MyClass;
