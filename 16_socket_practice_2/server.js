const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
//
const axios = require("axios");
const openaiApiKey = "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";
const apiUrl = "https://api.openai.com/v1/";
async function generateText(prompt) {
  const response = await axios.post(
    apiUrl + "engines/davinci-codex/completions",
    {
      prompt: prompt,
      max_tokens: 50,
      n: 1,
      stop: "\n",
    },
    {
      headers: {
        Authorization: `Bearer ${openaiApiKey}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.choices[0].text.trim();
}

(async () => {
  const prompt = "How to connect ChatGPT API in Node.js?";
  const text = await generateText(prompt);
  console.log(text);
})();
//
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index");
});

const users = {};

io.on("connection", (socket) => {
  socket.on("new-user", (username) => {
    users[socket.id] = username;
    socket.broadcast.emit("user-connected", username);
  });

  socket.on("send-message", (message, to) => {
    if (to === "Everyone") {
      socket.broadcast.emit("message", {
        message: message,
        username: users[socket.id],
        to: to,
      });
    } else {
      io.to(Object.keys(users).find((id) => users[id] === to)).emit("message", {
        message: message,
        username: users[socket.id],
        to: to,
      });
    }
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("user-disconnected", users[socket.id]);
    delete users[socket.id];
  });
});

http.listen(8000, () => {
  console.log("Listening on port 3000");
});
