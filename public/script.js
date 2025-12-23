const socket = io();

function gonder() {
  const input = document.getElementById("mesaj");
  socket.emit("mesaj", input.value);
  input.value = "";
}

socket.on("mesaj", (msg) => {
  const li = document.createElement("li");
  li.textContent = msg;
  document.getElementById("mesajlar").appendChild(li);
});