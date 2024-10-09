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

// Flip Card Component
const CardFlip: React.FC<{ movie: Movie }> = ({ movie }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleWatchTrailer = () => {
    const trailerUrl = "https://www.youtube.com/watch?v=xvFZjo5PgG0";
    window.open(trailerUrl, "_blank");
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

          {/* Watch Trailer button */}
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

interface SearchParams {
  type?: string;
  max?: string;
  search?: string;
}

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

  // New state for genre selection
  const [selectedGenre, setSelectedGenre] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const params: SearchParams = {};
        if (search) params.search = search;
        if (type) params.type = type;
        if (max) params.max = max.toString();

        console.log("Request params:", params);

        const response = await axios.get<Movie[]>("http://127.0.0.1:5011/api/data", { params });

        console.log("API response data:", response.data);

        if (Array.isArray(response.data)) {
          // Zorg ervoor dat genres goed worden ingelezen
          const moviesData = response.data.map(movie => ({
            ...movie,
            genre: movie.genre.split(',').map(g => g.trim()).join(' ') // Dit kan helpen om genres goed in te lezen
          }));
          setMovies(moviesData);
          setFilteredMovies(moviesData);
        } else {
          console.error("Expected an array from API, but got:", response.data);
          setMovies([]);
          setFilteredMovies([]);
        }
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          setError(error.response?.data?.error || "Error fetching data");
        } else if (error instanceof Error) {
          setError(error.message || "Error fetching data");
        } else {
          setError("An unknown error occurred");
        }
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [search, type, max]);


  // Update totalPages whenever filteredMovies changes
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

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - (maxVisiblePages - 1));
    }

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
        <button className="Previous-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {pageButtons}
        <button className="Next-button"
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
          <option value="Familia">Familia</option>
          <option value="Comédia">Comédia</option>
          <option value="Drama">Drama</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Adventure">Adventure</option>
        </select>


        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="intropage-service">
        <p>
          We have movies, shows, and series that we provide. You can search
          any movie, series, or show.
        </p>
      </div>

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
  )
};

export default Services;
