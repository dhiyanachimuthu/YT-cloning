import "./VideoCard.css";
import { useNavigate } from "react-router-dom";
import { useLikes } from "../context/LikeContext.jsx";
import { useSaved } from "../context/SavedContext.jsx";

export default function VideoCard({ video }) {
  const navigate = useNavigate();
  const { toggleLike, liked } = useLikes();
  const { toggleSave, saved } = useSaved();

  return (
    <div className="video-card">
      <img
        src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
        onClick={() => navigate(`/video/${video.id}`)}
      />

      <h3>{video.title}</h3>

      <div className="video-actions">
        <button onClick={() => toggleLike(video)}>
          {liked.some((v) => v.id === video.id) ? "Unlike" : "Like"}
        </button>

        <button onClick={() => toggleSave(video)}>
          {saved.some((v) => v.id === video.id) ? "Unsave" : "Save"}
        </button>
      </div>
    </div>
  );
}