import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Header() {
  interface User {
    name: string;
    image: string;
  }
  const [user, setUser] = useState<User>();
  // Get userId from local storage
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/users/${userId}`)
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
      <div className="position-relative">
        <img
          src="src/assets/images/header.png"
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
          <div
            className=" d-flex flex-row pb-5 position-absolute top-50 start-0 mx-5 my-5 py-4 "
            style={{
              width: "100%",
            }}
          >
            <div className="profile-image-container">
              <img
                className="profile img-fluid"
                src={user.image}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  border: "solid 2px white",
                }}
              />
            </div>
            <h3 className="pt-5 px-3 mt-5">@{user.name}</h3>
          </div>
        )}
      </div>
    </>
  );
}
export default Header;
