import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';

const CustomPrevArrow = (props) => {
  return (
    <div
      className="custom-arrow custom-prev"
      onClick={props.onClick}>
      <i className="fa fa-chevron-left fa-4"></i>
    </div>
  );
};

const CustomNextArrow = (props) => {
  return (
    <div
      className="custom-arrow custom-next"
      onClick={props.onClick}>
      <i className="fa fa-chevron-right fa-4"></i>
    </div>
  );
};

const CarouselFilmActeur = ({ actorId }) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (actorId) {
      fetch(
        `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=0fb11828183c307f57d80938739eed79`
      )
        .then((response) => response.json())
        .then((data) => {
          const filteredMovies = data.cast.filter(
            (movie) => movie.poster_path !== null
          );
          setMovies(filteredMovies);
        })
        .catch((error) => console.log(error));
    }
  }, [actorId]);

  const handleMovieClick = (movieId) => {
    navigate(`/page-film/${movieId}`);
  };

  const slidesToShow = 5;
  const isCarouselInfinite = movies.length > slidesToShow;

  const settings = {
    dots: false,
    infinite: isCarouselInfinite,
    speed: 500,
    slidesToShow: slidesToShow,
    centerMode: true,
    slidesToScroll: slidesToShow,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section className="container-fluid dark-green">
      <h4 className="upcoming">Known for</h4>
      <div className="carousel-container">
        <Slider {...settings}>
          {movies.map((movie) => (
            <div
              className="carousel-item"
              key={movie.id}
              onClick={() => handleMovieClick(movie.id)}>
              <img
                className="item"
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

CarouselFilmActeur.propTypes = {
  actorId: PropTypes.string.isRequired,
};

export default CarouselFilmActeur;
