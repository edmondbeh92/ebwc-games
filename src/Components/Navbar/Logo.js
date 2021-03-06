import React, { useState } from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  const [glow, setGlow] = useState(false);
  const logoClass = `mr-2 ebwc-logo ${glow ? "logo-glow" : ""}`;

  return (
    <Link
      to="/ebwc-games"
      className="d-flex align-items-center"
      onMouseEnter={() => setGlow(true)}
      onMouseLeave={() => setGlow(false)}
    >
      <img
        src={require("../../images/ebwc_weblogo.png")}
        alt="EBWC_Logo"
        className={logoClass}
      />
      <span className="bebas-font navbar-font text-link">HOME</span>
    </Link>
  );
};

export default Logo;
