import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../style/color.scss";
import "../../style/image.scss";
import "../../style/other.scss";

export const Logo = () => {
  const [glow, setGlow] = useState(false);
  const logoClass = `ebwc-icon ${glow ? "icon-glow" : ""}`;

  return (
    <div
      className="text-left col-9 col-sm-6 pl-4"
      onMouseEnter={() => setGlow(true)}
      onMouseLeave={() => setGlow(false)}
    >
      <h3>
        <Link to="/" className="text-gray text-link">
          <img
            src={require("../../images/ebwc_weblogo.png")}
            alt="EBWC_Icon"
            className={logoClass}
          />
          <span className="pl-1">EBWC</span>
        </Link>
      </h3>
    </div>
  );
};
