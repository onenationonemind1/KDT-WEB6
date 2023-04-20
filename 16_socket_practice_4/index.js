const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

io.on("connection", (socket) => {
  console.log("A user connected.");

  socket.on("joinRoom", (room) => {
    console.log(`User joined room: ${room}`);
    socket.join(room);
  });

  socket.on("sendMessage", (data) => {
    console.log(`Message received: ${data.message}`);
    io.to(data.room).emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected.");
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
