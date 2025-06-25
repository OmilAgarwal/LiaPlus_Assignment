import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-indigo-700">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="w-50 h-10 object-contain" />
      </div>

      <div className="space-x-6">
        <Link to="/" className="text-white hover:text-yellow-500 transition">
          Home
        </Link>
        <Link to="/about" className="text-white hover:text-yellow-500 transition">
          About
        </Link>
        <Link
          to="/feedback"
          className="text-white hover:text-yellow-500 transition"
        >
          Submit
        </Link>
        <Link
          to="/dashboard"
          className="text-white hover:text-yellow-500 transition"
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
