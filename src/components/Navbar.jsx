import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

import logo from "../assets/assets/yt-logo.png";
import searchIcon from "../assets/assets/search.png";
import hamburger from "../assets/assets/menu.png";

import bellIcon from "../assets/assets/notification.png";
import uploadIcon from "../assets/assets/upload.png";
import micIcon from "../assets/assets/voice-search.png";
import userIcon from "../assets/assets/user_profile.jpg";

export default function Navbar({ toggleSidebar }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div className="navbar">

      {/* LEFT GROUP */}
      <div className="left-group">
        <button className="hamburger-btn" onClick={toggleSidebar}>
          <img src={hamburger} alt="menu" />
        </button>

        <div className="logo-area" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" />
          <h2>YouTube</h2>
        </div>
      </div>

      {/* SEARCH */}
      <div className="search-area">
        <input
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            if (!search.trim()) return;
            navigate(`/search/${search}`);
          }}
        >
          <img src={searchIcon} alt="search" />
        </button>
      </div>

      {/* RIGHT SIDE ICONS */}
      <div className="right-icons">

        <button className="icon-btn">
          <img src={micIcon} alt="mic" />
        </button>

        <button className="icon-btn">
          <img src={uploadIcon} alt="upload" />
        </button>

        <button className="icon-btn">
          <img src={bellIcon} alt="notifications" />
        </button>

        <button className="profile-btn" onClick={() => navigate("/profile")}>
          <img src={userIcon} alt="profile" />
        </button>

      </div>

    </div>
  );
}