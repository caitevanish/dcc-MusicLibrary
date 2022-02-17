import React, { useState, useEffect } from "react";
import "./SongForm.css";
//the form/modal will pop up when button "Add new song" is pushed.
//Buttons will show up on the song line to update or delete the song

const SongForm = (props) => {
  const [newSong, setNewSong] = useState("");
  //Hoist up original song info from MusicLibrary to display as values to be changed

  //Bind each input to a state variabl
  const [newTitle, setNewTitle] = useState("");
  const [newArtist, setNewArtist] = useState("");
  const [newAlbum, setNewAlbum] = useState("");
  const [newGenre, setNewGenre] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newSong = {
      newTitle: "title",
      newArtist: "artist",
      newAlbum: "album",

      // keep adding them.
    };
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label for="song_title">Song Title</label>
        <input
          type="text"
          onChange={(event) => setNewTitle(event.target.value)}
          value={newTitle}
          class="form-control"
          placeholder="{song.}"
        ></input>
      </div>
      <div className="form-group">
        <label for="artist">Artist</label>
        <input
          type="text"
          onChange={(event) => setNewArtist(event.target.value)}
          value={newArtist}
          class="form-control"
          placeholder="{song.}"
        ></input>
      </div>
      <div className="form-group">
        <label for="album">Album</label>
        <input
          type="text"
          onChange={(event) => setNewAlbum(event.target.value)}
          value={newAlbum}
          class="form-control"
          placeholder="{song.}"
        ></input>
      </div>
      <div className="form-group">
        <label for="genre">Genre</label>
        <input
          type="text"
          onChange={(event) => setNewGenre(event.target.value)}
          value={newGenre}
          class="form-control"
          placeholder="{song.}"
        ></input>
      </div>
      <div className="form-group">
        <label for="release_date">Release Date</label>
        <input
          type="date"
          onChange={(event) => setNewReleaseDate(event.target.value)}
          value={newReleaseDate}
          class="form-control"
          placeholder="{song.}"
        ></input>
      </div>
      <button onSubmit={handleSubmit} type="submit">
        Submit
      </button>
    </form>
  );
};

export default SongForm;
