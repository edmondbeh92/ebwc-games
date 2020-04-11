import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavLinks = ({ linkProps, toggle }) => {
  const [isOpen, setIsOpen] = useState(toggle);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="drawer-link-wrapper">
      <Link to={`/${linkProps.url}`} onClick={toggleOpen}>
        <FontAwesomeIcon className="text-warning" icon={linkProps.icon} />
        <span className="bebas-font navbar-font">{linkProps.text}</span>
      </Link>
    </div>
  );
};

export default NavLinks;
