import React from "react";
import "./book.css";

function Book(props) {
  return (
    <div className="book">
      <img src="https://gdimg.gmarket.co.kr/1679734092/still/600?ver=1569653153"></img>
      <h2>{props.title}</h2>
      <p>저자: {props.author}</p>
      <p>가격: {props.price}원</p>
      <p>장르: {props.type}</p>
    </div>
  );
}

export default Book;
