import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import FavoritesPage from "./pages/FavoritesPage";
import SearchResultsPage from "./pages/SearchResultsPage";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* navbar */}
      <main className="max-w-5xl mx-auto px-4 py-6">
        <Routes>
          {/* home */}
          <Route path="/" element={<HomePage />} />

          {/* /category/:categoryName */}
          <Route path="/category/:categoryName" element={<CategoryPage />} />

          {/* /recipe/:recipeId */}
          <Route path="/recipe/:idMeal" element={<RecipeDetailPage />} />

          {/* /favorites */}
          <Route path="/favorites" element={<FavoritesPage />} />

          {/* /search?query=... */}
          <Route path="/search" element={<SearchResultsPage />} />

          {/* 404 */}
          <Route path="*" element={<div>page not found!</div>} />
        </Routes>
      </main>
    </div>
  );
}
