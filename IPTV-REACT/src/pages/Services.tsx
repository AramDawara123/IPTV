                                                                                import React, { useState, useEffect } from "react";
import "../CSS/Service.css";

// Define a type for the movie object
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

// Define the props for the Card component
interface CardProps {
  movies: Movie[];
}

const Card: React.FC<CardProps> = ({ movies }) => {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/mock.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: Movie[] = await response.json();
        setMovies(data);
        setFilteredMovies(data);
      } catch (error) {
        setError("Error fetching data");
        console.log(error)
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = movies.filter(movie =>
      movie.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredMovies(filtered);
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
          We have movies, shows, and series that we provide. You can search any
          movie, series, or show.
        </p>
      </div>

      {isLoading ? (
        <p>Loading movies...</p>
      ) : error ? (
        <p>{error}</p>
      ) : filteredMovies.length > 0 ? (
        <Card movies={filteredMovies} />
      ) : (
        <p>No movies found...</p>
      )}
    </>
  );
};

export default Services;

interface CardFlipProps {
  movie: Movie;
}

const CardFlip: React.FC<CardFlipProps> = ({ movie }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <button className="card-container" onClick={handleClick}>
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <img className="movie__image" src={movie.cover} alt={movie.name} />
          <h2 className="heading">{movie.name}</h2>
          <p className="paragraph">Cast: {movie.cast}</p>
          <p className="paragraph">Release Date: {movie.releaseDate}</p>
          <p className="paragraph">Rating: {movie.rating} / 10</p>

          {/* Hover tekst */}
          <div className="hover-text">Click to read more about the film ⓘ</div>
        </div>
        <div className="card-back">
          <h2 className="heading">Plot:</h2>
          <p className="paragraph">{movie.plot}</p>
          <h2 className="heading">genre:</h2>
          <p className="paragraph">{movie.genre}</p>
          <h2 className="heading">episode's:</h2>
          <p className="paragraph">{movie.episode_run_time}</p>
        </div>
      </div>
    </button>
  );
};