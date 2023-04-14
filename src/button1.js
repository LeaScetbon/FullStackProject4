import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import PropTypes from "prop-types";

var screenContent = '';

export class Button1 extends React.Component {

  constructor(props) {
    super(props);
    };
    handle=(Upper, arg) => { Upper = arg; };

  render() {
    return (
      <div className="button1Class">
        <button style={this.props.style} onClick={this.handle}>{this.props.content}</button>
      </div>
    );
  }
}

export default Button1;