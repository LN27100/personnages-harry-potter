import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Maison from '../components/maisons.js';
import Personnages from '../components/personnages.js';
import Sortileges from '../components/sortileges.js';
import logoPersonnages from '../public/images/personnages.jpg';
import logoSortileges from '../public/images/sortileges.jpg';
import chapeau from '../public/images/chapeau.jpg';


function Home() {
  return (
    <>
      <div>
        <h1 className="texte-ombre">L'univers d'Harry Potter</h1>

        <Link to="/personnages" className="logo-container">
          <img src={logoPersonnages} className="logo" alt="logo personnages" />
          <p className="logo-text">Quel personnage serais-tu?</p>
        </Link>

        <Link to="/sortileges" className="logo-container">
          <img src={logoSortileges} className="logo" alt="logo sortilèges" />
          <p className="logo-text">Trouves ton sortilège de prédilection.</p>
        </Link>
      </div>

      <div className="card">
        <Link to="/maisons" className="logo-container">
          <img src={chapeau} className="logo" alt="logo maisons" />
          <p className="logo-text">Quelle sera ta maison !</p>
        </Link>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <>
        <nav>
          <ul className="nav">
            <li>
              <Link to="/" className="nav-item">Home</Link>
            </li>
            <li>
              <Link to="/maisons" className="nav-item">Maisons</Link>
            </li>
            <li>
              <Link to="/personnages" className="nav-item">Personnages</Link>
            </li>
            <li>
              <Link to="/sortileges" className="nav-item">Sortilèges</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maisons" element={<Maison />} />
          <Route path="/personnages" element={<Personnages />} />
          <Route path="/sortileges" element={<Sortileges />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;