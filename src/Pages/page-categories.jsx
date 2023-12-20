import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../Components/Carousel-trending';
import CarouselUpcoming from '../Components/Carousel-upcoming';
import Footer from '../Components/Footer';
import Menu from '../Components/Menu';

function PageCategories() {
  const categories = [
    'Action',
    'Adventure',
    'Animation',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'History',
    'Horror',
    'Music',
    'Mystery',
    'Romance',
    'Science Fiction',
    'TV Movie',
    'Thriller',
    'War',
  ];

  return (
    <>
      <Menu />
      <div className="page-categories">
        <div className="header">
          <div className="container-fluid image-backdrop"></div>
          <h1>CATEGORIES</h1>
        </div>
        <Carousel />
        <section className="container-fluid blue">
          <div className="categories row">
            {categories.map((category, index) => (
              <div
                key={index}
                className="col-6 col-lg-4 mx-auto container-image">
                <div className={`${category.toLowerCase()} type`}>
                  <Link
                    to={`/choix-categorie/${category}`}
                    className="dark-filter">
                    <h5>{category}</h5>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        <CarouselUpcoming />
        <Footer />
      </div>
    </>
  );
}

export default PageCategories;
