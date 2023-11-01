import CheckBoxContainer from "./forms/CheckBoxContainer";
import NumberInput from "./forms/NumberInput";
import Select from "./forms/Select";

function Settings() {
  return (
    <>
      <div
        className="offcanvas offcanvas-end show"
        id="offcanvas"
        aria-labelledby="offcanvasLabel"
      >
        <div className="offcanvas-header">
          <h1 className="offcanvas-title" id="offcanvasLabel">
            Settings
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <form>
            {/* FONTs */}
            <div className="row mb-3">
              <div className="col-sm-10">
                <h2>Fonts</h2>
                <Select heading="Style" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-10">
                <Select heading="Color" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-10">
                <NumberInput heading="Size" />
              </div>
            </div>
            {/* BORDERs */}
            <div className="row mb-3">
              <div className="col-sm-10">
                <h2>Border</h2>

                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckChecked"
                  >
                    Default switch checkbox input
                  </label>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-10">
                <Select heading="Style" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-10">
                <NumberInput heading="Width" />
              </div>
            </div>
            {/* BACKGROUND COLORS*/}
            <div className="row mb-3">
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
              </div>
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
              </div>
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
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Personalise
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Settings;

{
}
