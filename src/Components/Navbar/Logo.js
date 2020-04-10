import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../style/other.scss";

const Logo = () => {
  const [glow, setGlow] = useState(false);
  const logoClass = `mr-2 ebwc-logo ${glow ? "logo-glow" : ""}`;

  return (
    <Link
      to="/"
      className={"d-flex align-items-center"}
      onMouseEnter={() => setGlow(true)}
      onMouseLeave={() => setGlow(false)}
    >
      <img
        src={require("../../images/ebwc_weblogo.png")}
        alt="EBWC_Logo"
        className={logoClass}
      />
      <span className="bebas-font logo-font text-link">HOME</span>
    </Link>
  );
};

export default Logo;
