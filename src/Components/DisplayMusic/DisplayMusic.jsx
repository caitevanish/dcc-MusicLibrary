import React from "react";
import "./DisplayMusic.css";

const DisplayMusic = (props) => {
  return (
    <div className="allMusic">
      <div className="scrollable">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Index</th>
              <th>Artist</th>
              <th>Song Title</th>
              <th>Album</th>
              <th>Genre</th>
              <th>Release Date</th>
            </tr>
          </thead>
          <tbody>
            {props.displayAllMusic.map((info, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{info.artist}</td>
                  <td>{info.title}</td>
                  <td>{info.album}</td>
                  <td>{info.genre}</td>
                  <td>{info.releaseDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayMusic;
