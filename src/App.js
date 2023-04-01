import './App.css';
import Keyboard from './keyboard';
import Color from './color';
import Button from './button';

function App() {
  
  return (
    <div id="App" className="App" style={{ display: "flex", justifyContent: "space-around" }}>
     <Color/>
     <Keyboard/>
    </div>

  );
}

export default App;


