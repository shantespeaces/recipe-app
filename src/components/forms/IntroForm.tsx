import { useState, FormEvent } from "react";
import axios from "axios";
import InputText from "./InputText";
import InputTextarea from "./InputTextarea";
import Counter from "./Counter";
import ImageUpload from "./ImageUpload";
import ButtonSubmit from "../buttons/ButtonSubmit";

function IntroForm() {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [description, setDescription] = useState("");
  const [serves, setServes] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [isHidden, setIsHidden] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // console.log("Submit button clicked");

    // try {
    //   console.log("Data to be sent:", {
    //     name: recipeTitle,
    //     description: description,
    //     serves: serves,
    //     time: time,
    //   });

    const response = await axios.post("http://localhost:8000/api/recipes", {
      name: recipeTitle,
      description: description,
      serves: serves,
      time: time,
    });

    setIsHidden(true);

    // console.log("Response:", response.data);

    // Handle success, for example, redirect or show a success message
    // } catch (error) {
    //   console.error("Error:", error);

    //   // Handle error, for example, show an error message
    // }
  };

  return (
    <>
      {" "}
      <form
        onSubmit={handleSubmit}
        action=""
        className={`row g-3 .container-sm max-width-200 ${
          isHidden ? "hidden" : ""
        }`}
      >
        <section className="intro">
          <div className="mb-3"></div>
          <InputText
            name="Recipe Title"
            placeholder=" ex: Annie's Apple Pie"
            value={recipeTitle}
            onChange={(e) => setRecipeTitle(e.target.value)}
          />

          <InputTextarea
            heading="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Counter
            heading="Serves"
            value={serves}
            onChange={(value) => setServes(value)}
          />
          <Counter
            heading="Time"
            value={time}
            onChange={(value) => setTime(value)}
          />
          <ImageUpload />
          <ButtonSubmit name=" Save Instructions" type="submit" />
        </section>
      </form>
    </>
  );
}
export default IntroForm;
