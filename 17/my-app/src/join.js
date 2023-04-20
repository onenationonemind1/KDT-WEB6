import React, { useState } from "react";

function JoinButton() {
  const [isJoined, setIsJoined] = useState(false);

  console.log(isJoined, setIsJoined);

  function handleJoinClick() {
    setIsJoined(true);
  }

  function handleLeaveClick() {
    setIsJoined(false);
  }

  return (
    <div>
      {isJoined ? (
        <p>사라져라</p>
      ) : (
        <button onClick={handleJoinClick}>보여라</button>
      )}
      {isJoined && <button onClick={handleLeaveClick}>사라져라</button>}
      {/* {isJoined && <p>보여라</p>} */}
    </div>
  );
}

export default JoinButton;
