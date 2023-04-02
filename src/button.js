import React from "react";
import  ReactDOM  from "react-dom";
import './App.css';
import PropTypes from "prop-types";


export class Button extends React.Component {
  static propTypes = {
    content: PropTypes.string,
    clickHandler: PropTypes.func,
  };

  
  handleClick = () => {
    
    ReactDOM.render(this.props.content, document.getElementById('Screen'));

    //this.props.clickHandler();
    //window.print();
  };


render(){return (
  <div className="buttonClass">
    
     <button style={{border: 'solid 2px black ', width:'100px', height:'50px', margin:'auto' }} onClick={this.handleClick}>{this.props.content}</button>
    {}
  </div>
);}
    
  }



/*function button_func(letter){
    let text=document.getElementById('screen').innerHTML;
    text+=letter;
    document.getElementById('screen').innerHTML=text;
}*/
export default Button;