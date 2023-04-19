import ClassComponent from "./ClassComponent";
import FunctionCompoent from "./FunctionComponent";
import Larva from "./Larva";
import "./test.css";
import "./app.css";

function App() {
  const name = "흰둥이";
  const animal = "햄스터";
  const a = 3;
  const b = 2;
  const title = "React Input 예제";
  return (
    <>
      // 1번문제
      <div>
        이것은 div입니다.
        <h3>이것은 vid 안에 있는 h3태그 입니다.</h3>
      </div>
      // 2번문제
      <h2>
        제 반려 동물의 이름은 {name} 입니다.
        {name}는 {animal} 입니다.
      </h2>
      // 3번문제
      {console.log(3 + 5 == 8 ? "정답입니다!" : "오답입니다!")}
      // 4번문제
      {a > b && console.log("a가 b보다 큽니다")}
      5번문제
      <div className="test">
        <div className="title1">
          <h1 className="title">{title}</h1>
        </div>
        아이디 :<input className="Input" type="text" placeholder="아이디 :" />
        <br></br>
        비밀번호 :
        <input className="Input" type="text" placeholder="비밀번호 :" />
      </div>
      {/* 6번문제 */}
      <div className="box">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div>
    </>
  );
}

export default App;
