import './App.css';
import React from 'react';

export class Screen extends React.Component {

  render() {
    return (
      <div style={{backgroundColor:"white"}}>
        <p className="ScreenClass" id="Screen" clickHandler={this.handleClick} style={{ fontSize: '20px', border: 'solid 2px black ', width: '800px', height: '350px', margin: 'auto' }} >
        </p>
      </div>
    );
  }
}
export default Screen;