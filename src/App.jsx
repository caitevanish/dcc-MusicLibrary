import "./App.css";
import React from "react";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic.jsx";
import NavBar from "./Components/Navbar/Navbar.jsx";
import WelcomeHeader from "./Components/WelcomeHeader/WelcomeHeader.jsx";
import SearchBar from "./Components/SearchBar/SearchBar";
// import SongForm from "./Components/SongForm/SongForm";
import TempModalSongForm from "./Components/SongForm/SongForm";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [musicTable, setMusicTable] = useState([]);

  // const [newSong, setNewSong] = useState("");

  useEffect(() => {
    getAllMusic();
  }, []);

  async function getAllMusic() {
    let response = await axios.get("http://127.0.0.1:8000/music/");
    setMusicTable(response.data);
  }

  function addSong(songToCreate) {
    console.log(songToCreate);
    // let newSong = await axios.post("http://127.0.0.1:8000/music/")
    // if (newSong.status ==
    //Axios POST request here!!
    //If 200 status, then getAllMusic
    return;
  }

  return (
    <div className="app">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="row">
        <div className="column-left col-md-6">
          <WelcomeHeader />
          <SearchBar results={getSearchResults} />
          <TempModalSongForm addSong={addSong} />
        </div>
        <div className="column-right col-md-6">
          <DisplayMusic musicTable={musicTable} />
        </div>
      </div>
    </div>
  );
}

export default App;
