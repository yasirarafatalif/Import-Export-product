import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { Sun, Moon, LogOut, LayoutGrid, PlusCircle, Globe } from "lucide-react";
import toast from "react-hot-toast";
import Logo from "../Logo/Logo";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const { user, singOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome size={14} /> },
    { name: "Products", path: "/all-products", icon: <LayoutGrid size={14} /> },
    { name: "Exports", path: "/my-exports" },
    { name: "Imports", path: "/my-import" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-black border-b border-gray-200 dark:border-white/10 font-sans">
      <div className="max-w-[1400px] mx-auto flex items-center h-16 px-4 sm:px-6">
        {/* LEFT: Branding */}
        <div className="flex items-center gap-6 h-full">
          <Logo></Logo>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-8 h-full">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `
                  relative flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest transition-colors h-full
                  ${isActive ? "text-black dark:text-white" : "text-gray-400 hover:text-black dark:hover:text-white"}
                  after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black dark:after:bg-white after:scale-x-0 
                  ${isActive ? "after:scale-x-100" : "hover:after:scale-x-100"} after:transition-transform after:duration-300
                `}
              >
                {link.icon && <span>{link.icon}</span>}
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* RIGHT: User & Theme */}
        <div className="ml-auto flex items-center gap-4">
          <Link
            to="/add-export"
            className="hidden sm:flex items-center gap-2 px-4 py-1.5 border-2 border-black dark:border-white text-xs text-white font-black uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
          >
            <PlusCircle size={14} />
            Post Deal
          </Link>

          <div className="h-6 w-px bg-gray-200 dark:bg-white/10 mx-2 hidden sm:block"></div>

          <button
            onClick={toggleTheme}
            className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="group flex items-center gap-3 pl-2"
              >
                <div className="w-9 h-9 border border-black dark:border-wh p-0.5">
                  <img
                    className="w-full h-full rounded-full "
                    src={
                      user.photoURL ||
                      "https://api.dicebear.com/7.x/initials/svg?seed=User"
                    }
                    alt="User"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content mt-4 z-[1] menu p-2 shadow-xl bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 w-52 rounded-none"
              >
                <li className="p-3 text-[10px] font-bold text-white uppercase tracking-widest">
                  <Link
                    to="/dashboard"
                    className="rounded-none text-xs font-bold uppercase"
                  >
                    Dashboard
                  </Link>
                  
                </li>
                <li className="text-white ">
                  <Link
                    to="/my-profile"
                    className="rounded-none text-xs font-bold uppercase"
                  >
                    My Account
                  </Link>
                </li>
                <li className="text-white ">
                  <Link
                    to="/settings"
                    className="rounded-none text-xs font-bold uppercase"
                  >
                    Activity Log
                  </Link>
                </li>
                <li className="mt-2 border-t border-gray-100 dark:border-white/10">
                  <button
                    onClick={() => singOut()}
                    className="rounded-none text-xs font-bold uppercase text-red-500"
                  >
                    <LogOut size={14} /> Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="text-xs uppercase tracking-widest border-b-2  border-white pb-1 text-white font-bold hover:text-gray-500 transition-colors"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
