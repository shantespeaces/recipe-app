import { useState, FormEvent, ChangeEvent } from "react";
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
  const [avatar, setAvatar] = useState<File | null>();

  const handleSelectImage = (e: ChangeEvent<HTMLInputElement>) => {
    const fichier = e.target.files?.[0];

    if (fichier) {
      setAvatar(fichier);
    }
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      //Check if email is already in use
      let response = await axios.get(
        "http://localhost:8000/api/users?email=" + email
      );

      console.log(response);

      // Email exists: cannot use it (if did not received empty response means user already exist)
      if (!response.data.error) {
        alert(
          "We seem to know you already. This email address already exists."
        );
        return;
      }

      //Get form data
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("avatar", avatar!); //not a colum in the table. backend will change it to fit the colum name

      // Submit User account
      response = await axios.post("http://localhost:8000/api/users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      //Get inserted id
      const lastId = response.data.success.insert_id[0][0].name;

      //Construct static file name (NOT BEST but using because of current DB structure )
      //Update avatar name for the user

      response = await axios.post(`http://localhost:8000/api/users/${lastId}`, {
        image: `/img/users/${lastId}/512x512.jpg`,
      });

      //Redirect to login
      window.location.href = "/connexion";
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
                            onChange={(e) => handleSelectImage(e)}
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
