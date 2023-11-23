import { useState, useEffect } from "react";
import "./sortileges.css";
function Spells() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        const response = await fetch(
          "https://hp-api.onrender.com/api/spells"
        ); // Utilisation du chemin local
        if (!response.ok) {
          throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
        }

        const fetchedData = await response.json();
        setSpells(fetchedData);
      } catch (error) {
        console.error("Error fetching spells:", error);
      }
    };

    fetchSpells();
  }, []);

  return (
    <div>
      <h2>Sortilèges</h2>
      <ul>
        {spells.map((data) => (
          <div className="cards">
            <img src={data.image} alt={data.name} />
            <h3>Nom: {data.name}</h3>
            <p>Description : {data.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Spells;
