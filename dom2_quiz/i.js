//아래는 서로 같은 의미
console.log($("button"));

//차이점 바닐라js의 all 모든 선택은 배열로 적용돼서, 배열 인덱스를 적어줬어야 했다.
//jquery에서는 자동 모두 선택.
$("button").css("color", "red");

function submitjs() {
  document.querySelector("#div1").innerHTML = "반갑습니다.";
  document
    .getElementById("div1")
    .setAttribute("style", "border:2px solid blue");
}

function submitjquery() {
  $("#div1").html("잘지내세요.");
  $("#div1").css("border", "2px dotted red");
}
