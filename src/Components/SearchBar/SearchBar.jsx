import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const [searchInput, setSearchInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // let searchResult
    filterMusic();
    setSearchInput("");
  }

  function filterMusic() {
    let searchResults = props.displayAllMusic.filter(function (song) {
      if (song.artist.includes(searchInput)) {
        return true;
      } else {
        return false;
      }
    });
    props.getSearchResults(searchResults);
  }

  return (
    <form onSubmit={handleSubmit} className="">
      <input
        type="text"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
        className=""
      ></input>
      <button className=""></button>
    </form>
  );
}

export default SearchBar;
