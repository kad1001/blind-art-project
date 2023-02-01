import './App.css';
import GithubPicker from './color-pallette-material/SketchPickerComponent';

function App() {
  return (
    <div className="App">
      <div className="colorPicker">
        <h1>Color Picker</h1>
        <p>Choose a color by using <b> Tab </b> to move forward and <b>Shift + Tab</b> to move backward. Select a color by using  <b>Enter</b>.</p>
        <GithubPicker></GithubPicker>
      </div>
      <div></div>


    </div>
  );
}

export default App;
