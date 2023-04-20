// frontend js

// socket 사용을 위해서 객체 생성
let socket = io.connect();

socket.on("connect", () => {
  console.log("🔗🟢 Client Socket Connected", socket.id);
});

//[실습 1]
function sayHello() {
  // client -> server 정보 보내기.
  // socket.emit(event, data): 데이터 "전송"
  // => event 라는 이름으로 data 를 전송.
  socket.emit("hello", { who: "client1", msg: "hello" }); //hello 라는 이름으로 {} 사이의 객체를 전송한다.

  // socket.on(event, callback): 데이터 "받음"
  // event에 대해서 정보를 받아 callback 함수 실행
  socket.on("helloKr", (data) => {
    const p = document.querySelector("#form-server");
    p.textContent = `${data.who} : ${data.msg}`;
  });
}

//[실습 2]
function sayStudy() {
  socket.emit("study", { who: "client2", msg: "공부합시다." });

  socket.on("studyKr", (data) => {
    const p = document.querySelector("#form-server");
    p.textContent = `${data.who} : ${data.msg}`;
  });
}

function sayBye() {
  socket.emit("bye", { who: "client3", msg: "공부합시다." });

  socket.on("byeKr", (data) => {
    const p = document.querySelector("#form-server");
    p.textContent = `${data.who} : ${data.msg}`;
  });
}
