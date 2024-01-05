// index.js
import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import App1 from "./App1";
import App2 from "./App2";
import App3 from "./App3";

const container = document.getElementById('root');
const root = createRoot(container);

const Index = () => {
    const [currentTab, setCurrentTab] = useState("home");

    const handleMessageFromApp3 = (language) => {
        setCurrentTab(language === "english" ? "home" : "home"); // Set the tab based on language

        root.render(
            language === "english" ? <App1 tab={currentTab} /> : <App2 tab={currentTab} />
        );
    };

    return <App3 handleMessageFromApp3={handleMessageFromApp3} />;
};

root.render(<Index />);
