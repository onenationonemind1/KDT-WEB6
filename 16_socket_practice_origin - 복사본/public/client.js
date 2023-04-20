const roomId = "1234";
const username = prompt("Enter your name:");

const socket = io();
socket.emit("join-room", roomId, username);

const chatForm = document.getElementById("chat-form");
const messageInput = document.getElementById("message-input");
const messagesList = document.getElementById("messages");

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageInput.value.trim();
  if (message) {
    socket.emit("chat-message", message);
    const li = document.createElement("li");
    li.textContent = `${username}: ${message}`;
    messagesList.appendChild(li);
    messageInput.value = "";
  }
});

socket.on("chat-message", (username, message) => {
  const li = document.createElement("li");
  li.textContent = `${username}: ${message}`;
  messagesList.appendChild(li);
});

socket.on("user-connected", (username) => {
  const li = document.createElement("li");
  li.textContent = `${username} has joined the chat`;
  messagesList.appendChild(li);
});

socket.on("user-disconnected", (username) => {
  const li = document.createElement("li");
  li.textContent = `${username} has left the chat`;
  messagesList.appendChild(li);
});
