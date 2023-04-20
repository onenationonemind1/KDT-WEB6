import React, { useState } from "react";

function JoinButton1() {
  const [isJoined, setIsJoined] = useState("good");
  console.log("isjoined :", isJoined);
  console.log("setisjoined : ", setIsJoined);
}

export default JoinButton1;
