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

interface Section {
  title: string;
  ingredients: Ingredient[];
}

type Sections = Section[];

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
  const [isHidden, setIsHidden] = useState(false);

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

  const handleCreateSections = async () => {
    // Récupération de l'ingrédient sélectionné, s'il existe, pour créer la section
    // TODO: plusieurs ingrédients sélectionnés nécessiteraient une boucle sur chacun
      if (selectedIngredient) {
        // Création de la section contenant l'ingrédient sélectionné
        const nouvelleSection: Section = {
          title: sectionTitle,
          ingredients: [selectedIngredient],
        };

        // Création des sections (une seule présentement)
        const les_sections: Sections = [nouvelleSection];

        // Assignation
        setSections(les_sections);

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

      // Submit Sub Categories

      for (let subcategory of selectedSubCategories) {
        await axios.post(`http://localhost:8000/api/recipe_subcategory`, {
          subcategory_id: subcategory,
          recipe_id: createdRecipeId,
        });
      }

      // Submit sections and ingredients
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

        // Section's ingredients
        for (let ingredient of section.ingredients) {
          await axios.post(`http://localhost:8000/api/ingredient_section`, {
            ingredient_id: ingredient.id,
            section_id: createdSectionId,
            recipe_id: createdRecipeId,
            measurement_id: selectedMeasurement,
            quantity: quantity,
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
        <section className="ingredients">
          {/* <IngredientSection /> */}
          <InputText
            name="section"
            placeholder=" ex: Pie Crust"
            onChange={(e) => setSectionTitle(e.target.value)}
          />
          <div>
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
            <p>
              Selected ingredient:{" "}
              {selectedIngredient ? selectedIngredient.name : "None"}
            </p>
            {/* <ul>
              {selectedIngredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient}
                  <button onClick={() => handleRemoveIngredient(ingredient)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul> */}
          </div>
          {/* Buttons for adding sections and individual ingredients */}
          {/* <ButtonMore name="Section" onClick={handleAddSection} /> */}
          {/* // <ButtonMore name="Ingredient" onClick={handleAddIngredient} /> */}
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
        </section>
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
