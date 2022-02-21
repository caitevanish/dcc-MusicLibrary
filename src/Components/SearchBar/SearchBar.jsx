import React, { useEffect, useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ getSearchResults }) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    getSearchResults(searchKeyword);
  }, [searchKeyword]);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    setSearchKeyword(event.target.value);
  }
  // console.log(searchKeyword);

  return (
    <form className='search-bar' onSubmit={handleSubmit}>
      <label />
      <input
        type='text'
        className='form-control'
        value={searchKeyword}
        onChange={handleChange}
        placeholder='Search by Song, Arist, Album, Genre or Date'
      ></input>
      {/* <button type="submit" className="btn btn-primary">
        Search
      </button> */}
    </form>
  );
};

export default SearchBar;
