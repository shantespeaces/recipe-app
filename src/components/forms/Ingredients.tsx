// import { useState } from "react";
// import axios from "axios";
// import InputText from "./InputText";

// import Counter from "./Counter";

// import Select from "./Select";

// function Ingredients() {
//   const [ingredientTitle, setIngredientTitle] = useState("");
//   const [quantity, setQuantity] = useState<number>(0);
//   const [ingredients, setIngredients] = useState<number[]>([]);
//   const [sections, setSections] = useState<number>();
//   const [selectedMeasurement, setSelectedMeasurement] = useState<number[]>([]);

//   // Submit Sub Categories

//   for (let ingredient of ingredients) {
//     await axios.post(`http://localhost:8000/api/ingredient_section`, {
//       ingredient_id: ingredient,
//       section_id: sections,
//       recipe_id: createdRecipeId,
//       measurement_id: selectedMeasurement,
//       quantity: quantity,
//     });
//   }
//   return (
//     <>
//       <InputText
//         name="Ingredients"
//         placeholder=" ex: flour"
//         value={ingredientTitle}
//         onChange={(e) => setIngredientTitle(e.target.value)}
//       />
//       <Counter
//         heading="Qty"
//         value={quantity}
//         onChange={(value) => setQuantity(value)}
//       />
//       <Select
//         heading="Measurement"
//         onSelectOption={(measurementId) =>
//           console.log(`Selected measurement: ${measurementId}`)
//         }
//         endpoint="http://localhost:8000/api/measurements"
//       />
//     </>
//   );
// }
// export default Ingredients;
