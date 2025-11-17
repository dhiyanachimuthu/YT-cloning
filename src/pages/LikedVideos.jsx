import { useLikes } from "../context/LikeContext.jsx";
import VideoCard from "../components/VideoCard.jsx";
import "./LikedVideos.css";

export default function LikedVideos() {
  const { liked } = useLikes();

  return (
    <div className="liked-list">
      <h2>Liked Videos</h2>

      <div className="liked-grid">
        {liked.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
