import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Header() {
  interface User {
    name: string;
    image: string;
  }
  const [user, setUser] = useState<User>();
  const [randomHeaderImage, setRandomHeaderImage] = useState<string>("");

  // Array of random header images
  const headerImages = [
    "/images/random/account.png",
    "/images/random/blueberries.png",
    "/images/random/clementines.png",
    "/images/random/donuts1.png",
    "/images/random/donuts2.png",
    "/images/random/header.png",
    "/images/random/mushrooms.png",
    "/images/random/oranges.png",
    "/images/random/pineapples.png",
    "/images/random/pumpkins.png",
  ];

  // Function to select a random header image
  const getRandomHeaderImage = () => {
    const randomIndex = Math.floor(Math.random() * headerImages.length);
    return headerImages[randomIndex];
  };

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

    // Set a random header image when the component mounts
    setRandomHeaderImage(getRandomHeaderImage());
  }, []);

  return (
    <>
      <div className="position-relative">
        <img
          src={randomHeaderImage}
          alt="header"
          style={{
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
              <Link to="/profile">
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
              </Link>
            </div>
            <h3 className="pt-5 px-3 mt-5">@{user.name}</h3>
          </div>
        )}
      </div>
    </>
  );
}
export default Header;
