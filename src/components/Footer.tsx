import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [randomFooterImage, setRandomFooterImage] = useState<string>("");

  const headerImages = [
    "src/assets/images/random/account.png",
    "src/assets/images/random/blueberries.png",
    // Add more image URLs as needed
  ];

  const getRandomFooterImage = () => {
    const randomIndex = Math.floor(Math.random() * headerImages.length);
    return headerImages[randomIndex];
  };

  useEffect(() => {
    // Set a random footer image when the component mounts
    setRandomFooterImage(getRandomFooterImage());
  }, []); // Empty dependency array ensures this effect runs once, equivalent to componentDidMount

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
          <p className="text-center">Thank-you for viewing The Menu with me!</p>
        </div>
        <Link to="/home">
          <img
            src="src\assets\images\logo.png"
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
