import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Providers } from "./store/Providers";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <Router>
        <App />
      </Router>
      <Toaster position="top-center" />
    </Providers>
  </React.StrictMode>
);
