import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    filterMusic();
    setSearchInput("");
  }

  function filterMusic() {
    let searchResults = props.displayAllMusic.filter(function (song) {
      if (
        song.artist.includes(searchInput) | song.album.includes(searchInput)
      ) {
        return true;
      } else {
        return false;
      }
    });
    props.getSearchResults(searchResults);
  }

  return (
    <form onSubmit={handleSubmit} className="form-grid form">
      <label className="search-bar">Search Artists: </label>
      <input
        type="text"
        className=""
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      ></input>
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
