import React, { useState } from "react";

function Counter1() {
  const [index, setCount] = useState(0);
  const [index2, setCount2] = useState(5);

  const Increase = () => {
    setCount(index + 1);
  };

  const Increase2 = () => {
    setCount2(index2 + 2);
  };

  const Decrease = () => {
    setCount(index - 1);
  };

  return (
    <div>
      <h1>Count: {index} </h1>
      <h1>Count2: {index2}</h1>
      <button onClick={Increase}>+1</button>
      <button onClick={Decrease}>-1</button>
      <button onClick={Increase2}>+2</button>
    </div>
  );
}

export default Counter1;
