const path = require('path');

const http = require('http');
const server = http.createServer();
const socketio = require('socket.io');

const express = require('express');
const app = express();

const gameData = require('./gameData');

server.on('request', app);
const io = socketio(server);

io.on('connection', (socket) => {
  console.log('A new client has connected!');
  console.log('Socket id: ', socket.id);

  socket.on('disconnect', () => {
    console.log('Client ' + socket.id + ' has disconnected');
  });
});


server.listen(1337, () => {
  console.log('The server is listening intently on port 1337!');
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'browser')));

app.get('/api/game', (req, res) => {
  res.json(gameData);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
