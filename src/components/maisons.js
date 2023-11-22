import React from 'react';

function Maisons() {
  const maisonsListe = ['Gryffondor', 'Serpentard', 'Poufsouffle', 'Serdaigle'];

  return (
    <div>
      {/* Contenu de la page Maisons */}
      <h2>Maisons</h2>
      <ul>
        {maisonsListe.map((maison, index) => (
          <li key={index}>{maison}</li>
        ))}
      </ul>
    </div>
  );
}

export default Maisons;