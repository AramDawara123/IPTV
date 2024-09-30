import React, { useState, useEffect } from "react";
import "../CSS/Service.css";


const Card = ({ movies }) => {
  return (
    <div className="cardlist__movies">
      {movies.map((movie, index) => (
        <div className="card" key={index}>
          <img className="movie__image" src={movie.cover} alt={movie.name} />
          <div className="flex__card">
            <p className="heading">{movie.name}</p>
            <p className="paragraph">Cast: {movie.cast}</p>
            <p className="paragraph">Release Date: {movie.releaseDate}</p>
            <p className="paragraph">Rating: {movie.rating} / 10</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Services: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/mock.json");
        const data = await response.json();
        setMovies(data);
        setFilteredMovies(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const filtered = movies.filter((movie) =>
      movie.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <>
      <div className="searchbar">
        <input
          className="input"
          type="text"
          placeholder="find movie/serie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-btn" type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <br />
      <div className="intropage-service">
        <p>
          We have movies, shows, and series that we provide. You can search any
          movie, series, or show.
        </p>
      </div>
      <br />
      {filteredMovies.length > 0 ? (
        <Card movies={filteredMovies} />
      ) : (
        <p>No movies found or still loading...</p>
      )}
    </>
  );
};

export default Services;