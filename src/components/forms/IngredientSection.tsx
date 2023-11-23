// import { useState } from "react";
// import { ReactSearchAutocomplete } from "react-search-autocomplete";
// // import Counter from "./Counter";
// // import Select from "./Select";
// import axios from "axios";

// interface Ingredient {
//   id: number;
//   name: string;
// }

// interface Section {
//   title: string;
//   selectedIngredientsList: {
//     ingredient: Ingredient;
//     quantity: number;
//     measurement: number | undefined;
//   }[];
// }

// interface IngredientSectionProps {
//   addSection: (newSection: Section) => void;
//   section?: Section; // Optional section prop
// }

// const IngredientSection: React.FC<IngredientSectionProps> = ({
//   addSection,
//   section,
// }) => {
//   const [sectionTitle, setSectionTitle] = useState("");
//   const [selectedIngredient, setSelectedIngredient] =
//     useState<Ingredient | null>(null);
//   const [searchIngredients, setSearchIngredients] = useState("");
//   const [ingredientsList, setIngredientsList] = useState<Ingredient[]>([]);
//   const [quantity, setQuantity] = useState<number>(0);
//   const [selectedMeasurement, setSelectedMeasurement] = useState<
//     number | undefined
//   >(undefined);
//   const [selectedIngredientsList, setSelectedIngredientsList] = useState<
//     {
//       ingredient: Ingredient;
//       quantity: number;
//       measurement: number | undefined;
//     }[]
//   >([]);

//   const handleSearch = async (value: string) => {
//     setSearchIngredients(value);
//     // Handle ingredient search using Axios or other methods
//     // Update ingredientsList state with the search results
//     try {
//       const response = await axios.get<Ingredient[]>(
//         `http://localhost:8000/api/ingredients?query=${value}`
//       );
//       setIngredientsList(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleSelect = (item: Ingredient) => {
//     setSelectedIngredient(item);
//     setSearchIngredients(item.name);
//     // Perform any additional actions upon ingredient selection
//   };

//   const handleAddIngredientToList = () => {
//     if (selectedIngredient) {
//       const newIngredient = {
//         ingredient: selectedIngredient,
//         quantity: quantity,
//         measurement: selectedMeasurement,
//       };
//       setSelectedIngredientsList([...selectedIngredientsList, newIngredient]);
//       // Clear fields for new entries
//       setSearchIngredients("");
//       setSelectedIngredient(null);
//       setQuantity(0);
//       setSelectedMeasurement(undefined);
//     }
//   };

//   const handleCreateSection = () => {
//     if (selectedIngredientsList.length > 0 && sectionTitle.trim() !== "") {
//       addSection({
//         title: sectionTitle,
//         selectedIngredientsList: selectedIngredientsList,
//       });
//       // Clear fields for new entries
//       setSectionTitle("");
//       setSelectedIngredientsList([]);
//     }
//   };

//   return (
//     <section className="ingredientSection first">
//       <div className="selectedIngredients">
//         <h3>Selected Ingredients</h3>

//         {selectedIngredientsList.map((item, index) => (
//           <div key={index}>
//             <p>Ingredient: {item.ingredient ? item.ingredient.name : "None"}</p>
//             <p>Quantity: {item.quantity}</p>
//             <p>Measurement: {item.measurement ? item.measurement : "None"}</p>
//           </div>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={sectionTitle}
//         onChange={(e) => setSectionTitle(e.target.value)}
//         placeholder="Section Title"
//       />

//       <ReactSearchAutocomplete<Ingredient>
//         items={ingredientsList.map((ingredient) => ({
//           id: ingredient.id,
//           name: ingredient.name,
//           // Other properties if required
//         }))}
//         onSearch={handleSearch}
//         onSelect={handleSelect}
//         placeholder="Search Ingredients"
//         fuseOptions={{ keys: ["name"], threshold: 0.3 }} // Adjust based on your search requirements
//         // Additional props as needed for search autocomplete
//       />
//       {/* Additional input components for quantity and measurement */}
//       <input
//         type="number"
//         value={quantity}
//         onChange={(e) => setQuantity(parseInt(e.target.value))}
//         placeholder="Quantity"
//       />

//       {/* Select component for measurement */}
//       {/* Replace this with your measurement select component */}
//       <select
//         value={selectedMeasurement || ""}
//         onChange={(e) =>
//           setSelectedMeasurement(parseInt(e.target.value) || undefined)
//         }
//       >
//         <option value="">Select Measurement</option>
//         {/* Add measurement options */}
//       </select>

//       {/* ... Other components or logic related to ingredient selection */}

//       <button onClick={handleAddIngredientToList}>Add Ingredient</button>
//       <div className="selectedIngredients">
//         {/* Display selected ingredients */}
//       </div>

//       <button onClick={handleCreateSection}>Create Section</button>
//     </section>
//   );
// };

// export default IngredientSection;

// import { useState } from "react";
// import ButtonMore from "../buttons/ButtonMore";

// import Ingredients from "./Ingredients";
// import InputText from "./InputText";

// function IngredientSection() {
//   const [ingredientCount, setIngredientCount] = useState(1);
//   const [sectionCount, setSectionCount] = useState(1);

//   function handleAddIngredient() {
//     setIngredientCount(ingredientCount + 1);
//   }
//   function handleAddSection() {
//     setSectionCount(sectionCount + 1);
//   }

//   //Submit Ingredient Section

//   return (
//     <>
//       <h2>Ingredients</h2>
//       {/* maintains a state that tracks the number of the component (ingredient or ingredient section) and then render
//        to dynamically add more instances of that component */}
//       {/* //creates a new array and spreads (...) elements into individual elements */}
//       {/* the (_) indicates that value is not used but is necessary for the callback function */}

//       {[...Array(sectionCount)].map((_, sectionIndex) => (
//         <div key={sectionIndex} className="ingredient-section">
//           <InputText
//             name={`Section ${sectionIndex + 1}`}
//             placeholder=" ex: Pie Crust"
//           />

//           {/* Render Ingredients based on ingredientCount */}
//           {[...Array(ingredientCount)].map((_, ingredientIndex) => (
//             <Ingredients key={ingredientIndex} />
//           ))}
//         </div>
//       ))}

//       {/* Buttons for adding sections and individual ingredients */}
//       <ButtonMore name="Section" onClick={handleAddSection} />
//       <ButtonMore name="Ingredient" onClick={handleAddIngredient} />
//     </>
//   );
// }
