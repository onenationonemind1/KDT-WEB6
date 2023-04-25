// reduce(callback)
// 배열의 각 요소에 주어진 리듀서 함수를 실행하고 하나의 결과값을 반환
const numbers = [1, 2, 3, 4, 5];

// 1+2+3+4+5
const sum = numbers.reduce((acc, currentValue) => {
  return acc + currentValue;
});
console.log(sum);

const sum2 = numbers.reduce((acc, currentValue, idx) => {
  console.log(`=====${idx}=====`);
  console.log(`act :${acc}=====`);
  console.log(`current value ${currentValue}=====`);
});

console.log(sum2);
