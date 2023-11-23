import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from "react-router-dom";
import Characters from "./pages/Characters";
import Spells from "./pages/Sortileges";
import Houses from './pages/Maisons';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/characters" element={<Characters />} />
        <Route path="/spells" element={<Spells />} />
        <Route path="/houses" element={<Houses />} />
      </Routes>
    </Router>
  );
}

function Navigation() {
  const navigate = useNavigate(); // Utilisation de useNavigate pour la navigation

  return (
    <div style={{ position: 'relative' }}>
      <nav>
        <h1>L'univers Harry Potter</h1>
          <ul>
            <li>
              <Link to="/characters" className="logo-link">
                <img
                  className="logo"
                  id="pointeur"
                  src="../public/images/personnages.jpg"
                  alt="logo personnages"
                />
                <span id="souris" className="logo-text">Quel est votre personnage favori ?</span>
              </Link>
            </li>
            <li>
              <Link to="/spells" className="logo-link">
                <img
                  className="logo"
                  id="pointe"
                  src="../public/images/sortileges.jpg"
                  alt="logo sortilèges"
                />
                <span className="logo-text" id="curs"
                >Connaissez-vous les sortilèges ?</span>
              </Link>
            </li>
            <li>
              <Link to="/houses" className="logo-link">
                <img
                  className="logo"
                  id="curseur"
                  src="../public/images/chapeau.jpg"
                  alt="logo maisons"
                />
                <span className="logo-text" id="cursor"
                >Qui fais parti de la maison Gryffondor ?</span>
              </Link>
            </li>
            <li>
            {/* Ajout du bouton de retour */}
            <button class="buttonReturn" onClick={() => navigate(-1)}>Retour</button>
          </li>
          </ul>

        </nav>
      </div>
  );
}

export default App;
