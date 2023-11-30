import PostIt from "../components/PostIt";
import ButtonSubmit from "../components/buttons/ButtonSubmit";
function Connexion() {
  return (
    <>
      <main>
        <section
          className="m-5 position-relative"
          style={{ backgroundColor: "#eee" }}
        >
          <div className=" d-flex align-items-center h-100 ">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className=" col-lg-7 ">
                  <div className="card m-5" style={{ borderRadius: "15px" }}>
                    {" "}
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
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1cg"
                          >
                            Your Name
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            className="form-control form-control-lg rounded-5"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example3cg"
                          >
                            Email address
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            className="form-control form-control-lg rounded-5"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4cg"
                          >
                            Password
                          </label>
                        </div>
                        <div className="row">
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
      </main>
      <div className="leftSide position-absolute start-0 top-0 mx-5 my-5 px-5 py-5">
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
      <div className="rightSide position-absolute end-0 top-0 mx-5 my-5 px-5 py-5">
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
