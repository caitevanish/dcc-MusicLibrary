import "./App.css";
import React from "react";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic.jsx";
import NavBar from "./Components/Navbar/Navbar.jsx";
import WelcomeHeader from "./Components/WelcomeHeader/WelcomeHeader.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [musicTable, setMusicTable] = useState([]);

  useEffect(() => {
    getAllMusic();
  }, []);
  async function getAllMusic() {
    let response = await axios.get(
      "http://www.devcodecampmusiclibrary.com/api/music"
    );
    setMusicTable(response.data);
  }

  return (
    // <NavBar>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-5">
          <WelcomeHeader />
        </div>

        <div className="col-md-5">
          <div className="box">
            <DisplayMusic musicTable={musicTable} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
