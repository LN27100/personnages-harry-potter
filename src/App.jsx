import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import logoPersonnages from '../public/images/personnages.jpg';
import logoSortileges from '../public/images/sortileges.jpg';
import chapeau from '../public/images/chapeau.jpg';

// Composant réutilisable représentant un logo cliquable
const LogoComponent = ({ image, text, apiUrl }) => {
  const navigate = useNavigate();

  const handleLogoClick = async () => {
    try {
      // Effectue une requête vers l'API pour obtenir les données
      const response = await fetch(apiUrl);

      // Vérifie si la réponse est réussie (statut 2xx)
      if (!response.ok) {
        throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
      }

      // Convertit la réponse en JSON
      const data = await response.json();

      // Affiche les données récupérées dans la console
      console.log('Données récupérées avec succès :', data);

      // Ouvre une nouvelle fenêtre avec les données
      const newWindow = window.open('', '_blank');
      newWindow.document.write(JSON.stringify(data));

      // Redirige l'utilisateur vers une nouvelle page avec les données
      navigate('/liste-donnees', { state: { data } });
    } catch (error) {
      // Gère les erreurs, affiche un message d'erreur dans la console
      console.error('Erreur lors de la récupération des données :', error.message);
      // Gérez l'erreur de manière appropriée (affichage d'un message d'erreur à l'utilisateur, etc.)
    }
  };

  return (
    <div className="logo-container" onClick={handleLogoClick}>
      <img src={image} className="logo" alt={`logo ${text}`} />
      <p className="logo-text">{text}</p>
    </div>
  );
};

// Composant principal représentant l'application
function App() {
  return (
    <div>
      <h1 className="texte-ombre">L'univers d'Harry Potter</h1>

      <div>
        {/* Premier logo cliquable */}
        <LogoComponent
          image={logoPersonnages}
          text="Quel personnage serais-tu?"
          apiUrl="https://hp-api.onrender.com/api/characters"
        />

        {/* Deuxième logo cliquable */}
        <LogoComponent
          image={logoSortileges}
          text="Trouves ton sortilège de prédilection."
          apiUrl="https://hp-api.onrender.com/api/spells"
        />
      </div>

      <div className="card">
        {/* Troisième logo cliquable */}
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