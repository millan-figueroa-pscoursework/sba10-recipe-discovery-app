import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { favorites } = useContext(FavoritesContext);

  function handleSearch(e: any) {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
      setSearchTerm("");
    }
  }

  return (
    <header className="bg-[#F0F5F8] border-b border-gray-200">
      <nav className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        {/* brand / left */}
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            alt="App Logo"
            className="hover:bg-gray-900 transition h-16 w-auto"
          />
        </Link>

        {/* center */}
        <div className="flex gap-6 text-xs text-gray-600">
          <Link to="/favorites" className="hover:text-black">
            Favorites({favorites.length})
          </Link>
        </div>

        {/* right — search */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={searchTerm}
            placeholder="Search recipes..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-slate-50 rounded-md px-3 py-1 text-xs focus:outline-none focus:border-gray-400"
          />

          <button
            className="px-2 py-1 text-xs bg-gray-600 text-white rounded-md hover:bg-gray-700 transition"
            onClick={handleSearch}
          >
            Submit
          </button>
        </div>
      </nav>
    </header>
  );
}
