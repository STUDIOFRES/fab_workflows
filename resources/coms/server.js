const WebSocket = require("ws");
let index = 0;
const wss = new WebSocket.Server({ port: 8080 });
console.log("start socket client in Grasshopper");
wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    console.log("received: %s", message);
  });

  setInterval(() => {
    ws.send(index);
    index++;
  }, 250);
});
