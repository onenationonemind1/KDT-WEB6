const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("chat-message", (message) => {
    io.emit("chat-message", message);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

//room
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("join-room", (roomId, username) => {
    socket.join(roomId);
    socket.to(roomId).broadcast.emit("user-connected", username);

    socket.on("chat-message", (message) => {
      io.to(roomId).emit("chat-message", username, message);
    });

    socket.on("disconnect", () => {
      io.to(roomId).emit("user-disconnected", username);
    });
  });
});

server.listen(3000, () => {
  console.log("Server started on port 3000");
});
