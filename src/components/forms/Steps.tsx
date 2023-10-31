import ButtonMore from "../buttons/ButtonMore";
import ImageUpload from "./ImageUpload";
import InputText from "./InputText";
import InputTextarea from "./InputTextarea";

function Steps() {
  return (
    <>
      <h2>Steps</h2>
      <InputText
        name="Step {steps.number}"
        placeholder=" ex: prepare the filling"
      />
      <InputTextarea heading="Description" />
      <ImageUpload />
      <ButtonMore name="Step" />
    </>
  );
}

export default Steps;
