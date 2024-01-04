import React from "react";
import "./styles.css";

function App3({ handleMessageFromApp3 }) {
    const handleLanguageSelection = (language) => {
        handleMessageFromApp3(language.toLowerCase());
    };

    return (
        <div className="app">
            <div className="language-buttons">
                <button className = "eng" onClick={() => handleLanguageSelection("english")}>English</button>
                <button className = "hi" onClick={() => handleLanguageSelection("hindi")}>Hindi</button>
            </div>
        </div>
    );
}

export default App3;
