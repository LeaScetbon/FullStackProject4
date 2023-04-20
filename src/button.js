import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import './button.css';

var screenContent = [];
var classSize = "letterSpan";
var classFont = "";
var classColor = "";

export class Button extends React.Component {
//כפתור במקלדת
  constructor(props) {
    super(props);
    this.state = {
      screenContent: [],
    };
  }

  handleClick = () => {
    if (this.props.content === 'CLEAR') {
      screenContent = [];
    }
    else if (this.props.content === 'DEL') {
      screenContent = screenContent.slice(0, -1);
    }
    else if (this.props.content === 'Enter') {
      screenContent.push({ class: classes, content: '\n' });
    }
    else if (this.props.content === 'Space') {
      screenContent.push({ class: classes, content: ' ' });
    }
    else if (this.props.content === 'small' || this.props.content === 'medium' || this.props.content === 'large' ||
      this.props.content === 'Arial' || this.props.content === 'Verdana' || this.props.content === 'Tahoma' ||
      this.props.content === 'Red' || this.props.content === 'Green' || this.props.content === 'Blue' ||this.props.content === 'Yellow') {
      switch (this.props.content) {
        case 'small':
          classSize = " small";
          break;
        case 'medium':
          classSize = " medium";
          break;
        case 'large':
          classSize = " large";
          break;
        case 'Arial':
          classFont = " Arial";
          break;
        case 'Verdana':
          classFont = " Verdana";
          break;
        case 'Tahoma':
          classFont = " Tahoma";
          break;
        case 'Red':
          classColor = " red";
          break;
        case 'Blue':
          classColor = " blue";
          break;
        case 'Green':
          classColor = " green";
          break;
          case 'Yellow':
          classColor = " yellow";
          break;
        default:
          break;
      }
    }
    else {
      var classes=classSize + classColor + classFont;
      screenContent.push({ class: classes, content: this.props.content });
    }
    var text = screenContent.map((letter) => (<span className={letter.class} >{letter.content}</span>));
    ReactDOM.render(text, document.getElementById('Screen'));
  };

  //כפתור מקש במקלדת
  render() {
    return (
      <div className="buttonClass">
        <button style={this.props.style} onClick={this.handleClick}>{this.props.content}</button>
      </div>
    );
  }
}

export default Button;