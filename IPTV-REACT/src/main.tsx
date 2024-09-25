import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./CSS/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <p>Hier gaat tekst</p>
    </BrowserRouter>
  </React.StrictMode>
);
