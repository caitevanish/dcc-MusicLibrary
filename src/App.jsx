import "./App.css";
import React from "react";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic.jsx";
import NavBar from "./Components/Navbar/Navbar.jsx";
import WelcomeHeader from "./Components/WelcomeHeader/WelcomeHeader.jsx";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <NavBar />
      </div>
      <div className="row">
        <div className="col-md-5">
          <WelcomeHeader />
        </div>

        <div className="col-md-5">
          <div>{/* <SearchBar /> */}</div>
          <div className="box">
            <DisplayMusic />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
