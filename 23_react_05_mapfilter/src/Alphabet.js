import { useState } from "react";

// ver1
// const Alphabet = () => {
//   const [alphabet, setAlphabet] = useState(['a', 'p', 'p', 'l', 'e']);

//   console.log(alphabet); // ['a', 'p', 'p', 'l', 'e']

//   return (
//     <>
//       <ol>
//         {alphabet.map((value, idx) => (
//           <li key={idx}>{value}</li>
//         ))}
//       </ol>
//     </>
//   );
// };

// ver2
const Alphabet = () => {
  // alphabet state: 리스트에 대한 상태
  const [alphabet, setAlphabet] = useState([
    { id: 1, alpha: "a" },
    { id: 2, alpha: "p" },
    { id: 3, alpha: "p" },
    { id: 4, alpha: "l" },
    { id: 5, alpha: "e" },
  ]);
  // inputAlpha state: input 에 넣는 값에 대한 상태
  const [inputAlpha, setInputAlpha] = useState("");

  const addAlpha = () => {
    // concat(): 인자로 주어진 값을 기존 배열에 합쳐서 새로운 배열을 반환
    const newAlphabet = alphabet.concat({
      id: alphabet.length + 1,
      alpha: inputAlpha,
    });
    setAlphabet(newAlphabet); // 리스트 상태 업데이트
    setInputAlpha(""); // input 초기화
  };

  const deleteAlpha = (id) => {
    // filter()
    // 콜백함수의 테스트를 토과하는 모든 요소를 모아서 새로운 배열 반환
    // true요소 유지, false요소버림
    // => alphabet state 에서 매개변수로 받아오는 id와
    //      배열 각 원소의 id 값이 같은 경우 빼고 나머지를 모두 새로운 배열에 저장.
    const newAlpha = alphabet.filter((obj) => obj.id !== id);
    setAlphabet(newAlpha);
  };

  const activeEnter = (e) => {
    console.log(e.key);
    let val = e.target.value;
    console.log("val=", val);
    let trimCheck2 = val.trim();
    console.log("trimcheck2 =", trimCheck2);
    if (e.key === "Enter" && trimCheck2 !== "") {
      addAlpha();
      console.log("@@@@", trimCheck2);
    }
  };

  return (
    <>
      <input
        type="text"
        value={inputAlpha}
        onChange={(e) => setInputAlpha(e.target.value)}
        onKeyDown={(e) => activeEnter(e)}
      />
      <button onClick={addAlpha}>추가</button>
      <ol>
        {alphabet.map((obj) => (
          <li key={obj.id} onDoubleClick={() => deleteAlpha(obj.id)}>
            {obj.alpha}
          </li>
        ))}
      </ol>
    </>
  );
};

export default Alphabet;
