import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import './keyboard.css';
import Button from "./button";

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'DEL', 'CLEAR'];
var upLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'DEL', 'CLEAR'];
var hebrewLetters=['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת','ך', 'ם', 'ן', 'ף', 'ץ', 'DEL', 'CLEAR'];
var other=['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '/', '.', ',', '{', '}', '-', '=', '+', '(', ')', '*', '!', '@', '#', '|', '<', '>', '%', '$', '&','"', ':', ';', '?', '_','Enter', 'Space', 'DEL', 'CLEAR'];
var Emojis=['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '🥰', '🙂' ,'🤩', '🤔', '🙄', '😏', '😣', '😥', '😴', '😜', '😝', '🤤', '😓', '😕', '🙃', '🤑', '😲', '😨'];
var style=["small", "medium", "large", 'Arial' , 'Verdana' , 'Tahoma', 'Red', 'Green' , 'Blue' , 'Yellow'];
var lettersKeywords;

export class Keyboard extends React.Component {

  constructor(props) {
    super(props);
  };
  handle = () => {
    if (this.props.content === 'upLetters') {
      lettersKeywords = upLetters;
    }
    else if(this.props.content === 'letters'){
      lettersKeywords = letters;
    }
    else if (this.props.content === 'hebrew'){
      lettersKeywords = hebrewLetters;
    }
    else if (this.props.content === 'style'){
      lettersKeywords = style;
    }
    else if (this.props.content === 'other'){
      lettersKeywords = other;
    }
    else if (this.props.content === 'Emojis'){
      lettersKeywords = Emojis;
    }
    //מעבר על הרשימה וייצור כפתורי המקלדת. צירוף למסך הראשי כמקלדת
    var key = lettersKeywords.map((letter) => (<Button content={letter} clickHandler={this.handleClick} style={{fontSize:'20px', border: 'solid 1px grey ', borderRadius: '3px', width: 'auto', height: '35px' }} />));
    ReactDOM.render(key, document.getElementById('keyboardClass'));
  };

  //כפתור לבחירת מקלדת
  render() {
    return (
      <div className="button1Class">
        <button className="buttonKeyClass" style={this.props.style} onClick={this.handle}>{this.props.content}</button>
      </div>
    );
  }
}

export default Keyboard;