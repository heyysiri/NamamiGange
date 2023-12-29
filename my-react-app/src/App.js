import React, { useState } from "react";
import "./styles.css";

// const host = "localhost:5005"; // Change this to your desired localhost host

function App() {
 const [messages, setMessages] = useState([]);
 const [inputText, setInputText] = useState("");

 const handleSendMessage = async () => {
  if (inputText.trim() !== "") {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputText, sender: "user" },
    ]);

    setInputText("");
    const handleTextToSpeech = (text) => {
      if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance();
        speech.text = text;
        speech.lang = 'hi-IN'; // Change according to your language
        speech.pitch = 0.6; // Change the pitch (example value)
        speech.rate = 1.0; // Change the rate (example value)
        speech.volume = 1.0;
        window.speechSynthesis.speak(speech);
      } else {
        alert('Your browser does not support Text-to-Speech.');
      }
    };
    
    try {
      const response = await fetch('http://localhost:5005/webhooks/rest/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputText }),
      });

      const botResponses = await response.json();

      botResponses.forEach((response) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: response.text, sender: "bot" },
        ]);
        handleTextToSpeech(response.text);
      });
    } catch (error) {
      console.error('Error sending message to Rasa:', error);
    }
  }
};


 const handleSpeechToText = () => {
    if (window.hasOwnProperty("webkitSpeechRecognition")) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = "hi-IN";
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
          <button onClick={handleSendMessage} className="button1">{" "}</button>
          <button onClick={handleSpeechToText} className="button2">{" "}</button>
        </div>
      </div>
    </div>
 );
}

export default App;