import React from 'react'
import CardGrid from '../assets/Components/CardGrid';
import SearchBar from '../assets/Components/SearchBar';

const SearchPage = () => {
  return (
    <>
    <SearchBar></SearchBar>
      <div className="min-h-screen flex items-center justify-center bg-[#B9E2BC]">
        <CardGrid/>
      </div>
    </>
    );
}

export default SearchPage
