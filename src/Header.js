import React from "react";
import Navbar from "./Components/Navbar.js/Navbar";
import { Outlet } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
