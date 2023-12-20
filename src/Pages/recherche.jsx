import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Components/Footer';
import CarouselUpcoming from '../Components/Carousel-upcoming';
import Menu from '../Components/Menu';

function PageRecherche() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [allMovies, setAllMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerIncrement = 5;  // Nombre de films à ajouter à chaque fois
  const initialMoviesCount = 14; // Nombre initial de films à afficher
  const apiKey = '0fb11828183c307f57d80938739eed79';

  useEffect(() => {
    if (query) {
      fetchMoviesForAllKeywords();
    }
  }, [query]);

  const fetchMoviesForAllKeywords = async () => {
    const keywords = query.toLowerCase().split(' ').filter(k => k);
    let moviesArray = [];

    for (const keyword of keywords) {
      const keywordMovies = await fetchMoviesForKeyword(keyword);
      moviesArray = moviesArray.concat(keywordMovies);
    }

    const uniqueMovies = Array.from(new Set(moviesArray.map(movie => movie.id))).map(id => {
      return moviesArray.find(movie => movie.id === id);
    });

    setAllMovies(uniqueMovies);
    setVisibleMovies(uniqueMovies.slice(0, initialMoviesCount));
  };

  const fetchMoviesForKeyword = async (keyword) => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(keyword)}&page=1`;
      const response = await axios.get(url);
      return response.data.results.filter(movie => movie.poster_path && movie.release_date);
    } catch (error) {
      console.error('Erreur lors de la récupération des films pour le mot clé', keyword, error);
      return [];
    }
  };

  const showMoreMovies = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    const additionalMoviesCount = initialMoviesCount + moviesPerIncrement * (currentPage - 1);
    setVisibleMovies(allMovies.slice(0, additionalMoviesCount));
  }, [currentPage, allMovies]);

  return (
    <>
      <Menu />
      <section className="recherche-top">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 recherche-menu">
            <h5>
              Résultat pour : <br />
              {query}
            </h5>
          </div>
        </div>
      </section>

      <section className="recherche-middle">
        <div className="gallerie d-flex flex-wrap justify-content-center">
          {visibleMovies.map((movie, index) => (
            <div key={index} className="col-12 col-md-2 mx-3 my-3 gallery-image">
              <Link to={`/page-film/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="img-fluid"
                />
              </Link>
            </div>
          ))}
          {allMovies.length > visibleMovies.length && (
            <div className="col-12 col-xl-2 align-items-center d-flex justify-content-center mx-3 my-3 gallery-image-show">
              <button onClick={showMoreMovies} className="show-more-btn-recherche">
                <h4>Show more</h4>
              </button>
            </div>
          )}
        </div>
      </section>

      <CarouselUpcoming />
      <Footer />
    </>
  );
}

export default PageRecherche;
