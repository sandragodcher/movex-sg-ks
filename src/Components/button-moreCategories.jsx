import React, { useState, useEffect } from 'react';

const MoreCategories = () => {
  const [visibleCategories, setVisibleCategories] = useState(2); // Par défaut, on affiche 2 catégories

 const predefinedCategories = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Adventure' },
    { id: 3, name: 'Animation' },
    { id: 4, name: 'Comedy' },
    { id: 5, name: 'Crime' },
    { id: 6, name: 'Documentary' },
    { id: 7, name: 'Drama' },
    { id: 8, name: 'Family' },
    { id: 9, name: 'Fantasy' },
    { id: 10, name: 'History' },
    { id: 11, name: 'Horror' },
    { id: 12, name: 'Music' },
    { id: 13, name: 'Mystery' },
    { id: 14, name: 'Romance' },
    { id: 15, name: 'Science-fiction' },
    { id: 16, name: 'TV Movie' },
    { id: 17, name: 'Thriller' },
    { id: 18, name: 'War' },
  ];

  useEffect(() => {
    const apiKey = '0fb11828183c307f57d80938739eed79'; 
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setCategories(data.genres))
      .catch((error) => console.error('Error retrieving categories :', error));
  }, []);

  const showMoreCategories = () => {
    setVisibleCategories(visibleCategories + 2); 
  };

  return (
    <div>
      <ul>
        {predefinedCategories.slice(0, visibleCategories).map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
      {visibleCategories < predefinedCategories.length && (
        <button onClick={showMoreCategories}>More categories</button>
      )}
    </div>
  );
};

export default MoreCategories;
