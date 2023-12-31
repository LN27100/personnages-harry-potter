import React, { useState, useEffect } from "react";
import charactersData from "../data/characters.json"; // Importez vos données de personnages JSON

import "./Characters.css";

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then(response => response.json())
      .then(data => {
        const updatedCharacters = data.map(apiCharacter => {
          const foundCharacter = charactersData.find(
            char => char.name === apiCharacter.name
          );
          // Si le personnage est trouvé dans les données locales
          if (foundCharacter) {
            // Mettre à jour les détails du personnage
            const updatedCharacter = {
              ...foundCharacter,
              // Vérifier si l'image est disponible dans l'API
              image: apiCharacter.image || foundCharacter.image,
              // Utiliser la date d'anniversaire de character.json si différente de l'API
              dateOfBirth:
                apiCharacter.dateOfBirth !== foundCharacter.dateOfBirth
                  ? foundCharacter.dateOfBirth
                  : apiCharacter.dateOfBirth,
            };
            return updatedCharacter;
          }
          return null; // Retourner null pour les personnages non trouvés localement
        }).filter(Boolean); // Filtrer les personnages non null (qui ont été trouvés localement)

        setCharacters(updatedCharacters);
      })
      .catch(error => {
        // En cas d'erreur, utilisez les données locales
        console.error('Error fetching data:', error);
        setCharacters(charactersData);
      });
  }, []);

  const defaultImage = "./public/images/carte-du-maraudeur.jpg";

  const groupedCharacters = characters.reduce((acc, character, index) => {
    const groupIndex = Math.floor(index / 3);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(character);
    return acc;
  }, []);

  return (
    <div>
      <div className="title-container">
        <h4>Les personnages</h4>
      </div>

      {groupedCharacters.map((group, index) => (
        <div key={index} className="card-group">
          {group.map((data) => (
            <div key={data.name} className="cards">
              <img src={data.image || defaultImage} alt={data.name} />
              <h2>{data.name}</h2>
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
          ))}
        </div>
      ))}
    </div>
  );
}

export default Characters;