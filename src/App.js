import React, { useState } from "react";
import "./styles.css";

const host = ""; // Change this to your desired localhost host

function App() {
 const [messages, setMessages] = useState([]);
 const [inputText, setInputText] = useState("");

 const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputText, sender: "user" }
      ]);

      setInputText("");

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "I am a chatbot response.", sender: "bot" }
        ]);
      }, 500);
    }
 };

 const handleSpeechToText = () => {
    if (window.hasOwnProperty("webkitSpeechRecognition")) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = "en-US";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.start();

      recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        handleSendMessage();
      };

      recognition.onerror = function (event) {
        console.log("Error occurred in recognition: ", event.error);
      };
    } else {
      alert("Your browser does not support speech recognition.");
    }
 };

 return (
    <div className="app">
      <div className="chat-room">
        <div className="messages">
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
          <button onClick={handleSendMessage} class="button1">{" "}</button>
          <button onClick={handleSpeechToText} class="button2">{" "}</button>
        </div>
      </div>
    </div>
 );
}

export default App;