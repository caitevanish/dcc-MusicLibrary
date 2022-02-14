import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic.jsx";



function App() {
  
  const [displayAllMusic,setDisplayAllMusic] = useState([]);

    useEffect(()=> {
      getAllMusic();
    }, [])

    async function getAllMusic(){
      let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music')
      setDisplayAllMusic(response.data);
    }
    console.log(displayAllMusic)
  
  return (
    <div className="App">
      <h1>Hello Music!</h1>
      <DisplayMusic displayAllMusic={displayAllMusic}/>
    </div>
  );
}

export default App;
