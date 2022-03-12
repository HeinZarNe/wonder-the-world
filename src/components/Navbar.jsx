import React from "react";
import { IoMoonSharp, IoMoonOutline } from "react-icons/io5";

const Navbar = ({ onChange, theme }) => {
  return (
    <div className="nav position-fixed w-100 d-flex justify-content-between align-items-center px-5 py-3">
      <div className="title fs-3 fw-bold">Where in the world?</div>
      <div className="switch">
        <button className="border-0 bg" onClick={onChange}>
          {theme === "day" ? (
            <span className="d-flex align-items-center">
              <IoMoonOutline className="me-1" /> Light Mode
            </span>
          ) : (
            <span className="d-flex align-items-center">
              <IoMoonSharp className="me-1" /> Dark Mode
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
