import axios from "axios";
import { useState, useEffect } from "react";

interface IntroMessageProps {
  message: string;
}
interface User {
  name: string;
  image: string;
}
function IntroMessage({ message }: IntroMessageProps) {
  const [user, setUser] = useState<User>();
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
  }, []);
  return (
    <div>
      {user && (
        <h1 className="pb-4" style={{ marginTop: "3em", marginLeft: "2em" }}>
          Hello {user.name.charAt(0).toUpperCase() + user.name.slice(1)}, {""}
          {message}
        </h1>
      )}
    </div>
  );
}

export default IntroMessage;
