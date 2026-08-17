const path = require("path");
const express = require("express");
const socketio = require("socket.io");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));

io.on("connection", (socket) => {
  console.log("New websocket connection");

  socket.on("greetings", (message) => {
    console.log(message);
  });

  socket.emit("response", "Hi there!");
});

server.listen(port, () => console.log("Server listening at port ", port));
