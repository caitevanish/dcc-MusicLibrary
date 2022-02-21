import './App.css';
import React, { useState, useEffect } from 'react';
import MusicTable from './Components/MusicTable/MusicTable.jsx';
import NavBar from './Components/Navbar/Navbar.jsx';
import SearchBar from './Components/SearchBar/SearchBar';
// import SongForm from "./Components/SongForm/SongForm";
import TempModalSongForm from './Components/SongForm/SongForm';
import axios from 'axios';

function App() {
  const [musicTable, setMusicTable] = useState([]);
  const [filteredMusic, setFilteredMusic] = useState([]);
  // const [newSong, setNewSong] = useState("");

  useEffect(() => {
    getAllMusic();
  }, []);

  async function getAllMusic() {
    let response = await axios.get('http://127.0.0.1:8000/music/');
    setMusicTable(response.data);
  }

  useEffect(() => {
    setFilteredMusic(musicTable);
  }, [musicTable]);

  function getSearchResults(searchKeyword) {
    searchKeyword = searchKeyword.toLowerCase();
    let filteredList = musicTable.filter((song) => {
      return (
        song.title.toLowerCase().includes(searchKeyword) ||
        song.artist.toLowerCase().includes(searchKeyword) ||
        song.album.toLowerCase().includes(searchKeyword) ||
        song.genre.toLowerCase().includes(searchKeyword) ||
        song.release_date.toLowerCase().includes(searchKeyword)
      );
    });
    setFilteredMusic(filteredList);
  }

  function addSong(songToCreate) {
    console.log(songToCreate);
    return;
  }

  return (
    <div className='app'>
      <div className='navbar'>
        <NavBar />
      </div>
      <div className='row'>
        <div className='column-left col-md-6'>
          <div className='welcome-header'>
            <h1>Welcome Caitlin!</h1>
            <p>What's your soundtrack for today?</p>
          </div>
          <SearchBar getSearchResults={getSearchResults} />
          <p className='small'>
            Not finding what you want? Click here to add it to your list:
            <button className='btn btn-primary addSong'>Add Song</button>
          </p>
          {/* <TempModalSongForm addSong={addSong} /> */}
        </div>
        <div className='column-right col-md-6'>
          <MusicTable filteredMusic={filteredMusic} />
        </div>
      </div>
    </div>
  );
}

export default App;
