import React from 'react';

const DisplayMusic = (props) => {

  // console.log(props.displayAllMusic);

  // let mappedMusic = props.displayAllMusic.map(info => { 
  //   return
  // })

  // return(
  //   <div>
  //     <ul>
  //       {mappedMusic.title}
  //     </ul>
  //     <ul>
  //       {mappedMusic.album}
  //     </ul>
  //     <ul>
  //       {mappedMusic.artist}
  //     </ul>
  //     <ul>
  //       {mappedMusic.genre}
  //     </ul>
  //     <ul>
  //       {mappedMusic.releaseDate}
  //     </ul>
  //   </div>
  // )

  return(
    <table className='table'>
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
        {props.displayAllMusic.map((info,index) =>{
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
  );
}

export default DisplayMusic;