import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { categoryName } = useParams();
  // use categoryName to ftch recipes?
  return (
    <div>
      <h1 className="text-xl font-semibold">Category: {categoryName}</h1>
      {/* recipe list goes here */}
    </div>
  );
}
