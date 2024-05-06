import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex justify-between border items-center rounded-3xl py-3 px-6 mx-8 my-3">
      <Link to='/'>
        <img src="./Vector.svg" alt="logo"></img>
      </Link>
      <div className="flex justify-end items-center gap-4">
        <Link
          to="/registration-form"
          className="py-3 px-4 rounded-3xl border text-sm"
        >
          Get Projects
        </Link>
        <button className="py-3 text-white bg-black px-4 rounded-3xl border text-sm">
          Onboard Talent
        </button>
      </div>
    </div>
  );
}

export default Navbar;
