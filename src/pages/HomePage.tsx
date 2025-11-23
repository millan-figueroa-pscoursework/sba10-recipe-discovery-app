import { useState, useEffect } from "react";

export default function HomePage() {
  const [categories, setCategories] = useState([]);
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
  return <h1 className="text-xl font-semibold">Home Page (Categories)</h1>;
}
