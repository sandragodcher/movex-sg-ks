import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Components/Footer';
import CarouselUpcoming from '../Components/Carousel-upcoming';

function PageRecherche() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [allMovies, setAllMovies] = useState([]);
  const [allActors, setAllActors] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [visibleActors, setVisibleActors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const apiKey = '0fb11828183c307f57d80938739eed79';

  useEffect(() => {
    if (query) {
      fetchMoviesAndActors(currentPage);
    }
  }, [query, currentPage]);

  const fetchMoviesAndActors = async (page) => {
    try {
      // Fetch Movies
      const moviesUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&page=${page}`;
      const moviesResponse = await axios.get(moviesUrl);
      const newMovies = moviesResponse.data.results.filter(movie => movie.poster_path && movie.release_date);
      setAllMovies(prev => [...prev, ...newMovies]);
      setVisibleMovies(prevVisible => [...prevVisible, ...newMovies].slice(0, 14 * page));

      // Fetch Actors
      const actorsUrl = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${encodeURIComponent(query)}&page=${page}`;
      const actorsResponse = await axios.get(actorsUrl);
      const newActors = actorsResponse.data.results.filter(actor => actor.profile_path);
      setAllActors(prev => [...prev, ...newActors]);
      setVisibleActors(prevVisible => [...prevVisible, ...newActors].slice(0, 14 * page));
    } catch (error) {
      console.error('Erreur lors de la récupération des données', error);
    }
  };

  const showMoreResults = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <>
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
          {/* Affichage des films */}
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

          {/* Affichage des acteurs */}
          {visibleActors.map((actor, index) => (
            <div key={index} className="col-12 col-md-2 mx-3 my-3 gallery-image">
              <Link to={`/actor/${actor.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                  className="img-fluid"
                />
              </Link>
            </div>
          ))}
          
          {allMovies.length > visibleMovies.length && allActors.length > visibleActors.length && (
            <div className="col-12 col-md-2 mx-3 my-3 gallery-image-show">
              <button onClick={showMoreResults} className="show-more-btn-recherche">
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
