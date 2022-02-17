import { useState, useEffect } from "react";
// import SearchBar from "../SearchBar/SearchBar";
// import "./DisplayMusic.css";

//To-Do:
//Make buttons that will show up on the song line to update or delete the song

function DisplayMusic(props) {
  const [filteredMusic, setFilteredMusic] = useState(props.musicTable);

  useEffect(() => {
    getSearchResults(props.musicTable);
  }, [props.musicTable]); //?
  // }, []);

  function getSearchResults(results) {
    setFilteredMusic(results);
  }

  //filter music
  // let displayMusic= [];
  // let filterAlbums = displayMusic.filter(function(album){
  //   if(album)
  // })

  // displayAllMusic = { displayAllMusic };

  return (
    <div className="searchbar">
      {/* <SearchBar getSearchResults={getSearchResults} /> */}
      {/* <SearchBar results={getSearchResults} /> */}
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
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredMusic.map((info, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{info.artist}</td>
                    <td>{info.title}</td>
                    <td>{info.album}</td>
                    <td>{info.genre}</td>
                    <td>{info.release_date}</td>
                    <td></td> {/* Add edit/delete buttons here  */}
                    <button onClick className="btn btn-danger">
                      {" "}
                      {/* Create an onDeleteSong function?  */}
                      Delete
                    </button>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default DisplayMusic;
