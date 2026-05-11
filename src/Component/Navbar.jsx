import React, { useContext, useState } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { auth } from "../Firebase/Firebase.config";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IoMdLogIn } from "react-icons/io";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        toast.success("Logout successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "text-pink-500 font-bold"
              : "hover:text-pink-500 transition"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-pink-500 font-bold"
              : "hover:text-pink-500 transition"
          }
        >
          About
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/toprated"
          className={({ isActive }) =>
            isActive
              ? "text-pink-500 font-bold"
              : "hover:text-pink-500 transition"
          }
        >
          Top Providers
        </NavLink>
      </li>

      {user && (
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-bold"
                : "hover:text-pink-500 transition"
            }
          >
            Blog
          </NavLink>
        </li>
      )}

      {user && (
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-bold"
                : "hover:text-pink-500 transition"
            }
          >
            My Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="navbar w-11/12 mx-auto py-3">
        {/* Left */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="btn btn-ghost"
            >
              {menuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>

            {menuOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute mt-3 p-4 shadow-xl bg-base-100 rounded-2xl w-52 space-y-3 z-50"
              >
                {navLinks}
              </motion.ul>
            )}
          </div>

          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 text-2xl font-extrabold"
          >
            <img
              src="/logo.png"
              alt="logo"
              className="w-12 h-12 rounded-full border-2 border-pink-500"
            />

            <h1 className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              SkillSwap
            </h1>
          </NavLink>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-3 font-medium">{navLinks}</ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          {!user ? (
            <NavLink
              to="/signin"
              className="btn rounded-full border-none bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:scale-105 transition"
            >
              Login
              <RiLogoutCircleLine className="text-lg" />
            </NavLink>
          ) : (
            <div className="flex items-center gap-4">
              {/* User */}
              <div className="relative group">
                <img
                  src={user.photoURL || "https://i.ibb.co/2kR9y6F/user.png"}
                  alt="user"
                  className="w-11 h-11 rounded-full border-2 border-pink-500 object-cover cursor-pointer"
                />

                {/* Hover Card */}
                <div className="absolute right-0 mt-3 w-52 bg-base-100 shadow-2xl rounded-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="flex flex-col items-center text-center">
                    <FaUserCircle className="text-5xl text-purple-500 mb-2" />

                    <h3 className="font-bold text-lg">
                      {user.displayName || "No Name"}
                    </h3>

                    <p className="text-sm text-gray-500 break-all">
                      {user.email}
                    </p>

                    <NavLink
                      to="/profile"
                      className="btn btn-sm mt-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 border-none text-white"
                    >
                      View Profile
                    </NavLink>
                  </div>
                </div>
              </div>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="btn rounded-full border-none bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:scale-105 transition"
              >
                Logout
                <IoMdLogIn className="text-lg" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
