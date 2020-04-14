import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavLinks = ({ navLink, toggleOpen }) => {
  const { url, icon, text } = navLink;

  return (
    <div className="drawer-link-wrapper">
      <Link to={`/${url}`} onClick={toggleOpen}>
        <FontAwesomeIcon className="text-warning" icon={icon} />
        <span className="bebas-font navbar-font">{text}</span>
      </Link>
    </div>
  );
};

export default NavLinks;
