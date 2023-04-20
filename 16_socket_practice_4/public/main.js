const socket = io();

const roomForm = document.querySelector("#room-form");
const joinButton = document.querySelector("#join-button");
const chatRoom = document.querySelector("#chat-room");
const messageForm = document.querySelector("#message-form");
const messageInput = document.querySelector("#message-input");
const messagesContainer = document.querySelector("#messages");

roomForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const room = document.querySelector("#room-input").value.trim();
  if (room) {
    socket.emit("joinRoom", room);
    roomForm.style.display = "block";
    chatRoom.style.display = "block";
  }
});

joinButton.addEventListener("click", () => {
  roomForm.submit();
});

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = messageInput.value.trim();
  if (message) {
    const data = {
      room: document.querySelector("#room-input").value.trim(),
      message,
    };
    socket.emit("sendMessage", data);
    messageInput.value = "";
    appendMessage(data, true);
  }
});

socket.on("message", (data) => {
  appendMessage(data, false);
});

function appendMessage(data, isOwnMessage) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message");
  if (isOwnMessage) {
    messageElement.classList.add("own-message");
  }
  messageElement.innerHTML = `<strong>${data.username}:</strong> ${data.message}`;
  messagesContainer.appendChild(messageElement);
}
