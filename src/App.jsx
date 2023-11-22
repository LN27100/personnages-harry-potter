import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import logoPersonnages from '../public/images/personnages.jpg';
import logoSortileges from '../public/images/sortileges.jpg';
import chapeau from '../public/images/chapeau.jpg';

const LogoComponent = ({ image, text, apiUrl }) => {
  const navigate = useNavigate();

  const handleLogoClick = async () => {
    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
      }

      const data = await response.json();

      console.log('Données récupérées avec succès :', data);

      navigate('/liste-donnees', { state: { data } });
      // Ouvre une nouvelle fenêtre avec les données
      const newWindow = window.open('', '_blank');
      newWindow.document.write(JSON.stringify(data));
      
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
      // Gérez l'erreur (affichage d'un message d'erreur, etc.)
    }
  };

  return (
    <div className="logo-container" onClick={handleLogoClick}>
      <img src={image} className="logo" alt={`logo ${text}`} />
      <p className="logo-text">{text}</p>
    </div>
  );
};

function App() {
  return (
    <div>
      <h1 className="texte-ombre">L'univers d'Harry Potter</h1>

      <div>
        <LogoComponent
          image={logoPersonnages}
          text="Quel personnage serais-tu?"
          apiUrl="https://hp-api.onrender.com/api/characters"
        />

        <LogoComponent
          image={logoSortileges}
          text="Trouves ton sortilège de prédilection."
          apiUrl="https://hp-api.onrender.com/api/spells"
        />
      </div>

      <div className="card">
        <LogoComponent
          image={chapeau}
          text="Quelle sera ta maison !!"
          apiUrl="https://hp-api.onrender.com/api/characters/house/gryffindor"
        />
      </div>
    </div>
  );
}

export default App;