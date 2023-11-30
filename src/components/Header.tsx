import axios from "axios";
import { useState, useEffect } from "react";
function Header() {
  interface User {
    name: string;
    image: string;
  }
  const [user, setUser] = useState<User>();
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users/1")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });

    //   });
  }, []);

  return (
    <>
      <div className="position-relative my-5">
        <img
          src="src\assets\images\header.png"
          alt="header"
          style={{
            backgroundImage: `url("src/assets/images/header.png")`,
            width: "100%",
            height: "300px",
            objectFit: "cover",
            backgroundPosition: "center",
          }}
        />
        {user && (
          <div className="profile-image-container position-absolute top-50 start-20  d-flex col-6 py-5 px-5 my-3">
            <div
              className="col-6 d-flex "
              style={{
                width: "150px",
                height: "150px",
              }}
            >
              <img
                className="profile"
                src={user.image}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  border: "solid 2px #fb2e65",
                }}
              />
            </div>
            <div className="col-6 py-5 my-5">
              <h3>@{user.name}</h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Header;
