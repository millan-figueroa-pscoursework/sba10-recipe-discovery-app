import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

type Recipe = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export default function CategoryPage() {
  const { categoryName } = useParams();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  // use categoryName to ftch recipes?
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
        );
        const data = await response.json();
        console.log(data);
        setRecipes(data.meals);
      } catch (error: any) {
        console.error(error.message);
      }
    };
    //runs function above
    fetchRecipes();
  }, [categoryName]);

  return (
    <main>
      <h1 className="text-xl font-semibold">Category: {categoryName}</h1>
      {/* recipe list goes here */}
      {recipes &&
        recipes.map((recipe) => (
          <Link key={recipe.idMeal} to={`/recipe/${recipe.idMeal}`}>
            <h3>{recipe.strMeal}</h3>
            <img
              className="ml-45"
              src={recipe.strMealThumb}
              alt={`Recipe image for ${recipe.strMeal}`}
            />
          </Link>
        ))}
    </main>
  );
}
