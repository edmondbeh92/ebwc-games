import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavLinks = ({ navLink, toggleOpen }) => {
  return (
    <div className="drawer-link-wrapper">
      <Link to={`/${navLink.url}`} onClick={toggleOpen}>
        <FontAwesomeIcon className="text-warning" icon={navLink.icon} />
        <span className="bebas-font navbar-font">{navLink.text}</span>
      </Link>
    </div>
  );
};

export default NavLinks;
