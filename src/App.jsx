import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
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

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/create-account";

  return (
    <div className="app">

      {!hideLayout && <Navbar toggleSidebar={toggleSidebar} />}

      <div
        className={`app-layout ${
          !hideLayout
            ? sidebarOpen
              ? "sidebar-open"
              : "sidebar-closed"
            : ""
        }`}
      >

        {!hideLayout && <Sidebar sidebarOpen={sidebarOpen} />}

        <div className="app-pages">
          <Routes>

            {/* Default page */}
            <Route path="/" element={<Home />} />

            {/* Auth pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />

            {/* Other pages */}
            <Route path="/search/:query" element={<SearchResults />} />
            <Route path="/video/:id" element={<VideoPlayer />} />
            <Route path="/liked" element={<LikedVideos />} />
            <Route path="/saved" element={<SavedVideos />} />

          </Routes>
        </div>
      </div>
    </div>
  );
}
