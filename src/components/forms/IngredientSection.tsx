import { useState } from "react";
import ButtonMore from "../buttons/ButtonMore";
import Button from "../buttons/Button";
import Ingredients from "./Ingredients";
import InputText from "./InputText";

function IngredientSection() {
  const [ingredientCount, setIngredientCount] = useState(1);
  const [sectionCount, setSectionCount] = useState(1);

  function handleAddIngredient() {
    setIngredientCount(ingredientCount + 1);
  }
  function handleAddSection() {
    setSectionCount(sectionCount + 1);
  }

  return (
    <>
      <h2>Ingredients</h2>
      {/* maintains a state that tracks the number of the component (ingredient or ingredient section) and then render 
       to dynamically add more instances of that component */}
      {/* //creates a new array and spreads (...) elements into individual elements */}
      {/* the (_) indicates that value is not used but is necessary for the callback function */}

      {[...Array(sectionCount)].map((_, sectionIndex) => (
        <div key={sectionIndex} className="ingredient-section">
          <InputText
            name={`Section ${sectionIndex + 1}`}
            placeholder=" ex: Pie Crust"
          />

          {/* Render Ingredients based on ingredientCount */}
          {[...Array(ingredientCount)].map((_, ingredientIndex) => (
            <Ingredients key={ingredientIndex} />
          ))}
        </div>
      ))}

      {/* Buttons for adding sections and individual ingredients */}
      <ButtonMore name="Section" onClick={handleAddSection} />
      <ButtonMore name="Ingredient" onClick={handleAddIngredient} />
      <Button name=" Save Instructions" route="null" />
    </>
  );
}

export default IngredientSection;
