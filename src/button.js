import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import './button.css';

var screenContent = '';

export class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayValue: ''
    };
  }

  handleClick = () => {
    if (this.props.content === 'CLEAR' ){
      screenContent = '';
    }
    else if (this.props.content ===  'DEL'){
      screenContent= screenContent.slice(0,-1);
    }
    else if (this.props.content ===  'Enter'){
      screenContent+= '\n';
    }
    else if (this.props.content ===  'Space'){
      screenContent+= ' ';
    }
    else{
    screenContent += this.props.content;
  }

    /*this.setState(prevState => ({ displayValue: prevState.displayValue + this.props.content }));*/
    ReactDOM.render(/*this.props.content*/screenContent, document.getElementById('Screen'));
  };

  render() {
    return (
      <div className="buttonClass">
        <button style={this.props.style} onClick={this.handleClick}>{this.props.content}</button>
      </div>
    );
  }
}

export default Button;