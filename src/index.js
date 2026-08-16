const app = require("express")();
const server = require("http").createServer(app);
const socketio = require("socket.io");
const io = socketio(server);

const port = 3000;

server.listen(port, () => console.log("Server listening at port ", port));
