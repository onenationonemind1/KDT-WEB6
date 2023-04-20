import React from "react";

class Prac1 extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "Hello, World",
    };
  }

  printConsole = () => {
    console.log(this);
    console.log("버튼 클릭! >> ", this.state);
    this.setState({
      name: "GoodBye World!",
    });
    console.log(this.state.name);
  };

  render() {
    return (
      <h1>
        {this.state.name}
        <br></br>
        <button onClick={this.printConsole}>버튼</button>
      </h1>
    );
  }
}

export default Prac1;
