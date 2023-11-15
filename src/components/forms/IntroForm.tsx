import { useState, FormEvent } from "react";
import axios from "axios";
import InputText from "./InputText";
import InputTextarea from "./InputTextarea";
import Counter from "./Counter";
import ImageUpload from "./ImageUpload";
import ButtonSubmit from "../buttons/ButtonSubmit";
import Select from "./Select";

import CheckBox from "./CheckBox";

interface IntroFormProps {
  recipeId: number | undefined;
}

function IntroForm({ recipeId }: IntroFormProps) {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [description, setDescription] = useState("");
  const [serves, setServes] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [isHidden, setIsHidden] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number | undefined>(
    undefined
  );
  const [selectedSubCategories, setSelectedSubCategories] = useState<number[]>(
    []
  );
  const handleCategorySelect = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };
  const handleSubCategoriesChange = (selectedOptions: number[]) => {
    console.log("Selected Subcategories:", selectedOptions);
    setSelectedSubCategories(selectedOptions);
  };
  const handleSubmit = async (e: FormEvent) => {
    console.log("Current values:", {
      selectedSubCategories,
    });
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/api/recipes", {
        name: recipeTitle,
        description: description,
        serves: serves,
        time: time,
        recipe_id: recipeId,
        category_id: selectedCategory,
      });
      await axios.post("http://localhost:8000/api/recipe_subcategory", {
        subcategory_id: selectedSubCategories,
        recipe_id: recipeId,
      });

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

          <ImageUpload />
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
            onCheckBoxChange={handleSubCategoriesChange}
          />
        </section>
        <ButtonSubmit name=" Save Instructions" type="submit" />
      </form>
    </>
  );
}

export default IntroForm;
