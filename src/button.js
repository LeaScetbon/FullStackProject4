import React from "react";
import PropTypes from "prop-types";
//import "./Button.css";
import ReactDOM from "react";
import './App.css';

function Button () {

  

    return (
      <div className="buttonClass">
        {/*<button name="button" onClick={button_func(button.innerHTML)}>א</button>*/}
      </div>
    );
  }


//ReactDOM.render(<Button />, document.getElementById('keyboard'));

function button_func(letter){
    let text=document.getElementById('screen').innerHTML;
    text+=letter;
    document.getElementById('screen').innerHTML=text;
}
export default Button;