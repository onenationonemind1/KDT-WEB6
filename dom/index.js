console.log("hi");

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);

// 1. getElemetById
console.log(document.getElementById("green"));
console.log(document.getElementById("red"));

// 2. getElementByClassName
console.log(document.getElementsByClassName("pink"));
console.log(document.getElementsByClassName("others"));
console.log(document.getElementsByClassName("others")[0]);

// 3.getELlementByTagName
console.log(document.getElementsByTagName("div"));

// 4. getElemntsByName
console.log(document.getElementsByName("id"));

// 5. querySelector
console.log("selecor");
console.log(document.querySelector(".pink"));
console.log(document.querySelector(".others"));
console.log(document.querySelector("#green"));
console.log(document.querySelector("div"));
console.log(document.querySelector("[name=id]"));

// 6. queryySelectorAll
console.log("selectorAll");
console.log(document.querySelectorAll(".pink"));
console.log(document.querySelectorAll("input"));

console.log(document.querySelectorAll(".pink")[0]);
console.log(document.querySelectorAll(".pink")[1]);
console.log(document.querySelectorAll(".pink")[2]);
console.log(document.querySelectorAll(".pink")[3]);

let pink = document.querySelectorAll(".pink");
console.log(pink);

console.log("array: pink[3]");
console.log(pink[3]);

console.log("for of ");
for (const i of pink) {
  console.log(i);
}
