import React from "react";
//import { Component } from 'react';
import PropTypes from "prop-types";

class ClassComponent extends React.Component {
  //클래스형 컴포넌트 render() 함수 필수
  render() {
    console.log(this.props);
    const { name, age } = this.props;
    // this.props = { name: "홍길동", age: "13" };

    return (
      <div>
        <h1>Hello World, Class Component</h1>
        <h5>{name}</h5>
        <h5>{age}</h5>
      </div>
    );
  }
}

ClassComponent.prototypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string,
};

export default ClassComponent;
