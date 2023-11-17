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

// export default IngredientSection;

// intro form
// import { useState, FormEvent } from "react";
// import axios from "axios";
// import { ReactSearchAutocomplete } from "react-search-autocomplete";
// import InputText from "./InputText";
// import InputTextarea from "./InputTextarea";
// import Counter from "./Counter";
// // import ImageUpload from "./ImageUpload";
// import ButtonSubmit from "../buttons/ButtonSubmit";
// import Select from "./Select";

// import CheckBox from "./CheckBox";

// // Define the structure of an Ingredient
// interface Ingredient {
//   id: number;
//   name: string;
//   ingredient_section_id: number;
// }

// function IntroForm() {
//   // State for Intro
//   const [recipeTitle, setRecipeTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [serves, setServes] = useState<number>(0);
//   const [time, setTime] = useState<number>(0);

//   // State for Categories
//   const [selectedCategory, setSelectedCategory] = useState<number | undefined>(
//     undefined
//   );

//   //State for Sub Categories
//   const [selectedSubCategories, setSelectedSubCategories] = useState<number[]>(
//     []
//   );

//   //State for Ingredients

//   const [selectedIngredient, setSelectedIngredient] = useState<string>("");
//   const [searchIngredients, setSearchIngredients] = useState<string>("");
//   const [ingredientsList, setIngredientsList] = useState<Ingredient[]>([]);
//   const [quantity, setQuantity] = useState<number>(0);
//   const [ingredientSection, setIngredientSection] = useState<
//     number | undefined
//   >(undefined);

//   // State for Measurements
//   const [selectedMeasurement, setSelectedMeasurement] = useState<
//     number | undefined
//   >(undefined);

//   // State for Submission Status
//   const [isHidden, setIsHidden] = useState(false);

//   // Function to handle category selection
//   const handleCategorySelect = (categoryId: number) => {
//     setSelectedCategory(categoryId);
//   };

//   // Function to handle Sub category selection
//   const handleSubCategoriesSelect = (selectedOptions: number[]) => {
//     console.log("Selected Subcategories:", selectedOptions);
//     setSelectedSubCategories(selectedOptions);
//   };

//   // Function to handle ingredient search

//   const handleSearch = async (value: string) => {
//     setSearchIngredients(value);
//     try {
//       const response = await axios.get<Ingredient[]>(
//         `http://localhost:8000/api/ingredients?query=${value}`
//       );
//       setIngredientsList(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   // Function to handle measurement selection
//   const handleMeasurementSelect = (measurementId: number) => {
//     setSelectedMeasurement(measurementId);
//   };

//   // Function to handle ingredient selection
//   const handleSelect = (item: Ingredient) => {
//     setSelectedIngredient(item.name);
//     setSearchIngredients(item.name);
//   };

//   // Function to handle form submission

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();

//     try {
//       // Submit Intro Section
//       const introResponse = await axios.post(
//         "http://localhost:8000/api/recipes",
//         {
//           name: recipeTitle,
//           description: description,
//           image: "",
//           category_id: selectedCategory,
//           setting_id: "1",
//           serves: serves,
//           time: time,
//           user_id: "5",
//         }
//       );

//       // Get the recipe ID from the response
//       const createdRecipeId = introResponse.data.success.insert_id;
//       console.log("Created Recipe ID:", createdRecipeId);

//       // Submit Sub Categories

//       for (let subcategory of selectedSubCategories) {
//         await axios.post(`http://localhost:8000/api/recipe_subcategory`, {
//           subcategory_id: subcategory,
//           recipe_id: createdRecipeId,
//         });
//       }

//       //Submit Ingredient section
//       //je veux: post une section qui contient une list d'ingredients et leurs quantités et measurements associer
//       //un ingredient est un objet ingredient{id, quantity_id, measurement_id}
//       //DONC une section est un tableau avec plusieurs objets ingredients a linterieure
//       // section = [ingredient{id, quantity_id, measurement_id}, ingredient{id, quantity_id, measurement_id}, ]
//       //apres...besoin dajouter la fonction pour ajouter une section section`-ingredients du formulaire
//       //et besoin dajouter la fonction pour ajouter un search ingredient a une section

//       for (let ingredient of ingredientsList) {
//         await axios.post(`http://localhost:8000/api/ingredient_section`, {
//           ingredient_id: ingredient.id,
//           section_id: "100",
//           recipe_id: createdRecipeId,
//           measurement_id: selectedMeasurement,
//           quantity: quantity,
//           id: ingredient.ingredient_section_id,
//         });
//       }

//       setIsHidden(true);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   return (
//     <>
//       {" "}
//       <form
//         onSubmit={handleSubmit}
//         action=""
//         className={`row g-3 .container-sm max-width-200 ${
//           isHidden ? "hidden" : ""
//         }`}
//       >
//         <section className="intro">
//           <div className="mb-3"></div>
//           <InputText
//             name="Recipe Title"
//             placeholder=" ex: Annie's Apple Pie"
//             value={recipeTitle}
//             onChange={(e) => setRecipeTitle(e.target.value)}
//           />

//           <InputTextarea
//             heading="Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//           <Counter
//             heading="Serves"
//             value={serves}
//             onChange={(value) => setServes(value)}
//           />
//           <Counter
//             heading="Time"
//             value={time}
//             onChange={(value) => setTime(value)}
//           />

//           {/* <ImageUpload onImageUpload={(image) => handleImageUpload(image)} /> */}
//         </section>
//         <section className="categories">
//           <Select
//             heading="Categories"
//             onSelectOption={handleCategorySelect}
//             selectedOption={selectedCategory}
//             endpoint="http://localhost:8000/api/categories"
//           />

//           <CheckBox
//             title="filters"
//             endpoint="http://localhost:8000/api/sub_categories"
//             onCheckBoxChange={handleSubCategoriesSelect}
//           />
//         </section>
//         <section className="ingredients">
//           {/* <IngredientSection /> */}

//           <div>
//             <h2>Ingredients</h2>
//             <ReactSearchAutocomplete
//               items={ingredientsList}
//               onSearch={handleSearch}
//               onSelect={handleSelect}
//               placeholder="Search Ingredients"
//               autoFocus
//               onSelectItem={(item: Ingredient) => handleSelect(item)}
//               value={searchIngredients} // Pass the local value to the component
//             />
//             <p>Selected ingredient: {selectedIngredient}</p>
//             {/* <ul>
//               {selectedIngredients.map((ingredient, index) => (
//                 <li key={index}>
//                   {ingredient}
//                   <button onClick={() => handleRemoveIngredient(ingredient)}>
//                     Remove
//                   </button>
//                 </li>
//               ))}
//             </ul> */}
//           </div>
//           {/* Buttons for adding sections and individual ingredients */}
//           {/* <ButtonMore name="Section" onClick={handleAddSection} />
// //       <ButtonMore name="Ingredient" onClick={handleAddIngredient} /> */}
//           <Counter
//             heading="Qty"
//             value={quantity}
//             onChange={(value) => setQuantity(value)}
//           />
//           <Select
//             heading="Measurement"
//             onSelectOption={handleMeasurementSelect}
//             selectedOption={selectedMeasurement}
//             endpoint="http://localhost:8000/api/measurements"
//           />
//         </section>
//         {/* <section className="steps">
//         <Instructions />
//       </section>
//       <section className="notes">
//         <Notes />
//       </section>  */}
//         <ButtonSubmit name=" Save Instructions" type="submit" />
//       </form>
//     </>
//   );
// }

// export default IntroForm;
