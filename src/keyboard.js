import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react";
import './App.css';
import Button from "./button";

function Keyboard (props) {

return (
      <div className="keyboardClass" style={{border: 'solid 2px black ', width:'100px', height:'50px', margin:'auto' }} >
       
      </div>
    );
  
}
function handleClick (buttonName) {
    this.props.clickHandler(buttonName);
  };
//ReactDOM.render(<Keyboard />, document.getElementById('App'));
export default Keyboard;
