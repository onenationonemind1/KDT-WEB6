const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs"); // view engine 등록
app.use("/views", express.static(__dirname + "/views")); // ejs를 담을 views 폴더 경로 설정
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱(분석)
app.use(express.json()); // json 형태로 데이터를 주고 받음

// 라우팅(routing): 경로 설정
// 브라우저에서 어떤 url로 접속했을 때 어떤 페이지를 보여줄 것인가!!!

// localhost:PORT/ 접속했을 때, index.ejs 를 보여주겠다
app.get("/", function (req, res) {
  // views/index.ejs 파일을 찾아서 응답
  const myTitle = "폼 실습을 합시다~~~";
  res.render("index", { title: myTitle });
});

// app.get("/getForm", function (req, res) {
//   // console.log(req); // { xx: {},  yy: {}, ... query: { id: 'sean', pw: '1234' }}
//   console.log(req.query.id); // { id: 'sean', pw: '1234' }
//   //   res.send("get 요청 성공!!!");
//   const idid = req.query.id;
//   const pwpw = req.query.pw;
//   res.render("result.ejs", {
//     title: "GET 요청폼 결과 확인하기",
//     id1: req.query.id,
//     pw1: req.query.pw,
//   }); //확장자 쓰나안쓰나 같음.
// });

// app.post("/postForm", function (req, res) {
//   console.log(req.body); // { id: 'apple', pw: '1234' }
//   //   res.send("post 요청 성공!!!");
//   res.render("result", {
//     title: "POST요청 폼 결과 확인하기",
//     id2: req.body.id,
//     pw2: req.body.pw,
//   });
// });

//Form validation
app.get("/getForm", function (req, res) {
  // console.log(req); // { xx: {},  yy: {}, ... query: { id: 'sean', pw: '1234' }}
  console.log(req.query.id); // { id: 'sean', pw: '1234' }
  //   res.send("get 요청 성공!!!");
  const idid = req.query.id;
  const pwpw = req.query.pw;
  res.render("result.ejs", {
    title: "GET 요청폼 결과 확인하기",
    id2: req.query.id,
    pw2: req.query.pw,
  }); //확장자 쓰나안쓰나 같음.
});

app.post("/postForm", function (req, res) {
  console.log(req.body); // { id: 'apple', pw: '1234' }
  //   res.send("post 요청 성공!!!");
  res.render("result", {
    title: "POST요청 폼 결과 확인하기",
    id2: req.body.id,
    pw2: req.body.pw,
  });
});

app.listen(PORT, function () {
  console.log("웹 서버 실행!!");
  console.log(`http://localhost:${PORT}`);
});

app.get("/test1", function (req, res) {
  // views/index.ejs 파일을 찾아서 응답
  const myTitle2 = "실습1";
  res.render("test1", { myTitle2: "실습1" });
});

app.get("/test2", function (req, res) {
  // views/index.ejs 파일을 찾아서 응답
  const myTitle2 = "실습2";
  res.render("test2", { myTitle2: "실습1" });
});

//결과창
app.get("/result1", function (req, res) {
  const myTitle2 = "결과";
  const query = req.query;
  console.log(query);
  res.render("result1", {
    title: "테스트 결과",
    myTitle2: myTitle2,
    qqq: query,
    // id2: req.query.username,
    // pw2: req.query.pw,
  }); //확장자 쓰나안쓰나 같음.
});

//결과창
app.post("/result2", function (req, res) {
  const myTitle2 = "결과";
  const query = req.body;
  console.log(query);
  res.render("result2", {
    title: "실습2 폼 전송 완료",
    myTitle2: myTitle2,
    qqq: query,
  }); //확장자 쓰나안쓰나 같음.
});

app.get("/test3", function (req, res) {
  res.render("test3");
});

app.get("/result3", function (req, res) {
  res.render("result3", {
    title: "Reuslt3",
    qqq: req.query,
  });
});

// app.post("/result3", function (req, res) {render("result3",
