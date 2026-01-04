import React from "react";
import Navbar from "../Component/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Component/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="w-11/12 mx-auto flex-1 w-full flex justify-center items-start pt-10 px-4 ">
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
