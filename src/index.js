import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Favicon from "react-favicon";
import Icon from "./assets/favicon.svg";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Favicon url={Icon} />
    <App />
  </React.StrictMode>
);
