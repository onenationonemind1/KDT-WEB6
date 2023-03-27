// /* val() */
// function getValue() {
//   let value = $("input").val();
//   // let value = document.querySelector('input').value;
//   alert(value);
// }
// function setValue() {
//   $("input").val("설정!!!!");
// }
// /* css() */
// function changeCssJS() {
//   let span = document.querySelector("span");
//   span.style = "font-size: 20px; color:red;";
// }
// function changeCssJquery() {
//   $("span").css("font-size", "40px");
//   $("span").css("color", "blue");
//   console.log($("span").css("color"));
// }
// /* attr() */
// function changeAttrJS() {
//   let a = document.querySelector("a");
//   a.setAttribute("href", "https://www.naver.com");
// }
// function changeAttrJquery() {
//   $("a").attr("href", "https://www.daum.net");
// }
// /* text() */
// function changeTextJS() {
//   let p = document.querySelector(".p-text");
//   p.innerText = "<b>js</b> 로 바꿨습니다.";
// }
// function changeTextJquery() {
//   $(".p-text").text("<b>jquery</b>로 바꿨습니다.");
// }
// /* html() */
// function changeHtmlJS() {
//   let p = document.querySelector(".p-html");
//   p.innerHTML = "<b>js</b> 로 바꿨습니다.";
// }
// function changeHtmlJquery() {
//   $(".p-html").html("<b>jquery</b>로 바꿨습니다.");
// }

// /* 요소 추가 */
// /* append() */

// function apeendJS() {
//   let li = document.createElement("li");
//   li.innerText = "append()로 추가된 js";
//   let ul = document.querySelector("ul");
//   ul.apeend(li);
// }

// function appendJquery() {
//   $(".colors").append("<li>append()로 추가된 jquery</li>");
// }

// function prependJS() {}

// function prependJquery() {}

// function afterJS(){
//     let green = document.querySelector('.green')
//     let li = document.createElement('li')
//     li.ineerTest= 'after로 추가된 js 요소'
//     green.after(li)'
// }
// function before(){

// }

// /* 요소 삭제 */
// /* remove() */
// function removeJS(){
//     let lu = document.querySelector('#12')
//     lu.remove()
// }

// function removeJquery(){
//     $('#li2').remove
// }

// function emtyJS(){
//     let nums = document.querySelector('ul.nums')
//     nums.innerHTML = '';
// }

// function emtyJquery(){

// }

/* 요소 탐색 */
function findParent() {
  console.log($(".child2").parent());
}
function findParents() {
  // parentss(): 조상요소 전부 변환
  // js 는 없는 메소드
  console.log($(".child2").parents());
}
function findNext() {
    //next() : nextSilbing
    console.log($('.child2').next()0
}
function findPrev() {
    //
    console.log($('.child2').next())
}
function findChildren() {
    //children() : 자식 요소 모두 변환
    console.log($('.parent').children())
    console.log(document.querySelector('.parent').children)
}

//클래스 조작
function addClass(){
    $('#hi').addClass('fs-50') // 클래스 모두 제거
}

function hasClss(){
    console.log($('#hi').hasClss('fs-50'))
}

function toggleClass(){
    $('#hi').toggleClass('bg-pink')
}

function removeClass(){
    
}