import { useState, FormEvent } from "react";
import axios from "axios";
import PasswordChecklist from "react-password-checklist";
import InputText from "../components/forms/InputText";
import ButtonSubmit from "../components/buttons/ButtonSubmit";
function Account() {
  //State for user information
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  //   const [image, setImage] = useState("");

  // // Check if passwords match
  // if (password !== passwordAgain) {
  //   console.error("Passwords do not match");
  //   return;
  // }
  // // Validate email format
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // if (!emailRegex.test(email)) {
  //   console.error("Please enter a valid email address");
  //   return;
  // // }

  // let handleOnChange = ( email ) => {

  //     // don't remember from where i copied this code, but this works.
  //     let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //     if ( re.test(email) ) {
  //         // this is a valid email address
  //         // call setState({email: email}) to update the email
  //         // or update the data in redux store.
  //     }
  //     else {
  //         // invalid email, maybe show an error to the user.
  //     }

  // }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Submit User account
      await axios.post("http://localhost:8000/api/users", {
        name: name,
        email: email,
        password: password,
        // image: image,
      });

      console.log("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <>
      <div
        className="vh-100 bg-image"
        style={{
          backgroundImage: "url('src/assets/images/account.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="d-flex align-items-center h-100 ">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card my-5 rounded-5">
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <form onSubmit={handleSubmit} action="" className="account">
                      <div className="form-outline mb-4">
                        <InputText
                          placeholder=" Sarah"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form label">
                          Your Name
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <InputText
                          //   type="email"
                          placeholder=" sarah@gmail.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form label">
                          Your Email
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <InputText
                          placeholder=" "
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form label">
                          Password
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <InputText
                          placeholder=" "
                          value={passwordAgain}
                          onChange={(e) => setPasswordAgain(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form label">
                          Repeat your password
                        </label>
                      </div>
                      <PasswordChecklist
                        rules={[
                          "minLength",
                          "specialChar",
                          "number",
                          "capital",
                          "match",
                        ]}
                        minLength={8}
                        value={password}
                        valueAgain={passwordAgain}
                        messages={{
                          minLength: "Password has more than 8 characters.",
                          specialChar: "Password has special characters.",
                          number: "Password has a number.",
                          capital: "Password has an uppercase letter.",
                          match: "Passwords match.",
                        }}
                      />
                      <div className="row py-3">
                        <div className="col-md-9 pe-5">
                          <input
                            className="form-control form-control-md rounded-5"
                            type="file"
                            placeholder="Choose File"
                          />
                          <div className="small text-muted mt-2">
                            Upload your profile picture. Max file size 50 MB
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center">
                        <div className="">
                          <ButtonSubmit name="Register" type="submit" />
                        </div>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <a href="/connexion" className="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Account;
