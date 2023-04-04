import './App.css';
import Keyboard from './keyboard';
import React from 'react';

export class Screen extends React.Component { 
 
  
  render() {
    return (
      <div className="ScreenClass" id="Screen" clickHandler={this.handleClick} style={{ border: 'solid 2px black ', width: '500px', height: '250px', marginBottom: 0 }} >
        <p>{this.state.text}</p>
      </div>
    );
  }

}
export default Screen;