console.log(window);
console.log(document);

console.log($(window));
console.log($(document));

// mouse event click()
// click(function(){}), mouseover(function(){})
// hover( function(){}, function(){})
// hover(마우스를 올렸을 때의 동작, 마우스를 떼었을 때의 동작)

// 1. click() : 클릭이 일어났을 때
$(".p-msg").click(function () {
  $(".p-msg").css("color", "red");
});

// on() == addEventListner()
$(".num").on("click", function () {
  $(this).css("color", "blue");
});

$(".div-hover").hover(
  function () {
    $(this).addClass("hover1");
  },
  function () {
    $(this).removeCLass("hover1");
  }
);

$(window).scroll(function () {
  console.log("scroll");
});

//선택요소.addEventListener('keydown',fuction(){})

$(".input-key").keydown(function (event) {
  console.log(event.code);
  if (event.code === "ArrowUp") {
    console.log("Up");
  } else if (event.code === "ArrowRight") {
    console.log("up");
  } else if (event.code === "ArrowLeft") {
  } else if (event.code === "ArrowDown") {
    console.log("down");
  } else {
    console.log("others");
  }
});

/* todo list */

$("#todo-form").on("submit", function (e) {
  e.preventDefault(); //이벤트막기

  const todo = $('input[name="todo"]').val();
  $("ul.todos").append(`<li>${todo}</li>`);
  $('input[name="todo"]').val(""); //초기화
});
