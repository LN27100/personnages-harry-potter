import { useState, useEffect } from "react";
import "./maisons.css";
function Houses() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await fetch(
          "https://hp-api.onrender.com/api/characters/house/gryffindor"
        ); // Utilisation du chemin local
        if (!response.ok) {
          throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
        }

        const fetchedData = await response.json();
        setHouses(fetchedData);
      } catch (error) {
        console.error("Error fetching houses:", error);
      }
    };

    fetchHouses();
  }, []);

  return (
    <div>
      <h2>Maison Gryffindor</h2>
      <ul>
        {houses.map((data) => (
          <div className="cards">
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
        ))}
      </ul>
    </div>
  );
}

export default Houses;
