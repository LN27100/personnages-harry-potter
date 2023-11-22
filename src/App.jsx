import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import logoPersonnages from '../public/images/personnages.jpg';
import logoSortileges from '../public/images/sortileges.jpg';
import chapeau from '../public/images/chapeau.jpg';

const LogoComponent = ({ image, text, apiUrl }) => {
  const navigate = useNavigate();

  const handleLogoClick = async (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    try {
      // Effectuez une requête vers l'API pour obtenir les données (personnages ou sortilèges)
      const response = await fetch(apiUrl);
      const data = await response.json();

      // Redirigez l'utilisateur vers une nouvelle page avec les données
      navigate('/liste-donnees', { state: { data } });
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
      // Gérez l'erreur (affichage d'un message d'erreur, etc.)
    }
  };

  return (
    <a href="#" className="logo-container" onClick={handleLogoClick}>
      <img src={image} className="logo" alt={`logo ${text}`} />
      <p className="logo-text">{text}</p>
    </a>
  );
};

function App() {
  return (
    <>
      <div>
        <h1 className="texte-ombre">L'univers d'Harry Potter</h1>

        <LogoComponent
          image={logoPersonnages}
          text="Quel personnage serais-tu?"
          apiUrl="https://hp-api.onrender.com/api/characters"
        />

        <LogoComponent
          image={logoSortileges}
          text="Trouves ton sortilèges de prédilections."
          apiUrl="https://hp-api.onrender.com/api/spells"
        />
      </div>

      <div className="card">
        <LogoComponent
          image={chapeau}
          text="Quelle sera ta maison !!"
          apiUrl="https://hp-api.onrender.com/api/characters/house/:house"
        />
      </div>
    </>
  );
}

export default App;