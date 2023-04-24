import { useState } from "react";

const useCallbackTest = () => {
  const [text, setText] = useState("");

  // useCallback()
  // 반복해서 생성되는 이벤트 핸들러 함수를 useCallback으로 감싸주면
  // 함수를 메모리제이션(기억)해서 컴포넌트가 다시 렌더링돼도
  // 기억하고 있는 함수를 그대로 사용.
  const onChangeText =
    ((e) => {
      setText(e.target.value);
    },
    []);

  return (
    <>
      <h1>useCallback hook</h1>
      <input onChange={onChangeText} />

      <h2>작성한 값: {text || "없음"}</h2>
    </>
  );
};

export default useCallbackTest;
