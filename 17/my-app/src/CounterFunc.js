import React, { useState } from "react";

function CounterFunc() {
  const [count, setCount] = useState(0);

  const Increase = () => {
    setCount(count + 1);
  };

  const Decrease = () => {
    setCount(count - 2);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={Increase}>+1</button>
      <button onClick={Decrease}>-2</button>
    </div>
  );
}

export default CounterFunc;
