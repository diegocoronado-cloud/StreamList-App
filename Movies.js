// File: src/components/Movies.js
import React, { useState } from "react";
import axios from "axios";
import "./Movies.css";

const Movies = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const searchMovies = async () => {
    if (!query.trim()) return;
    try {
      setIsLoading(true);
      setError("");
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: "9e1e2e6256dd404e46a1f8f4b5b84a2e",
          query: query
        }
      });
      setResults(res.data.results);
    } catch (err) {
      setError("Failed to fetch movie data. Please try again.");
      console.error("API Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="movies-container">
      <h2>Search Movies</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter movie name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchMovies}>Search</button>
      </div>

      {isLoading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="movie-results">
        {results.map(movie => (
          <div key={movie.id} className="movie-card">
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
            )}
            <div className="movie-info">
              <h3>{movie.title} <span className="release-date">({movie.release_date})</span></h3>
              <p className="overview">{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
