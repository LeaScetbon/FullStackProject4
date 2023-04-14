import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import './button.css';
import PropTypes from "prop-types";

var screenContent = '';

export class Button extends React.Component {
  static propTypes = {
    content: PropTypes.string,
    clickHandler: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {
      displayValue: ''
    };
  }

  handleClick = () => {
    if (this.props.content ==  'DEL'){
      screenContent= screenContent.slice(0,-1);
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