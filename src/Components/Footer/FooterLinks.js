import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "react-tooltip-lite";
import "../../style/shared/tooltip.scss";

const FooterLinks = ({ footerLink: { url, icon, tooltip, image_url } }) => (
  <Tooltip content={tooltip}>
    <a href={url} target="_blank" rel="noopener noreferrer">
      {icon ? (
        <FontAwesomeIcon icon={icon} className="icon" />
      ) : (
        <img src={image_url} alt="sketchfab_icon" />
      )}
    </a>
  </Tooltip>
);

export default FooterLinks;
