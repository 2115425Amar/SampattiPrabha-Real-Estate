// SocketContext.jsx
import { createContext, useState, useEffect, useContext } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "./AuthContext";

// Create context
export const SocketContext = createContext();

// Provider
export const SocketContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const backendUrl = import.meta.env.VITE_SOCKET_URL;
    
    // Establish socket connection
    const newSocket = io(backendUrl, {
      withCredentials: true,
    });

    setSocket(newSocket);

    // Clean up on unmount
    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (currentUser && socket) {
      socket.emit("newUser", currentUser.id);
    }
  }, [currentUser, socket]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};


//  End-to-End Example Flow:
// User logs in → currentUser.id becomes available
// Frontend connects to Socket.IO and emits newUser
// Server adds user to the onlineUser list
// User A sends a message → emits sendMessage
// Server looks up receiver’s socket ID → emits getMessage to them
// Receiver's client gets the real-time message update