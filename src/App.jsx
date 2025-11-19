import "./App.css";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";

import Home from "./pages/Home.jsx";
import SearchResults from "./pages/SearchResults.jsx";
import VideoPlayer from "./pages/VideoPlayer.jsx";
import Login from "./pages/Login.jsx";
import CreateAccount from "./pages/CreateAccount.jsx";
import LikedVideos from "./pages/LikedVideos.jsx";
import SavedVideos from "./pages/SavedVideos.jsx";

export default function App() {
  const location = useLocation();

  // 🔥 new login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className="app">
      {/* SHOW LOGIN OR CREATE ACCOUNT ONLY WHEN NOT LOGGED IN */}
      {!isLoggedIn &&
        (location.pathname === "/login" ||
          location.pathname === "/create-account")}

      {/* Navbar shows only when logged in */}
      {isLoggedIn && <Navbar toggleSidebar={toggleSidebar} />}

      <div
        className={`app-layout ${
          isLoggedIn
            ? sidebarOpen
              ? "sidebar-open"
              : "sidebar-closed"
            : ""
        }`}
      >
        {/* Sidebar only when logged in */}
        {isLoggedIn && <Sidebar open={sidebarOpen} />}

        {/* ROUTES */}
        <div className="app-pages">
          <Routes>
            {/* NOT LOGGED IN → redirect everything to LOGIN */}
            {!isLoggedIn ? (
              <>
                <Route
                  path="/login"
                  element={<Login onLogin={() => setIsLoggedIn(true)} />}
                />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
              </>
            ) : (
              <>
                {/* LOGGED IN ROUTES */}
                <Route path="/" element={<Home />} />
                <Route path="/search/:query" element={<SearchResults />} />
                <Route path="/video/:id" element={<VideoPlayer />} />
                <Route path="/liked" element={<LikedVideos />} />
                <Route path="/saved" element={<SavedVideos />} />

                {/* BLOCK LOGIN & CREATE ACCOUNT */}
                <Route path="/login" element={<Navigate to="/" />} />
                <Route path="/create-account" element={<Navigate to="/" />} />

                {/* ANY OTHER INVALID PATH */}
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </div>
  );
}
