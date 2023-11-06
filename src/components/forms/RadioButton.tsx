function RadioButton() {
  return (
    <>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
        />
        <label className="form-check-label" htmlFor="inlineRadio1">
          colors from BDD
        </label>
        <div className="color"></div>
        {/* background color will be displayed dynamically */}
      </div>
    </>
  );
}
export default RadioButton;
