import './App.css';
import React from 'react';

export class Screen extends React.Component {

  render() {
    return (
      <div>
        <div className="ScreenClass" id="Screen" clickHandler={this.handleClick} style={{ fontSize: '20px', border: 'solid 2px black ', width: '800px', height: '250px', margin: 'auto' }} >
        </div>
      </div>
    );
  }
}
export default Screen;