import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { CircleUser, Sun, Moon } from 'lucide-react';
import './Navbar.css'
import { AuthContext } from '../../Context/AuthContext';
import Uniberbutton from '../Button/UniberButton/Uniberbutton';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { user, singOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");

  // load theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handelLogout = () => {
    singOut()
      .then(() => toast.success("You Are Successfully Logged Out"))
      .catch(err => toast.error(err.code));
  };

  return (
    <div>
      <div className="navbar font-poppins  dark:text-white bg-[#616053] text-base-100 shadow-sm">

        {/* START */}
        <div className="navbar-start">
          <div className="dropdown dark:text-white">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>

            <ul
              tabIndex="-1"
              className="menu dark:text-white z-10 menu-sm dropdown-content bg-base-100 text-black rounded-box mt-3 w-52 p-2 shadow"
            >
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/all-products">All Products</NavLink></li>
              <li><NavLink to="/my-exports">My Exports</NavLink></li>
              <li><NavLink to="/my-import">My Imports</NavLink></li>
              <li><NavLink to="/add-export">Add Export</NavLink></li>
            </ul>
          </div>

          <a className="btn btn-ghost text-xl">
            <Uniberbutton />
          </a>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/all-products">All Products</NavLink></li>
            <li><NavLink to="/my-exports">My Exports</NavLink></li>
            <li><NavLink to="/my-import">My Imports</NavLink></li>
            <li><NavLink to="/add-export">Add Export</NavLink></li>
          </ul>
        </div>

        {/* END */}
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end z-10">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User Profile"
                    src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                  />
                </div>
              </div>

              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/my-profile" className="justify-between">
                    Profile <span className="badge">New</span>
                  </Link>
                </li>

                {/* THEME TOGGLE */}
                <li>
                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2"
                  >
                    {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                  </button>
                </li>

                <li>
                  <button onClick={handelLogout}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link className="text-bold btn" to="/login">
              <CircleUser /> Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
