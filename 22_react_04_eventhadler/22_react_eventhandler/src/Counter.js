import { useState } from "react";

const Counter = () => {
  const [index, setCount] = useState(0);
  const Increase = () => {
    setCount(index + 1);
  };
  const alertMsg = (msg) => {
    alert(`${msg} 현재 숫자는 ${index} 입니다!`);
  };
  const consoleMsg = (e, msg) => {
    console.log(e.target);
    console.log(`${msg} 현재 숫자는 ${index} 입니다!`);
  };

  return (
    <>
      <div>숫자 카운터</div>
      <h1>{index}</h1>

      {/* {함수형컴포넌트에서 이벤트 사용하는 방법} */}
      {/* {인자가 없는경우 함수만 전달하면 된다.} */}
      <button onClick={Increase}>증가</button>
      {/* {인자가 있는경우 함수이름과 함께 전달. } */}
      <button onClick={() => alertMsg("hello World")}>alert 띄우기</button>
      <button onClick={(e) => consoleMsg(e, "hello World")}>
        console 띄우기
      </button>
    </>
  );
};

export default Counter;
