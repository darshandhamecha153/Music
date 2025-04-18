import React from "react";

const Playlist = ({ songs, setCurrentSong }) => {
  return (
    <div className="playlist">
      <h3>Playlist</h3>
      {songs.map((song, index) => (
        <div key={index} onClick={() => setCurrentSong(index)} className="playlist-item">
          {song.title}
        </div>
      ))}
    </div>
  );
};

export default Playlist;