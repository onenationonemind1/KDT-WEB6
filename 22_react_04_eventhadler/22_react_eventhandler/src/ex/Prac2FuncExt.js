import { useState } from "react";

const Prac2 = () => {
  const [str, setStr] = useState("Hello, World");
  const changeStr = () => {
    setStr("GoodBye world!");
  };

  return (
    <>
      <div>
        <h1>{str}</h1>
        <button onClick={changeStr}>체인지</button>
      </div>
    </>
  );
};

export default Prac2;
