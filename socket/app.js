import express from "express";
import {Server} from "socket.io"
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config(); 

const app = express();
const server = http.createServer(app);

// CORS setup
app.use(cors({
  origin: [process.env.CLIENT_URL || "http://localhost:5173"],
  methods: ["GET", "POST"],
  credentials: true
}));

// Optional test route
app.get("/", (req, res) => {
  res.send("Socket.io server is running!");
});

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
    credentials: true
  }
});

const PORT = process.env.PORT || 4000;


let onlineUser = [];

const addUser = (userId, socketId) => {
    const userExits = onlineUser.find((user) => user.userId === userId);
    if (!userExits) {
      onlineUser.push({ userId, socketId });
    }
  };
  
  const removeUser = (socketId) => {
    onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
  };
  
  const getUser = (userId) => {
    return onlineUser.find((user) => user.userId === userId);
  };
  
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
      }
       else {
        console.log(`User with ID ${receiverId} is not connected.`);
      }
    });
  
    socket.on("disconnect", () => {
      removeUser(socket.id);
      console.log("User disconnected:", socket.id);
    });
  });
  
io.listen(PORT, () => {
  console.log(`Socket.io server listening on port ${PORT}`);
});