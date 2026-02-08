import React from "react";

import Chatmessage from "./Chatmessage";



function App() {

  const [messages, setMessages] = React.useState([
    { message: "Welcome to vina created simple chatbot.you can able to see current date and time,flips a coin,rolls a tie.", sender: "robot", key: "id1" },
  ]);

  const [text, setText] = React.useState("");

  const chatmessagesRef = React.useRef(null);

  // Auto scroll to bottom on new message
  React.useEffect(() => {
    const container = chatmessagesRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  function sendmessage() {
    if (text.trim() === "") return;

    const response = chatbot.getResponse(text);

    setMessages(prev => [
      ...prev,
      {
        message: text,
        sender: "user",
        key: crypto.randomUUID()
      },
      {
        message: response,
        sender: "robot",
        key: crypto.randomUUID()
      }
    ]);

    setText("");
  }

  return (
    <>
      {/* Chat Messages Scroll Box */}
      <div
        ref={chatmessagesRef}
        className="mess"
        style={{
          height: "300px",
          overflowY: "auto",
          border: "1px solid black",
          padding: "10px",
          marginBottom: "10px"
        }}
      >
        {messages.map((msg) => (
          <Chatmessage
            key={msg.key}
            message={msg.message}
            sender={msg.sender}
          />
        ))}
      </div>

      {/* Input Section */}
      <input
        placeholder="type a message"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={sendmessage}>Send message</button>
    </>
  );
}


export default App