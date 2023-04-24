import { useState } from "react";
import { useMemo } from "react";

// 평균값 계산 함수
// 숫자를 [등록] 버튼을 클릭할 때 뿐만 아니라,
// input 내용을 수정할 때도 getAveraage 함수가 호출되고 있음.
const getAverage = (numbers) => {
  console.log("평균값 계산 중...!");

  // numbers 배열에 원소가 없다면 평균값은 0을 반환

  if (numbers.length === 0) return 0;

  // numbers 배열에 원소를 모두 더함.
  const sum = numbers.reduce((a, b) => a + b);

  // 평균값을 계산하여 반환.
  return sum / numbers.length;
};

const UseMemoTest = () => {
  const [number, setNumber] = useState("");
  const [list, setList] = useState([]);

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = () => {
    const newList = list.concat(parseInt(number));
    setList(newList);
    setNumber("");
  };

  // 렌더링 과정이 일어날 때만 콜백 함수를 실행하겠다.
  const avg = useMemo(() => {
    return getAverage(list);
  }, [list]);

  return (
    <>
      <h1>useMemo hook</h1>

      <input type="number" value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>

      <ul>
        {list.map((li, idx) => {
          return <li key={idx}>{li}</li>;
        })}
      </ul>

      {/* <h2>평균값 : {getAverage(list)}</h2> */}
      <h2>평균값 : {avg}</h2>
    </>
  );
};

export default UseMemoTest;
