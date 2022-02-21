import { useState, useEffect } from 'react';
import axios from 'axios';
// import "./MusicTable.css";

function MusicTable({ filteredMusic, getAllMusic }) {
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

  async function handleEdit(event, id) {
    event.preventDefault();
    console.log(handleEdit);
    try {
      let updatedSong = await axios.put(
        `http://127.0.0.1:8000/music/${id}/`,
        id
      );
      console.log(updatedSong);
    } catch {
      console.log('error. Something went wrong.');
    }
    return;
  }

  // function handleUpdate(event, index) {
  //   event.preventDefault();
  //   // let result =

  //   return;
  // }

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
                        onClick={(event) => handleEdit(event, song.id)}
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
