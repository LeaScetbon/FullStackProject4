import React from "react";
//import "./Button.css";
import './App.css';

function Button (props) {
      
   const alertName = (c) => {
    alert(c);
  };

    return (
      <div className="buttonClass">
        
         <button style={{border: 'solid 2px black ', width:'100px', height:'50px', margin:'auto' }} onClick={alertName(props.content)}> Click me</button>
        {}
      </div>
    );
  }


//ReactDOM.render(<Button />, document.getElementById('keyboard'));
function handleClick ()  {
    // this.props.clickHandler(this.props.name);
    console.log('w')
  };

/*function button_func(letter){
    let text=document.getElementById('screen').innerHTML;
    text+=letter;
    document.getElementById('screen').innerHTML=text;
}*/
export default Button;