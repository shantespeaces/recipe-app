import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const footerImages = [
    "/images/random/account.png",
    "/images/random/blueberries.png",
  ];
  const [randomFooterImage, setRandomFooterImage] = useState<string>("");

  useEffect(() => {
    // Select a random image from the headerImages array
    const getRandomFooterImage = () => {
      const randomIndex = Math.floor(Math.random() * footerImages.length);
      return footerImages[randomIndex];
    };

    setRandomFooterImage(getRandomFooterImage());
  }, []); // Empty dependency array ensures this effect runs once

  return (
    <footer
      style={{
        backgroundColor: "#f8f9fa",
        position: "relative",
        marginTop: "2em",
        marginBottom: "2em",
      }}
    >
      <div className="row">
        <div className="col-md-6 g-0">
          {/* Left side */}
          <img
            src={randomFooterImage}
            alt="Background"
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
            }}
          />
        </div>{" "}
        <div
          className="col-md-6 g-0 d-flex align-items-center justify-content-center"
          style={{
            border: "solid 1px rgb(243, 105, 18)",
            borderLeft: "0px",

            marginLeft: "0px",
          }}
        >
          {/* Text on the right */}
          <div
            className="text-center mt-4"
            style={{ maxWidth: "50%", margin: "0 auto" }}
          >
            <h3 style={{ wordWrap: "break-word" }}>
              Thank-you for creating 'The Menu' with me!
            </h3>
          </div>
        </div>
        <Link to="/home">
          <img
            src="\images\logo.png"
            alt="Logo"
            className="img-fluid"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              height: "250px",
            }}
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
