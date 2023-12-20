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

const CarouselActors = ({ filmId }) => {
  const [actors, setActors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (filmId) {
      fetch(
        `https://api.themoviedb.org/3/movie/${filmId}/credits?api_key=0fb11828183c307f57d80938739eed79`
      )
        .then((response) => response.json())
        .then((data) => {
          const filteredActors = data.cast.filter(
            (actor) => actor.profile_path != null
          );
          setActors(filteredActors);
        })
        .catch((error) => console.log(error));
    }
  }, [filmId]);

  const handleActorClick = (actorId) => {
    navigate(`/page-acteur/${actorId}`);
  };

  const slidesToShow = 5;
  const isCarouselInfinite = actors.length > slidesToShow;

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
          infinite: isCarouselInfinite,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: isCarouselInfinite,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: isCarouselInfinite,
          dots: false,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section className="container-fluid dark-green">
      <h4 className="upcoming">Top Billed Cast</h4>
      <div className="carousel-container">
        <Slider {...settings}>
          {actors.map((actor) => (
            <div
              className="carousel-item"
              key={actor.id}
              onClick={() => handleActorClick(actor.id)}>
              <img
                className="item"
                src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

CarouselActors.propTypes = {
  filmId: PropTypes.string.isRequired,
};

export default CarouselActors;
