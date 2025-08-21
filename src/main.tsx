import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Footer from "./components/Footer.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Footer />
  </StrictMode>
);
