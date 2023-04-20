const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { username: req.query.username });
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("chat message", (msg) => {
    io.emit("chat message", { username: msg.username, message: msg.message });
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
