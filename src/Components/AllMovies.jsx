import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FicheFilm from './FicheFilm';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar'; // Assurez-vous de créer ce composant

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  // Fonction pour rechercher des films
  const searchMovies = (query) => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=0fb11828183c307f57d80938739eed79&query=${encodeURIComponent(query)}`)
      .then((res) => setMovies(res.data.results))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    // Appel initial pour obtenir les films populaires
    axios
      .get('https://api.themoviedb.org/3/movie/popular?api_key=0fb11828183c307f57d80938739eed79')
      .then((res) => setMovies(res.data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <SearchBar onSearch={searchMovies} />
      <div className="all-movies">
        {movies.map((movie) => (
          <FicheFilm
            film={movie}
            key={movie.id}
            onClickFilm={() => navigate(`/film/${movie.id}`)}
          />
        ))}
      </div>
    </>
  );
};

export default AllMovies;
