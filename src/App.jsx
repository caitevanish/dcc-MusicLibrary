import './App.css';
import React, { useState, useEffect } from 'react';
import MusicTable from './Components/MusicTable/MusicTable.jsx';
import NavBar from './Components/Navbar/Navbar.jsx';
import SearchBar from './Components/SearchBar/SearchBar';
import SongForm from './Components/SongForm/SongForm';
// import TempModalSongForm from './Components/SongForm/SongForm';
import axios from 'axios';
import UpdateSongForm from './Components/UpdateSongForm/UpdateSongForm';

function App() {
  const [musicTable, setMusicTable] = useState([]);
  const [filteredMusic, setFilteredMusic] = useState([]);
  const [editId, setEditId] = useState(null);
  const [formField, setFormFields] = useState('');

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

  async function addSong(newSong) {
    console.log(newSong);
    let result = await axios.post('http://127.0.0.1:8000/music/', newSong);
    console.log(result);
    getAllMusic();
    return;
  }

  async function editSong(id, newSong) {
    try {
      let updatedSong = await axios.put(
        `http://127.0.0.1:8000/music/${id}/`,
        newSong
      );
      console.log(updatedSong);
    } catch {
      console.log('error. Something went wrong.');
    }
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
          <SongForm addSong={addSong} />
        </div>

        <div className='column-right col-md-6'>
          <MusicTable
            filteredMusic={filteredMusic}
            getAllMusic={getAllMusic}
            setEditId={setEditId}
            setFormFields={setFormFields}
          />
          <UpdateSongForm
            editId={editId}
            editSong={editSong}
            formField={formField}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
