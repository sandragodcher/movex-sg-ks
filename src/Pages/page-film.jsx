import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CarouselActors from '../Components/Carousel-TopBilledCast';
import Footer from '../Components/Footer';
import FicheFilm from '../Components/Fiche-film';
import Menu from '../Components/Menu';

function PageFilm() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const apiKey = '0fb11828183c307f57d80938739eed79';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setFilm(data))
      .catch((error) => console.log(error));
  }, [id, apiKey]);

  if (!film) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Menu />
      <div className="page-film">
        <FicheFilm film={film} />
        <CarouselActors filmId={id} />
        <Footer />
      </div>
    </>
  );
}

export default PageFilm;
