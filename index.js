const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 3000;
const io = require('socket.io')(server);
const path = require('path');

app.use(express.static(path.join(__dirname + '/public')));

io.on('connection', (socket) => {
  console.log(`${socket.id} has connected`);

  socket.on('chat', (message) => {
    console.log(`${socket.id} has sent: ${message}`);
    io.emit('chat', message);
  });
});


server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
