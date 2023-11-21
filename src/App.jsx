import React from 'react';
import { useState } from 'react';
import './App.css'
import logoPersonnages from '../public/images/personnages.jpg'
import logoSortileges from '../public/images/sortileges.jpg'
import chapeau from '../public/images/chapeau.jpg'

function App() {
  return (
    <>
      <div>
        <h1 className="texte-ombre">L'univers d'Harry Potter</h1>

        <a href="https://vitejs.dev" target="_blank" className="logo-container">
          <img src={logoPersonnages} className="logo" alt="logo personnages" />
          <p className="logo-text">Quel personnage serais-tu?</p>
        </a>


        <a href="https://react.dev" target="_blank" className="logo-container">
          <img src={logoSortileges} className="logo" alt="logo sortilèges" />
          <p className="logo-text">Trouves ton sortilèges de prédilections.</p>
        </a>
      </div>


      <div className="card">
      <a href="https://react.dev" target="_blank" className="logo-container">
        <img src={chapeau} className="logo" alt="logo maisons" />
          <p className="logo-text">Quelle sera ta maison !!</p>
        </a>

      </div>
    </>
  );
}

export default App;