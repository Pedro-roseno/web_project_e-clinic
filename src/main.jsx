import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./components/pages/App.css";
import "../src/styles/global.css";
import App from "./components/pages/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
