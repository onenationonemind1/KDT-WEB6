// 실습2. Promise -> async/await 기본코드
// call, back, hell 함수: 실습 23의 함수와 동일
function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name); // 작업 성공시 then(name)
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back"); // 작업 성공시 then('back')
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

async function run() {
  try {
    const name = await call("John");
    console.log(name + " 반가워");
    const back1 = await back();
    console.log(back1 + "을 실행했구나.");
    const result = await hell();
    console.log("여기는 " + result);
  } catch (error) {
    console.log(error);
  }
}

run();
