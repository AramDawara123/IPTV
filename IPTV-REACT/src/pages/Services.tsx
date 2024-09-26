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
            <p className="paragraph">{movie.plot}</p>
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/mock.json"); 
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Services</h1>
      <div className="intropage-service">
        <p>
          We have movies, shows, and series that we provide. You can search any
          movie, series, or show.
        </p>
      </div>
      <br />
      {movies.length > 0 ? <Card movies={movies} /> : <p>Loading...</p>}
    </>
  );
};
