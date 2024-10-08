import React, { useState, useEffect } from "react";
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
          <p className="paragraph">{movie.episode_run_time}</p>
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

const Services: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: Movie[] = await response.json();
        setMovies(data);
        setFilteredMovies(data);
      } catch (error) {
        setError("Error fetching data");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Update totalPages whenever filteredMovies changes
  useEffect(() => {
    setTotalPages(Math.ceil(filteredMovies.length / itemsPerPage));
    setCurrentPage(1); // Reset to page 1 when movies change
  }, [filteredMovies]);

  const handleSearch = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = movies.filter((movie) =>
      movie.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredMovies(filtered);
    setCurrentPage(1); // Reset to page 1 when searching
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

    // Determine start and end page for pagination
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Adjust startPage if we are at the end of pagination
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - (maxVisiblePages - 1));
    }

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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
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
      ) : filteredMovies.length > 0 ? (
        <>
          <Card movies={paginatedMovies} />
          {renderPaginationControls()}
        </>
      ) : (
        <p>No movies found...</p>
      )}
    </>
  );
};

export default Services;
