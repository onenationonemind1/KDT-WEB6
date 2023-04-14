const socket = io();
const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");
const messages = document.getElementById("messages");
const nickname = prompt("Enter your nickname");
const itsMe = nickname;
const nickDeduplication = [];

const directMessageForm = document.getElementById("direct-message-form");
const directMessageInput = document.getElementById("direct-message-input");

directMessageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = directMessageInput.value;
  if (message.trim() !== "") {
    const recipient = prompt("Enter recipient's nickname");
    if (recipient.trim() !== "") {
      socket.emit("direct-message", { sender: nickname, recipient, message });
      directMessageInput.value = "";
    }
  }
});

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageInput.value;
  if (message.trim() !== "") {
    socket.emit("chat-message", { nickname, message });
    messageInput.value = "";
  }
});

function addMessageToPage(nickname, message, isMyMessage) {
  const messageElement = document.createElement("li");
  if (itsMe === nickname) {
    document.getElementById("who").innerHTML = `${nickname}님 환영합니다!!!`;
  }

  // messageElement.innerHTML = `<strong class="msg">${nickname}:</strong> <span class="msg">${message}</span>`;
  messageElement.innerHTML = `<strong"> ${nickname} </strong> :  ${message}`;

  messageElement.classList.add("message");
  if (itsMe === nickname) {
    messageElement.classList.add("my-message");
  } else {
    messageElement.classList.add("other-message");
  }
  messages.appendChild(messageElement);
  // messages.appendChild(messageElement);
  messages.scrollTop = messages.scrollHeight;
}

socket.on("notice", ({ nickname, message }) => {
  console.log(`this is notice ${nickname}`);
  addMessageToPage(nickname, message, true);
});

socket.on("chat-message", ({ nickname, message }) => {
  console.log(nickname);
  addMessageToPage(nickname, message, true);
});
socket.on("disconnect", ({ nickname }) => {
  console.log("A user disconnected");
});
