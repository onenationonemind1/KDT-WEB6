let num1 = 0;
let num2 = 0;
let width = 0;
function rectangle(num1, num2) {
  if (num1 > num2) {
    width = num1;
  } else {
    width = num2;
  }
  console.log(num1 * num2);
}

let num1_1 = 0;
let num2_2 = 0;

function triangle(num1_1, num2_2) {
  console.log((num1_1 * num2_2) / 2);
}

let num1_c = 0;

function circle(num1_c) {
  console.log(num1_c * num1_c * Math.PI);
}

rectangle(5, 5);
triangle(3, 6);
circle(5);
