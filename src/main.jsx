// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// If using OnboardingContext
// import { OnboardingProvider } from "./context/OnboardingContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <OnboardingProvider>  // optional, if you use context */}
      <App />
    {/* </OnboardingProvider> */}
  </React.StrictMode>
);
