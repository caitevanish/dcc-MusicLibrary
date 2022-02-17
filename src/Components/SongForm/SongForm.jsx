import React, { useState, useEffect } from "react";
import "./SongForm.css";
//the form/modal will pop up when button "Add new song" is pushed.
//Buttons will show up on the song line to update or delete the song

function SongForm(props) {
  const [NewSong, setNewSong] = (useState = "");
  //Hoist up original song info from MusicLibrary to display as values to be changed

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label for="">Song Title</label>
        <input type="text" value={} class="form-control" placeholder="{song.}"></input>
      </div>
      <div className="form-group">
        <label for="">Artist</label>
        <input type="text" value={} class="form-control" placeholder="{song.}"></input>
      </div>
      <div className="form-group">
        <label for="">Album</label>
        <input type="text" value={} class="form-control" placeholder="{song.}"></input>
      </div>
      <div className="form-group">
        <label for="">Genre</label>
        <input type="text" value={} class="form-control" placeholder="{song.}"></input>
      </div>
      <div className="form-group">
        <label for="">Release Date</label>
        <input type="text" value={} class="form-control" placeholder="{song.}"></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SongForm;
