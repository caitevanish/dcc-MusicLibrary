import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic.jsx";
import NavBar from "./Components/Navbar/Navbar.jsx";
import WelcomeHeader from "./Components/WelcomeHeader/WelcomeHeader.jsx";

function App() {
  const [displayAllMusic, setDisplayAllMusic] = useState([]);

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

  return (
    <div className="container-fluid">
      <div className="row">
        <NavBar />
      </div>
      <div className="row">
        <div className="col-md-4">
          <WelcomeHeader />
          {/* <div className="welcome-header">
            <h1 className="h1">Welcome Caitlin!</h1>
            <p className="p">What's your soundtrack for today?</p>
          </div> */}
        </div>
      </div>
      <div className="col-md-8">
        {/* <SearchBar /> */}
        <DisplayMusic displayAllMusic={displayAllMusic} />
      </div>
    </div>
  );
}

export default App;
