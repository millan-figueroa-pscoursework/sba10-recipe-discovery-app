import { useParams } from "react-router-dom";

export default function RecipeDetailPage() {
  const { recipeId } = useParams();
  // use reciapeId to fetch recipe details
  // faves context for add/remove favorite
  return (
    <div>
      <h1 className="text-xl font-semibold">Recipe Detail: {recipeId}</h1>
      {/* recipe deets */}
    </div>
  );
}
