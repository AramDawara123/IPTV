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
  const [isInWatchlist, setIsInWatchlist] = useState<boolean>(false);
  const navigate = useNavigate();

  // Check if movie is in the watchlist on component mount
  useEffect(() => {
    const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    setIsInWatchlist(watchlist.some((m: Movie) => m.name === movie.name));
  }, [movie.name]);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleWatchTrailer = (e: React.MouseEvent) => {
    e.stopPropagation();  // Prevent card flip on button click
    const lastSeen = JSON.parse(localStorage.getItem('lastSeenTrailers') || '[]');
    const updatedList = [movie, ...lastSeen.filter((m: Movie) => m.name !== movie.name)].slice(0, 6);
    localStorage.setItem('lastSeenTrailers', JSON.stringify(updatedList));

    navigate("/video", {
      state: { videoUrl: "https://www.youtube.com/watch?v=jpWUOxRozZg", movie: movie }
    });
  };

  const handleAddToWatchlist = (e: React.MouseEvent) => {
    e.stopPropagation();

    let watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');

    if (isInWatchlist) {
      watchlist = watchlist.filter((m: Movie) => m.name !== movie.name);
    } else {
      watchlist = [movie, ...watchlist];
    }

    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    setIsInWatchlist(!isInWatchlist);
  };

  return (
    <div className="card-container" onClick={handleClick}>
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
          <br />
          <button className="AddToWatchlist-btn" onClick={handleAddToWatchlist}>
            {isInWatchlist ? "⭐ Remove from Watchlist" : "☆ Add to Watchlist"}
          </button>
        </div>
      </div>
    </div>
  );
};


// Card Component
const Card: React.FC<{ movies: Movie[] }> = ({ movies }) => {
  if (!Array.isArray(movies)) {
    console.error("Expected movies to be an array, but got:", movies);
    return <p>No movies/series available.</p>;
  }
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

const Watchlist: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [watchlist, setWatchlist] = useState<Movie[]>([]);

  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    setWatchlist(storedWatchlist);
  }, []);

  return (
    <div className="watchlist-modal">
      <div className="watchlist-content">
        <button className="close-btn" onClick={onClose}>Close</button>
        <h2>Your Watchlist</h2>
        {watchlist.length > 0 ? (
          <ul className="watchlist-items">
            {watchlist.map((movie, index) => (
              <li key={index} className="watchlist-item">
                <img src={movie.cover} alt={movie.name} />
                <div>
                  <h4>{movie.name}</h4>
                  <p>Rating: {movie.rating} / 10</p>
                  <p>Genre: {movie.genre}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your watchlist is empty.</p>
        )}
      </div>
    </div>
  );
};


interface SearchParams {
  type?: string;
  max?: string;
  search?: string;
}

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
  const [max] = useState<number>(100);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;
  const [totalPages, setTotalPages] = useState<number>(1);

  const [selectedGenre, setSelectedGenre] = useState<string>("");

  // New state to control Watchlist modal visibility
  const [isWatchlistOpen, setIsWatchlistOpen] = useState<boolean>(false);

  // Function to open/close the watchlist modal
  const toggleWatchlist = () => {
    setIsWatchlistOpen(!isWatchlistOpen);
  };
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
  
      try {
        const params: SearchParams = {};
        if (search) params.search = search;
        if (type) params.type = type;
        if (max) params.max = max.toString();
  
        const response = await axios.get<Movie[]>("http://127.0.0.1:5011/api/data", { params });
  
        if (Array.isArray(response.data)) {
          // Zorg ervoor dat genres goed worden ingelezen
          const moviesData = response.data.map(movie => ({
            ...movie,
            genre: movie.genre.split(',').map(g => g.trim()).join(' ') // Dit kan helpen om genres goed in te lezen
          }));
          setMovies(moviesData);
          setFilteredMovies(moviesData);
        } else {
          setMovies([]);
          setFilteredMovies([]);
        }
      } catch (error) {
        // @ts-expect-error @ts-ignore
        setError(error.response?.data?.error || "Error fetching data");
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, [search, type, max]);

  useEffect(() => {
    setTotalPages(Math.ceil(filteredMovies.length / itemsPerPage));
    setCurrentPage(1);
  }, [filteredMovies]);

  // Function to filter movies by genre
  const filterMoviesByGenre = (movies: Movie[], genre: string): Movie[] => {
    if (!genre) return movies; // If no genre selected, return all
    return movies.filter((movie) =>
      movie.genre.toLowerCase().includes(genre.toLowerCase())
    );
  };

  const handleSearch = () => {
    const lowerCaseSearch = search.toLowerCase();
    let filtered = movies.filter((movie) =>
      movie.name.toLowerCase().includes(lowerCaseSearch)
    );

    // Apply genre filtering
    filtered = filterMoviesByGenre(filtered, selectedGenre);

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
          className={currentPage === i ? "active" : "NotActive"}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="pagination-controls">
        <button className="Next-button" 
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {pageButtons}
        <button className="Previous-button"
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

        {/* New genre filter dropdown */}

        <select className="filter" value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
          <option value="">All Genres</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Action">Action</option>
          <option value="Mistério">Mystery</option>
          <option value="Comédia">Comedy</option>
          <option value="Animação">Animation</option>
          <option value="Crime">Crime</option>
          <option value="Documentário">Documentary</option>
          <option value="Drama">Drama</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Soap">soap</option>
          <option value="Adventure">Adventure</option>
        </select>

        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>

        <button className="Watchlist-btn" onClick={toggleWatchlist}>
          View Your Watchlist
        </button>
      </div>

      {isWatchlistOpen && <Watchlist onClose={toggleWatchlist} />}

      <div className="intropage-service">
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
      ) : Array.isArray(filteredMovies) && filteredMovies.length > 0 ? (
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