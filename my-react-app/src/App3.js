import React, { useState } from "react";
import "./styles.css";
import HelloAnimation from "./hello";

function App3({ handleMessageFromApp3 }) {
const [showHelloAnimation, setShowHelloAnimation] = useState(true);

  const handleLanguageSelection = (language) => {
    handleMessageFromApp3(language); // Navigate to the respective language page
    setShowHelloAnimation(false); // Hide HelloAnimation when a language is selected
  };

  return (
    <div className="app" id="bgimg">
      <div className="textbox-gif"/>
      <div className="hello-animation">
      {showHelloAnimation && <HelloAnimation />} 
      </div>
      <div className="language-buttons">
        <button className="eng" onClick={() => handleLanguageSelection("English")}>English</button>
        <button className="hi" onClick={() => handleLanguageSelection("Hindi")}>हिन्दी</button>
      </div>
      </div>
    
    
  );
}

export default App3;
