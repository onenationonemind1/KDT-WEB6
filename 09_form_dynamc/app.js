const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs"); // view engine 등록
app.use("/views", express.static(__dirname + "/views")); // ejs를 담을 views 폴더 경로 설정
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱(분석)
app.use(express.json()); // json 형태로 데이터를 주고 받음

// localhost:PORT/ 접속했을 때, index.ejs 를 보여주겠다
app.get("/", function (req, res) {
  // views/index.ejs 파일을 찾아서 응답
  const myTitle = "09_form_dynamics!!!";
  res.render("index", { title: myTitle });
});

// 1-1. /ajax get 요청
app.get("/ajax", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// 1-2. /ajax post 요청
app.post("/ajax", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// 1-3. /params get 요청
app.get("/axios", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// 1-4. /params post 요청
app.post("/axios", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// 실습1
app.get("/practice", function (req, res) {
  res.render("practice1");
});

// 실습2
app.get("/practice1", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// 실습2
app.post("/practice1", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, function () {
  console.log("웹 서버 실행!!");
  console.log(`http://localhost:${PORT}`);
});
