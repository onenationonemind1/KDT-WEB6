const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
let messageBox = [];

/////////////////////////////////

const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function runCompletion(txt) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: txt,
  });
  console.log("#########", completion.data.choices[0].text);

  let a = completion.data.choices[0].text;
  return a;
}
////////////////////////////////

// Set the view engine to ejs
app.set("view engine", "ejs");

// Serve static files from the public directory
app.use(express.static("public"));

// Serve the index page
app.get("/", (req, res) => {
  res.render("index");
});

// Listen for socket connections
io.on("connect", (socket) => {
  console.log(socket.id);
  io.on("connection", (socket) => {
    console.log(socket.id);
  });
  // console.log("A user connected   ID :", `${socket.id}`);

  socket.on("enter-message", ({ nickname }) => {
    console.log(`enter-message ${nickname}`);
    io.emit("enter-message", { nickname });
  });

  // Listen for chat messages
  socket.on("chat-message", ({ nickname, message }) => {
    console.log(`chat-message- ${nickname}: ${message}`);
    messageBox.push(message);
    console.log(messageBox, messageBox.length);
    if (messageBox.length === 3) {
      messageBox.join(",");
      console.log(messageBox);
      let result = runCompletion(
        `Summarize the topic of this conversation and answer in one word. ${messageBox}`
      )
        .then((result) => {
          console.log("11111111", result, "2222");
          console.log("result", result, "2222");
          io.emit("chatGptAns", result);
        })
        .catch((error) => {
          console.error(error);
        });

      console.log("11111111", result);
      io.emit("chatGptAns", result);
      messageBox = [];
    }
    io.emit("chat-message", { nickname, message });
  });

  // OpenAi
  socket.on("openai", ({ message }) => {
    console.log(`${message}`);
    io.emit("openai", { message });
  });

  // Disconnect event
  socket.on("disconnect", (nickname) => {
    console.log("A user disconnected");
  });
});

// Start the server
http.listen(3003, () => {
  console.log("Server started on port 3000");
});
