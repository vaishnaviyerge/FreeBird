import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const apiKey = "Y430ca32e529d13eb55d4b1e5f91c857c"; 
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
      setMovie(response.data);
    };
    fetchMovie();
  }, [id]);

  const saveToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push(movie);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert(`${movie.title} has been added to your favorites!`);
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Genre:</strong> {movie.genres.map(g => g.name).join(", ")}</p>
      <p><strong>Synopsis:</strong> {movie.overview}</p>
      <button onClick={saveToFavorites}>Add to Favorites</button>
    </div>
  );
}

export default MovieDetail;
