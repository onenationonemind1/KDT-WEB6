/**
 * Module dependencies.
 */

var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io").listen();

app.set("port", process.env.PORT || 3000);
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("./public"));

server.listen(app.get("port"), function () {
  console.log(`connection complete. Open page localhost:${app.get("port")}`);
});

app.get("/", function (req, res) {
  res.render("chat");
});

io.on("connection", function (socket) {
  func1(0);

  function func1(i) {
    setTimeout(function () {
      if (i < 20) {
        socket.emit("news", i);
        func1(i + 1);
      }
    }, 1000);
  }

  socket.on("msg", function (data) {
    console.log("date from client : " + data);
  });
});

http.listen(3001, () => {
  console.log("Server started on port 3000");
});
