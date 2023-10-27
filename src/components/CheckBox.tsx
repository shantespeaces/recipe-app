interface CheckBoxProps {
  name: string;
}
const CheckBox: React.FC<CheckBoxProps> = ({ name }) => {
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          {name}
        </label>
      </div>
    </>
  );
};
export default CheckBox;
