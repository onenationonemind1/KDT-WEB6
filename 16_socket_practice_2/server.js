const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

// Set the view engine to ejs
app.set("view engine", "ejs");

// Serve static files from the public directory
app.use(express.static("public"));

// Serve the index page
app.get("/", (req, res) => {
  res.render("index");
});

// Listen for socket connections
io.on("connection", (socket) => {
  console.log("A user connected   ID :", `${socket.id}`);

  // Listen for chat messages
  socket.on("chat-message", ({ nickname, message }) => {
    console.log(`${nickname}::: ${message}`);
    io.emit("chat-message", { nickname, message });
  });

  //Listen for chat message - test
  socket.on("notice", ({ nickname, message }) => {
    io.emit("notice", { nickname, message });
  });

  // Disconnect event
  socket.on("disconnect", (nickname) => {
    console.log("A user disconnected");
  });

  socket.on("direct-message", ({ sender, recipient, message }) => {
    console.log(`${sender} -> ${recipient}: ${message}`);
    const recipientSocket = io.sockets.sockets.find(
      (s) => s.nickname === recipient
    );
    if (recipientSocket) {
      recipientSocket.emit("direct-message", { sender, message });
    }
  });
});

// Start the server
http.listen(3002, () => {
  console.log("Server started on port 3000");
});
