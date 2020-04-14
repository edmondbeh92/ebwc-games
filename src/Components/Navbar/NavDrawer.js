import React, { useState } from "react";
import navLinks from "../../data/nav_links";
import NavLinks from "./NavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../style/navbar/drawer.scss";

const PageDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  const links = navLinks.map((navLink) => (
    <NavLinks key={navLink.id} navLink={navLink} />
  ));

  const linksInDrawer = navLinks.map((navLink) => (
    <NavLinks key={navLink.id} navLink={navLink} toggleOpen={toggleOpen} />
  ));

  const drawerClass = `drawer ${isOpen ? "open" : ""}`;

  return (
    <>
      <div className="d-flex align-items-center no-drawer">{links}</div>

      <button className="drawer-open-btn" onClick={toggleOpen}>
        <FontAwesomeIcon icon="bars" />
      </button>

      <div className={drawerClass}>
        <div>
          <button className="drawer-close-btn" onClick={toggleOpen}>
            <FontAwesomeIcon icon="times" />
          </button>
        </div>

        {linksInDrawer}
      </div>
    </>
  );
};

export default PageDrawer;
