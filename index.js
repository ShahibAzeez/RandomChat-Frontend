import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");

  const startChat = () => {
    if (username) {
      router.push(`/chat?user=${username}`);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to RandomChat</h1>
      <input 
        type="text" 
        placeholder="Enter your name" 
        onChange={(e) => setUsername(e.target.value)} 
        style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }}
      />
      <button 
        onClick={startChat} 
        style={{ padding: "10px 20px", fontSize: "16px" }}>
        Start Chat
      </button>
    </div>
  );
}