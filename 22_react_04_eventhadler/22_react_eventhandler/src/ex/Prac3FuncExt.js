import { useState } from "react";

const Prac3 = () => {
  const [bool, setBool] = useState(true);
  console.log("1", bool);
  const changeBool = () => {
    setBool(!bool);
    console.log("222222222222222", bool);
  };

  return (
    <>
      <div>
        <h1>{bool ? "Hello World" : "Goodbye World"}</h1>
        <button onClick={changeBool}>체인지</button>
      </div>
    </>
  );
};

export default Prac3;
