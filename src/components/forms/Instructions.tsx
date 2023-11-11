import ButtonMore from "../buttons/ButtonMore";
import Button from "../buttons/Button";
import ImageUpload from "./ImageUpload";
import InputText from "./InputText";
import InputTextarea from "./InputTextarea";
import { useState } from "react";

function Instructions() {
  const [instructionCount, setInstructionCount] = useState(1);
  function handleAddInstruction() {
    setInstructionCount(instructionCount + 1);
  }
  return (
    <>
      <h2>Instructions</h2>
      {/* maintains a state that tracks the number of the component (instructions) and then render 
       to dynamically add more instances of that component */}
      {/* //creates a new array and spreads (...) elements into individual elements */}
      {/* the (_) indicates that value is not used but is necessary for the callback function */}

      {[...Array(instructionCount)].map((_, instructionIndex) => (
        <div key={instructionIndex} className="instructions">
          <InputText
            name={`Step ${instructionIndex + 1}`}
            placeholder=" ex: prepare the filling"
          />
          <InputTextarea heading="Description" />
          <ImageUpload />
        </div>
      ))}

      <ButtonMore name="Instructions" onClick={handleAddInstruction} />
      <Button name=" Save Instructions" route="null" />
    </>
  );
}

export default Instructions;
