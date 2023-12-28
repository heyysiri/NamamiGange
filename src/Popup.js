// Popup.js
import React from "react";
import "./Popup.css";
import Quiz from "./Quiz1"

const MyPopup = ({ onClose, children }) => {
  
  
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {children}
        <Quiz />
      </div>
    </div>
  );
};

export default MyPopup;
