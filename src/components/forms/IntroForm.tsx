import { useState, FormEvent, useEffect } from "react";

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
  const [recipeTitle, setRecipeTitle] = useState("");
  const [description, setDescription] = useState("");
  const [serves, setServes] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [sectionTitle, setSectionTitle] = useState("");

  // State for Categories
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
  const handleSubCategoriesSelect = (selectedOptions: number[]) => {
    // console.log("Selected Subcategories:", selectedOptions);
    setSelectedSubCategories(selectedOptions);
  };

  //////////////////////////////////////////////////////INGREDIENTS /////////////////////////////////////////////////////////////////////////

  //State for Ingredients

  const [ingredientsList, setIngredientsList] = useState<Ingredient[]>([]);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(0);
  const [sections, setSections] = useState<Sections>([]);

  // State for Measurements
  const [selectedMeasurement, setSelectedMeasurement] = useState<
    number | undefined
  >(undefined);

  // Function to handle measurement selection
  const handleMeasurementSelect = (measurementId: number) => {
    setSelectedMeasurement(measurementId);
  };

  // state for search bar
  const [searchIngredients, setSearchIngredients] = useState<string>("");

  // Function to handle ingredient search

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
    if (!selectedIngredient || selectedQuantity === 0 || !selectedMeasurement) {
      alert("Please select an ingredient, a quantity and a measurement");
      return;
    }

    selectedIngredient.quantity = selectedQuantity;
    selectedIngredient.measurement = selectedMeasurement;

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
  const [sectionCount, setSectionCount] = useState(1); // Initialize the count to 1

  // function to handle the creation of a section (Save section Button)
  const handleCreateSections = () => {
    // Check if section title exists (TODO: show error message in page)
    if (sectionTitle.trim() === "") {
      // Temporary alert
      alert("Please write a title before saving the section");
      return;
    }

    // Validation before creating a section (title, ingredients)
    // Check if at least one ingredient was added (TODO: show error message in page)
    if (selectedIngredientsList.length === 0) {
      // Temporary alert
      alert("Please choose an ingredient before saving the section");
      return;
    }

    const newSection: Section = {
      title: sectionTitle,
      ingredients: selectedIngredientsList.map((ingredient) => ({
        id: ingredient.id,
        name: ingredient.name,
        quantity: ingredient.quantity,
        measurement: ingredient.measurement,
      })),
    };

    //update sections state (stores section array and object?)
    const updatedSections = [...sections, newSection];
    setSections(updatedSections); // Update the sections state
    console.log("Updated Sections:", sections);

    resetFields(); // Clear fields for new entries
    resetSection(); // Clear the previous ingredients list and section title

    //show section title input
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
    if (newInstruction.trim() !== "") {
      const updatedInstructions: Instruction[] = [
        ...instructions,
        { description: newInstruction },
      ];
      setInstructions(updatedInstructions);
      setNewInstruction(""); // Reset text area for a new instruction
      console.log("Updated Instructions:", updatedInstructions);
    }
  };

  /////////////////////////////////////////////////SUBMIT///////////////////////////////////////////////
  // Function to handle form submission

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Submit Intro Section
      const introResponse = await axios.post(
        "http://localhost:8000/api/recipes",
        {
          name: recipeTitle,
          description: description,
          image: "",
          category_id: selectedCategory,
          setting_id: "1",
          serves: serves,
          time: time,
          user_id: "5",
        }
      );

      // Get the recipe ID from the response
      const createdRecipeId = introResponse.data.success.insert_id;
      console.log("Recipe ID:", createdRecipeId);

      // Submit Sub Categories

      for (let subcategory of selectedSubCategories) {
        await axios.post(`http://localhost:8000/api/recipe_subcategory`, {
          subcategory_id: subcategory,
          recipe_id: createdRecipeId,
        });
      }
      console.log("Sections:", sections);

      // Submit one section and ingredients
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

        // Section's ingredients
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
              value={recipeTitle}
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
              <RatingButton numberOfStars={1} />
            </div>
            <div className="col py-3">
              <RatingButton numberOfStars={2} />
            </div>
            <div className="col py-3">
              <RatingButton numberOfStars={3} />
            </div>
            <div className="col py-3">
              <RatingButton numberOfStars={4} />
            </div>
            <div className="col py-3">
              <RatingButton numberOfStars={5} />
            </div>
          </div>

          {/* <ImageUpload onImageUpload={(image) => handleImageUpload(image)} /> */}
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
                {/* Check if there is ingredients and then show them */}
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
                    Measurement: {item.measurement ? item.measurement : "None"}
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

// // const [image, setImage] = useState("");

// // State for Image

// // const [selectedImage, setSelectedImage] = useState<File | null>(null);
// // const handleImageUpload = (image: File | null) => {
// //   setSelectedImage(image);
// // };

// // Submit Image Upload
// // if (selectedImage) {
// //   const formData = new FormData();
// //   formData.append("image", selectedImage, selectedImage.name);

// //   await axios.post(`http://localhost:8000/api/recipes`, {
// //     formData,
// //     recipe_id: createdRecipeId,
// //     image: image,
// //   });
// // }
