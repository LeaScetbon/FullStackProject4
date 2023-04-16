import { useState } from "react";
import { SketchPicker, BlockPicker } from "react-color";

function Color() {
    //creating state to store our color and also set color using onChange event for sketch picker
    const [sketchPickerColor, setSketchPickerColor] = useState({
        r: "241",
        g: "112",
        b: "19",
        a: "1",
    });
    // destructuring rgba from state
    const { r, g, b, a } = sketchPickerColor;

    return (
        <div className="Color" style={{ display: "flex", justifyContent: "space-around" }}>
            <div className="sketchpicker">
                <h1>Color</h1>
                {/* Div to display the color  */}
                <div style={{
                    backgroundColor: `rgba(${r},${g},${b},${a})`,
                    width: 60,
                    height: 30,
                    border: "2px solid white",
                }}></div>

                {/* Sketch Picker from react-color and handling color on onChange event */}
                <SketchPicker onChange={(color) => {
                    setSketchPickerColor(color.rgb);
                    document.getElementById('Screen').style.backgroundColor = {color};
                }} color={sketchPickerColor} />
            </div>
        </div>
    );
}

export default Color; 
// import { useState } from "react";
// import React from "react";
//import { SketchPicker, BlockPicker } from "react-color";

// export class Color extends React.Component {

//     //creating state to store our color and also set color using onChange event for sketch picker
//     constructor(props) {
//         super(props);
//         this.state = {
//             r: "0",
//             g: "0",
//             b: "0",
//             a: "100"
//         }
//     }

//     // destructuring rgba from state
//     render() {
//         const { r, g, b, a } = this.sketchPickerColor;
//         return (
//             <div className="sketchpicker">
//                 <h6>Sketch Picker</h6>
//                 {/* Div to display the color  */}
//                 <div style={{
//                     backgroundColor: `rgba(${r},${g},${b},${a})`,
//                     width: 100,
//                     height: 50,
//                     border: "2px solid white",
//                 }}></div>

//                 {/* Sketch Picker from react-color and handling color on onChange event */}
//                 <SketchPicker
//                     onChange={(color) => {
//                         setSketchPickerColor(color.rgb);
//                     }}
//                     color={sketchPickerColor} />
//             </div>
//         );
//     }

// }

// export default Color;
