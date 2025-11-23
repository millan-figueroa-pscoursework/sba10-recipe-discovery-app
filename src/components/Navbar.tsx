import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="max-w-3xl mx-auto">
      <nav className="flex my-10">
        <div className=" mx-20">
          <Link to="/">Home</Link>
        </div>

        <div className="text-[#777C6D] border rounded-md pl-2 pt-2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search recipes..."
          />
        </div>
        <div>
          <button className="px-3">Submit</button>
        </div>

        <div className="mx-10">
          <Link to="/favorites">Favorites List</Link>
        </div>
      </nav>
    </div>
  );
}
