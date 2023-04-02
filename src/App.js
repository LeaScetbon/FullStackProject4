import './App.css';
import Keyboard from './keyboard';
import React from 'react';
import Screen from './screen';
export class App extends React.Component {
  state = {
    screen : null
  };
  
  handleClick = content => {
    this.setState({screen: content} );
  };

  render(){
    return (
      <div id="App" className="App" style={{ display: "flex", justifyContent: "space-around" }}>
       {/* <Color/> */}
       <Keyboard/>
       <Screen/>
      </div>
  
    );
  }
  
}

export default App;


