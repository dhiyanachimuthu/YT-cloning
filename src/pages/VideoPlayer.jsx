import { useParams } from "react-router-dom";
import videos from "../data/Videos.jsx";
import Comments from "../components/Comments.jsx";
import "./VideoPlayer.css";

export default function VideoPlayer() {
  const { id } = useParams();
  const video = videos.find((v) => v.id === id);

  return (
    <div className="video-player-page">
      <iframe
        width="100%"
        height="450"
        src={`https://www.youtube.com/embed/${id}`}
        allowFullScreen
      ></iframe>

      <h2>{video.title}</h2>

      <Comments />
    </div>
  );
}
