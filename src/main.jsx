import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { LikeProvider } from "./context/LikeContext.jsx";
import { SavedProvider } from "./context/SavedContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <LikeProvider>
        <SavedProvider>
          <App />
        </SavedProvider>
      </LikeProvider>
    </AuthProvider>
  </BrowserRouter>
);
