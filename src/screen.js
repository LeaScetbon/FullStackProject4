import './App.css';
import Keyboard from './keyboard';
import React from 'react';

export class Screen extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
           text:[]

        };

    }
    render()
{return (
  <div className="ScreenClass" id="Screen" style={{border: 'solid 2px black ', width:'500px', height:'250px', marginBottom:0}} >
   
  </div>
);}

}
export default Screen;