import React from "react";
import ReactDOM from "react-dom";

export class ButtonStyle extends React.Component {

  constructor(props) {
    super(props);
   
  }

  handleClickStyle = () => {
    if (this.props.content === '+') {
        Screen.props.style.fontSize='larger';
    }
  };

  render() {
    return (
      <div className="buttonStyleClass">
        <button style={this.props.style} onClick={this.handleClickStyle}>{this.props.content}</button>
      </div>
    );
  }
}

export default ButtonStyle;