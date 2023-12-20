import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Menu() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/recherche?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery(''); 
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg blue">
        <div className="container">
          <Link
            className="navbar-brand"
            to="/">
            <img
              className="logo"
              src="./asset/images/logo_menu.png"
              alt="logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/page-categories">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/page-apropos">
                  About
                </Link>
              </li>
            </ul>

            <form
              onSubmit={handleSearch}
              className="searchbar">
              <input
                className="search_input"
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Search a movie"
              />
              <button
                type="submit"
                className="search_icon">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menu;
