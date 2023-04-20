const socket = io();

const message = document.getElementById("message");
const nickname = document.getElementById("nickname");
const sendButton = document.getElementById("send");
const output = document.getElementById("output");
const feedback = document.getElementById("feedback");

sendButton.addEventListener("click", () => {
  socket.emit("send_message", message.value);
  message.value = "";
});

message.addEventListener("keypress", () => {
  socket.emit("typing", nickname.value);
});

nickname.addEventListener("keypress", () => {
  socket.emit("new_user", nickname.value, (data) => {
    if (data) {
      document.getElementById("nickname-container").innerHTML = "";
      document.getElementById("chat-window").style.display = "block";
    } else {
      alert("That nickname is already taken!");
    }
  });
});

socket.on("new_message", (data) => {
  if (data.nickname === nickname.value) {
    output.innerHTML +=
      '<p class="right"><strong>' +
      data.nickname +
      ": </strong>" +
      data.message +
      "</p>";
  } else {
    output.innerHTML +=
      '<p class="left"><strong>' +
      data.nickname +
      ": </strong>" +
      data.message +
      "</p>";
  }
  feedback.innerHTML = "";
});

socket.on("typing", (data) => {
  feedback.innerHTML = "<p><em>" + data + " is typing a message...</em></p>";
});

socket.on("usernames", (data) => {
  let html = "";
  for (let i = 0; i < data.length; i++) {
    html += "<p>" + data[i] + "</p>";
  }
  document.getElementById("users").innerHTML = html;
});
