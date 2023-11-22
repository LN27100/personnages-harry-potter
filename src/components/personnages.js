import React from 'react';

function Personnages() {
  const personnagesListe = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Dumbledore'];

  return (
    <div>
      {/* Contenu de la page Personnages */}
      <h2>Personnages</h2>
      <ul>
        {personnagesListe.map((personnage, index) => (
          <li key={index}>{personnage}</li>
        ))}
      </ul>
    </div>
  );
}

export default Personnages;