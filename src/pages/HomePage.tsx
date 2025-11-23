import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FavoritesList from "../components/FavoritesList";
// import SearchPage from "./SearchResultsPage";

type Category = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

export default function HomePage() {
  const [categories, setCategories] = useState<Category[]>([]);
  console.log(categories);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await response.json();
        console.log(data.categories);

        setCategories(data.categories);
      } catch (error: any) {
        console.error(error.message);
      }
    };
    fetchCategories();
  }, []);

  // fetch categories and show them
  return (
    <main className="p-10">
      {categories &&
        categories.map((category) => (
          <Link
            to={`/category/${category.strCategory}`}
            key={category.idCategory}
          >
            <img
              className="ml-45"
              src={category.strCategoryThumb}
              alt={`Image of ${category.strCategory} category`}
            />

            <h3>{category.strCategory}</h3>
          </Link>
        ))}
      <FavoritesList />
    </main>
  );
}
