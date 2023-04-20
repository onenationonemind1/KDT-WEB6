const socket = io();

// Send message
document.getElementById("message-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = document.getElementById("message-input").value;
  socket.emit("chat message", msg);
  document.getElementById("message-input").value = "";
});

// Receive message
socket.on("chat message", (msg) => {
  const li = document.createElement("li");
  li.textContent = `${msg.nickname}: ${msg.message}`;
  if (msg.id === socket.id) {
    li.classList.add("me");
  } else {
    li.classList.add("other");
  }
  document.getElementById("messages").appendChild(li);
});

// Prompt for nickname
const nickname = prompt("Enter your nickname:");
socket.emit("nickname", nickname);
