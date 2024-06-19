import { useRef, useState } from "react"; 
import Player from "./components/Playersong";
import Song from "./components/Song"; 
import Library from "./components/Library"; 
import NavS from './components/Navbar';
import './App.css';
import data from "./data"; 

function App() { 
  const [songs, setSongs] = useState(data()); 
  const [currentSong, setCurrentSong] = useState(songs[0]); 
  const [isPlaying, setIsPlaying] = useState(false); 
  const [libraryStatus, setLibraryStatus] = useState(false); 
  const audioRef = useRef(null); 
  const [songInfo, setSongInfo] = useState({ 
    currentTime: 0, 
    duration: 0, 
    animationPercentage: 0, 
  }); 

  const timeUpdateHandler = (e) => { 
    const current = e.target.currentTime; 
    const duration = e.target.duration; 
    const roundedCurrent = Math.round(current); 
    const roundedDuration = Math.round(duration); 
    const animation = Math.round((roundedCurrent / roundedDuration) * 100); 

    setSongInfo({ 
      currentTime: current, 
      duration, 
      animationPercentage: animation, 
    }); 
  }; 

  const songEndHandler = async () => { 
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id); 
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]); 
    if (isPlaying) audioRef.current.play(); 
  }; 

  return ( 
    <div className={`App ${libraryStatus ? 'library-active' : ''}`}> 
      <NavS libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} /> 
      <div className="player-container">
        <Song currentSong={currentSong} /> 
        <Player 
          id={songs.id} 
          songs={songs} 
          songInfo={songInfo} 
          setSongInfo={setSongInfo} 
          audioRef={audioRef} 
          isPlaying={isPlaying} 
          setIsPlaying={setIsPlaying} 
          currentSong={currentSong} 
          setCurrentSong={setCurrentSong} 
          setSongs={setSongs} 
        /> 
      </div>
      <Library 
        libraryStatus={libraryStatus} 
        setLibraryStatus={setLibraryStatus} 
        setSongs={setSongs} 
        isPlaying={isPlaying} 
        audioRef={audioRef} 
        songs={songs} 
        setCurrentSong={setCurrentSong} 
      /> 
      <audio 
        onLoadedMetadata={timeUpdateHandler} 
        onTimeUpdate={timeUpdateHandler} 
        src={currentSong.audio} 
        ref={audioRef} 
        onEnded={songEndHandler} 
      ></audio> 
    </div> 
  ); 
} 

export default App;
