// Code: Main entry point for the application
// Description: This file is the main entry point for the application. It renders the App component inside a BrowserRouter component. The BrowserRouter component is used to provide routing capabilities to the application. The App component is the root component of the application and contains all the other components.

import React from "react";
import ReactDOM from "react-dom/client";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
