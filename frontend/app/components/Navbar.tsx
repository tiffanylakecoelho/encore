import Link from "next/link";
import { Search } from "lucide-react";

// ----- Navbar Component -----
function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-black border-b border-gray-800">
      <div className="text-2xl font-bold">Encore</div>
      <nav className="space-x-6">
        <a href="#features" className="hover:text-gray-300">
          Concerts
        </a>
        <a href="#about" className="hover:text-gray-300">
          About
        </a>
        <a href="#contact" className="hover:text-gray-300">
          Contact
        </a>
        <a href="#log-in" className="hover:text-gray-300">
          Log In
        </a>
        <Link href="/sign-up" className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition">
          Sign Up
        </Link>
        {/* Search Icon */}
        <button
          aria-label="Search"
          className="p-2 rounded-full hover:bg-white/10 transition"
        >
          <Search size={20} className="text-white" />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;