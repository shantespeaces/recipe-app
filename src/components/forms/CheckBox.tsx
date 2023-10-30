interface CheckBoxProps {
  name: string;
}
function CheckBox({ name }: CheckBoxProps) {
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
}
export default CheckBox;
