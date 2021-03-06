import React,{useState} from "react";

//importing styles
import "./styles/app.scss";

//Importing Components
import Player from "./components/Player"
import Song from "./components/Song"

//import tracklist
import data from "./util";

function App() {
  const [songs, setSongs]=useState(data());
  const [currentSong, setCurrentSong]=useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player currentSong={currentSong}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
