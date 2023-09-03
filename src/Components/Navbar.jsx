import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-14 bg-teal-800 text-white flex items-center justify-center text-xl px-2">
      <div className="">
        <h4>Dictionary App</h4>
      </div>
      <div className="mr-2 flex gap-4 ms-auto ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/history">History</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
