const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const activeStreams = new Map(); // Map to store active streams

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('authenticate', (userType) => {
    if (userType === 'chef') {
      // If the user is a chef, store their socket ID as an active stream
      activeStreams.set(socket.id, true);
    }

    // ... (additional authentication logic if needed)

    // Continue with the rest of the code
    // Handle streaming data, heartbeat, and other logic
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
    activeStreams.delete(socket.id);
  });

  // Handle streaming data
  socket.on('stream', (data) => {
    if (activeStreams.has(socket.id)) {
      io.emit('stream', data); // Broadcast the stream to all connected clients
    }
  });

  // Heartbeat mechanism
  setInterval(() => {
    io.emit('heartbeat', Array.from(activeStreams.keys()));
  }, 5000); // Adjust the interval as needed
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
