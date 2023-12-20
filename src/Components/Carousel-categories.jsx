import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

const CarouselCategory = () => {
  const [visibleCategories, setVisibleCategories] = useState(2);
  const [categories, setCategories] = useState([]);
  const [genreMovies, setGenreMovies] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=0fb11828183c307f57d80938739eed79`
    )
      .then((response) => response.json())
      .then((data) => setCategories(data.genres))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    categories.slice(0, visibleCategories).forEach((genre) => {
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=0fb11828183c307f57d80938739eed79&with_genres=${genre.id}`
      )
        .then((response) => response.json())
        .then((data) => {
          setGenreMovies((prevGenreMovies) => ({
            ...prevGenreMovies,
            [genre.id]: data.results,
          }));
        })
        .catch((error) => console.log(error));
    });
  }, [categories, visibleCategories]);

  const handleMovieClick = (movieId) => {
    navigate(`/page-film/${movieId}`);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    centerMode: true,
    slidesToScroll: 5,
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
    <section className="container-fluid blue">
      {categories.slice(0, visibleCategories).map((genre) => (
        <div
          className="between-category"
          key={genre.id}>
          <h4>{genre.name}</h4>
          <Slider {...settings}>
            {genreMovies[genre.id] &&
              genreMovies[genre.id].map((movie) => (
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
      ))}
      <button
        className="btn-outline"
        onClick={() => setVisibleCategories(visibleCategories + 2)}>
        More Categories
      </button>
    </section>
  );
};

export default CarouselCategory;
