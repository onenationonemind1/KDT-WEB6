import React, { useState } from "react";

function TextColorChanger() {
  const [textColor, setTextColor] = useState("black");

  const handleRedButtonClick = () => {
    setTextColor("red");
  };

  const handleBlackButtonClick = () => {
    setTextColor("black");
  };

  return (
    <div>
      <h1 style={{ color: textColor }}>Text Color Changer</h1>
      <button onClick={handleRedButtonClick}>Red</button>
      <button onClick={handleBlackButtonClick}>Black</button>
    </div>
  );
}

export default TextColorChanger;
