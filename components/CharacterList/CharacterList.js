import React from 'react';

const CharacterList = ({ characters }) => {
  return (
    <div className="character-grid">
      {characters.map((character, index) => (
        <div key={index} className="character-card">
          <h2 className="character-card__name">{character.name}</h2>
          <div className="character-card__detail">
            <span>Birth Year:</span>
            <span>{character.birth_year}</span>
          </div>
          <div className="character-card__detail">
            <span>Gender:</span>
            <span>{character.gender}</span>
          </div>
          <div className="character-card__detail">
            <span>Height:</span>
            <span>{character.height}cm</span>
          </div>
          <div className="character-card__detail">
            <span>Mass:</span>
            <span>{character.mass}kg</span>
          </div>
          <div className="character-card__detail">
            <span>Homeworld:</span>
            <span>{character.homeworldName}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;