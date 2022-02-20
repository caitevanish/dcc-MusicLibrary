import React, { useEffect, useState } from 'react';
// import "./SearchBar.css";

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
    <form onSubmit={handleSubmit}>
      <label className='search-bar'>Search Artists: </label>
      <input
        type='text'
        className='search-bar'
        value={searchKeyword}
        onChange={handleChange}
      ></input>
      {/* <button type="submit" className="btn btn-primary">
        Search
      </button> */}
    </form>
  );
};

export default SearchBar;
