import React from 'react';

function Sortileges() {
  const sortsListe = ['Expelliarmus', 'Lumos', 'Alohomora', 'Expecto Patronum'];

  return (
    <div>
      {/* Contenu de la page Sortileges */}
      <h2>Sortilèges</h2>
      <ul>
        {sortsListe.map((sort, index) => (
          <li key={index}>{sort}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sortileges;