import React from "react";

import './App.css';
import Button from "./button";

function Keyboard () {

return (
      <div className="keyboardClass" style={{border: 'solid 2px black ', width:'1000px', height:'500px', margin:'auto' }} >
       <Button content="A"/>
      </div>
    );
  
}

export default Keyboard;
