import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";

// ICONS
import homeIcon from "../assets/assets/home.png";
import exploreIcon from "../assets/assets/explore.png";
import subsIcon from "../assets/assets/subscription.png";
import libraryIcon from "../assets/assets/library.png";
import historyIcon from "../assets/assets/history.png";
import likedIcon from "../assets/assets/like.png";
import musicIcon from "../assets/assets/music.png";
import gamingIcon from "../assets/assets/sports.png";
import moviesIcon from "../assets/assets/entertainment.png";
import newsIcon from "../assets/assets/news.png";

export default function YouTubeSidebar({ open }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className={`yt-sidebar ${open ? "open" : "closed"}`}>
      <div className="yt-sidebar-inner">

        <div
          className={`yt-item ${isActive("/") ? "active" : ""}`}
          onClick={() => navigate("/")}
        >
          <img src={homeIcon} className="yt-icon" alt="home" />
          <span className="yt-label">Home</span>
        </div>

        <div
          className={`yt-item ${isActive("/explore") ? "active" : ""}`}
          onClick={() => navigate("/explore")}
        >
          <img src={exploreIcon} className="yt-icon" alt="explore" />
          <span className="yt-label">Explore</span>
        </div>

        <hr />

        <div
          className={`yt-item ${isActive("/subscriptions") ? "active" : ""}`}
          onClick={() => navigate("/subscriptions")}
        >
          <img src={subsIcon} className="yt-icon" alt="subs" />
          <span className="yt-label">Subscriptions</span>
        </div>

        <div
          className={`yt-item ${isActive("/library") ? "active" : ""}`}
          onClick={() => navigate("/library")}
        >
          <img src={libraryIcon} className="yt-icon" alt="library" />
          <span className="yt-label">Library</span>
        </div>

        <div
          className={`yt-item ${isActive("/history") ? "active" : ""}`}
          onClick={() => navigate("/history")}
        >
          <img src={historyIcon} className="yt-icon" alt="history" />
          <span className="yt-label">History</span>
        </div>

        <div
          className={`yt-item ${isActive("/liked") ? "active" : ""}`}
          onClick={() => navigate("/liked")}
        >
          <img src={likedIcon} className="yt-icon" alt="liked" />
          <span className="yt-label">Liked Videos</span>
        </div>

        <hr />

        <div
          className={`yt-item ${isActive("/music") ? "active" : ""}`}
          onClick={() => navigate("/music")}
        >
          <img src={musicIcon} className="yt-icon" alt="music" />
          <span className="yt-label">Music</span>
        </div>

        <div
          className={`yt-item ${isActive("/gaming") ? "active" : ""}`}
          onClick={() => navigate("/gaming")}
        >
          <img src={gamingIcon} className="yt-icon" alt="gaming" />
          <span className="yt-label">Gaming</span>
        </div>

        <div
          className={`yt-item ${isActive("/movies") ? "active" : ""}`}
          onClick={() => navigate("/movies")}
        >
          <img src={moviesIcon} className="yt-icon" alt="movies" />
          <span className="yt-label">Movies</span>
        </div>

        <div
          className={`yt-item ${isActive("/news") ? "active" : ""}`}
          onClick={() => navigate("/news")}
        >
          <img src={newsIcon} className="yt-icon" alt="news" />
          <span className="yt-label">News</span>
        </div>

      </div>
    </aside>
  );
}
