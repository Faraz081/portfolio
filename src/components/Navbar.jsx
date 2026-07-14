import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Skills", path: "/skills" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Muhammad <span className="text-cyan-400">Faraz</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {links.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-cyan-400 font-semibold"
                    : "hover:text-cyan-400 transition duration-300"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setMenu(!menu)}
          className="md:hidden text-2xl"
        >
          {menu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="md:hidden bg-slate-900">
          {links.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenu(false)}
              className={({ isActive }) =>
                `block py-4 px-6 border-b border-slate-800 ${
                  isActive
                    ? "text-cyan-400 bg-slate-800"
                    : "hover:bg-slate-800"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;