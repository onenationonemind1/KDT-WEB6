import React, { useState } from "react";

function TextColorChanger2() {
  const [textColor, setTextColor] = useState("black");

  const handleRedButtonClick = () => {
    setTextColor("red");
  };

  const handleBlackButtonClick = () => {
    setTextColor("blue");
  };

  return (
    <div>
      <h1 style={{ color: textColor }}>Text Color Changer</h1>
      <button onClick={handleRedButtonClick}>Red</button>
      <button onClick={handleBlackButtonClick}>Blue</button>
    </div>
  );
}

export default TextColorChanger2;
