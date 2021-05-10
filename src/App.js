import React, { useState, useRef } from "react";
import "./styles/app.scss";
import Spinner from "./components/Spinner";
import data from "./util";
import Library from "./components/Library";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  return (
    <div className="App">
      <Spinner audioRef={audioRef} currentSong={currentSong} />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
      />
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
