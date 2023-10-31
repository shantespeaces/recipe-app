import ButtonMore from "../buttons/ButtonMore";

import InputText from "./InputText";
import CheckBox from "./CheckBox";
import CheckBoxContainer from "./CheckBoxContainer";
import Select from "./Select";

function Steps() {
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

      <ButtonMore name="Note" />
    </>
  );
}

export default Steps;
