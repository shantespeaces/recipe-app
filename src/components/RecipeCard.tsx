import Rating from "../components/forms/Rating";
interface Recipe {
  name: string;
  description: string;
  rating: string;
  time: string;
  serves: string;
  image: string;
  id: number;
}

interface RecipeCardProps {
  recipe: Recipe;
}
const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={recipe.id}>
      <section className="card" style={{ border: "1px solid #f36912" }}>
        <img
          className="card-img-top"
          src={recipe.image}
          alt={`image of ${recipe.name}`}
          style={{ height: "15rem", objectFit: "cover" }}
        />

        <ul className="list-group list-group-flush">
          <li
            className="list-group-item"
            style={{
              height: "170px",
              backgroundColor: " rgba(243, 105, 18, 0.1)",
            }}
          >
            <h4
              className="card-title pb-3"
              style={{ height: "5rem", objectFit: "cover" }}
            >
              {recipe.name}
            </h4>

            <div className="d-flex justify-content-between align-items-center flex-grow-1 pb-3">
              <div className="d-flex align-items-center">
                <span className="material-symbols-outlined me-2">timer</span>
                <p className="mb-0">{recipe.time}</p>
              </div>
              <div className="d-flex align-items-center px-3">
                <span className="material-symbols-outlined me-2 ">person</span>
                <p className="mb-0">{recipe.serves}</p>
              </div>
            </div>

            <Rating rating={recipe.rating} />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default RecipeCard;
