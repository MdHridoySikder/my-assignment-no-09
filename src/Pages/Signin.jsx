import React, { useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import { auth } from "../Firebase/Firebase.config";
import {
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";
import Profile from "./Profile";

const googleProvider = new GoogleAuthProvider();

const Signin = () => {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const emailRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        toast.success("Signin successful");

        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setUser(res.user);
        toast.success("Signin successful");

        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          toast.error("Please enter a valid email address.");
        } else if (error.code === "auth/user-disabled") {
          toast.error("This account has been disabled.");
        } else if (error.code === "auth/user-not-found") {
          toast.error("User not found.");
        } else if (error.code === "auth/wrong-password") {
          toast.error("Incorrect password.");
        } else {
          toast.error(error.message);
        }
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent");
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="hero min-h-screen bg-blue-50">
      <div className="hero-content flex-col">
        <h1 className="text-3xl font-bold text-fuchsia-900 mb-4">Login</h1>

        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body bg-fuchsia-100">
            {user ? (
              <Profile user={user} setUser={setUser} />
            ) : (
              <form onSubmit={handleSignin}>
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  className="input w-full"
                  placeholder="Email"
                />

                <label className="label mt-2">Password</label>
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    className="input w-full"
                    placeholder="Password"
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-2 top-4 cursor-pointer"
                  >
                    {show ? <FaEye /> : <IoEyeOff />}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleForgetPassword}
                  className="mt-2 text-sm text-blue-600 hover:underline"
                >
                  Forgot Password?
                </button>

                <button className="btn w-full mt-4 bg-fuchsia-900 text-white hover:bg-fuchsia-500">
                  Login
                </button>

                <div className="divider">OR</div>

                {/* <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="btn w-full bg-white text-black hover:bg-fuchsia-300"
                >
                  Login with Google
                </button> */}

                {/* Google */}
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="btn w-full  bg-fuchsia-900 text-white hover:bg-fuchsia-500"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="rounded-full"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>

                <p className="mt-3 text-center">
                  Don’t have an account?{" "}
                  <Link to="/signup" className="text-blue-600">
                    Sign Up
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
