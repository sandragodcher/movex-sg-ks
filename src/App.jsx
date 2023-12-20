import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop'; // Import correct du composant ScrollToTop
import Home from './Pages/Home';
import PageCategories from './Pages/page-categories';
import PageApropos from './Pages/page-apropos';
import PageFilm from './Pages/page-film';
import PageActeur from './Pages/page-acteur';
import PageChoixCategorie from './Pages/choix-categorie';
import PageRecherche from './Pages/recherche';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Utilisation du composant ScrollToTop */}
      <Routes>
        <Route
          index
          element={<Home />}
        />
        <Route
          path="page-categories"
          element={<PageCategories />}
        />
        <Route
          path="page-apropos"
          element={<PageApropos />}
        />
        <Route
          path="page-film/:id"
          element={<PageFilm />}
        />
        <Route
          path="page-acteur/:id"
          element={<PageActeur />}
        />
        <Route
          path="choix-categorie/:categorieName"
          element={<PageChoixCategorie />}
        />
        <Route
          path="recherche"
          element={<PageRecherche />}
        />
        {/* ... autres routes si nécessaire ... */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
