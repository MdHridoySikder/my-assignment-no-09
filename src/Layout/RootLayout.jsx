import React from "react";
import Navbar from "../Component/Navbar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default RootLayout;
