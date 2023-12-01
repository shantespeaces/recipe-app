import PostIt from "../components/PostIt";
import ButtonSubmit from "../components/buttons/ButtonSubmit";
import axios from "axios";
import { useState, FormEvent, useEffect } from "react";

// interface User {
//   name: string;
//   email: string;
//   password: string;
// }

function Connexion() {
  //State for user information
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Submit user data
      await axios.post("http://localhost:8000/api/users", {
        name: name,
        email: email,
        password: password,
      });

      // Reset form fields after successful submission
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <>
      <main>
        <form
          onSubmit={handleSubmit}
          action=""
          className={`row g-3 .container-sm max-width-200 `}
        >
          <section
            className="m-5 position-relative"
            style={{ backgroundColor: "#eee" }}
          >
            <div className=" d-flex align-items-center h-100 ">
              <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className=" col-lg-7 ">
                    <div className="card m-5" style={{ borderRadius: "15px" }}>
                      <div className="">
                        <img
                          src="src\assets\images\logo.png"
                          alt="the menu logo"
                          style={{ width: "8rem" }}
                        />
                      </div>
                      <div className="card-body p-5">
                        <h2 className="text-uppercase text-center mb-5">
                          Sign into your account
                        </h2>

                        <form>
                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              className="form-control form-control-lg rounded-5"
                              id="id"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                            <label className="form-label" htmlFor="name">
                              Your Name
                            </label>
                          </div>

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
                          <p
                            className="mb-5 pb-lg-2"
                            style={{ color: "#393f81" }}
                          >
                            Don't have an account?{" "}
                            <a href="/account" style={{ color: "#393f81" }}>
                              Register here
                            </a>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>
      </main>
      <div className="leftSide position-absolute start-0 top-0  my-5  py-5">
        <div className="mx-5 px-5">
          <PostIt
            backgroundColor="#FB9B2E"
            fontFamily="'Caveat', cursive"
            position="right"
            heading="Best apple pie ever!!!"
            note=" Definitely making this again, the whole family was impressed:) Definitely making this again, the whole family was impressed:) Definitely making this again, the whole family was impressed:) Definitely making this again, the whole family was impressed:) Definitely making this again, the whole family was impressed:)"
          />
        </div>
        <div className="mx-5 px-5">
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
        <div className="mx-5 px-5">
          <PostIt
            backgroundColor="#ffd700"
            fontFamily="'Indie Flower', cursive"
            position="left"
            heading="Vegan ice cream"
            note="I didn't think it was possible. But it was so good! 
            Add pecans for extra crunch"
          />
        </div>
        <div className="mx-5 px-5">
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
