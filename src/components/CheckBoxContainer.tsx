import CheckBox from "./CheckBox";

interface CheckBoxContainerProps {
  title: string;
}
function CheckBoxContainer({ title }: CheckBoxContainerProps) {
  return (
    <>
      <h3>{title}</h3>

      <CheckBox name="these checkBox names will come for BDD" />
      <CheckBox name="these checkBox names will come for BDD" />
      <CheckBox name="these checkBox names will come for BDD" />
    </>
  );
}
export default CheckBoxContainer;
