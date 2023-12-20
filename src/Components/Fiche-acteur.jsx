import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FicheActeur = ({ actor }) => {
  const [isBioExpanded, setBioExpanded] = useState(false);

  const toggleBio = () => {
    setBioExpanded(!isBioExpanded);
  };

  if (!actor) {
    return <div>Loading...</div>;
  }

  // Vérifier s'il y a une biographie
  const hasBiography = actor.biography && actor.biography.trim() !== '';

  // Déterminer si le texte est court
  const isShortText = hasBiography && actor.biography.length < 400;

  return (
    <section className="acteur acteur-top">
      <div className="container">
        <div className="row">
          <div className="col-12 col-ml-6 col-lg-3 image">
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
            />
          </div>
          <div className="col-12 col-ml-6 col-lg-9 info">
            <h1>{actor.name}</h1>
            <h4>Biography</h4>
            {hasBiography ? (
              <p
                id="biography"
                className={isBioExpanded ? 'expanded' : ''}>
                {isBioExpanded
                  ? actor.biography
                  : actor.biography.slice(0, 400) + (isShortText ? '' : '...')}
              </p>
            ) : (
              <p id="biography">...</p>
            )}
            {hasBiography && !isShortText && (
              <button
                className="btn-read"
                onClick={toggleBio}>
                {isBioExpanded ? (
                  <i className="fa-solid fa-arrow-up"></i>
                ) : (
                  'Read more >'
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

FicheActeur.propTypes = {
  actor: PropTypes.object.isRequired,
};

export default FicheActeur;
