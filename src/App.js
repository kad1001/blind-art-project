import './App.css';

// List of basic colors to return buttons for
// These are on the most outer layer of the color onion wheel
// const basicColors = ['Yellow', 'Orange', 'Red', 'Pink', 'Magenta', 'Mauve', 'Violet', 'Navy Blue', 'Blue', 'Blue Green', 'Green', 'Yellow Green'];

// Starting from 100% on outer layers of basicColors to 20% on lightest intensity
// Lighter intensity -> closer to white
// Higher intensity -> Pure color
// const colorIntensities = [100, 80, 60, 40, 20];

// This can work for any row of buttons to select a color
// function getButtons(buttonNames) {

// }


function App() {
  return (
    <div className="App">
      {/* <div className="circle" id="white-center"> */}
        <div className="circle" id="intensity-full-blue">
          <div className="circle" id="intensity-eighty-blue">
            <div className="circle" id="intensity-sixty-blue">
              <div className="circle" id="intensity-forty-blue">
                {/* <div className="circle" id="intensity-twenty">
                  <div className="circle" id ="intensity-zero"></div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

      {/* </div> */}

      {/* <header className="App-header"> */}
      {/* <h1>Select a Color</h1> */}
      {/* <table> */}
      {/* <button class="button" id="green-basic">Green</button>
        <button class="button" id="blue-basic">Blue</button> */}
      {/* </table> */}

      {/* </header> */}

    </div>
  );
}

export default App;
