// Import des modules nécessaires depuis React et React Router DOM
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRoot } from 'react-dom/client';  // Importez createRoot depuis "react-dom/client"
import './App.css';  // Import du fichier de styles
import logoPersonnages from '../public/images/personnages.jpg';  // Import des images
import logoSortileges from '../public/images/sortileges.jpg';
import chapeau from '../public/images/chapeau.jpg';

// Composant représentant une carte générique
const Card = ({ data, type }) => {
  // Condition pour déterminer le type de carte à afficher en fonction du paramètre 'type'
  if (type === 'characters') {
    return (
      // Carte pour les personnages
      <div className="card">
        <img src={data.image} alt={data.name} />
        <h2>Nom: {data.name}</h2>
        <h3>Acteur: {data.actor}</h3>
        <p>Maison: {data.house}</p>
        <p> Espèces: {data.species}</p>
        <p>Date d'anniversaire: {data.dateOfBirth}</p>
        <p>Couleur des yeux: {data.eyeColour}</p>
        <p>Couleur de cheveux: {data.hairColour}</p>
        <p>Genre: {data.gender}</p>
        <p>Patronus: {data.patronus}</p>
        <p>Ascendance : {data.ancestry}</p>
      </div>
    );
  } else if (type === 'spells') {
    return (
      // Carte pour les sortilèges
      <div className="card">
        <h2>Nom: {data.name}</h2>
        <p>Nom: {data.description}</p>
      </div>
    );
  } else if (type === 'houses') {
    return (
      // Carte pour les maisons
      <div className="card">
        <img src={data.image} alt={data.name} />
        <h2>Nom: {data.name}</h2>
        <h3>Acteur: {data.actor}</h3>
        <p>Maison: {data.house}</p>
        <p> Espèces: {data.species}</p>
        <p>Date d'anniversaire: {data.dateOfBirth}</p>
        <p>Couleur des yeux: {data.eyeColour}</p>
        <p>Couleur de cheveux: {data.hairColour}</p>
        <p>Genre: {data.gender}</p>
        <p>Patronus: {data.patronus}</p>
        <p>Ascendance : {data.ancestry}</p>
      </div>
    );
  } else {
    return null; // Type non pris en charge
  }
};

// Composant réutilisable représentant un logo cliquable
const LogoComponent = ({ image, text, apiUrl, dataType }) => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  // Effet pour récupérer les données depuis l'API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
        }

        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error.message);
      }
    };

    fetchData();
  }, [apiUrl]);

  // Fonction gérant le clic sur le logo
  const handleLogoClick = () => {
    if (data) {
      const newWindow = window.open('', '_blank');

      const container = document.createElement('div');
      const root = createRoot(container);  // Utilisez createRoot depuis "react-dom/client"

      // Crée des cartes à partir des données et les rend dans la fenêtre nouvellement ouverte
      const cards = data.map((item) => (
        <Card key={item.id} data={item} type={dataType} />
      ));

      root.render(<div>{cards}</div>);
      newWindow.document.body.appendChild(container);
    }
  };

  // Rendu du composant du logo cliquable
  return (
    <div className="logo-container" onClick={handleLogoClick}>
      <img src={image} className="logo" alt={`logo ${text}`} />
      <p className="logo-text">{text}</p>
    </div>
  );
};

// Composant principal représentant l'application
function App() {
  // Rendu du composant principal de l'application
  return (
    <div>
      <h1 className="texte-ombre">L'univers d'Harry Potter</h1>

      <div>
        {/* Premier logo cliquable */}
        <LogoComponent
          image={logoPersonnages}
          text="Quel personnage serais-tu?"
          apiUrl="https://hp-api.onrender.com/api/characters"
          dataType="characters"
        />

        {/* Deuxième logo cliquable */}
        <LogoComponent
          image={logoSortileges}
          text="Trouves ton sortilège de prédilection."
          apiUrl="https://hp-api.onrender.com/api/spells"
          dataType="spells"
        />
      </div>

      <div className="card">
        {/* Troisième logo cliquable */}
        <LogoComponent
          image={chapeau}
          text="Quelle sera ta maison !!"
          apiUrl="https://hp-api.onrender.com/api/characters/house/gryffindor"
          dataType="houses"
        />
      </div>
    </div>
  );
}

// Export du composant principal pour être utilisé ailleurs
export default App;