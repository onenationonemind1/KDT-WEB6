const socket = io();

const chatForm = document.getElementById("chat-form");
const messageInput = document.getElementById("message-input");
const messagesList = document.getElementById("messages");

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageInput.value.trim();
  if (message) {
    socket.emit("chat-message", message);
    messageInput.value = "";
  }
});

socket.on("chat-message", (message) => {
  const li = document.createElement("li");
  li.textContent = message;
  messagesList.appendChild(li);
});
