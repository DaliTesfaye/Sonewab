import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-16" />
        </div>

        {/* Links in the middle */}
        <div className="hidden md:flex space-x-8 flex-1 justify-center">
          <Link to="/" className="text-black hover:text-yellow-500">
            Acceuil
          </Link>
          <Link to="/services" className="text-black hover:text-yellow-500">
            Services
          </Link>
          <Link to="/projects" className="text-black hover:text-yellow-500">
            Nos Projets
          </Link>
        </div>

        <Link
          to="/admin/login"
          className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 hidden md:block"
        >
          Admin Register
        </Link>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button className="text-black focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
