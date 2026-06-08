import React, { useState, useEffect } from "react";
import "../CSS/NewMovies.css";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE    = "https://api.themoviedb.org/3";
const IMG     = "https://image.tmdb.org/t/p/w92";

// ── Genre-opzoektabel ─────────────────────────────────────────────────────────
// TMDB geeft genre-ID's terug (bijv. 28), geen namen. Deze Record mapt een
// numerieke ID naar een leesbare string zodat we de genre-naam kunnen tonen.
const GENRES: Record<number, string> = {
  28:"Action", 12:"Adventure", 16:"Animation", 35:"Comedy", 80:"Crime",
  99:"Documentary", 18:"Drama", 10751:"Family", 14:"Fantasy", 36:"History",
  27:"Horror", 10402:"Music", 9648:"Mystery", 10749:"Romance", 878:"Sci-Fi",
  53:"Thriller", 10752:"War", 37:"Western",
};

const COLORS: Record<string, string> = {
  Action:"#f05a5a", Adventure:"#5ab4f0", Animation:"#f0e45a",
  Comedy:"#f0a45a", Crime:"#e05af0",    Documentary:"#5af0c4",
  Drama:"#f0a45a",  Family:"#5af0c4",   Fantasy:"#c45af0",
  History:"#a0a0a0",Horror:"#f05a5a",   Music:"#5af0c4",
  Mystery:"#c45af0",Romance:"#f05a7a",  "Sci-Fi":"#5af0c4",
  Thriller:"#c45af0",War:"#f05a5a",     Western:"#f0a45a",
};

interface Movie {
  id: number;
  title: string;
  genre: string;
  rating: number;
  year: number | string;
  duration: string;
  poster: string | null;
}

// Helperfuncties ────────────────────────────────────────────────────────────
// toGenre: pakt het eerste genre-ID uit de array en vertaalt het naar een naam.
// Geeft "Other" terug als de array leeg is of de ID onbekend is.
const toGenre  = (ids?: number[]) => (ids?.length ? GENRES[ids[0]] ?? "Other" : "Other");
 
// toTime: zet ruwe minuten (bijv. 132) om naar "2h 12m". Zonder runtime → "—".
const toTime   = (mins?: number)  => mins ? `${Math.floor(mins / 60)}h ${mins % 60}m` : "—";
 
// ── API-aanroep 1: haal de huidige bioscoopfilms op ──────────────────────────
// Haalt de 'now_playing'-lijst op van TMDB en zet de ruwe API-respons om naar onzze movie interface
async function getNowPlaying(): Promise<Movie[]> {
  const res  = await fetch(`${BASE}/movie/now_playing?api_key=${API_KEY}&language=en-US`);
  if (!res.ok) throw new Error(`TMDB ${res.status}`);
  const { results } = await res.json();

  // Smal type voor de ruwe TMDB-data
  interface MovieResult {
    id: number;
    title: string;
    genre_ids?: number[];
    vote_average?: number;
    release_date?: string;
    poster_path?: string | null;
  }

  return (results as MovieResult[]).slice(0, 20).map((m) => ({
    id:       m.id,
    title:    m.title,
    genre:    toGenre(m.genre_ids),
    rating:   Math.round((m.vote_average ?? 0) * 10) / 10,
    year:     m.release_date ? new Date(m.release_date).getFullYear() : "—",
    duration: "-",
    poster:   m.poster_path ?? null,
  }));
}
 
// ─ API-aanroep 2: haal de speelduur op voor één film ────────────────────────
async function getRuntime(id: number): Promise<number | undefined> {
  const res = await fetch(`${BASE}/movie/${id}?api_key=${API_KEY}`);
  if (!res.ok) return undefined;
  const d = await res.json();
  return d.runtime;
}
 
// ── Hoofdcomponent ────────────────────────────────────────────────────────────
export const NewMovies: React.FC = () => {
 
  // ── State-declaraties ─────────────────────────────────────────────────────
  const [movies, setMovies]     = useState<Movie[]>([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState<string | null>(null);
  const [hovered, setHovered]   = useState<number | null>(null);
  const [search, setSearch]     = useState("");
  const [genre, setGenre]       = useState("All");
 
  // ─ Data ophalen bij mounten ──────────────────────────────────────────────
  // useEffect met lege dependency-array [] draait exact één keer: direct na de
  // eerste render. Zo voorkomen we herhaalde API-aanroepen bij re-renders.
  useEffect(() => {
    getNowPlaying()
      .then((data) => {
        setMovies(data);
        setLoading(false);
        // Verrijking: runtime asynchroon ophalen voor de eerste 5 films
        data.slice(0, 5).forEach(async ({ id }) => {
          const mins = await getRuntime(id);
          if (mins) setMovies((prev) =>
            prev.map((m) => m.id === id ? { ...m, duration: toTime(mins) } : m)
          );
        });
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
 
  // ── Afgeleide state: filtering ────────────────────────────────────────────
  // We berekenen de genrelijst en de zichtbare films direct bij elke render.
  const genreList = ["All", ...new Set(movies.map((m) => m.genre))];
  const visible   = movies.filter((m) =>
    m.title.toLowerCase().includes(search.toLowerCase()) &&
    (genre === "All" || m.genre === genre)
  );

  return (
    <div className="nm">
      <div className="nm-head">
        <h1 className="nm-title">New <span className="nm-title-accent">Movies</span></h1>
        <span className="nm-pill">{visible.length} titles</span>
      </div>
      <div className="nm-divider" />
      <input
        className="nm-search"
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search movies"
      />
      {/* Genre-filterbalken van de opgehaalde films */}
      <div className="nm-filters">
        {genreList.map((g) => (
          <button
            key={g}
            className={`nm-filter-btn${genre === g ? " nm-filter-btn--active" : ""}`}
            style={genre === g && g !== "All" ? { borderColor: COLORS[g], color: COLORS[g] } : undefined}
            onClick={() => setGenre(g)}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Fout en laadstatussen */}
      {error   && <p className="nm-error" role="alert">Could not load from TMDB ({error}).</p>}
      {loading && <p className="nm-loading">Loading movies...</p>}

      {/* Filmlijst alleen getoond als het laden klaar is */}
      {!loading && (
        <ul className="nm-list">
          {visible.map((movie, i) => {
            const color = COLORS[movie.genre] ?? "#aaa";
            return (
              <li
                key={movie.id}
                className={`nm-row${hovered === movie.id ? " nm-row--hovered" : ""}`}
                style={{ "--accent": color } as React.CSSProperties}
                onMouseEnter={() => setHovered(movie.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="nm-bar" />
                {movie.poster && <img src={`${IMG}${movie.poster}`} alt={movie.title} className="nm-poster" />}
                {/* padStart zorgt voor een consistente twee-cijferige index: 01, 02 … */}
                <span className="nm-idx">{String(i + 1).padStart(2, "0")}</span>
                <div className="nm-info">
                  <span className="nm-movie">{movie.title}</span>
                  <span className="nm-year">{movie.year}</span>
                </div>
                <span className="nm-badge" style={{ color, borderColor: color }}>{movie.genre}</span>
                <span className="nm-dur">{movie.duration}</span>
                <span className="nm-rating"><span className="nm-star">★</span>{movie.rating}</span>
              </li>
            );
          })}
        </ul>
      )}

      <div className="nm-foot">
        <button className="nm-btn">View All →</button>
      </div>
    </div>
  );
};

export default NewMovies;