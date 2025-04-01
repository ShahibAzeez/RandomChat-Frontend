import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("https://randomchat-backend.vercel.app"); // Backend URL

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receive-message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
  }, []);

  const sendMessage = () => {
    socket.emit("send-message", message);
    setMessages((prev) => [...prev, `You: ${message}`]);
    setMessage("");
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Random Chat</h2>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input 
        type="text" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        style={{ padding: "10px", fontSize: "16px", width: "80%" }}
      />
      <button 
        onClick={sendMessage} 
        style={{ padding: "10px 20px", fontSize: "16px", marginLeft: "10px" }}>
        Send
      </button>
    </div>
  );
}