import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";   // 👈 default export, no curly braces

const newuser="chai";
const reactele=React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me ',
    newuser
    
);

ReactDom.createRoot(document.getElementById("root")).render(
    reactele
);
