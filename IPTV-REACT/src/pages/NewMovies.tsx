import React, { useState } from "react";
import "../CSS/NewMovies.css";
 
interface Movie {
  id: number;
  title: string;
  genre: string;
  rating: number;
  year: number;
  duration: string;
}
 
const movies: Movie[] = [
  { id: 1, title: "Dune: Messiah",      genre: "Sci-Fi",    rating: 9.1, year: 2026, duration: "2h 28m" },
  { id: 2, title: "The Brutalist II",   genre: "Drama",     rating: 8.7, year: 2026, duration: "3h 12m" },
  { id: 3, title: "Neon Requiem",       genre: "Thriller",  rating: 8.4, year: 2026, duration: "1h 54m" },
  { id: 4, title: "Hollow Orbit",       genre: "Horror",    rating: 7.9, year: 2026, duration: "2h 05m" },
  { id: 5, title: "The Last Meridian",  genre: "Adventure", rating: 8.2, year: 2026, duration: "2h 17m" },
];
 
const genreColors: Record<string, string> = {
  "Sci-Fi":    "#5af0c4",
  "Drama":     "#f0a45a",
  "Thriller":  "#c45af0",
  "Horror":    "#f05a5a",
  "Adventure": "#5ab4f0",
};
 
export const NewMovies: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
 
  return (
    <div className="nm">
      <div className="nm-head">
        <h1 className="nm-title">
          New <span className="nm-title-accent">Movies</span>
        </h1>
        <span className="nm-pill">{movies.length} titles</span>
      </div>
 
      <div className="nm-divider" />
 
      <ul className="nm-list">
        {movies.map((movie, i) => {
          const color = genreColors[movie.genre] ?? "#aaa";
          const isHovered = hovered === movie.id;
 
          return (
            <li
              key={movie.id}
              className={`nm-row${isHovered ? " nm-row--hovered" : ""}`}
              style={{ "--accent": color } as React.CSSProperties}
              onMouseEnter={() => setHovered(movie.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="nm-bar" />
              <span className="nm-idx">{String(i + 1).padStart(2, "0")}</span>
 
              <div className="nm-info">
                <span className="nm-movie">{movie.title}</span>
                <span className="nm-year">{movie.year}</span>
              </div>
 
              <span className="nm-badge" style={{ color, borderColor: color }}>
                {movie.genre}
              </span>
 
              <span className="nm-dur">{movie.duration}</span>
 
              <span className="nm-rating">
                <span className="nm-star">★</span>
                {movie.rating}
              </span>
            </li>
          );
        })}
      </ul>
 
      <div className="nm-foot">
        <button className="nm-btn">View All →</button>
      </div>
    </div>
  );
};
 
export default NewMovies;