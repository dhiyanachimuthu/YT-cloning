import { useParams } from "react-router-dom";
import videos from "../data/Videos.jsx";
import VideoCard from "../components/VideoCard.jsx";
import "./SearchResults.css";

export default function SearchResults() {
  const { query } = useParams();

  const filtered = videos.filter((v) =>
    v.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-results">
      <h2>Search Results for "{query}"</h2>

      <div className="results-grid">
        {filtered.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
