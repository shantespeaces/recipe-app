import Counter from "./forms/Counter";
import Select from "./forms/Select";
import RadioButton from "./forms/RadioButton";
import { useState } from "react";

function Settings() {
  const [isOpen, SetIsOpen] = useState(false);

  const toggleSettings = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="btn btn-primary settings"
        type="button"
        data-bs-toggle="offcanvas"
        onClick={toggleSettings}
      >
        Settings
      </button>

      <div className={`offcanvas offcanvas-end ${isOpen ? "show" : ""}`}>
        <div className="offcanvas-header">
          <h1 className="offcanvas-title" id="offcanvasLabel">
            Settings
          </h1>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={toggleSettings}
          ></button>
        </div>
        <div className="offcanvas-body">
          <form className="row g-3 .container-sm">
            {/* FONTs */}
            <section className="fonts">
              <h2>Fonts</h2>
              {/* <Select heading="Style" /> */}
              <h3>Color</h3>
              <RadioButton />
              <RadioButton />
              <RadioButton />
            </section>
            {/* BORDERs */}
            <section className="borders">
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

              {/* <Select heading="Style" /> */}

              <Counter heading="Width" />
            </section>
            {/* BACKGROUND COLORS*/}
            <section className="backgroundColors">
              <div className="row mb-3">
                <h2>Background-Color</h2>
              </div>

              <RadioButton />
              <RadioButton />
              <RadioButton />
              <RadioButton />
              <RadioButton />
              <RadioButton />
              <RadioButton />
              <RadioButton />
            </section>
            <button type="submit" className="btn btn-primary">
              Save your settings
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Settings;
