import PropType from "prop-types";
import { useState } from "react";

function FunctionCompoent() {
  // const list = "abc";
  const [counter, setCounter] = useState(0);
  console.log(counter);
  //   console.log(props);
  //   props = { name: "둘리", age: "400" };
  const onClick = () => {
    setCounter(counter + 1);
    console.log("클릭되었습니다");
  };
  return (
    <div>
      <h5>Hello World, Function Compoenet</h5>
      <h5>{counter}</h5>
      <button onClick={onClick}>숫자업~!</button>
      {/* <h5>{name}</h5>
      <h5>{age}</h5> */}
    </div>
  );
}

export default FunctionCompoent;
