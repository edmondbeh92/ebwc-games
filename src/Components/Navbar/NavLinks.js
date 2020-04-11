import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavLinks = ({ linkProps }) => (
  <div className="drawer-link-wrapper">
    <Link to={`/${linkProps.url}`}>
      <FontAwesomeIcon className="text-warning" icon={linkProps.icon} />
      <span className="bebas-font navbar-font">{linkProps.text}</span>
    </Link>
  </div>
);

export default NavLinks;
