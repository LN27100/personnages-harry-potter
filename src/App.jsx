// import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Characters from "./pages/Characters";
import Spells from "./pages/sortileges";
import Houses from './pages/maisons';

function App() {
  return (
    <Router>
      <div style={{ position: 'relative' }}> {/* Ajout du style position: relative */}
        <nav>
          <h1>L'univers Harry Potter</h1>
          <ul>
            <li>
              <Link to="/characters" className="logo-link">
                <img
                  className="logo"
                  src="../public/images/personnages.jpg"
                  alt="logo personnages"
                />
                <span className="logo-text">Quel est votre personnage favori ?</span> {/* Texte à superposer */}
              </Link>
            </li>
            <li>
              <Link to="/spells" className="logo-link">
                <img
                  className="logo"
                  src="../public/images/sortileges.jpg"
                  alt="logo sortilèges"
                />
                <span className="logo-text">Connaissez-vous les sortilèges ?</span> {/* Texte à superposer */}
              </Link>
            </li>
            <li>
              <Link to="/houses" className="logo-link">
                <img
                  className="logo"
                  src="../public/images/chapeau.jpg"
                  alt="logo maisons"
                />
                <span className="logo-text">Qui fais parti de la maison Gryffondor ?</span> {/* Texte à superposer */}
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/characters" element={<Characters />} />
          <Route path="/spells" element={<Spells />} />
          <Route path="/houses" element={<Houses />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
