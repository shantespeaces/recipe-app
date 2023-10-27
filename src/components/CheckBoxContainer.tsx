import CheckBox from "./CheckBox";

interface CheckBoxContainerProps {
  title: string;
}
const CheckBoxContainer: React.FC<CheckBoxContainerProps> = ({ title }) => {
  return (
    <>
      <h3>{title}</h3>

      <CheckBox name="these checkBox names will come for BDD" />
      <CheckBox name="these checkBox names will come for BDD" />
      <CheckBox name="these checkBox names will come for BDD" />
    </>
  );
};
export default CheckBoxContainer;
