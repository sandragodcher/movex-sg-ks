import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import axios from 'axios';
import Menu from '../Components/Menu';

function PageChoixCategorie() {
  let { categorieName } = useParams();
  const [allMovies, setAllMovies] = useState([]); // Tous les films récupérés
  const [visibleMovies, setVisibleMovies] = useState([]); // Films actuellement visibles
  const [currentPage, setCurrentPage] = useState(1); // Suivi de la page actuelle
  const navigate = useNavigate();
  const apiKey = '0fb11828183c307f57d80938739eed79'; // Votre clé API TMDB

  useEffect(() => {
    fetchMovies(currentPage);
  }, [categorieName, currentPage]); // Dépendances pour le useEffect

  const fetchMovies = async (page) => {
    try {
      const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
      const genreResponse = await axios.get(genreUrl);
      const genres = genreResponse.data.genres;
      const genre = genres.find(
        (g) => g.name.toLowerCase() === categorieName.toLowerCase()
      );
      if (!genre) return;

      const moviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre.id}&page=${page}`;
      const moviesResponse = await axios.get(moviesUrl);
      setAllMovies((prevMovies) => [
        ...prevMovies,
        ...moviesResponse.data.results,
      ]);
      setVisibleMovies((prevVisibleMovies) =>
        [...prevVisibleMovies, ...moviesResponse.data.results].slice(
          0,
          14 + 5 * (page - 1)
        )
      );
    } catch (error) {
      console.error('Erreur lors de la récupération des films', error);
    }
  };

  const handleMovieClick = (movieId) => {
    navigate(`/page-film/${movieId}`);
  };

  const showMoreMovies = () => {
    setCurrentPage(currentPage + 1); // Incrémenter la page pour charger plus de films
  };

  return (
    <>
      <Menu />
      <section className="top">
        <div className="img-container">
          <img
            src="../asset/images/cover.png"
            alt=""
          />
          <div className="overlay"></div>
          <h2 className="titre_categorie">{categorieName}</h2>
        </div>
      </section>

      <section className="middle">
        <div className="gallerie d-flex flex-wrap justify-content-center">
          {visibleMovies.map((movie, index) => (
            <div
              key={index}
              className="col-12 col-md-2 mx-3 my-3 gallery-image"
              onClick={() => handleMovieClick(movie.id)}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="img-fluid"
              />
            </div>
          ))}
          {allMovies.length > visibleMovies.length && (
            <div className="col-12 col-xl-2 align-items-center d-flex justify-content-center mx-3 my-3 gallery-image-show">
              <button
                onClick={showMoreMovies}
                className="show-more-btn-choix ">
                <h4>Show more</h4>
              </button>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default PageChoixCategorie;
