import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Root } from "../src/root";
import { ToastContainer } from "react-toastify";
import "react-toastify"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
    <Root />
  </StrictMode>
);
