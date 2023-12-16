import { useState, FormEvent, ChangeEvent } from "react";

import axios from "axios";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import InputText from "./InputText";
import InputTextarea from "./InputTextarea";
import Counter from "./Counter";
// import ImageUpload from "./ImageUpload";
import ButtonSubmit from "../buttons/ButtonSubmit";
import ButtonMore from "../buttons/ButtonMore";
import Select from "./Select";
// import Instructions from "./Instructions";
import CheckBox from "./CheckBox";
import RatingButton from "../buttons/RatingButton";

// Define the structure of an Ingredient
interface Ingredient {
  id: number;
  name: string;
  quantity?: number;
  measurement?: number | undefined;
  measurementName?: string | undefined;
}

type Sections = Section[];
interface Section {
  title: string;
  ingredients: Ingredient[];
}

interface Instruction {
  description: string;
}

function IntroForm() {
  // State for Intro
  const [recipeTitle, setRecipeTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [serves, setServes] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [sectionTitle, setSectionTitle] = useState<string>("");

  // State for Categories (union type, can hold either a number or undefined)
  const [selectedCategory, setSelectedCategory] = useState<number | undefined>(
    undefined
  );

  //State for Sub Categories
  const [selectedSubCategories, setSelectedSubCategories] = useState<number[]>(
    []
  );

  // Function to handle category selection
  const handleCategorySelect = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  // Function to handle Sub category selection
  // handleCategorySelect is a function that takes a categoryId (a number) as an argument.
  // When invoked, it updates the selectedCategory state with the categoryId value passed to it,
  // effectively changing the currently selected category to the one specified by the categoryId.
  const handleSubCategoriesSelect = (selectedOptions: number[]) => {
    setSelectedSubCategories(selectedOptions);
  };
  //State for selected Rating
  const [selectedRating, setSelectedRating] = useState<number | undefined>(
    undefined
  );

  //Function for Selected Rating
  const handleSelectedRating = (rating: number) => {
    setSelectedRating(rating);
  };
  // State for selected image
  const [selectedImage, setSelectedImage] = useState<File | null>();

  // Function to handle image upload
  const handleSelectImage = (e: ChangeEvent<HTMLInputElement>) => {
    const fichier = e.target.files?.[0];

    if (fichier) {
      setSelectedImage(fichier);
    }
  };
  //////////////////////////////////////////////////////INGREDIENTS /////////////////////////////////////////////////////////////////////////

  //State for Ingredients

  const [ingredientsList, setIngredientsList] = useState<Ingredient[]>([]);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(0);
  const [sections, setSections] = useState<Sections>([]);

  // State variable to store selected Measurements.
  //State is added to functional component with useState hook wich can hold undefined  or number values (union state)
  // selectedMeasurement is a state variable that can contain either a number or undefined and whos initiale state is undefined
  const [selectedMeasurement, setSelectedMeasurement] = useState<
    number | undefined
  >(undefined);
  const [selectedMeasurementName, setSelectedMeasurementName] = useState<
    string | undefined
  >(undefined);

  // Function to handle measurement selection
  const handleMeasurementSelect = (
    measurementId: number,
    measurementName: string
  ) => {
    setSelectedMeasurement(measurementId);
    setSelectedMeasurementName(measurementName);
  };

  // state for search bar
  const [searchIngredients, setSearchIngredients] = useState<string>("");

  // Function to handle ingredient search
  // state variable (searchIngredients) is udpated with the provided value
  // axios maques the request to API endpoint and passes the value as a
  // query parameter performing a search of matching ingredients
  // if request is successful ingredientList is updated with the response received from the database (API endpoint)
  //This function is triggered when performing a search action. It sets the search query state, logs the query value,
  // sends a request to fetch ingredients based on the query, and updates the ingredient list state
  // with the fetched data while handling any potential errors that might occur during the fetch operation.
  const handleSearch = async (value: string) => {
    setSearchIngredients(value);
    console.log("Search Ingredients:", value);
    try {
      const response = await axios.get<Ingredient[]>(
        `http://localhost:8000/api/ingredients?query=${value}`
      );
      setIngredientsList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to reset search ingredient, quantity, and measurement fields
  // (reset form after section is "saved" by the user (displayed))
  const resetFields = () => {
    setSearchIngredients("");
    setSelectedIngredient(null);
    setSelectedQuantity(0);
    setSelectedMeasurement(undefined);
    console.log(
      "Search ingredients, selected ingredient, selected quantity, selected measurement and selected ingredients list were reset"
    );
  };

  const resetSection = () => {
    setSectionTitle("");
    setSelectedIngredientsList([]);
  };

  //state for selected ingredient
  const [selectedIngredient, setSelectedIngredient] =
    useState<Ingredient | null>(null);

  // Function to handle ingredient selection
  const handleSelect = (item: Ingredient) => {
    console.log(item.id, item.name);
    setSelectedIngredient(item);
  };

  //State to make a list of ingredients
  const [selectedIngredientsList, setSelectedIngredientsList] = useState<
    Ingredient[]
  >([]);

  //function to handle adding a list of ingredients (Add Ingredients Button)
  const handleAddIngredientToList = () => {
    //validation check if false Or if zero Or if false display alert message to the user
    if (!selectedIngredient || selectedQuantity === 0 || !selectedMeasurement) {
      alert("Please select an ingredient, a quantity and a measurement");
      return;
    }

    //if all fields are present and valid; modify selectedIngredient with new values for quantity and measurement properties
    selectedIngredient.quantity = selectedQuantity;
    selectedIngredient.measurement = selectedMeasurement;
    selectedIngredient.measurementName = selectedMeasurementName;

    //Updates selectedIngredientsList state by creating a new array
    // that includes the existing list and the modified selectedIngredient
    setSelectedIngredientsList([
      ...selectedIngredientsList,
      selectedIngredient,
    ]);

    // Clear fields for new entries
    resetFields();
    //hide section title input
    setToggleSectionInput(false);
    setToggleSaveSectionBtn(true);
  };

  //Function to toggle new section visibility (Create new section Button)
  const handleSectionToggle = () => {
    setToggleSection(true);
    setToggleAddIngredientBtn(true);
    setToggleCreateSectionBtn(false);
  };
  ////////////////////////////////////////////////////////////////////////SECTIONS/////////////////////////////////////////////////////////////////

  //state for section title increment
  const [sectionCount, setSectionCount] = useState(1); // Initial count of 1

  // function to handle the creation of a section (Save section Button)
  const handleCreateSections = () => {
    // Check if section title exists
    // .trim() removes whitespace (spaces, tabs etc)
    // comparison operator that checks if the trimmed string is equal to an empty string ("").
    // If the string is empty after removing whitespace, the condition evaluates to true;
    // otherwise, it evaluates to false.
    if (sectionTitle.trim() === "") {
      // Temporary alert
      alert("Please write a title before saving the section");
      return;
    }

    // Validation before creating a section (title, ingredients)
    // Check if at least one ingredient was added
    // .length returns the number of properties of the array(if array is empty (equal to 0)
    // condition is true (no selected items in the list).
    if (selectedIngredientsList.length === 0) {
      // Temporary alert
      alert("Please choose an ingredient before saving the section");
      return;
    }

    // new section object created
    //.map Iterates over each element (ingredient) in the selectedIngredientsList array and transforms it into a new object.
    // Creates a new object for each ingredient with specific properties (id, name, quantity, measurement) extracted from
    // the ingredient object in selectedIngredientsList.
    const newSection: Section = {
      title: sectionTitle,
      ingredients: selectedIngredientsList.map((ingredient) => ({
        id: ingredient.id,
        name: ingredient.name,
        quantity: ingredient.quantity,
        measurement: ingredient.measurement,
      })),
    };

    //creates a new array updatedSections that includes all the elements from the existing sections array and appends
    // the newSection object to the end of this array.
    // This  doesn't mutate the original sections array but instead creates a new array with the updated content.
    // (creates new array by combining the existing section array with the new section object)
    //spread ... creates a copy of the original array (rather than modifying it) and spreads the elements of the sections array
    // into the new array
    const updatedSections = [...sections, newSection];
    setSections(updatedSections); // Update the sections state
    console.log("Updated Sections:", sections);

    // Clear fields for new entries
    resetFields();
    // Clear the previous ingredients list and section title
    resetSection();

    //show section title input (toggles section visibility and display)
    setToggleSectionInput(true);
    setSectionCount(sectionCount + 1);
    setToggleSection(false);
    setToggleCreateSectionBtn(true);
    setToggleSaveSectionBtn(false);
    setToggleAddIngredientBtn(false);
  };

  //state to toggle visibility of form elements
  const [toggleSectionInput, setToggleSectionInput] = useState(true);
  const [toggleSection, setToggleSection] = useState(true);
  const [toggleSaveSectionBtn, setToggleSaveSectionBtn] = useState(false);
  const [toggleCreateSectionBtn, setToggleCreateSectionBtn] = useState(false);
  const [toggleaddIngredientBtn, setToggleAddIngredientBtn] = useState(true);

  ////INSTRUCTIONS

  // State for instructions
  const [instructions, setInstructions] = useState<Instruction[]>([]);
  const [newInstruction, setNewInstruction] = useState<string>("");

  // Function to add a new instruction
  const handleAddInstruction = () => {
    // validation: checks if new instruction exists (.trim removes whitespace (spaces etc))
    if (newInstruction.trim() !== "") {
      // if newInstruction is not empty a new array is created (updatedInstructions)by spreading (...) the existing instructions
      // array and appending a new object representing the new instruction.
      // creates new array by combining the existing instruction array with the new instruction object)
      // The new object contains a description field with the value of newInstruction.
      const updatedInstructions: Instruction[] = [
        ...instructions,
        { description: newInstruction },
      ];
      // Updates the state variable instructions with the newly created updatedInstructions array
      setInstructions(updatedInstructions);

      // Reset text area (to an empty string) preparing it for a new instruction
      setNewInstruction("");
      console.log("Updated Instructions:", updatedInstructions);
    }
  };

  /////////////////////////////////////////////////SUBMIT///////////////////////////////////////////////

  // Function to handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    try {
      // Submit Intro Section

      const formData = new FormData();
      formData.append("name", recipeTitle);
      formData.append("description", description);
      formData.append("category_id", String(selectedCategory));
      formData.append("setting_id", "1");
      formData.append("serves", String(serves));
      formData.append("time", String(time));
      formData.append("user_id", String(userId));
      formData.append("rating", String(selectedRating));

      // Check if an image has been selected
      if (selectedImage) {
        formData.append("selectedImage", selectedImage!);
      }

      const introResponse = await axios.post(
        "http://localhost:8000/api/recipes",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Get the recipe ID from the response
      const createdRecipeId = introResponse.data.success.insert_id;
      console.log("Recipe ID:", createdRecipeId);

      //store recipe id created and display one recipe with that id
      localStorage.setItem("createdRecipeId", createdRecipeId);

      console.log("image:", selectedImage);
      //Get inserted id
      console.log("introResponse Data:", introResponse.data);
      const lastId = introResponse.data.success.insert_id[0][0].name;

      // Construct static file name and update image name for recipe

      await axios.post(`http://localhost:8000/api/recipes/${lastId}`, {
        image: `/img/recipes/${lastId}/512x512.jpg`,
      });

      // Submit Sub Categories

      for (let subcategory of selectedSubCategories) {
        await axios.post(`http://localhost:8000/api/recipe_subcategory`, {
          subcategory_id: subcategory,
          recipe_id: createdRecipeId,
        });
      }
      console.log("Sections:", sections);

      // Submit one section
      for (let section of sections) {
        // Section
        const sectionResponse = await axios.post(
          "http://localhost:8000/api/sections",
          {
            title: section.title,
            recipe_id: createdRecipeId,
          }
        );

        // Get the last inserted section id from the response
        const createdSectionId = sectionResponse.data.success.insert_id;

        console.log("Section ID:", createdSectionId);

        // submit Section's ingredients
        for (let ingredient of section.ingredients) {
          console.log("Ingredient:", ingredient.name);
          await axios.post(`http://localhost:8000/api/ingredient_section`, {
            ingredient_id: ingredient.id,
            section_id: createdSectionId,
            recipe_id: createdRecipeId,
            measurement_id: ingredient.measurement,
            quantity: ingredient.quantity,
          });
        }

        //Submit Instructions

        for (let instruction of instructions) {
          console.log("Sending instruction:", instruction);
          await axios.post("http://localhost:8000/api/instructions", {
            description: instruction.description,
            recipe_id: createdRecipeId,
          });
        }
      }

      //redirection with id of the recipe created (to be used with OneRecipe(show))
      window.location.href = `/recipe/${createdRecipeId}`;

      alert("The recipe was created!");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      {" "}
      <form
        onSubmit={handleSubmit}
        action=""
        className={`row g-3 .container-sm max-width-200 `}
      >
        <section className="intro px-5 py-5 mb-3">
          <div className="py-3">
            <InputText
              name="Recipe Title"
              placeholder=" ex: Annie's Apple Pie"
              value={recipeTitle} //binds value to variable
              //onChnage attribute defines what happens when input value changes(updates recipeTitle with new value entered in input field)
              onChange={(e) => setRecipeTitle(e.target.value)}
            />
          </div>
          <div className="py-3">
            <InputTextarea
              heading="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your dish!"
            />
          </div>
          <div className="row justify-content-between">
            <div className="col-md-5 py-3">
              <Counter
                heading="Serves"
                value={serves}
                onChange={(value) => setServes(value)}
                icon="person"
              />
            </div>
            <div className="col-md-5 py-3">
              <Counter
                heading="Time"
                value={time}
                onChange={(value) => setTime(value)}
                icon="timer"
              />
            </div>
          </div>

          <h3>Rating</h3>
          <div className="row">
            <div className="col py-3">
              <RatingButton numberOfStars={1} onChange={handleSelectedRating} />
            </div>
            <div className="col py-3">
              <RatingButton numberOfStars={2} onChange={handleSelectedRating} />
            </div>
            <div className="col py-3">
              <RatingButton numberOfStars={3} onChange={handleSelectedRating} />
            </div>
            <div className="col py-3">
              <RatingButton numberOfStars={4} onChange={handleSelectedRating} />
            </div>
            <div className="col py-3">
              <RatingButton numberOfStars={5} onChange={handleSelectedRating} />
            </div>
          </div>

          <div className="row py-3">
            <div className="col-md-9 pe-5">
              <input
                className="form-control form-control-md rounded-5"
                type="file"
                placeholder="Choose File"
                onChange={(e) => handleSelectImage(e)}
              />
              <div className="small text-muted mt-2">
                Upload your picture. Max file size 50 MB
              </div>
            </div>
          </div>
        </section>
        <section className="categories px-5 py-3 mb-3">
          <div className="py-3">
            <Select
              heading="Categories"
              onSelectOption={handleCategorySelect}
              selectedOption={selectedCategory}
              endpoint="http://localhost:8000/api/categories"
            />
          </div>
          <div className="py-3">
            <CheckBox
              title="filters"
              endpoint="http://localhost:8000/api/sub_categories"
              onCheckBoxChange={handleSubCategoriesSelect}
            />
          </div>
        </section>

        <div>
          {sections.map((section, index) => (
            <section
              key={index}
              className="ingredientSection first px-5 py-5 mb-3"
            >
              <h2>{`Section ${index + 1}: ${section.title}`}</h2>
              <div className="selectedIngredients">
                {/* Check if there is ingredients and then display them */}
                {section.ingredients &&
                  section.ingredients.map((ingredient, index) => (
                    <div key={index}>
                      <p>Ingredient: {ingredient.name}</p>
                      <p>Quantity: {ingredient.quantity}</p>
                      <p>Measurement: {ingredient.measurement}</p>
                    </div>
                  ))}
              </div>
            </section>
          ))}
        </div>

        {toggleSection && (
          <section className="ingredientSection next px-5 py-5 mb-3">
            <h2>
              {`Section ${sectionCount}`} : {sectionTitle}
            </h2>

            <div className="selectedIngredients">
              {selectedIngredientsList.map((item, index) => (
                <div key={index}>
                  <p>Ingredient: {item.name ? item.name : "None"}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>
                    Measurement:{" "}
                    {item.measurementName ? item.measurementName : "None"}
                  </p>
                </div>
              ))}
            </div>
            {/* </div> */}

            {toggleSectionInput && (
              <div className="py-3">
                <InputText
                  name=""
                  placeholder=" ex: Pie Crust"
                  onChange={(e) => setSectionTitle(e.target.value)}
                  value={sectionTitle}
                />
              </div>
            )}

            <div className="ingredientObject">
              <h3>Ingredients</h3>
              <div className="py-3">
                <ReactSearchAutocomplete
                  items={ingredientsList}
                  onSearch={handleSearch}
                  onSelect={handleSelect}
                  placeholder="Search Ingredients"
                  autoFocus
                  inputSearchString={searchIngredients}
                  styling={{ zIndex: 100 }}
                />
              </div>
              <div className="py-3">
                <Counter
                  heading="Qty"
                  value={selectedQuantity}
                  onChange={(value) => setSelectedQuantity(value)}
                  icon=""
                />
              </div>
              <div className="py-3">
                <Select
                  heading="Measurement"
                  onSelectOption={handleMeasurementSelect}
                  selectedOption={selectedMeasurement}
                  endpoint="http://localhost:8000/api/measurements"
                />
              </div>
            </div>
            {toggleaddIngredientBtn && (
              <div className="d-flex justify-content-center">
                <div className="py-3">
                  <ButtonMore
                    name="Add ingredient"
                    onClick={handleAddIngredientToList}
                  />
                </div>
              </div>
            )}
            {toggleSaveSectionBtn && (
              <div className="d-flex justify-content-center">
                <div className="py-3">
                  <ButtonMore
                    name="Save Section"
                    onClick={handleCreateSections}
                  />
                </div>
              </div>
            )}
          </section>
        )}

        {/* For Create new section Button */}
        {toggleCreateSectionBtn && (
          <div className="d-flex justify-content-center">
            <div className="py-3">
              <ButtonMore
                name="Create new section"
                onClick={handleSectionToggle}
              />
            </div>
          </div>
        )}
        <section className="instructions px-5 py-5 mb-3">
          <div className="description">
            <h2>Instructions</h2>
            <ul>
              {instructions.map((instruction, index) => (
                <li key={index}>
                  <p>{instruction.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="py-3">
            <InputTextarea
              heading=""
              value={newInstruction}
              onChange={(e) => setNewInstruction(e.target.value)}
              placeholder=" ex: Pour the prepared filling into the pie crust."
            />
          </div>

          <div className="d-flex justify-content-center">
            <div className="py-3">
              <ButtonMore
                name="Add Instruction"
                onClick={handleAddInstruction}
              />
            </div>
          </div>
        </section>
        {/* <section className="notes">
          <Notes />
        </section> */}
        <div className="mb-5">
          <ButtonSubmit name="All Done? Save your Recipe!" type="submit" />
        </div>
      </form>
    </>
  );
}

export default IntroForm;
// import { useState, FormEvent, ChangeEvent } from "react";

// import axios from "axios";
// import { ReactSearchAutocomplete } from "react-search-autocomplete";
// import InputText from "./InputText";
// import InputTextarea from "./InputTextarea";
// import Counter from "./Counter";
// // import ImageUpload from "./ImageUpload";
// import ButtonSubmit from "../buttons/ButtonSubmit";
// import ButtonMore from "../buttons/ButtonMore";
// import Select from "./Select";
// // import Instructions from "./Instructions";
// import CheckBox from "./CheckBox";
// import RatingButton from "../buttons/RatingButton";

// // Define the structure of an Ingredient
// interface Ingredient {
//   id: number;
//   name: string;
//   quantity?: number;
//   measurement?: number | undefined;
// }

// type Sections = Section[];
// interface Section {
//   title: string;
//   ingredients: Ingredient[];
// }

// interface Instruction {
//   description: string;
// }

// function IntroForm() {
//   // State for Intro
//   const [recipeTitle, setRecipeTitle] = useState<string>("");
//   const [description, setDescription] = useState<string>("");
//   const [serves, setServes] = useState<number>(0);
//   const [time, setTime] = useState<number>(0);
//   const [sectionTitle, setSectionTitle] = useState<string>("");

//   // State for Categories (union type, can hold either a number or undefined)
//   const [selectedCategory, setSelectedCategory] = useState<number | undefined>(
//     undefined
//   );

//   //State for Sub Categories
//   const [selectedSubCategories, setSelectedSubCategories] = useState<number[]>(
//     []
//   );

//   // Function to handle category selection
//   const handleCategorySelect = (categoryId: number) => {
//     setSelectedCategory(categoryId);
//   };

//   // Function to handle Sub category selection
//   // handleCategorySelect is a function that takes a categoryId (a number) as an argument.
//   // When invoked, it updates the selectedCategory state with the categoryId value passed to it,
//   // effectively changing the currently selected category to the one specified by the categoryId.
//   const handleSubCategoriesSelect = (selectedOptions: number[]) => {
//     setSelectedSubCategories(selectedOptions);
//   };
//   //State for selected Rating
//   const [selectedRating, setSelectedRating] = useState<number | undefined>(
//     undefined
//   );

//   //Function for Selected Rating
//   const handleSelectedRating = (rating: number) => {
//     setSelectedRating(rating);
//   };
//   // State for selected image
//   const [selectedImage, setSelectedImage] = useState<File | null>(null);

//   // Function to handle image upload
//   const handleSelectImage = (e: ChangeEvent<HTMLInputElement>) => {
//     const fichier = e.target.files?.[0];

//     if (fichier) {
//       setSelectedImage(fichier);
//     }
//   };
//   //////////////////////////////////////////////////////INGREDIENTS /////////////////////////////////////////////////////////////////////////

//   //State for Ingredients

//   const [ingredientsList, setIngredientsList] = useState<Ingredient[]>([]);
//   const [selectedQuantity, setSelectedQuantity] = useState<number>(0);
//   const [sections, setSections] = useState<Sections>([]);

//   // State variable to store selected Measurements.
//   //State is added to functional component with useState hook wich can hold undefined  or number values (union state)
//   // selectedMeasurement is a state variable that can contain either a number or undefined and whos initiale state is undefined
//   const [selectedMeasurement, setSelectedMeasurement] = useState<
//     number | undefined
//   >(undefined);

//   // Function to handle measurement selection
//   const handleMeasurementSelect = (measurementId: number) => {
//     setSelectedMeasurement(measurementId);
//   };

//   // state for search bar
//   const [searchIngredients, setSearchIngredients] = useState<string>("");

//   // Function to handle ingredient search
//   // state variable (searchIngredients) is udpated with the provided value
//   // axios maques the request to API endpoint and passes the value as a
//   // query parameter performing a search of matching ingredients
//   // if request is successful ingredientList is updated with the response received from the database (API endpoint)
//   //This function is triggered when performing a search action. It sets the search query state, logs the query value,
//   // sends a request to fetch ingredients based on the query, and updates the ingredient list state
//   // with the fetched data while handling any potential errors that might occur during the fetch operation.
//   const handleSearch = async (value: string) => {
//     setSearchIngredients(value);
//     console.log("Search Ingredients:", value);
//     try {
//       const response = await axios.get<Ingredient[]>(
//         `http://localhost:8000/api/ingredients?query=${value}`
//       );
//       setIngredientsList(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   // Function to reset search ingredient, quantity, and measurement fields
//   // (reset form after section is "saved" by the user (displayed))
//   const resetFields = () => {
//     setSearchIngredients("");
//     setSelectedIngredient(null);
//     setSelectedQuantity(0);
//     setSelectedMeasurement(undefined);
//     console.log(
//       "Search ingredients, selected ingredient, selected quantity, selected measurement and selected ingredients list were reset"
//     );
//   };

//   const resetSection = () => {
//     setSectionTitle("");
//     setSelectedIngredientsList([]);
//   };

//   //state for selected ingredient
//   const [selectedIngredient, setSelectedIngredient] =
//     useState<Ingredient | null>(null);

//   // Function to handle ingredient selection
//   const handleSelect = (item: Ingredient) => {
//     console.log(item.id, item.name);
//     setSelectedIngredient(item);
//   };

//   //State to make a list of ingredients
//   const [selectedIngredientsList, setSelectedIngredientsList] = useState<
//     Ingredient[]
//   >([]);

//   //function to handle adding a list of ingredients (Add Ingredients Button)
//   const handleAddIngredientToList = () => {
//     //validation check if false Or if zero Or if false display alert message to the user
//     if (!selectedIngredient || selectedQuantity === 0 || !selectedMeasurement) {
//       alert("Please select an ingredient, a quantity and a measurement");
//       return;
//     }

//     //if all fields are present and valid; modify selectedIngredient with new values for quantity and measurement properties
//     selectedIngredient.quantity = selectedQuantity;
//     selectedIngredient.measurement = selectedMeasurement;

//     //Updates selectedIngredientsList state by creating a new array
//     // that includes the existing list and the modified selectedIngredient
//     setSelectedIngredientsList([
//       ...selectedIngredientsList,
//       selectedIngredient,
//     ]);

//     // Clear fields for new entries
//     resetFields();
//     //hide section title input
//     setToggleSectionInput(false);
//     setToggleSaveSectionBtn(true);
//   };

//   //Function to toggle new section visibility (Create new section Button)
//   const handleSectionToggle = () => {
//     setToggleSection(true);
//     setToggleAddIngredientBtn(true);
//     setToggleCreateSectionBtn(false);
//   };
//   ////////////////////////////////////////////////////////////////////////SECTIONS/////////////////////////////////////////////////////////////////

//   //state for section title increment
//   const [sectionCount, setSectionCount] = useState(1); // Initial count of 1

//   // function to handle the creation of a section (Save section Button)
//   const handleCreateSections = () => {
//     // Check if section title exists
//     // .trim() removes whitespace (spaces, tabs etc)
//     // comparison operator that checks if the trimmed string is equal to an empty string ("").
//     // If the string is empty after removing whitespace, the condition evaluates to true;
//     // otherwise, it evaluates to false.
//     if (sectionTitle.trim() === "") {
//       // Temporary alert
//       alert("Please write a title before saving the section");
//       return;
//     }

//     // Validation before creating a section (title, ingredients)
//     // Check if at least one ingredient was added
//     // .length returns the number of properties of the array(if array is empty (equal to 0)
//     // condition is true (no selected items in the list).
//     if (selectedIngredientsList.length === 0) {
//       // Temporary alert
//       alert("Please choose an ingredient before saving the section");
//       return;
//     }

//     // new section object created
//     //.map Iterates over each element (ingredient) in the selectedIngredientsList array and transforms it into a new object.
//     // Creates a new object for each ingredient with specific properties (id, name, quantity, measurement) extracted from
//     // the ingredient object in selectedIngredientsList.
//     const newSection: Section = {
//       title: sectionTitle,
//       ingredients: selectedIngredientsList.map((ingredient) => ({
//         id: ingredient.id,
//         name: ingredient.name,
//         quantity: ingredient.quantity,
//         measurement: ingredient.measurement,
//       })),
//     };

//     //creates a new array updatedSections that includes all the elements from the existing sections array and appends
//     // the newSection object to the end of this array.
//     // This  doesn't mutate the original sections array but instead creates a new array with the updated content.
//     // (creates new array by combining the existing section array with the new section object)
//     //spread ... creates a copy of the original array (rather than modifying it) and spreads the elements of the sections array
//     // into the new array
//     const updatedSections = [...sections, newSection];
//     setSections(updatedSections); // Update the sections state
//     console.log("Updated Sections:", sections);

//     // Clear fields for new entries
//     resetFields();
//     // Clear the previous ingredients list and section title
//     resetSection();

//     //show section title input (toggles section visibility and display)
//     setToggleSectionInput(true);
//     setSectionCount(sectionCount + 1);
//     setToggleSection(false);
//     setToggleCreateSectionBtn(true);
//     setToggleSaveSectionBtn(false);
//     setToggleAddIngredientBtn(false);
//   };

//   //state to toggle visibility of form elements
//   const [toggleSectionInput, setToggleSectionInput] = useState(true);
//   const [toggleSection, setToggleSection] = useState(true);
//   const [toggleSaveSectionBtn, setToggleSaveSectionBtn] = useState(false);
//   const [toggleCreateSectionBtn, setToggleCreateSectionBtn] = useState(false);
//   const [toggleaddIngredientBtn, setToggleAddIngredientBtn] = useState(true);

//   ////INSTRUCTIONS

//   // State for instructions
//   const [instructions, setInstructions] = useState<Instruction[]>([]);
//   const [newInstruction, setNewInstruction] = useState<string>("");

//   // Function to add a new instruction
//   const handleAddInstruction = () => {
//     // validation: checks if new instruction exists (.trim removes whitespace (spaces etc))
//     if (newInstruction.trim() !== "") {
//       // if newInstruction is not empty a new array is created (updatedInstructions)by spreading (...) the existing instructions
//       // array and appending a new object representing the new instruction.
//       // creates new array by combining the existing instruction array with the new instruction object)
//       // The new object contains a description field with the value of newInstruction.
//       const updatedInstructions: Instruction[] = [
//         ...instructions,
//         { description: newInstruction },
//       ];
//       // Updates the state variable instructions with the newly created updatedInstructions array
//       setInstructions(updatedInstructions);

//       // Reset text area (to an empty string) preparing it for a new instruction
//       setNewInstruction("");
//       console.log("Updated Instructions:", updatedInstructions);
//     }
//   };

//   /////////////////////////////////////////////////SUBMIT///////////////////////////////////////////////

//   // Function to handle form submission
//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     const userId = localStorage.getItem("userId");
//     try {
//       // Submit Intro Section

//       const formData = new FormData();
//       formData.append("name", recipeTitle);
//       formData.append("description", description);
//       formData.append("category_id", String(selectedCategory));
//       formData.append("setting_id", "1");
//       formData.append("serves", String(serves));
//       formData.append("time", String(time));
//       formData.append("user_id", String(userId));
//       formData.append("rating", String(selectedRating));

//       // Check if an image has been selected
//       // if (selectedImage) {
//       formData.append("selectedImage", selectedImage!);
//       // }

//       let introResponse = await axios.post(
//         "http://localhost:8000/api/recipes",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       // Get the recipe ID from the response
//       const createdRecipeId = introResponse.data.success.insert_id[0][0].name;
//       console.log("Recipe ID:", createdRecipeId);

//       //store recipe id created and display one recipe with that id
//       localStorage.setItem("createdRecipeId", createdRecipeId);

//       console.log("image:", selectedImage);
//       //Get inserted id
//       console.log("introResponse Data:", introResponse.data);
//       // const lastId = introResponse.data.success.insert_id;

//       // Construct static file name and update image name for recipe

//       introResponse = await axios.post(
//         `http://localhost:8000/api/recipes${createdRecipeId}`,
//         {
//           image: `/img/recipes/${createdRecipeId}/512x512.jpg`,
//         }
//       );

//       // Submit Sub Categories

//       for (let subcategory of selectedSubCategories) {
//         await axios.post(`http://localhost:8000/api/recipe_subcategory`, {
//           subcategory_id: subcategory,
//           recipe_id: createdRecipeId,
//         });
//       }
//       console.log("Sections:", sections);

//       // Submit one section
//       for (let section of sections) {
//         // Section
//         const sectionResponse = await axios.post(
//           "http://localhost:8000/api/sections",
//           {
//             title: section.title,
//             recipe_id: createdRecipeId,
//           }
//         );

//         // Get the last inserted section id from the response
//         const createdSectionId = sectionResponse.data.success.insert_id;

//         console.log("Section ID:", createdSectionId);

//         // submit Section's ingredients
//         for (let ingredient of section.ingredients) {
//           console.log("Ingredient:", ingredient.name);
//           await axios.post(`http://localhost:8000/api/ingredient_section`, {
//             ingredient_id: ingredient.id,
//             section_id: createdSectionId,
//             recipe_id: createdRecipeId,
//             measurement_id: ingredient.measurement,
//             quantity: ingredient.quantity,
//           });
//         }

//         //Submit Instructions

//         for (let instruction of instructions) {
//           console.log("Sending instruction:", instruction);
//           await axios.post("http://localhost:8000/api/instructions", {
//             description: instruction.description,
//             recipe_id: createdRecipeId,
//           });
//         }
//       }

//       //redirection with id of the recipe created (to be used with OneRecipe(show))
//       window.location.href = `/recipe/${createdRecipeId}`;

//       alert("The recipe was created!");
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
//         className={`row g-3 .container-sm max-width-200 `}
//       >
//         <section className="intro px-5 py-5 mb-3">
//           <div className="py-3">
//             <InputText
//               name="Recipe Title"
//               placeholder=" ex: Annie's Apple Pie"
//               value={recipeTitle} //binds value to variable
//               //onChnage attribute defines what happens when input value changes(updates recipeTitle with new value entered in input field)
//               onChange={(e) => setRecipeTitle(e.target.value)}
//             />
//           </div>
//           <div className="py-3">
//             <InputTextarea
//               heading="Description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder="Describe your dish!"
//             />
//           </div>
//           <div className="row justify-content-between">
//             <div className="col-md-5 py-3">
//               <Counter
//                 heading="Serves"
//                 value={serves}
//                 onChange={(value) => setServes(value)}
//                 icon="person"
//               />
//             </div>
//             <div className="col-md-5 py-3">
//               <Counter
//                 heading="Time"
//                 value={time}
//                 onChange={(value) => setTime(value)}
//                 icon="timer"
//               />
//             </div>
//           </div>

//           <h3>Rating</h3>
//           <div className="row">
//             <div className="col py-3">
//               <RatingButton numberOfStars={1} onChange={handleSelectedRating} />
//             </div>
//             <div className="col py-3">
//               <RatingButton numberOfStars={2} onChange={handleSelectedRating} />
//             </div>
//             <div className="col py-3">
//               <RatingButton numberOfStars={3} onChange={handleSelectedRating} />
//             </div>
//             <div className="col py-3">
//               <RatingButton numberOfStars={4} onChange={handleSelectedRating} />
//             </div>
//             <div className="col py-3">
//               <RatingButton numberOfStars={5} onChange={handleSelectedRating} />
//             </div>
//           </div>

//           <div className="row py-3">
//             <div className="col-md-9 pe-5">
//               <input
//                 className="form-control form-control-md rounded-5"
//                 type="file"
//                 placeholder="Choose File"
//                 onChange={(e) => handleSelectImage(e)}
//               />
//               <div className="small text-muted mt-2">
//                 Upload your picture. Max file size 50 MB
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="categories px-5 py-3 mb-3">
//           <div className="py-3">
//             <Select
//               heading="Categories"
//               onSelectOption={handleCategorySelect}
//               selectedOption={selectedCategory}
//               endpoint="http://localhost:8000/api/categories"
//             />
//           </div>
//           <div className="py-3">
//             <CheckBox
//               title="filters"
//               endpoint="http://localhost:8000/api/sub_categories"
//               onCheckBoxChange={handleSubCategoriesSelect}
//             />
//           </div>
//         </section>

//         <div>
//           {sections.map((section, index) => (
//             <section
//               key={index}
//               className="ingredientSection first px-5 py-5 mb-3"
//             >
//               <h2>{`Section ${index + 1}: ${section.title}`}</h2>
//               <div className="selectedIngredients">
//                 {/* Check if there is ingredients and then display them */}
//                 {section.ingredients &&
//                   section.ingredients.map((ingredient, index) => (
//                     <div key={index}>
//                       <p>Ingredient: {ingredient.name}</p>
//                       <p>Quantity: {ingredient.quantity}</p>
//                       <p>Measurement: {ingredient.measurement}</p>
//                     </div>
//                   ))}
//               </div>
//             </section>
//           ))}
//         </div>

//         {toggleSection && (
//           <section className="ingredientSection next px-5 py-5 mb-3">
//             <h2>
//               {`Section ${sectionCount}`} : {sectionTitle}
//             </h2>

//             <div className="selectedIngredients">
//               {selectedIngredientsList.map((item, index) => (
//                 <div key={index}>
//                   <p>Ingredient: {item.name ? item.name : "None"}</p>
//                   <p>Quantity: {item.quantity}</p>
//                   <p>
//                     Measurement: {item.measurement ? item.measurement : "None"}
//                   </p>
//                 </div>
//               ))}
//             </div>
//             {/* </div> */}

//             {toggleSectionInput && (
//               <div className="py-3">
//                 <InputText
//                   name=""
//                   placeholder=" ex: Pie Crust"
//                   onChange={(e) => setSectionTitle(e.target.value)}
//                   value={sectionTitle}
//                 />
//               </div>
//             )}

//             <div className="ingredientObject">
//               <h3>Ingredients</h3>
//               <div className="py-3">
//                 <ReactSearchAutocomplete
//                   items={ingredientsList}
//                   onSearch={handleSearch}
//                   onSelect={handleSelect}
//                   placeholder="Search Ingredients"
//                   autoFocus
//                   inputSearchString={searchIngredients}
//                   styling={{ zIndex: 100 }}
//                 />
//               </div>
//               <div className="py-3">
//                 <Counter
//                   heading="Qty"
//                   value={selectedQuantity}
//                   onChange={(value) => setSelectedQuantity(value)}
//                   icon=""
//                 />
//               </div>
//               <div className="py-3">
//                 <Select
//                   heading="Measurement"
//                   onSelectOption={handleMeasurementSelect}
//                   selectedOption={selectedMeasurement}
//                   endpoint="http://localhost:8000/api/measurements"
//                 />
//               </div>
//             </div>
//             {toggleaddIngredientBtn && (
//               <div className="d-flex justify-content-center">
//                 <div className="py-3">
//                   <ButtonMore
//                     name="Add ingredient"
//                     onClick={handleAddIngredientToList}
//                   />
//                 </div>
//               </div>
//             )}
//             {toggleSaveSectionBtn && (
//               <div className="d-flex justify-content-center">
//                 <div className="py-3">
//                   <ButtonMore
//                     name="Save Section"
//                     onClick={handleCreateSections}
//                   />
//                 </div>
//               </div>
//             )}
//           </section>
//         )}

//         {/* For Create new section Button */}
//         {toggleCreateSectionBtn && (
//           <div className="d-flex justify-content-center">
//             <div className="py-3">
//               <ButtonMore
//                 name="Create new section"
//                 onClick={handleSectionToggle}
//               />
//             </div>
//           </div>
//         )}
//         <section className="instructions px-5 py-5 mb-3">
//           <div className="description">
//             <h2>Instructions</h2>
//             <ul>
//               {instructions.map((instruction, index) => (
//                 <li key={index}>
//                   <p>{instruction.description}</p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="py-3">
//             <InputTextarea
//               heading=""
//               value={newInstruction}
//               onChange={(e) => setNewInstruction(e.target.value)}
//               placeholder=" ex: Pour the prepared filling into the pie crust."
//             />
//           </div>

//           <div className="d-flex justify-content-center">
//             <div className="py-3">
//               <ButtonMore
//                 name="Add Instruction"
//                 onClick={handleAddInstruction}
//               />
//             </div>
//           </div>
//         </section>
//         {/* <section className="notes">
//           <Notes />
//         </section> */}
//         <div className="mb-5">
//           <ButtonSubmit name="All Done? Save your Recipe!" type="submit" />
//         </div>
//       </form>
//     </>
//   );
// }

// export default IntroForm;
