const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const realId = "banana";
const realPw = "4321";
///// Routing (주소 설정)
app.get("/", function (req, res) {
  res.render("index1");
});

app.get("/practice1", function (req, res) {
  res.send(req.query);
});

app.post("/practice2", function (req, res) {
  console.log(req.body);
  res.send("서버가 응답을 했음.");

  if (realId === req.body.userId && realPw === req.body.userPw) {
    res.send({ isLogin: true, userInfo: req.body });
  } else {
    res.send({ inLogin: false });
  }
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
