import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importez Link de react-router-dom

const Popular = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=0fb11828183c307f57d80938739eed79`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results.slice(0, 2)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <div className="popular" key={movie.id}>
          <Link to={`/page-film/${movie.id}`}> {/* Utilisez Link ici */}
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Popular;
