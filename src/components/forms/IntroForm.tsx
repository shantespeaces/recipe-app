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

import CheckBox from "./CheckBox";

// Define the structure of an Ingredient
interface Ingredient {
  id?: number;
  name: string;
  quantity?: number;
  measurement?: number | undefined;
}

type Sections = Section[];
interface Section {
  title: string;
  ingredients: Ingredient[];
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

  //////////////////////////////////////////////////////INGREDIENTS ET SECTIONS/////////////////////////////////////////////////////////////////////////
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
    console.log("Search ingredients, selected ingredient, selected quantity, selected measurement and selected ingredients list were reset")
  };

  const resetSection = () => {
    setSectionTitle("")
    setSelectedIngredientsList([])
  }
  
  //state for selected ingredient
  const [selectedIngredient, setSelectedIngredient] =
    useState<Ingredient | null>(null);

  // Function to handle ingredient selection
  const handleSelect = (item: Ingredient) => {
    setSelectedIngredient(item);
  };

  //State to make a list of ingredients
  const [selectedIngredientsList, setSelectedIngredientsList] = useState<Ingredient[]>([]);

  //state to show next section
  const [showNextSection, setShowNextSection] = useState(false);

  //state for section title increment
  const [sectionCount, setSectionCount] = useState(1); // Initialize the count to 1

  // function to handle the creation of a section
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

    setSectionCount(sectionCount + 1);
  };

  // function to handle adding ingredients to a ingredientsList
  const [showSectionInput, setShowSectionInput] = useState(true);

  //stae to show ingredients
  const [showContent, setShowContent] = useState(false);

  //function to handle adding a list of ingredients

  const handleAddIngredientToList = () => {
    // setShowContent(!showContent);
    if (!selectedIngredient || selectedQuantity === 0 || !selectedMeasurement) {
      alert("Please select an ingredient, a quantity and a measurement");
      return;
    }

    selectedIngredient.quantity = selectedQuantity;
    selectedIngredient.measurement = selectedMeasurement;  

    setSelectedIngredientsList([...selectedIngredientsList, selectedIngredient]);

    // Clear fields for new entries
    resetFields();

    
  };

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

      // Construct updatedSections based on selectedIngredientsList and sectionTitle
      // const newSection: Section = {
      //   title: sectionTitle,
      //   ingredients: selectedIngredientsList.map((ingredient) => ({
      //     name: ingredient.name,
      //     quantity: ingredient.quantity,
      //     measurement: ingredient.measurement,
      //   })),
      // };
      // stae to update a new section
      // const updatedSections = [...sections, newSection];

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
      }

      alert("The recipe was created!")
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
        <div>
          {sections.map((section, index) => (
            <section key={index} className="ingredientSection">
              <h2>{`Section ${index + 1}: ${section.title}`}</h2>                            
              <div className="selectedIngredients">
                {/* Check if there is ingredients and then show them */}
                {section.ingredients && section.ingredients.map((ingredient, index) => (
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
        {/* <IngredientSection /> */}
        <section className="ingredientSection first">
          <div className="first-section">
            <h2>
              {`Section ${sectionCount}`} : {sectionTitle}
            </h2>
            {showContent && (
              <div className="content">
                <h3>Selected Ingredients</h3>
              </div>
            )}
            <div className="selectedIngredients">
              {selectedIngredientsList.map((item, index) => (
                <div key={index}>
                  <p>
                    Ingredient:{" "}
                    {item.name ? item.name : "None"}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                  <p>
                    Measurement: {item.measurement ? item.measurement : "None"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
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
            value={searchIngredients} // Pass the local value to the component
          />

          <Counter
            heading="Qty"
            value={selectedQuantity}
            onChange={(value) => setSelectedQuantity(value)}
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
        />
        <ButtonMore name="Add a Section" onClick={handleCreateSections} />
        {/* <section className="steps">
        <Instructions />
      </section>
      <section className="notes">
        <Notes />
      </section>  */}
        <ButtonSubmit name="Save Instructions" type="submit" />
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
