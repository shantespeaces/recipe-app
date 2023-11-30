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
      <div style={{ position: "relative", width: "100%", height: "300px" }}>
        <img
          src="src\assets\images\header.png"
          alt="header"
          style={{
            backgroundImage: `url("src/assets/images/header.png")`,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            backgroundPosition: "center",
          }}
        />
        {user && (
          <div className="position-absolute bottom-0 start-0 p-3 text-white">
            <div className="profile-image-container d-flex ">
              <div className="col-6">
                <h2>{user.name}</h2>
              </div>
              <div className="col-6 ">
                <img
                  className="profile img-fluid"
                  src={user.image}
                  alt=""
                  style={{ maxWidth: "100px" }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Header;
