import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { linkProps } from "../../data/link_props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../style/navbar/drawer.scss";

const PageDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  const pageLinks = linkProps.map((linkProp) => (
    <NavLinks key={linkProp.id} linkProps={linkProp} />
  ));

  const drawerClass = `drawer ${isOpen ? "open" : ""}`;

  return (
    <>
      <div className="d-flex align-items-center no-drawer">{pageLinks}</div>

      <button className="drawer-open-btn" onClick={toggleOpen}>
        <FontAwesomeIcon icon="bars" />
      </button>

      <div className={drawerClass}>
        <div>
          <button className="drawer-close-btn" onClick={toggleOpen}>
            <FontAwesomeIcon icon="times" />
          </button>
        </div>

        {pageLinks}
      </div>
    </>
  );
};

export default PageDrawer;
