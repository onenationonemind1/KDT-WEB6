// public/client.js

const socket = io();
const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");
const messages = document.getElementById("messages");
const nickname = prompt("Enter your nickname");
const itsMe = nickname;
const messageList = document.getElementById("who");
let nickBox = [];
let messageBox = [];
let flag = 0;

if (nickname === "") {
  console.log("beam");
  alert("아이디 값을 입력해 주세요.");
  window.location.reload();
}

if (nickname !== null) {
  // user pressed "OK" button
  console.log("coclco", nickname);

  socket.emit("enter-message", { nickname });
} else {
  // user pressed "Cancel" button
  console.log("User canceled the prompt.");
}

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageInput.value;
  if (message.trim() !== "") {
    socket.emit("chat-message", { nickname, message });
    messageInput.value = "";
  }
});

messageForm.addEventListener("submit", (e) => {
  const message = messageInput.value;
  socket.emit("enter-message", { nickname, message });
});

function addMessageToPage(nickname, message, isMyMessage) {
  const messageElement = document.createElement("li");
  if (itsMe === nickname) {
    // document.getElementById("who").innerHTML = `${nickname}님 환영합니다!!!`;
  }

  // messageElement.innerHTML = `<strong class="msg">${nickname}:</strong> <span class="msg">${message}</span>`;
  messageElement.innerHTML = `<strong> ${nickname} </strong> :  ${message}`;

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

function chatMessageToPage(txt) {
  const messageElement = document.createElement("li");
  if (itsMe === nickname) {
    // document.getElementById("who").innerHTML = `${nickname}님 환영합니다!!!`;
  }

  // messageElement.innerHTML = `<strong class="msg">${nickname}:</strong> <span class="msg">${message}</span>`;
  messageElement.innerHTML = `<strong> ${txt} </strong> : 포인트가 1점 상승했습니다.`;

  messageElement.classList.add("chat-message");
  messages.appendChild(messageElement);
  // messages.appendChild(messageElement);
  messages.scrollTop = messages.scrollHeight;
}

function enterMessageToPage(nickname) {
  const messageElement = document.createElement("li");
  if (itsMe === nickname) {
    // document.getElementById("who").innerHTML = `${nickname}님 환영합니다!!!`;
  }

  messageElement.innerHTML = `<strong> ${nickname} </strong> 님이 입장하셨습니다. `;

  messageElement.classList.add("message-enter");
  messageElement.classList.add("my-message-enter");

  messages.appendChild(messageElement);

  messages.scrollTop = messages.scrollHeight;
}

function listToPage(txt) {
  const messageElement = document.createElement("li");

  messageElement.innerHTML = `<strong> ${txt} </strong> `;

  messageElement.classList.add("message-enter");
  messageElement.classList.add("my-message-enter");

  messageList.appendChild(messageElement);
}

socket.on("enter-message", ({ nickname }) => {
  nickBox.push(nickname);
  let count = nickBox.filter((item) => item === nickname).length;
  console.log(count);

  if (count === 1) {
    enterMessageToPage(nickname);
  }
});

socket.on("chat-message", ({ nickname, message }) => {
  console.log(nickname, message);
  addMessageToPage(nickname, message, true);
});

socket.on("openai", ({ message }) => {
  addMessageToPage(message, message, true);
  console.log(message);
});

socket.on("disconnect", ({ nickname }) => {
  console.log("A user disconnected");
});

//chat gpt
socket.on("chatGptAns", (result) => {
  let result_str = result;
  result_str = result_str.replace(/\s/g, "");
  console.log(result_str, "@@@@@@@@@@");
  listToPage(result_str);
  chatMessageToPage(result_str);
  addMessageToPage(result_str, result_str, true);
});

document.getElementById("message-input").onclick = function () {
  const msg = document.getElementById("message-input").value;
  socket.emit("client_msg", msg);

  //-------
  messageElement = document.createElement("li");
  messageElement.innerHTML = `<strong"> ${msg} </strong>`;
  messageElement.classList.add("message");
  if (itsMe === nickname) {
    messageElement.classList.add("my-message");
  } else {
    messageElement.classList.add("other-message");
  }
  messages.appendChild(messageElement);
  // messages.appendChild(messageElement);
  messages.scrollTop = messages.scrollHeight;
};
