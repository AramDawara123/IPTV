import React, { useState, useEffect } from 'react';
import "../CSS/Service.css";

interface Movie {
  name: string;
  cover: string;
  rating: number;
}

// Last Seen Trailers List (collapsible with animation)
const LastSeenTrailers: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false); // Control collapsible state
  const [lastSeenTrailers, setLastSeenTrailers] = useState<Movie[]>([]); // Store last seen trailers

  // Fetch the last seen trailers from localStorage when the component mounts
  useEffect(() => {
    const lastSeen = JSON.parse(localStorage.getItem('lastSeenTrailers') || '[]');
    setLastSeenTrailers(lastSeen);
  }, []);

  return (
    <div className="last-seen-container">
      {/* Button to toggle between showing and hiding the last seen trailers */}
      <button className="toggle-btn" onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Hide Last Seen Trailers" : "Show Last Seen Trailers"}
      </button>

      {/* Animated collapsible list */}
      <div className={`last-seen-list ${isExpanded ? "expanded" : "collapsed"}`}>
        {lastSeenTrailers.length > 0 ? (
          lastSeenTrailers.map((movie, index) => (
            <div key={index} className="last-seen-item">
              <img className="last-seen-img" src={movie.cover} alt={movie.name} />
              <div className="movie-info">
                <h4>{movie.name}</h4>
                <p>Rating: {movie.rating} / 10</p>
              </div>
            </div>
          ))
        ) : (
          <p>No trailers watched yet...</p>
        )}
      </div>
    </div>
  );
};

export default LastSeenTrailers;