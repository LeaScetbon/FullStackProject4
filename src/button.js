import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import './button.css';

var screenContent = <div></div>;

export class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sContent: [],
    };
  }

  handleClick = () => {
    let classes = "letterSpan";
    if (this.props.content === 'CLEAR') {
      screenContent = [];
    }
    else if (this.props.content === 'DEL') {
      screenContent = screenContent.slice(0, -1);
    }
    else if (this.props.content === 'Enter') {
      screenContent.push('\n');
    }
    else if (this.props.content === 'Space') {
      screenContent.push(' ');
    }
    else {
      //const newGamers = [...this.state.sContent, <span className={classes}>{this.props.content}</span>];
      //this.setState({ sContent: newGamers });

      var newGamer = [...this.state.sContent,<span className={classes}>{this.props.content}</span>];
      this.setState((prevState) => ({sContent: [...prevState.sContent, newGamer]}));
      //var _scontent = this.state.sContent.map((letter) => (<span className={classes}>{this.props.content}</span>));
      //screenContent.content=(<span className={classes}>{this.props.content}</span>);
    }
    switch (this.props.content) {
      case 'small':
        classes += " small";
        console.log("small");
        break;
      case 'medium':
        classes += " medium";
        break;
      default:
        break;
    }
    //var text = screenContent.map((letter) => (<span className={letter.className}>{letter.content}</span>));
    ReactDOM.render(/*this.props.content*/  this.state.sContent, document.getElementById('Screen'));
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