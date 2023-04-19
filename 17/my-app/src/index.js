import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Clock from "./Clock";
import Food from "./food";
import Book from "./book";
import MyClass from "./component";
import Button from "./button";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Food />
    <Food food="피자" />
    <Book
      title="리액트를 다루는 기술"
      author="김민준"
      price={30000}
      type="IT/컴퓨터"
    />
    <MyClass text="꼭넣어야함" valid="콘솔띄우기 성공!" />
    <Button className="Fh" />
  </React.StrictMode>
);
