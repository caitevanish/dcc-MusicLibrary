import { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateSongForm from '../UpdateSongForm/UpdateSongForm';
// import "./MusicTable.css";

function MusicTable({ filteredMusic, getAllMusic, setEditId, setFormFields }) {
  async function handleDelete(event, id) {
    event.preventDefault();
    try {
      let result = await axios.delete(`http://127.0.0.1:8000/music/${id}/`);
      console.log(result);
      getAllMusic(result);
    } catch {
      console.log('error. Something went wrong');
    }

    return;
  }

  // function handleUpdate(event, index) {
  //   event.preventDefault();
  //   // let result =

  //   return;
  // }

  function handleClick(song) {
    setEditId(song.id);
    setFormFields(song);

    //Create new hook in app.js
    //grab whole song and pass it up to hook so it can be passed down into update form
  }

  return (
    <>
      <div className='allMusic'>
        <div className='scrollable'>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>Artist</th>
                <th>Song Title</th>
                <th>Album</th>
                <th>Genre</th>
                <th>Release Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredMusic.map((song, index) => {
                return (
                  <tr key={index}>
                    <td>{song.artist}</td>
                    <td>{song.title}</td>
                    <td>{song.album}</td>
                    <td>{song.genre}</td>
                    <td>{song.release_date}</td>
                    <td>
                      <button
                        onClick={() => handleClick(song)}
                        // onClick={(event) => editSong(event, song.id)}
                        className='btn btn-primary'
                      >
                        Edit
                      </button>
                      <button
                        onClick={(event) => handleDelete(event, song.id)}
                        className='btn btn-danger'
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default MusicTable;
