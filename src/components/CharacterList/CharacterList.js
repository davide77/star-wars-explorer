import React from 'react';

const CharacterList = ({ characters }) => {
  const getCharacterId = (url) => {
    // Extract ID from character URL (e.g., "https://swapi.dev/api/people/1/")
    const matches = url.match(/\/([0-9]*)\/$/);
    return matches ? matches[1] : '1';
  };

  const getImageUrl = (characterUrl) => {
    const id = getCharacterId(characterUrl);
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  };

  return (
    <div className="character-grid">
      {characters.map((character, index) => (
        <div key={index} className="character-card">
          <div className="character-card__image">
            <img
              src={getImageUrl(character.url)}
              alt={character.name}
              onError={(e) => {
                e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
              }}
            />
          </div>
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