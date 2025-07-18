import express from "express";
import { Server } from "socket.io";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const server = http.createServer(app);

// CORS configuration
app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: ["GET", "POST"],
  credentials: true
}));

// Test route
app.get("/", (req, res) => {
  res.send("Socket.io server is running!");
});

// Attach Socket.io to HTTP server
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Use the port from environment only (important for Azure)
const PORT = process.env.PORT;
console.log("Using PORT:", PORT);

// Start HTTP server
server.listen(PORT, () => {
  console.log(`Socket.io server running on port ${PORT}`);
});

// Store online users
let onlineUser = [];

// Add user
const addUser = (userId, socketId) => {
  const userExists = onlineUser.find((user) => user.userId === userId);
  if (!userExists) {
    onlineUser.push({ userId, socketId });
  }
};

// Remove user
const removeUser = (socketId) => {
  onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
};

// Get user by ID
const getUser = (userId) => {
  return onlineUser.find((user) => user.userId === userId);
};

// Socket connection logic
io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  socket.on("newUser", (userId) => {
    addUser(userId, socket.id);
    console.log("Online users:", onlineUser);
  });

  socket.on("sendMessage", ({ receiverId, data }) => {
    const receiver = getUser(receiverId);
    if (receiver) {
      io.to(receiver.socketId).emit("getMessage", data);
    } else {
      console.log(`User with ID ${receiverId} is not connected.`);
    }
  });

  socket.on("disconnect", () => {
    removeUser(socket.id);
    console.log("User disconnected:", socket.id);
  });
});
