import videos from "../data/Videos.jsx";
import VideoCard from "../components/VideoCard.jsx";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}