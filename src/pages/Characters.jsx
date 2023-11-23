import { useState, useEffect } from "react";
import "./Characters.css";

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://hp-api.onrender.com/api/characters");
        if (!response.ok) {
          throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
        }

        const fetchedData = await response.json();
        setCharacters(fetchedData);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  // Divise les personnages en groupes de trois
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
      <h2>Characters</h2>

      {groupedCharacters.map((group, index) => (
        <div key={index} className="card-group">
          {group.map((data) => (
            <div key={data.name} className="cards">
              <img src={data.image} alt={data.name} />
              <h2>{data.name}</h2>
            <h3>Acteur: {data.actor}</h3>
            <p>Maison: {data.house}</p>
            <p> Espèces: {data.species}</p>
            <p>Date d'anniversaire: {data.dateOfBirth}</p>
            <p>Couleur des yeux: {data.eyeColour}</p>
            <p>Couleur de cheveux: {data.hairColour}</p>
            <p>Genre: {data.gender}</p>
            <p>Patronus: {data.patronus}</p>
            <p>Ascendance : {data.ancestry}</p>            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Characters;