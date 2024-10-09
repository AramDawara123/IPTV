import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/Service.css";

interface Movie {
  name: string;
  cover: string;
  cast: string;
  releaseDate: string;
  plot: string;
  rating: number;
  genre: string;
  episode_run_time: number;
}

// CardFlip Component for flipping the card
const CardFlip: React.FC<{ movie: Movie }> = ({ movie }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleWatchTrailer = () => {
    const lastSeen = JSON.parse(localStorage.getItem('lastSeenTrailers') || '[]');
    const updatedList = [movie, ...lastSeen.filter((m: Movie) => m.name !== movie.name)].slice(0, 6);
    localStorage.setItem('lastSeenTrailers', JSON.stringify(updatedList));

    navigate("/video", { 
      state: { 
        videoUrl: "https://www.youtube.com/watch?v=jpWUOxRozZg", 
        movie: movie
      } 
    });
  };

  return (
    <button className="card-container" onClick={handleClick}>
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="card-front">
          <img className="movie__image" src={movie.cover} alt={movie.name} />
          <h2 className="heading">{movie.name}</h2>
          <p className="paragraph">Cast: {movie.cast}</p>
          <p className="paragraph">Release Date: {movie.releaseDate}</p>
          <p className="paragraph">Rating: {movie.rating} / 10</p>
          <div className="hover-text">Click to read more about the film ⓘ</div>
        </div>
        <div className="card-back">
          <h2 className="heading">Plot:</h2>
          <p className="paragraph">{movie.plot}</p>
          <h2 className="heading">Genre:</h2>
          <p className="paragraph">{movie.genre}</p>
          <h2 className="heading">Episode runtime:</h2>
          <p className="paragraph">{movie.episode_run_time} minutes</p>
          <button className="watch-trailer-btn" onClick={handleWatchTrailer}>
            Watch Trailer
          </button>
        </div>
      </div>
    </button>
  );
};

// Card Component
const Card: React.FC<{ movies: Movie[] }> = ({ movies }) => {
  return (
    <div className="cardlist__movies">
      {movies.map((movie, index) => (
        <div className="card" key={index}>
          <CardFlip movie={movie} />
        </div>
      ))}
    </div>
  );
};

// Last Seen Trailers List (collapsible)
const LastSeenTrailers: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [lastSeenTrailers, setLastSeenTrailers] = useState<Movie[]>([]);

  useEffect(() => {
    const lastSeen = JSON.parse(localStorage.getItem('lastSeenTrailers') || '[]');
    setLastSeenTrailers(lastSeen);
  }, []);

  return (
    <div className="last-seen-container">
      <button className="toggle-btn" onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Hide Last Seen Trailers" : "Show Last Seen Trailers"}
      </button>
      {isExpanded && (
        <ul className="last-seen-list">
          {lastSeenTrailers.length > 0 ? (
            lastSeenTrailers.map((movie, index) => (
              <li key={index} className="last-seen-item">
                <img className="last-seen-img" src={movie.cover} alt={movie.name} />
                <div>
                  <h4>{movie.name}</h4>
                  <p>Rating: {movie.rating} / 10</p>
                </div>
              </li>
            ))
          ) : (
            <p>No trailers watched yet...</p>
          )}
        </ul>
      )}
    </div>
  );
};

// Services Component (main)
const Services: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get<Movie[]>("http://127.0.0.1:5011/api/data");
        setMovies(response.data);
        setFilteredMovies(response.data);
      } catch (error) {
        console.log({error});
        setError("Error fetching data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setTotalPages(Math.ceil(filteredMovies.length / itemsPerPage));
    setCurrentPage(1);
  }, [filteredMovies]);

  const handleSearch = () => {
    const lowerCaseSearch = search.toLowerCase();
    const filtered = movies.filter((movie) =>
      movie.name.toLowerCase().includes(lowerCaseSearch)
    );
    setFilteredMovies(filtered);
    setCurrentPage(1);
  };

  const paginatedMovies = filteredMovies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPaginationControls = () => {
    const pageButtons = [];
    const maxVisiblePages = 5;

    const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <button
          key={i}
          className={currentPage === i ? "active" : ""}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="pagination-controls">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {pageButtons}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="searchbar">
        <input
          className="input"
          type="text"
          placeholder="Find movie/serie"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="filter" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">All</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
        </select>
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="intropage-service">
        <p>
          We have movies, shows, and series that we provide. You can search any movie, series, or show.
        </p>
      </div>

      <LastSeenTrailers />

      {isLoading ? (
        <p>Loading movies...</p>
      ) : error ? (
        <p>{error}</p>
      ) : filteredMovies.length > 0 ? (
        <>
          <Card movies={paginatedMovies} />
          {renderPaginationControls()}
        </>
      ) : (
        <p>No movies/series found...</p>
      )}
    </>
  );
};

export default Services;
