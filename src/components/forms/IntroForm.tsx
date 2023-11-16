import { useState, FormEvent } from "react";
import axios from "axios";
import InputText from "./InputText";
import InputTextarea from "./InputTextarea";
import Counter from "./Counter";
import ImageUpload from "./ImageUpload";
import ButtonSubmit from "../buttons/ButtonSubmit";
import Select from "./Select";
import IngredientSection from "./IngredientSection";

// import CheckBox from "./CheckBox";

interface IntroFormProps {
  recipeId: number | undefined;
}

function IntroForm({ recipeId }: IntroFormProps) {
  // State for Intro Section
  const [recipeTitle, setRecipeTitle] = useState("");
  const [description, setDescription] = useState("");
  const [serves, setServes] = useState<number>(0);
  const [time, setTime] = useState<number>(0);

  // State for Image Section

  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  // State for Categories Section
  const [selectedCategory, setSelectedCategory] = useState<number | undefined>(
    undefined
  );
  const [selectedSubCategories, setSelectedSubCategories] = useState<number[]>(
    []
  );

  // State for Submission Status
  const [isHidden, setIsHidden] = useState(false);

  const handleImageUpload = (image: File | null) => {
    setSelectedImage(image);
  };

  const handleCategorySelect = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  const handleSubCategoriesChange = (selectedOptions: number[]) => {
    console.log("Selected Subcategories:", selectedOptions);
    setSelectedSubCategories(selectedOptions);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Submit Intro Section
      const introResponse = await axios.post(
        "http://localhost:8000/api/recipes",
        {
          name: recipeTitle,
          description: description,
          serves: serves,
          time: time,
          recipe_id: recipeId,
          category_id: selectedCategory,
        }
      );

      // Get the recipe ID from the response
      const createdRecipeId = introResponse.data.recipeId;

      // Submit Image Upload
      if (selectedImage) {
        const formData = new FormData();
        formData.append("image", selectedImage, selectedImage.name);

        await axios.post(
          `http://localhost:8000/api/recipes/${createdRecipeId}`,
          formData
        );
      }

      // Submit Sub Categories
      await axios.post(
        `http://localhost:8000/api/recipe_subcategory/${createdRecipeId}`,
        {
          subcategory_id: selectedSubCategories,
          recipe_id: createdRecipeId,
        }
      );

      setIsHidden(true);
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

          <ImageUpload onImageUpload={(image) => handleImageUpload(image)} />
        </section>
        <section className="categories">
          <Select
            heading="Categories"
            onSelectOption={handleCategorySelect}
            selectedOption={selectedCategory}
            endpoint="http://localhost:8000/api/categories"
          />

          {/* <CheckBox
            title="filters"
            endpoint="http://localhost:8000/api/sub_categories"
            onCheckBoxChange={handleSubCategoriesChange}
          /> */}
        </section>
        <section className="ingredients">
          <IngredientSection />
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
