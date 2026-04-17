import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./styles/variables.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/decorative-lines.css";
import "./styles/section-title.css";
import "./styles/services-section.css";
import "./styles/card-section.css";
import "./styles/contact-section.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
