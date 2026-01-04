import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./Pages/Home";

import Profile from "./Pages/Profile";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import { ToastContainer } from "react-toastify";
import AuthProvaider from "./Context/AuthProvaider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ViewDetails from "./Pages/ViewDetails";
import TopRated from "./Pages/TopRated";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("/MoreData.json").then((res) => res.json()),
        hydrateFallbackElement: (
          <h1 className="text-8xl font-bold flex items-center gap-2 hover-3d animate-ping">
            L
            <img src="/logo.jpg" alt="Logo" className="w-20 h-20 hover-3d " />
            OADING
          </h1>
        ),
      },
      {
        path: "/Home",
        element: <Home />,
        loader: () => fetch("/MoreData.json").then((res) => res.json()),
        hydrateFallbackElement: (
          <h1 className="text-8xl font-bold flex items-center gap-2 hover-3d animate-ping">
            L
            <img src="/logo.jpg" alt="Logo" className="w-20 h-20 hover-3d " />
            OADING
          </h1>
        ),
      },
      {
        path: "/toprated",
        element: <TopRated></TopRated>,
        hydrateFallbackElement: (
          <h1 className="text-8xl font-bold flex items-center gap-2 hover-3d animate-ping">
            L
            <img src="/logo.jpg" alt="Logo" className="w-20 h-20 hover-3d " />
            OADING
          </h1>
        ),
      },

      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
        hydrateFallbackElement: (
          <h1 className="text-8xl font-bold flex items-center gap-2 hover-3d animate-ping">
            L
            <img src="/logo.jpg" alt="Logo" className="w-20 h-20 hover-3d " />
            OADING
          </h1>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("/MoreData.json").then((res) => res.json()),
        hydrateFallbackElement: (
          <h1 className="text-8xl font-bold flex items-center gap-2 hover-3d animate-ping">
            L
            <img src="/logo.jpg" alt="Logo" className="w-20 h-20 hover-3d " />
            OADING
          </h1>
        ),
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvaider>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </AuthProvaider>
  </StrictMode>
);
