import ButtonMore from "../buttons/ButtonMore";
import ImageUpload from "./ImageUpload";
import InputText from "./InputText";
import InputTextarea from "./InputTextarea";

function Instructions() {
  function handleClick() {
    alert("Button clicked need have props to add (more) instructions!");
  }
  return (
    <>
      <h2>Instructions</h2>
      <InputText
        name="Step {instructions.number}"
        placeholder=" ex: prepare the filling"
      />
      <InputTextarea heading="Description" />
      <ImageUpload />
      <ButtonMore name="Instructions" onClick={handleClick} />
    </>
  );
}

export default Instructions;
