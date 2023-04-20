function SyntheticEvent() {
  function syntheticEvent(e) {
    // Syntheic Event (합성 이벤트)
    // 웹 브라우저의 nativeEvent가 아니라
    // nativeEvent를 감싼 Synthetic Event를 사용함
    // 즉, 리엑트 고유 이벤트 객체!

    console.log(e);
  }

  function printInputValue(e) {
    console.log("value", e.target.value);
    console.log("data", e.nativeEvent.data);
  }

  return (
    <div>
      <button onClick={syntheticEvent}>합성이벤트 콘솔 찍기</button>
      <input
        type="text"
        placeholder="아무거나입력!"
        onChange={printInputValue}
      ></input>
    </div>
  );
}

export default SyntheticEvent;
