import logo from './logo.svg';
import './App.css';
import ReactAudioPlayer from 'react-audio-player';

function App() {
  return (
    <div className="App">
      <ReactAudioPlayer
        src="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
        autoPlay
        controls
        preload="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
      />
    </div>
  );
}

export default App;
