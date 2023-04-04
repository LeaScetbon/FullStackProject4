import React from "react";
import PropTypes from "prop-types";
import './App.css';
import Button from "./button";

export class Keyboard extends React.Component {

render()
{return (
  <div className="keyboardClass" style={{border: 'solid 2px black ', width:'500px', height:'250px', marginTop:0 }} >
   <Button content="A" clickHandler={this.handleClick} />
   <Button content="B" clickHandler={this.handleClick} />
  </div>
);}

  
}

export default Keyboard;
