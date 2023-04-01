import { SketchPicker, BlockPicker } from "react-color";
import { useState } from "react";

function Color() {
    //creating state to store our color and also set color using onChange event for sketch picker
    const [sketchPickerColor, setSketchPickerColor] = useState({
      r: "0",
      g: "0",
      b: "0",
      a: "100",
    });
    // destructuring rgba from state
    const { r, g, b, a } = sketchPickerColor;
  
    return (
      
        <div className="sketchpicker">
          <h6>Sketch Picker</h6>
          {/* Div to display the color  */}
          <div style={{
              backgroundColor: `rgba(${r},${g},${b},${a})`,
              width: 100,
              height: 50,
              border: "2px solid white",
            }}></div>
            
          {/* Sketch Picker from react-color and handling color on onChange event */}
          <SketchPicker
            onChange={(color) => {
              setSketchPickerColor(color.rgb);
            }}
            color={sketchPickerColor}/>
        </div>
       
  
  
    );
  }
  
  export default Color;