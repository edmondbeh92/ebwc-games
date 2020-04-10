import React from "react";
import Logo from "./Logo";
import NavDrawer from "./NavDrawer";
import "../../style/navbar/navbar.scss";

const Navbar = () => (
  <nav className="sticky-navbar">
    <div className="container-fluid">
      <div className="navbar">
        <Logo />
        <NavDrawer />
      </div>
    </div>
  </nav>
);

export default Navbar;
