import React, { useState } from "react";
import { Link } from "react-router";

import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Signup = () => {
  const [show, setShow] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    console.log("signing function entered", {
      displayName,
      photoURL,
      email,
      password,
    });
    console.log(password.lenght);
    if (password.lenght < 6) {
      toast.error("password should be at least 6 digit");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // Signed up
        updateProfile(res.user, {
          displayName,
          photoURL,
        })
          .then((res) => {
            console.log(res);
            toast.success("Signup successful");

            // ...
          })
          .catch((e) => {
            toast.error(e.message);
          });
      })
      .catch((error) => {
        console.log(error);
        console.log(error.code);
        if (error.code === "auth/email-already-in-use") {
          toast.error("User already exists. Please login instead.");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Please enter a valid email address.");
        } else if (error.code === "auth/operation-not-allowed") {
          toast.error("Email/password signup is not enabled. Contact admin.");
        } else if (error.code === "auth/weak-password") {
          toast.error("Password should be at least 6 characters.");
        } else if (error.code === "auth/too-many-requests") {
          toast.error("Too many requests. Try again later.");
        } else if (error.code === "auth/network-request-failed") {
          toast.error("Network error. Check your internet connection.");
        } else {
          toast.error(error.message); // fallback for other errors
        }
      });
  };
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col">
          <h1 className="text-3xl font-bold text-fuchsia-900 mb-4">Sign Up</h1>

          <div
            className="card bg-base-100 w-full max-w-sm shadow-2xl hover:bg-purple-50 hover:shadow-[0_10px_30px_rgba(168,85,247,0.25)]
"
          >
            <div className="card-body bg-fuchsia-100">
              <form onSubmit={handleSignup}>
                <label className="label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full"
                  placeholder="Name"
                  autoComplete="name"
                />
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  name="photoURL"
                  className="input w-full"
                  placeholder="Photo URL"
                  autoComplete="photoURL"
                />

                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Email"
                  autoComplete="email"
                />

                <label className="label mt-2">Password</label>
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    className="input w-full"
                    placeholder="Password"
                    autoComplete="new-password"
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-[8px] top-[15px] cursor-pointer z-50"
                  >
                    {!show ? <IoEyeOff /> : <FaEye />}
                  </span>
                </div>

                <button className="btn btn-neutral mt-6 w-full bg-fuchsia-950 text-white hover:bg-fuchsia-400">
                  Sign Up
                </button>
                {/* Divider */}
                <div className="flex items-center my-6">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="mx-4 text-gray-500 text-sm">OR</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <p className="mt-2 text-center">
                  Already have an account?{" "}
                  <Link to="/signin" className="text-blue-600">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
