import React, { useEffect, useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center p-4 bg-[#B9E2BC] border-[#A1A1A1] rounded shadow-2xl">
      <input
        type="text"
        className="flex-grow p-2 border border-gray-300 rounded-l-md"
        placeholder="Buscar..."
        value={query}
        onChange={handleInputChange}
      />
      <button
        onClick={handleSearch}
        className="p-2 bg-[#15951D] text-white rounded-r-md hover:bg-[#15951D]"
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
