import './App.css';
import Keyboard from './keyboard';
import React from 'react';

export class Screen extends React.Component {

  render() {
    return (
      <div className="ScreenClass" id="Screen" clickHandler={this.handleClick} style={{ backgroundColor:'white', border: 'solid 2px black ', width: '800px', height: '250px', marginBottom: 0 }} >
      </div>
    );
  }
}
export default Screen;