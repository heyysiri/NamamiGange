import React, { useState, useRef, useEffect } from "react";
import MyPopup from "./Popup";
import "./styles.css";

const host = ""; // Change this to your desired localhost host

function App() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  //const [isCursorOverChat, setIsCursorOverChat] = useState(false);
  const messagesRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };


  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputText, sender: "user" },
        { text: "I am a chatbot response.", sender: "bot" },
      ]);

      setInputText("");
    }
  };

  const handleSpeechToText = () => {
    // Your speech-to-text logic here
  };

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTo({
        behavior: "smooth",
        top: messagesRef.current.scrollHeight,
      });
    }
  }, [messages]);

  return (
    <div
      className="app"
      //onMouseEnter={() => setIsCursorOverChat(true)}
      //onMouseLeave={() => setIsCursorOverChat(false)}
    >
      {showPopup && <div className="chat-overlay"/>}
      <div className="chat-room">
        <div className="messages" ref={messagesRef}>
          {messages.map((message, index) => (
            <div key={index} className={message.sender}>
              <div className="chat-bubble border round">{message.text}</div>
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type a message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button onClick={handleSendMessage} className="button1"></button>
          <button onClick={handleSpeechToText} className="button2"></button>
          <button onClick={handlePopupToggle} className="button3"></button>
        </div>
      </div>
      {showPopup && (
        <MyPopup onClose={handlePopupToggle}>
        </MyPopup>
      )}
    </div>

  );
}

export default App;
