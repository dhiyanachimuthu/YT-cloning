import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

import homeIcon from "../assets/assets/home.png";
import likedIcon from "../assets/assets/like.png";
import saveIcon from "../assets/assets/save.png";

export default function Sidebar({ sidebarOpen }) {
  const navigate = useNavigate();

  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
      <div className="sidebar-inner">
        <div className="menu-item" onClick={() => navigate("/")}>
          <img src={homeIcon} className="icon" alt="home" />
          <span className="label">Home</span>
        </div>

        <div className="menu-item" onClick={() => navigate("/liked")}>
          <img src={likedIcon} className="icon" alt="liked" />
          <span className="label">Liked Videos</span>
        </div>

        <div className="menu-item" onClick={() => navigate("/saved")}>
          <img src={saveIcon} className="icon" alt="saved" />
          <span className="label">Saved Videos</span>
        </div>
      </div>
    </aside>
  );
}
