const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const PORT = 8001;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  console.log("client connected");
  res.render("chat");
});

//io.on(x,y)
// x = event , y = callback:연결되면 함수실행
// : socekt 과 관련된 통신 작업 처리
io.on("connection", (socket) => {
  // "connetion" event
  // - 클라이언트가 접속했을 때 발생하는 이벤트
  // - 콜백으로 socket 객체를 제공 : (socket)이라는 매개변수를 받아온 후 적절히 활용 가능

  // 최초 입장시 (연결)
  // socket.id: 소켓 고유 아이디 -> socket은 웹 페이지 별로 id 생성!
  // => 크롬에서 탭 2개 띄우면 socket.id는 각각 생김 (2개)
  console.log(" 🔗🟢 Server Socket Connected >>", socket.id);

  //[실습 1]
  socket.on("hello", (data) => {
    console.log(`${data.who} : ${data.msg}`);

    //server가 client에게 보내는 작업
    socket.emit("helloKr", { who: "hello", msg: "안녕~~" });
  });

  //[실습 2]
  socket.on("study", (data) => {
    console.log(`${data.who} : ${data.msg}`);

    //server가 client에게 보내는 작업
    socket.emit("studyKr", { who: "study", msg: "공부합시다." });
  });

  //[실습 3]
  socket.on("bye", (data) => {
    console.log(`${data.who} : ${data.msg}`);

    //server가 client에게 보내는 작업
    socket.emit("byeKr", { who: "bye", msg: "수고하셧습니다." });
  });
});
// 주의) socket을 사용할 때는 http.listen으로 port를 열어야 함!!
http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// req 객체
// req.session: 사용자별로 해당 객체 안에 세션 정보 유지됨

// 세션쿠키 설정
// req.session.키 = 값

// 세션쿠키 사용
// req.session.키

// 세션 삭제
// req.session.destroy(콜백)
