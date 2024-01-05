import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import MyPopup from "./Popup";
import QuizNo1 from "./Quiz1";
// import QuizNo2 from "./Quiz2";

// const host = "localhost:5005"; // Change this to your desired localhost host

function App1() {
 const [messages, setMessages] = useState([]);
 const [inputText, setInputText] = useState("");
 const messagesRef = useRef(null);
 const [showPopup1, setShowPopup1] = useState(false);
 const [reloadPage, setReloadPage] = useState(false);
 const [synthesis, setSynthesis] = useState(null);

  useEffect(() => {
    if (!window.speechSynthesis) {
      alert("Your browser does not support Text-to-Speech.");
    } else {
      setSynthesis(window.speechSynthesis);
    }

    return () => {
      if (synthesis) {
        synthesis.cancel();
      }
    };
  }, [synthesis]);


 const handlePopupToggle1 = () => {
   setShowPopup1(!showPopup1);
 };

 const handleMessageFromRasa = (message) => {
  if (message === "Type 'cont' to continue") {
    setShowPopup1(true);
  }
  else if(message==="Thank you for you rating and suggestions!"){
    setReloadPage(true);
  }
  
};
useEffect(() => {
  if (reloadPage) {
    // Reload the page when reloadPage state changes
    window.location.reload(true);
  }
}, [reloadPage]);

const handleSendMessage = async () => {
  if (inputText.trim() !== "") {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputText, sender: "user" },
    ]);

    setInputText("");
    
    const handleTextToSpeech = (text) => {
      if (synthesis && synthesis.speak) {
        const speech = new SpeechSynthesisUtterance();
        speech.text = text;
        speech.lang = "en-US"; // Change according to your language
        speech.pitch = 0.6; // Change the pitch (example value)
        speech.rate = 1.0; // Change the rate (example value)
        speech.volume = 1.0;
        synthesis.speak(speech);
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
        handleMessageFromRasa(response.text);
        if (response.text === "TriggerPopupAction") {
          setShowPopup1(true);
        } 
        //else if (response.text === "TriggerPopupActionForQuiz2") {
        //   setShowPopup2(true); // Set showPopup2 for QuizNo2
        // }
      });
    } catch (error) {
      console.error('Error sending message to Rasa:', error);
    }
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
 useEffect(() => {
  if (messagesRef.current) {
    messagesRef.current.scrollTo({
      behavior: "smooth",
      top: messagesRef.current.scrollHeight,
    })
  }
}, [messages]);

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
          <button onClick={handleSendMessage} className="button1"></button>
          <button onClick={handleSpeechToText} className="button2"></button>
          <button onClick={handlePopupToggle1} className="button3"></button>
          {/* <button onClick={handlePopupToggle2} className="button3"></button> */}
        </div>
      </div>
      {showPopup1 && (
        <MyPopup onClose={() => setShowPopup1(false)}>
          <QuizNo1 onClose={() => setShowPopup1(false)} />
        </MyPopup>
      )}
      {/* {showPopup2 && (
        <MyPopup onClose={() => setShowPopup2(false)}>
          <QuizNo2 onClose={() => setShowPopup2(false)} />
        </MyPopup>
      )} */}
    </div>
 );
}

export default App1;