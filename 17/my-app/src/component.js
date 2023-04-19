import React, { Component } from "react";
import PropTypes from "prop-types";

class MyClass extends Component {
  render() {
    const { text, valid } = this.props;
    return (
      <div>
        {text ? text : "이건 기본 text props입니다."}
        <button onClick={() => valid && console.log("콘솔 띄우기 성공!")}>
          Click Me
        </button>
      </div>
    );
  }
}

MyClass.propTypes = {
  text: PropTypes.string.isRequired,
  valid: PropTypes.string,
};

export default MyClass;
