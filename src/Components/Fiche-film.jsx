import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FicheFilm = ({ film, onClickFilm }) => {
  return (
    <section className="film film-top">
      <div className="container">
        <div className="row">
          <div
            className="col-12 col-ml-6 col-lg-3 image"
            onClick={onClickFilm}>
            <img
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              alt={film.title}
            />
          </div>
          <div className="col-12 col-ml-6 col-lg-9 info">
            {film.genres && (
              <div className="genres">
                {film.genres.map((genre, index) => (
                  <span key={genre.id}>
                    <Link to={`/choix-categorie/${genre.name}`}>
                      {genre.name}
                    </Link>
                    {index < film.genres.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
            )}
            <div className="info-container">
              <h1>{film.title}</h1>
              <h2>({film.release_date.split('-')[0]})</h2>
            </div>
            <h4>Overview</h4>
            <p>{film.overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

FicheFilm.propTypes = {
  film: PropTypes.object.isRequired,
  onClickFilm: PropTypes.func,
};

export default FicheFilm;
