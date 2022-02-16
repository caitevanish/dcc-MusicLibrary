import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import "./DisplayMusic.css";

function DisplayMusic(props) {
  const [displayAllMusic, setDisplayAllMusic] = useState([]);
  const [filteredMusic, setFilteredMusic] = useState([]);

  useEffect(() => {
    getAllMusic();
  }, []);

  async function getAllMusic() {
    let response = await axios.get(
      "http://www.devcodecampmusiclibrary.com/api/music"
    );
    setDisplayAllMusic(response.data);
  }
  console.log(displayAllMusic);

  function getSearchResults(results) {
    setFilteredMusic(results);
  }

  //filter music
  // let displayMusic= [];
  // let filterAlbums = displayMusic.filter(function(album){
  //   if(album)
  // })

  // displayAllMusic = { displayAllMusic };

  return (
    <div className="searchbar">
      <SearchBar
        displayAllMusic={displayAllMusic}
        getSearchResults={getSearchResults}
      />
      <div className="allMusic">
        <div className="scrollable">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Index</th>
                <th>Artist</th>
                <th>Song Title</th>
                <th>Album</th>
                <th>Genre</th>
                <th>Release Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredMusic.map((info, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{info.artist}</td>
                    <td>{info.title}</td>
                    <td>{info.album}</td>
                    <td>{info.genre}</td>
                    <td>{info.releaseDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default DisplayMusic;
