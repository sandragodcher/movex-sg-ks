import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FicheActeur from '../Components/Fiche-acteur';
import CarouselFilmActeur from '../Components/Carousel-KnowFor';
import Footer from '../Components/Footer';
import Menu from '../Components/Menu';

function PageActeur() {
  const { id } = useParams(); // Récupération de l'ID de l'acteur depuis l'URL
  const [actor, setActor] = useState(null);
  const apiKey = '0fb11828183c307f57d80938739eed79';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setActor(data))
      .catch((error) => console.log(error));
  }, [id, apiKey]);

  if (!actor) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Menu />
      <div className="page-acteur">
        <FicheActeur actor={actor} />
        <CarouselFilmActeur actorId={id} />
        <Footer />
      </div>
    </>
  );
}

export default PageActeur;
