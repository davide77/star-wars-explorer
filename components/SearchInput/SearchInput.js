// src/components/SearchInput/SearchInput.js
import React from 'react';
import { Search } from 'lucide-react';

const SearchInput = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search">
      <Search className="search__icon" size={20} />
      <input
        type="text"
        placeholder="Search characters..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search__input"
      />
    </div>
  );
};

export default SearchInput;