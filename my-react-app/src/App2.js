import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import MyPopup from "./Popup";
// import QuizNo1 from "./Quiz1";
import QuizNo2 from "./Quiz2";
// import HelloAnimation from "./hello";
import TalkingAnimation from "./talking";
import NoddingAnimation from "./nodding";

// const host = "localhost:5005"; // Change this to your desired localhost host

function App2() {
 const [messages1, setMessages1] = useState([]);
 const [inputText1, setInputText1] = useState("");
 const messagesRef1 = useRef(null);
 const [showPopup2, setShowPopup2] = useState(false);
 const [reloadPage1, setReloadPage1] = useState(false);
 const [synthesis1, setSynthesis1] = useState(null);
 const [isTTSActive1, setIsTTSActive1] = useState(false);
 const [initialMessageSent1, setInitialMessageSent1] = useState(false);

  useEffect(() => {
    if (!window.speechSynthesis) {
      alert("Your browser does not support Text-to-Speech.");
    } else {
      setSynthesis1(window.speechSynthesis);
      
    }
   
    return () => {
      if (synthesis1) {
        synthesis1.cancel();
      }
    };
  }, [synthesis1]);

  useEffect(() => {
    if (!initialMessageSent1) {
      sendInitialMessage1();
      setInitialMessageSent1(true);
    } }, [initialMessageSent1]);

 
 const handlePopupToggle2 = () => {
  setShowPopup2(!showPopup2);
};
 const handleMessageFromRasa1 = (message) => {
  if (message === "जारी रखने के लिए 'जारी रखें' टाइप करें") {
    // Show the popup when the trigger message is received
    setShowPopup2(true);
  }
  else if(message==="अपनी रेटिंग और सुझाव के लिए धन्यवाद!"){
    setReloadPage1(true);
  }
};
useEffect(() => {
    if (reloadPage1) {
      // Reload the page when reloadPage state changes
      window.location.reload(true);
    }
  }, [reloadPage1]);

  const sendInitialMessage1 = async () => {
    const initialMessage1 = "Hindi";
    setMessages1([{ text: initialMessage1, sender: "user" }]);
    const handleTextToSpeech2 = (text) => {
      if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance();
        speech.text = text;
        speech.lang = 'hi-IN'; // Change according to your language
        speech.pitch = 0.6; // Change the pitch (example value)
        speech.rate = 1.0; // Change the rate (example value)
        speech.volume = 1.0;
    
        window.speechSynthesis.speak(speech);
        setIsTTSActive1(true);
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
        body: JSON.stringify({ message: initialMessage1 }),
      });
  
      const botResponses = await response.json();
  
      botResponses.forEach((response) => {
        const botMessage = response.text || response.message || ''; // Extract text from different possible response keys
        setMessages1((prevMessages) => [
          ...prevMessages,
          { text: botMessage, sender: "bot" },
        ]);
        handleTextToSpeech2(botMessage);
      });
    } catch (error) {
      console.error('Error sending initial message to Rasa:', error);
    }
  };
  

 const handleSendMessage1 = async () => {
  if (inputText1.trim() !== "") {
    setMessages1((prevMessages) => [
      ...prevMessages,
      { text: inputText1, sender: "user" },
    ]);
    setInputText1("");
    const handleTextToSpeech3 = (text) => {
      if (synthesis1 && synthesis1.speak) {
        const speech = new SpeechSynthesisUtterance();
        setIsTTSActive1(true);
        speech.text = text;
        speech.lang = "hi-IN"; // Change according to your language
        speech.pitch = 0.6; // Change the pitch (example value)
        speech.rate = 1.0; // Change the rate (example value)
        speech.volume = 1.0;

        synthesis1.speak(speech);
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
        body: JSON.stringify({ message: inputText1 }),
      });

      const botResponses = await response.json();

      botResponses.forEach((response) => {
        setMessages1((prevMessages) => [
          ...prevMessages,
          { text: response.text, sender: "bot" },
        ]);
        handleTextToSpeech3(response.text);
        handleMessageFromRasa1(response.text);
        if (response.text === "TriggerPopupActionForQuiz2") {
          setShowPopup2(true); // Set showPopup2 for QuizNo2
        }
      });
    } catch (error) {
      console.error('Error sending message to Rasa:', error);
    }
  }
};


 const handleSpeechToText1 = () => {
    if (window.hasOwnProperty("webkitSpeechRecognition")) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = "hi-IN";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.start();

      recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript;
        setInputText1(transcript);
        handleSendMessage1();
      };

      recognition.onerror = function (event) {
        console.log("Error occurred in recognition: ", event.error);
      };
    } else {
      alert("Your browser does not support speech recognition.");
    }
    
 };
 useEffect(() => {
  if (messagesRef1.current) {
    messagesRef1.current.scrollTo({
      behavior: "smooth",
      top: messagesRef1.current.scrollHeight,
    })
  }
}, [messages1]);
 return (
    <div className="app2">
      {showPopup2 && <div className="chat-overlay"/>}
      <div className="talking-animation">
       {isTTSActive1 ? <TalkingAnimation /> : <NoddingAnimation/>}
       </div>
      {/* document.getElementByClassName('talking-animation') = <TalkingAnimation />  */}
      
      <div className="chat-room">
        <div className="messages" ref={messagesRef1}>
          {messages1.map((message, index) => (
            <div key={index} className={message.sender}>
              <div className="chat-bubble border round">{message.text}</div>
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type a message..."
            value={inputText1}
            onChange={(e) => setInputText1(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage1()}
          />
          <button onClick={handleSendMessage1} className="button1"></button>
          <button onClick={handleSpeechToText1} className="button2"></button>
          <button onClick={handlePopupToggle2} className="button3"></button>
        </div>
      </div>
      {showPopup2 && (
        <MyPopup onClose={() => setShowPopup2(false)}>
          <QuizNo2 onClose={() => setShowPopup2(false)} />
        </MyPopup>
      )}
    </div>
 );
}

export default App2;