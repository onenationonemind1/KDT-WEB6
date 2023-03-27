const express = require("express");
const app = express();

app.listen(8080, function () {
  console.log("listening on 8080");
});

// xx 경로로 들어오면 xx를 보내줌.
//누군가가 /pet 으로 방문하면.
// pet 관련된 안내문을 띄워주자.

app.get("/pet", function (req, res) {
  res.send("펫 용품 쇼핑할 수있는 페이지입니다..");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
