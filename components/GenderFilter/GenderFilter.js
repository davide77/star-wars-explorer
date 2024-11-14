import React from 'react';
import { Filter } from 'lucide-react';

const GenderFilter = ({ filterGender, onFilterChange }) => {
  return (
    <div className='filter'>
      <Filter className='filter__icon' size={20} />
      <select
        value={filterGender}
        onChange={(e) => onFilterChange(e.target.value)}
        className='filter__select'
      >
        <option value='all'>All Genders</option>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
        <option value='n/a'>N/A</option>
      </select>
    </div>
  );
};

export default GenderFilter;
