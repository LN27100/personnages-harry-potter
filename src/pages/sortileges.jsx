import { useState, useEffect } from "react";
import "./sortileges.css";

function Spells() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        const response = await fetch("https://hp-api.onrender.com/api/spells");
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

  // Divise les sorts en groupes de trois
  const groupedSpells = spells.reduce((acc, spell, index) => {
    const groupIndex = Math.floor(index / 3);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(spell);
    return acc;
  }, []);

  return (
    <div>
      <div className="title-container">
        <h4>Les sortilèges</h4>
      </div>

      {groupedSpells.map((group, index) => (
        <div key={index} className="card-group">
          {group.map((data) => (
            <div key={data.name} className="cards">
              <h3>Nom: {data.name}</h3>
              <p>Description : {data.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Spells;