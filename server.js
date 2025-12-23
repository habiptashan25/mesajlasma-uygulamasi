const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

// public klasörünü dışarı aç
app.use(express.static("public"));

// ana sayfa
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// socket.io
io.on("connection", (socket) => {
  console.log("Kullanıcı bağlandı");

  socket.on("mesaj", (msg) => {
    io.emit("mesaj", msg);
  });

  socket.on("disconnect", () => {
    console.log("Kullanıcı ayrıldı");
  });
});

// render için PORT
const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
  console.log("Sunucu çalışıyor:", PORT);
});
