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
            <br/>
            <p className="paragraph">Cast: {movie.cast}</p>
            <br />
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
      <div className="intropage-service">
        <h3>
          We have movies, shows, and series that we provide. These are some examples we have of what we stream
        </h3>
      </div>
      <br />
      {movies.length > 0 ? <Card movies={movies} /> : <p>Loading...</p>}
    </>
  );
};
