const express = require("express"); // express 모듈을 가져옴
const app = express(); // express 애플리케이션을 생성
const PORT = 8000; // 포트 번호를 8000으로 설정

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require("./routes/index");
// 폴더 까지만 접근할 경우엔 자동으로 index.js 파일을 찾아간다.
// 따라서 /index 파일일 경우 생략 가능하다.
app.use("/", indexRouter);
// '/~~~~~~~~' 모든 라우터를 /routes/index.js에 정의해 놨으니,
// /routes/index.js 이 파일을 읽어보면 된다.

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
