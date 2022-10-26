import React from "react";
import ReactDOM from "react-dom/client";
//Here we import our App.js export
import App from "./App";
import "./index.css";
//npm i bootstrap --save for auto-download of dependency and to
//have access to Bootstrap in our styles
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // Our App component defines App
  <App />
);
