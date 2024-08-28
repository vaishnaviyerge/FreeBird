import React from "react";
import { Link } from "react-router-dom";

function Favorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className="favorites">
      <h2>Your Favorite Movies</h2>
      <div className="movie-list">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <div key={movie.id} className="movie-item">
              <Link to={`/movie/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                <h3>{movie.title}</h3>
              </Link>
            </div>
          ))
        ) : (
          <p>No favorites yet.</p>
        )}
      </div>
    </div>
  );
}

export default Favorites;
