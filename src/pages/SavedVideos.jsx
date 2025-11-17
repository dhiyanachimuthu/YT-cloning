import { useSaved } from "../context/SavedContext.jsx";
import VideoCard from "../components/VideoCard.jsx";
import "./SavedVideos.css";

export default function SavedVideos() {
  const { saved } = useSaved();

  return (
    <div className="saved-list">
      <h2>Saved Videos</h2>

      <div className="saved-grid">
        {saved.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
