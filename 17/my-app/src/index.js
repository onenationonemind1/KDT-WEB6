import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TextColorChanger from "./TextColorChanger";
import TextColorChanger1 from "./TextColorChanger1";
import TextColorChanger2 from "./TextColorChanger2";

import Counter from "./Counter";
import CounterFunc from "./CounterFunc";
import JoinButton from "./join";
import JoinButton1 from "./joinButton1";
import Counter1 from "./Counter_1";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <Counter />
    <CounterFunc />
    <TextColorChanger />
    <TextColorChanger1 />
    <TextColorChanger2 />
    <JoinButton /> */}
    <JoinButton1 />
    <Counter1 />
  </React.StrictMode>
);
