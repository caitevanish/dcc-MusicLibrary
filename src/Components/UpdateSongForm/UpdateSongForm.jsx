import React, { useState, useEffect } from 'react';

const UpdateSongForm = (props) => {
  //Hoist up original song info from MusicLibrary to display as values to be changed

  const [newTitle, setNewTitle] = useState('');
  const [newArtist, setNewArtist] = useState('');
  const [newAlbum, setNewAlbum] = useState('');
  const [newGenre, setNewGenre] = useState('');
  const [newReleaseDate, setNewReleaseDate] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    let newSong = {
      title: newTitle,
      nartist: newArtist,
      album: newAlbum,
      genre: newGenre,
      release_date: newReleaseDate,
    };
    props.addSong(newSong);
  }

  return (
    <div>
      <h2>Update Song:</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='song_title'>Song Title</label>
          <input
            type='text'
            onChange={(event) => setNewTitle(event.target.value)}
            value={newTitle}
            className='form-control'
            placeholder='{song.}'
          ></input>
        </div>
        <div className='form-group'>
          <label htmlFor='artist'>Artist</label>
          <input
            type='text'
            onChange={(event) => setNewArtist(event.target.value)}
            value={newArtist}
            className='form-control'
            placeholder='{song.}'
          ></input>
        </div>
        <div className='form-group'>
          <label htmlFor='album'>Album</label>
          <input
            type='text'
            onChange={(event) => setNewAlbum(event.target.value)}
            value={newAlbum}
            className='form-control'
            placeholder='{song.}'
          ></input>
        </div>
        <div className='form-group'>
          <label htmlFor='genre'>Genre</label>
          <input
            type='text'
            onChange={(event) => setNewGenre(event.target.value)}
            value={newGenre}
            className='form-control'
            placeholder='{song.}'
          ></input>
        </div>
        <div className='form-group'>
          <label htmlFor='release_date'>Release Date</label>
          <input
            type='date'
            onChange={(event) => setNewReleaseDate(event.target.value)}
            value={newReleaseDate}
            className='form-control'
            placeholder='{song.}'
          ></input>
        </div>
        <button onSubmit={handleSubmit} type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};
export default UpdateSongForm;
