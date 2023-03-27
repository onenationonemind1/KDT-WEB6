console.log("hi");

let sum = 0;
let cnt = 1;
while (cnt < 100) {
  if (cnt % 2 === 0 || cnt % 3 === 0) {
    sum = sum + cnt;
  }
  cnt += 1;
}
console.log(sum);
