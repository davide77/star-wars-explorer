// src/App.jsx
import React, { useState } from 'react';
import SearchInput from './components/SearchInput/SearchInput';
import GenderFilter from './components/GenderFilter/GenderFilter';
import CharacterList from './components/CharacterList/CharacterList';
import useStarWarsData from './hooks/useStarWarsData';
import './styles/main.scss';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGender, setFilterGender] = useState('all');
  const { characters, loading, error, hasMore, loadMore } = useStarWarsData();

  const filteredCharacters = characters.filter((character) => {
    const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGender = filterGender === 'all' || character.gender === filterGender;
    return matchesSearch && matchesGender;
  });

  return (
    <div className='explorer'>
      <div className='explorer__header'>
        <h1>Star Wars Characters</h1>
        <p>Showing {filteredCharacters.length} characters</p>
      </div>

      <div className='explorer__controls'>
        <SearchInput searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <GenderFilter filterGender={filterGender} onFilterChange={setFilterGender} />
      </div>

      {error ? (
        <div className='error'>{error}</div>
      ) : (
        <>
          <CharacterList characters={filteredCharacters} />

          {hasMore && (
            <div className='load-more'>
              <button onClick={loadMore} disabled={loading} className='load-more__button'>
                {loading ? 'Loading...' : 'Load More'}
              </button>
            </div>
          )}

          {loading && (
            <div className='loader'>
              <div className='loader__spinner' />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default App;
