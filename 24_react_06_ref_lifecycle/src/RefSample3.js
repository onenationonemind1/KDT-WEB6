import React from "react";

class RefSample3 extends React.Component {
  handleFocus = () => {
    console.log(this); // RefSample3 현재 컴포넌트
    console.log(this.myInput1.value); // input value 출력

    if (this.myInput1.value === "") {
      this.myInput1.focus();
    }
    if (this.myInput2.value === "") {
      this.myInput2.focus();
    }
  };

  render() {
    return (
      <>
        <p>함수형 컴포넌트에서 버튼 클릭시 input focusing</p>
        <input
          type="text"
          ref={(ref) => {
            this.myInput1 = ref; //이 class를 this 라고함
          }}
        />
        <input
          type="text"
          ref={(ref2) => {
            console.log("ref2", ref2);
            this.myInput2 = ref2; //이 class를 this 라고함
          }}
        />
        <button
          onClick={() => {
            this.handleFocus();
          }}
        >
          focus
        </button>
      </>
    );
  }
}

export default RefSample3;
