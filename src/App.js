import './App.css';
import './keyboard.css';
import React from 'react';
import Screen from './screen';
import Keyboard from "./keyboard";
import ButtonStyle from "./buttonStyle";
import Color from './color';

export class App extends React.Component {


  render() {
    return (
      <div id="App" className="App" style={{ display: "flex", margin: 'auto' }}>
        <div style={{ width: '200px', display: "flex", justifyContent: "space-around", alignItems: 'center', margin: 'auto' }}>
          <div style={{ padding: '15px' }}>
            <h1>fontSize</h1>
            <ButtonStyle content="small" />
            <ButtonStyle content="medium" />
            <ButtonStyle content="large" />
          </div>
          <div style={{ padding: '15px' }}>
            <h1>Font</h1>
            <ButtonStyle content="Arial" />
            <ButtonStyle content="Verdana" />
            <ButtonStyle content="Tahoma" />
          </div>
          <div style={{ padding: '15px' }}>
            <h1>Color</h1>
            <ButtonStyle content="Red" style={{backGroundColor:'red', Color:'red'}}/>
            <ButtonStyle content="Blue" />
            <ButtonStyle content="Green" />
            <ButtonStyle content="Yellow" />
          </div>
        </div>

        <div>
          <div style={{ width: '800px', display: "flex", justifyContent: "space-around", padding: '20px', margin: 'auto' }}>
            <Screen />
          </div>
          <Keyboard content="style" />
          <div style={{ width: '400px', display: "flex", margin: 'auto' }}>
            <Keyboard content="upLetters" />
            <Keyboard content="letters" />
            <Keyboard content="hebrew" />
            <Keyboard content="other" />
            <Keyboard content="Emojis" />
          </div>

          <div className="keyboardClass" id="keyboardClass" style={{ border: 'solid 2px black ', width: '400px', height: 'auto', margin: 'auto' }} />
        </div>
      </div>
    );
  }

}

export default App;


