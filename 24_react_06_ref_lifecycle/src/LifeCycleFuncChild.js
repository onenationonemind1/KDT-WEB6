import { useEffect } from "react"; // 자식 컴포넌트가 계속 바뀌고 있어서 여기로 불러오는 거임.
import { useState } from "react";

// 자식 컴포넌트
const LifeCycleFuncChild = (props) => {
  // console.log("props >>>", props); // {number: 5}
  const { number } = props; // 5
  const [text, setText] = useState("");

  //mount & update 시점에서 실행
  useEffect(() => {
    // mount 시점에서 실행
    console.log("mount!!!");

    return () => {
      //unmount 시점에서 실행
      console.log("unmount!!!");
    };
  }, []);

  useEffect(() => {
    console.log("upadate!!!");
  }, [text]);

  return (
    <>
      <p>
        LifeCycleFuncChild <b>{number}</b>
      </p>
      <input
        type="text"
        value={text}
        onchange={(e) => setText(e.target.value)}
      />
    </>
  );
};

export default LifeCycleFuncChild;
