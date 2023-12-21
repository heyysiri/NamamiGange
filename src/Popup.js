// Popup.js
import React from "react";
import "./Popup.css";

const MyPopup = ({ onClose, children }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default MyPopup;
