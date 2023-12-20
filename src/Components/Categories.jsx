import React, { useState, useEffect } from "react";


const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedCategoryName, setSelectedCategoryName] = useState("");

    useEffect(() => {
      fetch( 
        `https://api.themoviedb.org/3/genre/movie/list?api_key=0fb11828183c307f57d80938739eed79`
      )
        .then((response) => response.json())
        .then((data) => setCategories(data.genres))
        .catch((error) => console.log(error));
    }, []);
    
    return (
        <div>
            <h4>
                {categories.map((genre) =>(
                    <button key={genre.id} onClick={() => {
                        setSelectedCategory(genre);
                        setSelectedCategoryName(genre.name);
                    }}
                    >
                        {genre.name}
                    </button>
                ))}
            </h4>
            {selectedCategory && <Carousel selectedCategoryName={selectedCategoryName} />}
        </div>
    );
  };
  
  export default Categories;