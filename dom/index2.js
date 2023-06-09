console.log("hi");

let div1 = document.getElementById("div1");
console.log(div1);

div1.innerHTML = "여기는 <b>첫번째</b> 태그 입니다. &hearts";
console.log(div1.innerHTML);

div1.innerText = "     여기는 <b>첫번째</b> 태그입니다. &hearts";
console.log(div1);
div1.innerText = "            여기는 <b>첫번째</b> 태그입니다. &hearts";
console.log(div1.textContent);
// innderText vs. textContent => 태그가 그대로 보임
// - textContent : 공백 문자를 그대로 반환
// - IE9 이전 버전에서는 사용이 안됨.
// - innerText
//   -  공백 문자 제거

// div1.innerHTML = "<ul><li>1</li><li>2</li><li>3</li><ul>";

// 속성 변경

let naver = document.getElementById("naver");

//console.log(naver)
naver.setAttribute("href", "https://www.google.com");
console.log(document.getElementById("pooh").getAttribute("src"));

// 직접 접근
console.log(document.getElementById("pooh").id);
naver.href = "#";

// css 지정
let h1 = document.querySelector("h1");
let list = document.querySelector("li");

console.log(h1);

// list[0].style.backgorundcolor = "purple";
// for (let li of list) {
//   li.style.backgorundcolor = "yellow";
//   li.stsyle.color == "#444";
//   li.style.fonstize = "1.5rem";
// }

// 2. classList
console.log(h1.classList);
h1.classList.add("add-h1");

//classList.add
//classList.remve : 클스지거
//classList.contains : sodyddl dlTsmswldjqtsmwkmf========k======================================================================================================================================================================================================

//노드 찾기
let friends = document.querySelector("#friends");
let tigger = document.querySelector("#tigger");
console.log(friends);
console.log(tigger);

// console.log("==자식 노드");
// console.log(friends.children);
// console.log(friends.children[0]);

// console.log("==부모 노드");
// console.log(tigger.parentNode);

// console.log("==형제 노드");
// console.log(tigger.previousElementSibling);
// console.log(tigger.nextElementSibling.nextElementSibling);

//요소 생성, 추가, 삭제
let container = document.querySelector(".container");
console.log(container);

let p = document.createElement("p");
p.innerText = "새로 추가된 p";
p.style.fontWeight = "700";
p.style.backgroundColor = "red";
console.log(container);

// 요소.append : 선택된 요소의맨 마지막 자식으로 추가됨.
container.append(p);

let p2 = document.createElement("p");
let p3 = document.createElement("p");
p2.innerText = "새로 추가된 p2";
p3.textContent = "p3";
p2.classList.add("p-2");
p3.classList.add("p-3");

container.append(p3, p2);

// 요소.prepend : 선택된 요소의 맨 첫번째 자식으로 추가됨.
let li1 = document.createElement("li");
li1.textContent = "캉가";
// friends.prepend(li1);

//before & after
// before: 선택된 요소의 앞으로 추가.
// after : 선택된 요소의 뒤로 추가.

let h3 = document.createElement("h3");
h3.innerText = "h3";
h1.after(h3);

let h2 = document.createElement("h2");
h2.innerText = "h2";
h1.before(h2);

//요소 삭제
// remove & removeChild
// -요소.remove() : 선택된 요소 삭제
// -요소.removeChild(자식 요소) : 요소의 '자식요소'가 삭제됨.

let firstli = document.querySelector("li");
console.log(firstli);
let ul = firstli.parentNode;
console.log(ul);

//firstli.remove();
ul.removeChild(firstli);

//요소 생성, 추가, 삭제
// let container = document.querySelector(".container");
// console.log(container);

// let p = document.createElement("p");
// p.innerText = "새로 추가된 p";
// p.style.fontWeight = "700";
// p.style.backgroundColor = "red";
// console.log(container);

let container2 = document.querySelector(".container");
console.log(container);

let div = document.createElement("div");
p.innerHTML = '<img src="./background (2).jpg" alt="">';
