import React from "react";
import ReactDOM from "react-dom";
import './buttonStyle.css';
import Color from "./color";
export class ButtonStyle extends React.Component {

    constructor(props) {
        super(props);

    }

    handleClickStyle = () => {
        if (this.props.content === 'small')
            document.getElementById('Screen').style.fontSize = '15px';
        else if (this.props.content === 'medium')
            document.getElementById('Screen').style.fontSize = '20px';
        else if (this.props.content === 'large')
            document.getElementById('Screen').style.fontSize = '30px';
        else if (this.props.content === 'Arial')
            document.getElementById('Screen').style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
            else if (this.props.content === 'Verdana')
            document.getElementById('Screen').style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
            else if (this.props.content === 'Tahoma')
            document.getElementById('Screen').style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
        };

    render() {
        return (
            <div>
                <button className="buttonStyleClass" style={this.props.style} onClick={this.handleClickStyle}>{this.props.content}</button>
            </div>
        );
    }
}

export default ButtonStyle;