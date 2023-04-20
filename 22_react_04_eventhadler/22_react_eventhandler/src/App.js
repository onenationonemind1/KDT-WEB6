import "./App.css";
import SyntheticEvent from "./SyntheticEvent";
import ClassComponent from "./ClassComponent";
import Counter from "./Counter";
import Prac1 from "./ex/Handler_ex";
import Prac2 from "./ex/Prac2FuncExt";
import Prac3 from "./ex/Prac3FuncExt";

function App() {
  return (
    <div className="App">
      <SyntheticEvent />
      <ClassComponent />
      <Counter />
      <Prac1 />
      <Prac2 />
      <Prac3 />
    </div>
  );
}

export default App;
