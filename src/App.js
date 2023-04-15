import './App.css';
import './keyboard.css';
import React from 'react';
import Screen from './screen';
import Keyboard from "./keyboard";
import ButtonStyle from "./buttonStyle";

export class App extends React.Component {
  /*state = {
    screen: null
  };
  
    handleClick = content => {
      this.setState({ screen: content });
    };*/

  render() {
    return (
      <div id="App" className="App" style={{/* display: "flex", justifyContent: "space-around" */alignItems: 'center', margin: 'auto' }}>
        {/*<Color/>*/}
        <div style={{ width: '350px', display: "flex", justifyContent: "space-around", padding: '15px', margin: 'auto' }}>
          <ButtonStyle content="12" />
          <ButtonStyle content="14" />
          <ButtonStyle content="16" />
          <ButtonStyle content="font" />
          <ButtonStyle content="color" />
        </div>
        <Screen />
        <div style={{ width: '350px', display: "flex", justifyContent: "space-around", padding: '15px', margin: 'auto' }}>
          <Keyboard content="upLetters" />
          <Keyboard content="letters" />
          <Keyboard content="hebrowLetters" />
          <Keyboard content="other" />
        </div>
        <div className="keyboardClass" id="keyboardClass" style={{ border: 'solid 2px black ', width: '350px', height: 'auto', margin: 'auto' }} />
      </div>
    );
  }

}

export default App;


