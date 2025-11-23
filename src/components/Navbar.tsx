import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header className="bg-[#F0F5F8] border-b border-gray-200">
      <nav className="max-w-4xl mx-auto px-4 flex items-center justify-between">
        {/* brand / left */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="App Logo" className="h-20 w-auto" />
        </Link>

        {/* center */}
        <div className="flex gap-6 text-sm text-gray-600">
          <Link to="/favorites" className="hover:text-black">
            Favorites
          </Link>
        </div>

        {/* right — search */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={searchTerm}
            placeholder="Search recipes..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border bg-slate-50 border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:border-gray-400"
          />

          <button className="px-2 py-1 text-sm bg-gray-600 text-white rounded-md hover:bg-gray-700 transition">
            Submit
          </button>
        </div>
      </nav>
    </header>
  );
}
