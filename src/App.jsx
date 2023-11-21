import React, { useState, useEffect } from 'react';
import './App.css';
import logoPersonnages from '../public/images/personnages.jpg';
import logoSortileges from '../public/images/sortileges.jpg';
import chapeau from '../public/images/chapeau.jpg';
import persoHpData from '../data/persoHp.json';
import sortilegeHpData from '../data/sortilegeHp.json';

function App() {
  const [persoHpDataState, setPersoHpData] = useState(null);
  const [sortilegeHpDataState, setSortilegeHpData] = useState(null);

  useEffect(() => {
    // Set state with imported JSON data
    setPersoHpData(persoHpData);
    setSortilegeHpData(sortilegeHpData);
  }, []);

  return (
    <>
      <div>
        <h1 className="texte-ombre">L'univers d'Harry Potter</h1>

        <a href="#" className="logo-container" onClick={() => console.log(persoHpDataState)}>
          <img src={logoPersonnages} className="logo" alt="logo personnages" />
          <p className="logo-text">Quel personnage serais-tu?</p>
        </a>

        <a href="#" className="logo-container" onClick={() => console.log(sortilegeHpDataState)}>
          <img src={logoSortileges} className="logo" alt="logo sortilèges" />
          <p className="logo-text">Trouves ton sortilège de prédilection.</p>
        </a>
      </div>

      <div className="card">
        <a href="#" className="logo-container">
          <img src={chapeau} className="logo" alt="logo maisons" />
          <p className="logo-text">Quelle sera ta maison !</p>
        </a>
      </div>
    </>
  );
}

export default App;