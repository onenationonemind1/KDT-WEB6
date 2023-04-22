import { useState } from "react";
import LifeCycleFuncChild from "./LifeCycleFuncChild";

// 부모 컴퍼넌트
const LifeCycleFunc = () => {
  const [number, setNumber] = useState(5);
  const [visible, setVisible] = useState(true);

  const changeVisible = () => {
    setVisible(!visible);
  };

  const changeNumber = () => {
    setNumber(number + 1);
  };

  return (
    <>
      <button onClick={changeNumber}>Plus</button>
      <button onClick={changeVisible}>On/Off</button>
      {visible && <LifeCycleFuncChild number={number} />}
    </>
  );
};

export default LifeCycleFunc;
