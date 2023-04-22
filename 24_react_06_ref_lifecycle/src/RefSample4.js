import React from "react";

class RefSample4 extends React.Component {
  // 1. createRef()로 객체 생성
  myInput = React.createRef();

  handleFocus = () => {
    // 3. current 이용해서 dom 요소 접근
    console.log(this.myInput);
    // this.myInput.current;
  };

  render() {
    return (
      <>
        <p>함수형 컴포넌트에서 버튼 클릭시 input focusing</p>
        <input type="text" ref={this.myInput} />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}

export default RefSample4;
