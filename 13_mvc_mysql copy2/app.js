const express = require("express"); // express 모듈을 가져옴
const app = express(); // express 애플리케이션을 생성
const PORT = 8001; // 포트 번호를 8000으로 설정

app.set("view engine", "ejs"); // view engine 등록
app.use("/views", express.static(__dirname + "/views")); // ejs를 담을 views 폴더 경로 설정
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱(분석)
app.use(express.json()); // json 형태로 데이터를 주고 받음

const indexRouter = require("./routes");
app.use("/", indexRouter);
const indexRouter = require("./routes/user");
app.use("/user", userRouter);

app.listen(PORT, function () {
  console.log("웹 서버 실행!!"); // 웹 서버 실행!! 출력

  console.log(`http://localhost:${PORT}`); // http://localhost:포트번호 출력
});
