import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App /> //앱이야 //수정이 중복되면 어떻게 될까?
  // </React.StrictMode>
);

reportWebVitals();
