import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { auth } from "../Firebase/Firebase.config";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { RiLogoutCircleLine } from "react-icons/ri";
import { HiLogin } from "react-icons/hi";
import { IoMdLogIn } from "react-icons/io";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);

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

  return (
    <div className="w-11/12 mx-auto navbar bg-base-100 shadow-sm">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            {user && (
              <li>
                <NavLink to="/profile">My Profile</NavLink>
              </li>
            )}
            {!user && (
              <li>
                <NavLink to="/signin">Login</NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* Logo */}
        <a href="/" className="flex items-center gap-1 ml-4">
          <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-full" />
          <h3 className="font-bold tracking-wide text-pink-500 ">
            SkillS<span className="text-purple-600">Swap</span>
          </h3>
        </a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "font-semibold text-pink-500" : "from-purple-600"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/toprated"
              className={({ isActive }) =>
                isActive ? "font-semibold text-pink-500" : "from-purple-600 "
              }
            >
              TopRated
            </NavLink>
          </li>

          {user && (
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? "font-semibold text-pink-500" : "from-purple-600"
                }
              >
                My Profile
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-4">
        {!user ? (
          <NavLink
            to="/signin"
            className="btn btn-sm bg-gradient-to-r from-purple-600 to-pink-500 mr-10 font-semibold "
          >
            Login
            <RiLogoutCircleLine className="text-xl" />
          </NavLink>
        ) : (
          <div className="flex items-center gap-2">
            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="btn btn-sm bg-gradient-to-r from-purple-600 to-pink-500 font-semibold"
            >
              Logout
              <IoMdLogIn className="text-xl" />
            </button>

            {/* User Photo with Hover Name */}
            <div className="relative group cursor-pointer">
              <img
                src={user.photoURL || "https://i.ibb.co/2kR9y6F/user.png"}
                alt="user"
                className="w-10 h-10 rounded-full border-2 border-purple-600"
              />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap overflow-hidden text-ellipsis max-w-[99px]">
                {user.displayName || "No Name"}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
