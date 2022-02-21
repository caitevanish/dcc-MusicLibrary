import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
// import "./MusicTable.css";

function MusicTable({ filteredMusic }) {
 
  function deleteSong()

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
              {filteredMusic.map((info, index) => {
                return (
                  <tr key={index}>
                    <td>{info.artist}</td>
                    <td>{info.title}</td>
                    <td>{info.album}</td>
                    <td>{info.genre}</td>
                    <td>{info.release_date}</td>
                    <td>
                      <button className='btn btn-primary'>
                        {/* <button
                          onClick={setEditSong}
                          className='btn btn-primary'
                        >
                          Edit
                        </button> */}
                      </button>
                      <button className='btn btn-danger'>
                        <button onClick={setDelete} className='btn btn-danger'>
                          Delete
                        </button>
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
