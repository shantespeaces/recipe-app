import ButtonMore from "../buttons/ButtonMore";

import InputText from "./InputText";
import CheckBox from "./CheckBox";
import CheckBoxContainer from "./CheckBoxContainer";
import Select from "./Select";

function Notes() {
  function handleClick() {
    alert("Button clicked need have props to add (more) notes!");
  }
  return (
    <>
      <h2>Notes</h2>
      <InputText
        name="Add a personnalised note"
        placeholder=" ex: Micha`s favorite dish"
      />
      <CheckBoxContainer title="Colors" />
      <CheckBox name="{note_colors.color}" />
      <CheckBox name="{note_colors.color}" />
      <CheckBox name="{note_colors.color}" />
      <CheckBox name="{note_colors.color}" />
      <Select heading="Orientation" />

      <ButtonMore name="Note" onClick={handleClick} />
    </>
  );
}

export default Notes;
