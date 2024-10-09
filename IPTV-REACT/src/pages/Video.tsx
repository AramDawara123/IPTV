import React from "react";
import { useLocation } from "react-router-dom";
import "../CSS/Video.css";

interface Movie {
  name: string;
  cast: string;
  releaseDate: string;
  plot: string;
  rating: number;
  genre: string;
  episode_run_time: number;
}

const Video: React.FC = () => {
  const location = useLocation();
  const { videoUrl, movie }: { videoUrl?: string; movie?: Movie } = location.state || {};

  return (
    <div className="video-container">
      <h1 className="video-title">Watch Trailer</h1>
      {videoUrl ? (
        <iframe
          width="100%"
          height="500"
          src={videoUrl.replace("watch?v=", "embed/")}
          title="Video trailer"
          allowFullScreen
        />
      ) : (
        <p>No video available.</p>
      )}

      {movie && (
        <div className="movie-details">
          <h2>{movie.name}</h2>
          <p><strong>Cast:</strong> {movie.cast}</p>
          <p><strong>Release Date:</strong> {movie.releaseDate}</p>
          <p><strong>Rating:</strong> {movie.rating} / 10</p>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Episode Runtime:</strong> {movie.episode_run_time} minutes</p>
          <h2>Plot:</h2>
          <p>{movie.plot}</p>
        </div>
      )}
    </div>
  );
};

export default Video;
