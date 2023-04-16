import './App.css';
import './keyboard.css';
import React from 'react';
import Screen from './screen';
import Keyboard from "./keyboard";
import ButtonStyle from "./buttonStyle";
import Color from './color';

export class App extends React.Component {
  /*state = {
    screen: null
  };
  
    handleClick = content => {
      this.setState({ screen: content });
    };*/

  render() {
    return (
      <div id="App" className="App" style={{ /*display: "flex", justifyContent: "space-around" ,*/alignItems: 'center', margin: 'auto' }}>
        <div style={{ width: '750px', display: "flex", justifyContent: "space-around", padding: '15px', margin: 'auto', alignItems: 'center' }}>
          {/* <Color /> */}
          <div>
            <h1>font size</h1>
            <ButtonStyle content="small" />
            <ButtonStyle content="medium" />
            <ButtonStyle content="large" />
          </div>
          <div>
            <h1>family font</h1>
            <ButtonStyle content="Arial" />
            <ButtonStyle content="Verdana" />
            <ButtonStyle content="Tahoma" />
          </div>
        </div>
        <div style={{ width: '400px', display: "flex", justifyContent: "space-around", padding: '30px', margin: 'auto' }}>
          <Screen />
        </div>
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


