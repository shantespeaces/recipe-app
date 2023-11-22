import { useState, FormEvent } from "react";

import axios from "axios";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import InputText from "./InputText";
import InputTextarea from "./InputTextarea";
import Counter from "./Counter";
// import ImageUpload from "./ImageUpload";
import ButtonSubmit from "../buttons/ButtonSubmit";
import ButtonMore from "../buttons/ButtonMore";
import Select from "./Select";

import CheckBox from "./CheckBox";

// Define the structure of an Ingredient
interface Ingredient {
  id: number;
  name: string;
}

type Sections = Section[];
interface Section {
  title: string;
  selectedIngredientsList: {
    ingredient: Ingredient;
    quantity: number;
    measurement: number | undefined;
  }[];
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

  //State for Ingredients

  const [selectedIngredient, setSelectedIngredient] =
    useState<Ingredient | null>(null);
  const [searchIngredients, setSearchIngredients] = useState<string>("");
  const [ingredientsList, setIngredientsList] = useState<Ingredient[]>([]);
  const [quantity, setQuantity] = useState<number>(0);
  const [sections, setSections] = useState<Sections>([]);

  // State for Measurements
  const [selectedMeasurement, setSelectedMeasurement] = useState<
    number | undefined
  >(undefined);

  // State for Submission Status
  // const [isHidden, setIsHidden] = useState(false);
  //State to make a list of ingredients
  const [selectedIngredientsList, setSelectedIngredientsList] = useState<
    {
      ingredient: Ingredient;
      quantity: number;
      measurement: number | undefined;
    }[]
  >([]);

  // Function to handle category selection
  const handleCategorySelect = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  // Function to handle Sub category selection
  const handleSubCategoriesSelect = (selectedOptions: number[]) => {
    // console.log("Selected Subcategories:", selectedOptions);
    setSelectedSubCategories(selectedOptions);
  };

  // Function to handle ingredient search

  const handleSearch = async (value: string) => {
    setSearchIngredients(value);
    try {
      const response = await axios.get<Ingredient[]>(
        `http://localhost:8000/api/ingredients?query=${value}`
      );
      setIngredientsList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCreateSections = () => {
    console.log("Selected Ingredients List:", selectedIngredientsList);
    // Récupération de l'ingrédient sélectionné, s'il existe, pour créer la section
    // TODO: plusieurs ingrédients sélectionnés nécessiteraient une boucle sur chacun
    if (selectedIngredientsList.length > 0 && sectionTitle.trim() !== "") {
      const newSection: Section = {
        title: sectionTitle,
        selectedIngredientsList: selectedIngredientsList.map((ingredient) => ({
          ingredient: ingredient.ingredient,
          quantity: ingredient.quantity,
          measurement: ingredient.measurement,
        })),
      };

      const updatedSections = [...sections, newSection];
      setSections(updatedSections); // Update the sections state
      console.log("Updated Sections:", updatedSections);

      resetFields(); // Clear fields for new entries
    }
  };

  // Function to handle measurement selection
  const handleMeasurementSelect = (measurementId: number) => {
    setSelectedMeasurement(measurementId);
  };

  // Function to handle ingredient selection
  const handleSelect = (item: Ingredient) => {
    setSelectedIngredient(item);
    setSearchIngredients(item.name);
  };

  // Function to reset ingredient, quantity, and measurement fields
  const resetFields = () => {
    setSearchIngredients("");
    setSelectedIngredient(null);
    setSearchIngredients("");
    setQuantity(0);
    setSelectedMeasurement(undefined);
  };

  // function to handle adding ingredients to a ingredientsList
  const [showSectionInput, setShowSectionInput] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleAddIngredientToList = () => {
    setShowContent(!showContent);
    if (selectedIngredient) {
      const newIngredient = {
        ingredient: selectedIngredient,
        quantity: quantity,
        measurement: selectedMeasurement,
      };

      setSelectedIngredientsList([...selectedIngredientsList, newIngredient]);
      resetFields(); // Clear fields for new entries
    }

    // Hide the section title input after adding an ingredient
    setShowSectionInput(false);
  };

  // State of Next Section
  const [showNextSection, setShowNextSection] = useState(false);
  const handleAddSection = () => {
    //show next section
    setShowNextSection(!showNextSection);
    setShowSectionInput(true);
  };

  // Function to handle form submission

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Create sections
      await handleCreateSections();

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

      // Construct updatedSections based on selectedIngredientsList and sectionTitle
      const newSection: Section = {
        title: sectionTitle,
        selectedIngredientsList: selectedIngredientsList.map((ingredient) => ({
          ingredient: ingredient.ingredient,
          quantity: ingredient.quantity,
          measurement: ingredient.measurement,
        })),
      };

      const updatedSections = [...sections, newSection];
      // Submit one section and ingredients
      for (let section of updatedSections) {
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

        console.log("Recipe ID:", createdSectionId);

        // Section's ingredients
        for (let ingredient of section.selectedIngredientsList) {
          console.log("Ingredient:", ingredient.ingredient);
          await axios.post(`http://localhost:8000/api/ingredient_section`, {
            ingredient_id: ingredient.ingredient.id,
            section_id: createdSectionId,
            recipe_id: createdRecipeId,
            measurement_id: ingredient.measurement,
            quantity: ingredient.quantity,
          });
        }
      }

      // setIsHidden(true);
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
        // ${
        //   isHidden ? "hidden" : ""

        // }
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

          {/* <ImageUpload onImageUpload={(image) => handleImageUpload(image)} /> */}
        </section>
        <section className="categories">
          <Select
            heading="Categories"
            onSelectOption={handleCategorySelect}
            selectedOption={selectedCategory}
            endpoint="http://localhost:8000/api/categories"
          />

          <CheckBox
            title="filters"
            endpoint="http://localhost:8000/api/sub_categories"
            onCheckBoxChange={handleSubCategoriesSelect}
          />
        </section>

        {/* <IngredientSection /> */}
        <section className="ingredientSection first">
          <div className="first-section">
            {showContent && (
              <div className="content">
                <h2>Section: {sectionTitle}</h2>

                <h3>Selected Ingredients</h3>
              </div>
            )}
            <div className="selectedIngredients">
              {selectedIngredientsList.map((item, index) => (
                <div key={index}>
                  <p>
                    Ingredient:{" "}
                    {item.ingredient ? item.ingredient.name : "None"}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                  <p>
                    Measurement: {item.measurement ? item.measurement : "None"}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="next-section">
            {showNextSection && <h2>Section: {sectionTitle}</h2>}
            {/* <div className="selectedIngredients">
              <h3>Selected Ingredients</h3>
              {selectedIngredientsList.map((item, index) => (
                <div key={index}>
                  <p>
                    Ingredient:{" "}
                    {item.ingredient ? item.ingredient.name : "None"}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                  <p>
                    Measurement: {item.measurement ? item.measurement : "None"}
                  </p>
                </div>
              ))}
            </div> */}
          </div>
          {showSectionInput && (
            <InputText
              name="section"
              placeholder=" ex: Pie Crust"
              onChange={(e) => setSectionTitle(e.target.value)}
            />
          )}
          <div className="ingredientObject">
            <h2>Ingredients</h2>
            <ReactSearchAutocomplete
              items={ingredientsList}
              onSearch={handleSearch}
              onSelect={handleSelect}
              placeholder="Search Ingredients"
              autoFocus
              onSelectItem={(item: Ingredient) => handleSelect(item)}
              value={searchIngredients} // Pass the local value to the component
            />

            <Counter
              heading="Qty"
              value={quantity}
              onChange={(value) => setQuantity(value)}
            />
            <Select
              heading="Measurement"
              onSelectOption={handleMeasurementSelect}
              selectedOption={selectedMeasurement}
              endpoint="http://localhost:8000/api/measurements"
            />
          </div>
          <ButtonMore
            name="Add an ingredient"
            onClick={handleAddIngredientToList}
          />{" "}
        </section>
        <ButtonMore name="Add a Section" onClick={handleAddSection} />
        {/* {sectionComponents.map((sectionComponent) => sectionComponent)} */}

        {/* <section className="ingredientSection second"> */}
        {/* <IngredientSection /> */}
        {/* <InputText
            name="section"
            placeholder=" ex: Pie Crust"
            onChange={(e) => setSectionTitle(e.target.value)}
          />
          <div className="ingredientObject">
            <h2>Ingredients</h2>
            <ReactSearchAutocomplete
              items={ingredientsList}
              onSearch={handleSearch}
              onSelect={handleSelect}
              placeholder="Search Ingredients"
              autoFocus
              onSelectItem={(item: Ingredient) => handleSelect(item)}
              value={searchIngredients} // Pass the local value to the component
            />

            <Counter
              heading="Qty"
              value={quantity}
              onChange={(value) => setQuantity(value)}
            />
            <Select
              heading="Measurement"
              onSelectOption={handleMeasurementSelect}
              selectedOption={selectedMeasurement}
              endpoint="http://localhost:8000/api/measurements"
            />
          </div>
          <ButtonMore
            name="Add an ingredient"
            onClick={handleAddIngredientToList}
          />{" "}
          <h2>Section: {sectionTitle}</h2>
          <div className="selectedIngredients">
            <h3>Selected Ingredients</h3>
            {selectedIngredientsList.map((item, index) => (
              <div key={index}>
                <p>
                  Ingredient: {item.ingredient ? item.ingredient.name : "None"}
                </p>
                <p>Quantity: {item.quantity}</p>
                <p>
                  Measurement: {item.measurement ? item.measurement : "None"}
                </p>
              </div>
            ))}
          </div>
        </section> */}

        {/* <section className="steps">
        <Instructions />
      </section>
      <section className="notes">
        <Notes />
      </section>  */}
        <ButtonSubmit name=" Save Instructions" type="submit" />
      </form>
    </>
  );
}

export default IntroForm;
// const [image, setImage] = useState("");

// State for Image

// const [selectedImage, setSelectedImage] = useState<File | null>(null);
// const handleImageUpload = (image: File | null) => {
//   setSelectedImage(image);
// };

// Submit Image Upload
// if (selectedImage) {
//   const formData = new FormData();
//   formData.append("image", selectedImage, selectedImage.name);

//   await axios.post(`http://localhost:8000/api/recipes`, {
//     formData,
//     recipe_id: createdRecipeId,
//     image: image,
//   });
// }
