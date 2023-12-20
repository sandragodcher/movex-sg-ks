import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FicheActeur from './FicheActeur'; // Assurez-vous de créer ce composant
import { useNavigate } from 'react-router-dom';

const AllActors = () => {
  const [actors, setActors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/person/popular?api_key=0fb11828183c307f57d80938739eed79')
      .then((res) => setActors(res.data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="all-actors">
      {actors.map((actor) => (
        <FicheActeur
          actor={actor}
          key={actor.id}
          onClickActor={() => navigate(`/actor/${actor.id}`)} // Assurez-vous que cette route est configurée dans votre routeur
        />
      ))}
    </div>
  );
};

export default AllActors;
