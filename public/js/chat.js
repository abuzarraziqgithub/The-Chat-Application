const socket = io();

socket.emit("greetings", "Hello world");

socket.on("response", (message) => {
  console.log(message);
});
