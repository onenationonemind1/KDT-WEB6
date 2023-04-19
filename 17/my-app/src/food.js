import React from "react";

function Food(props) {
  return (
    <div style={{ color: "red" }}>{props.food || "음식 정보가 없습니다."}</div>
  );
}

export default Food;
