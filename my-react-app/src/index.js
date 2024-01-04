import React from "react";
import { createRoot } from 'react-dom/client';
import App3 from "./App3";
import App1 from "./App1";
import App2 from "./App2";

const container = document.getElementById('root');
const root = createRoot(container);

const handleMessageFromApp3 = (message) => {
    if (message === "english") {
        root.render(<App1 tab="home" />);
    } else if (message === "hindi") {
        root.render(<App2 tab="home" />);
    } else {
        root.render(<App1 tab="home" />);
    }
};

root.render(<App3 handleMessageFromApp3={handleMessageFromApp3} />);
