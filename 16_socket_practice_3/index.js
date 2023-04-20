const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const ejs = require("ejs");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

let users = [];

io.on("connection", (socket) => {
  console.log("New user connected");

  socket.on("new_user", (data, callback) => {
    if (data in users) {
      callback(false);
    } else {
      callback(true);
      socket.nickname = data;
      users[socket.nickname] = socket;
      updateNicknames();
    }
  });

  function updateNicknames() {
    io.emit("usernames", Object.keys(users));
  }

  socket.on("send_message", (data) => {
    io.emit("new_message", {
      message: data,
      nickname: socket.nickname,
    });
  });

  socket.on("disconnect", (data) => {
    if (!socket.nickname) return;
    delete users[socket.nickname];
    updateNicknames();
  });
});

server.listen(3003, () => {
  console.log("Server started on port 3000");
});
