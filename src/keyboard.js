import React from "react";
import './App.css';
import './keyboards.css';
import Button from "./button";
import Button1 from "./button1";


var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'DEL'];
var upLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'DEL'];
var Upper;
var lettersKeywords;

export class Keyboard extends React.Component {

  handle = (Upper, arg) => { Upper = arg; };

  render() {

    if (Upper === true) {
      lettersKeywords = upLetters;
    }
    else {
      lettersKeywords = letters;
    }

    return (
      <div>
        <Button1 content="upLetters" onClick={this.handle.bind(this, Upper, true)} />
        <Button1 content="Letters" onClick={this.handle.bind(this, Upper, false)} />
        <br />
        <div className="keyboardClass" style={{ border: 'solid 2px black ', width: '350px', height: 'auto', marginTop: 0 }} >
          {/*<Button content="A" clickHandler={this.handleClick} />
          <Button content="B" clickHandler={this.handleClick} />*/}
          {lettersKeywords.map((letter) => (<Button content={letter} clickHandler={this.handleClick} style={{ border: 'solid 1px grey ', borderRadius: '3px', width: '30px', height: '30px' }} />))}
        </div>

      </div>
    );
  }
}

export default Keyboard;
