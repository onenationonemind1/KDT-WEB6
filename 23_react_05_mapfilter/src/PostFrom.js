import { useState } from "react";
import "./table.css";
let Arr = [];
const Prac = () => {
  // inputAlpha state: input 에 넣는 값에 대한 상태
  const [inputAlpha, setInputAlpha] = useState("");
  const [inputSubj, setInputSubj] = useState("");
  const [inputWord, setInputWord] = useState("");

  // alphabet state: 리스트에 대한 상태
  //   const [comment, setComment] = useState([
  //     { writer: "x", title: "aa" },
  //     { writer: "x", title: "aa" },
  //     { writer: "x", title: "aa" },
  //   ]);
  const [alphabet, setAlphabet] = useState([]);
  const [subject, setSubject] = useState([]);
  const [word, setWord] = useState([]);
  const addAlpha = () => {
    // concat(): 인자로 주어진 값을 기존 배열에 합쳐서 새로운 배열을 반환
    const newAlphabet = alphabet.concat({
      id: alphabet.length + 1,
      alpha: inputAlpha,
    });
    setAlphabet(newAlphabet); // 리스트 상태 업데이트
    setInputAlpha(""); // input 초기화
    console.log("newAlphabet", newAlphabet);
  };

  const addSubj = () => {
    // concat(): 인자로 주어진 값을 기존 배열에 합쳐서 새로운 배열을 반환
    const newSubject = subject.concat({
      id: subject.length + 1,
      alpha: inputSubj,
    });
    setSubject(newSubject); // 리스트 상태 업데이트
    setInputSubj(""); // input 초기화
    console.log("newSub", newSubject);
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

  const showSelectValue = (seletElement) => {
    console.log("good", seletElement.target.value);
    const flag = seletElement.target.value;
    if (flag === "a") {
      console.log(alphabet);
      Arr = alphabet;
    } else {
      console.log(subject);
      Arr = subject;
    }
    console.log("Arr", Arr);
  };

  var arrHome = [];
  const includeWord = () => {
    const ArrLength = Arr.length;
    console.log("length", ArrLength);
    for (let i = 0; i < ArrLength; i++) {
      //   console.log(Arr[i].alpha);
      let val = Arr[i].alpha;
      if (val.includes(inputWord)) {
        console.log(inputWord);
        console.log(Arr[i].alpha.includes(inputAlpha));
        arrHome.push(Arr[i].id);
        console.log("arrhome", arrHome);
      }
    }
  };

  return (
    <>
      &nbsp;&nbsp;&nbsp;제목 :
      <input
        type="text"
        value={inputAlpha}
        onChange={(e) => setInputAlpha(e.target.value)}
        onKeyDown={(e) => activeEnter(e)}
      />
      &nbsp;&nbsp;&nbsp;작성자 :
      <input
        type="text"
        value={inputSubj}
        onChange={(e) => setInputSubj(e.target.value)}
        onKeyDown={(e) => activeEnter(e)}
      />
      <button
        onClick={() => {
          addAlpha();
          addSubj();
        }}
      >
        추가
      </button>
      <div>
        <select onChange={showSelectValue}>
          <option value="a">제목</option>
          <option value="b">작성자</option>
        </select>
        <input
          type="text"
          value={inputWord}
          placeholder="검색어"
          onChange={(e) => setInputWord(e.target.value)}
        />
        <button
          onClick={() => {
            console.log(inputWord);
            console.log(Arr[0].alpha);
            includeWord();
          }}
        >
          검색
        </button>
      </div>
      <table>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
        </tr>
        {alphabet.map((obj) =>
          subject.map((obj2) => {
            if (obj.id === obj2.id) {
              return (
                <tr>
                  <td key={obj.id}>{obj.id}</td>
                  <td key={obj.id}>{obj.alpha}</td>
                  <td key={obj2.id}>{obj2.alpha}</td>
                </tr>
              );
            }
          })
        )}
      </table>
      <h1>댓글 검색 결과</h1>
      <table>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
        </tr>
        {alphabet.map((obj) =>
          subject.map((obj2) => {
            if (obj.id === obj2.id) {
              console.log("!@!@", obj2.id);
              console.log("home", arrHome);
              console.log("hhhhh", arrHome.includes(obj2.id));
              if (arrHome.includes(obj2.id) === true) {
                console.log("@@@", obj2.id);
                return (
                  <tr key={obj.id}>
                    <td>{obj.id}</td>
                    <td>{obj.alpha}</td>
                    <td>{obj2.alpha}</td>
                  </tr>
                );
              }
            }
          })
        )}
      </table>
      <button
        onClick={() => {
          subject.map((obj2) => {
            console.log(obj2.id);
            console.log(arrHome);
            if (arrHome.includes(obj2.id) === true) {
              console.log("good");
            }
          });
        }}
      >
        arrhome
      </button>
    </>
  );
};

export default Prac;
