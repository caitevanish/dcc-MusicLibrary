import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import './SongForm.css';
//the form/modal will pop up when button "Add new song" is pushed.
//Buttons will show up on the song line to update or delete the song

const SongForm = (props) => {
  //Bind each input to a state variabl
  const [newTitle, setNewTitle] = useState('');
  const [newArtist, setNewArtist] = useState('');
  const [newAlbum, setNewAlbum] = useState('');
  const [newGenre, setNewGenre] = useState('');
  const [newReleaseDate, setNewReleaseDate] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    let newSong = {
      title: newTitle,
      artist: newArtist,
      album: newAlbum,
      genre: newGenre,
      release_date: newReleaseDate,
    };
    props.addSong(newSong);
    resetSongForm();
  }

  function resetSongForm() {
    setNewTitle('');
    setNewArtist('');
    setNewAlbum('');
    setNewGenre('');
    setNewReleaseDate('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='song_title'>Song Title</label>
        <input
          type='text'
          onChange={(event) => setNewTitle(event.target.value)}
          value={newTitle}
          className='form-control'
        ></input>
      </div>
      <div className='form-group'>
        <label htmlFor='artist'>Artist</label>
        <input
          type='text'
          onChange={(event) => setNewArtist(event.target.value)}
          value={newArtist}
          className='form-control'
        ></input>
      </div>
      <div className='form-group'>
        <label htmlFor='album'>Album</label>
        <input
          type='text'
          onChange={(event) => setNewAlbum(event.target.value)}
          value={newAlbum}
          className='form-control'
        ></input>
      </div>
      <div className='form-group'>
        <label htmlFor='genre'>Genre</label>
        <input
          type='text'
          onChange={(event) => setNewGenre(event.target.value)}
          value={newGenre}
          className='form-control'
        ></input>
      </div>
      <div className='form-group'>
        <label htmlFor='release_date'>Release Date</label>
        <input
          type='date'
          onChange={(event) => setNewReleaseDate(event.target.value)}
          value={newReleaseDate}
          className='form-control'
        ></input>
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default SongForm;
