import PostIt from "../components/PostIt";
import ButtonSubmit from "../components/buttons/ButtonSubmit";
import axios from "axios";
import { useState, FormEvent } from "react";

function Connexion() {
  //State for user information

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Email validation
   *
   * @param email
   * @returns
   */
  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Check if email is provided and valid
      if (email === "" || !validateEmail(email)) {
        alert("Please enter a valid email address");
        return;
      }

      // Check if password is provided
      if (password === "") {
        alert("Please enter your password");
        return;
      }

      // Submit user data
      const response = await axios.get(
        `http://localhost:8000/api/users?email=${email}`
      );

      // Check if user exists
      if (response.data.error && response.data.error.code === 204) {
        alert("The credentials you provided do not match our records");
        return;
      }

      // Check if password match (NoT secure. Solution for the project only! Beacuese I am using Arrest DB and it is very limiting!)
      if (response.data[0].password !== password) {
        alert("The credentials you provided do not match our records");
        return;
      }

      const userId = response.data[0].id;
      localStorage.setItem("userId", userId);

      // Reset form fields after successful submission
      setEmail("");
      setPassword("");

      window.location.href = "/profile";
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <>
      <main>
        <form onSubmit={handleSubmit} action="" className={""}>
          <section
            className="my-5 mx-1 mx-lg-0"
            style={{ backgroundColor: "#eee" }}
          >
            <div className="container">
              <div className="d-flex justify-content-center align-items-center ">
                <div className=" col-lg-7 ">
                  <div
                    className="card my-5 mx-0 mx-sm-1 mx-md-3 mx-lg-5"
                    style={{ borderRadius: "15px" }}
                  >
                    <div className="">
                      <img
                        src="src\assets\images\logo.png"
                        alt="the menu logo"
                        style={{ width: "8rem" }}
                      />
                    </div>
                    <div className="card-body p-5">
                      <h2 className="text-uppercase text-center mb-5 fs-2">
                        Sign into your account
                      </h2>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="id"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control form-control-lg rounded-5"
                        />
                        <label className="form-label" htmlFor="email">
                          Email address
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="id"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control form-control-lg rounded-5"
                        />
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                      </div>
                      <div className="mb-5">
                        <ButtonSubmit name="Login" type="submit" />
                      </div>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <a href="/account" style={{ color: "#393f81" }}>
                          Register here
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>
      </main>
      <div className="leftSide position-absolute start-0 top-0  my-5  py-5">
        <div className="d-none d-lg-block ms-0 ms-lg-4 ps-5">
          <PostIt
            backgroundColor="#FB9B2E"
            fontFamily="'Caveat', cursive"
            position="right"
            heading="Best apple pie ever!!!"
            note=" Definitely making this again, the whole family was impressed:) Definitely making this again, the whole family was impressed:) Definitely making this again, the whole family was impressed:) Definitely making this again, the whole family was impressed:) Definitely making this again, the whole family was impressed:)"
          />
        </div>
        <div className="d-none d-lg-block ms-0 ms-lg-5 ps-5">
          <PostIt
            backgroundColor="#fb2e65"
            fontFamily="'Poppins', sans-serif"
            position="left"
            heading="Home made pizza"
            note=" Elijah's favorite! great for picky eaters...if only he knew the crust was  made with sweet potatoes."
          />
        </div>
      </div>
      <div className="rightSide position-absolute end-0 top-0  my-5  py-5">
        <div className="d-none d-lg-block me-0 me-lg-4 pe-5">
          <PostIt
            backgroundColor="#ffd700"
            fontFamily="'Indie Flower', cursive"
            position="left"
            heading="Vegan ice cream"
            note="I didn't think it was possible. But it was so good! 
            Add pecans for extra crunch"
          />
        </div>
        <div className="d-none d-lg-block me-0 me-lg-4 pe-5">
          <PostIt
            backgroundColor="#2ED1FB"
            fontFamily="'Satisfy', cursive"
            position="right"
            heading="Great snack idea!"
            note=" Can't wait to try this for the kids lunches. Can't wait to try this for the kids lunches. Can't wait to try this for the kids lunches. Can't wait to try this for the kids lunches.  Can't wait to try this for the kids lunches."
          />
        </div>
      </div>
    </>
  );
}
export default Connexion;
